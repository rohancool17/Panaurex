/* ==========================================================================
   PANAUREX INTERACTIVE CLIENT ENGINE
   Logic: Theme Toggle, Responsive Nav, Catalog Filter/Search, Detail Modal, Mock Form
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elements Cache
    const body = document.body;
    const header = document.getElementById('site-header');
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    
    // Catalog Elements
    const catalogSearch = document.getElementById('catalog-search');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productsGrid = document.getElementById('products-grid');
    const countCurrent = document.getElementById('count-current');
    const countTotal = document.getElementById('count-total');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const catalogActionsContainer = document.getElementById('catalog-actions-container');
    const statProductsCount = document.getElementById('stat-products-count');
    
    // Modal Elements
    const modalOverlay = document.getElementById('product-modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalCategory = document.getElementById('modal-product-category');
    const modalTitle = document.getElementById('modal-product-name');
    const modalComposition = document.getElementById('modal-product-composition');
    const modalPacking = document.getElementById('modal-product-packing');
    const modalBackBtn = document.getElementById('modal-back-btn');
    const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');
    const modalEmailBtn = document.getElementById('modal-email-btn');

    // 2. Global State Variables
    let currentCategory = 'all';
    let searchQuery = '';
    let itemsToShow = 12; // Items per page load
    let currentFilteredList = [];
    let allProductsFlatList = [];

    // Initialize Products Data from products_data.js
    function initializeProducts() {
        if (typeof window.PRODUCTS_DATA === 'undefined') {
            productsGrid.innerHTML = '<div class="catalog-loading">Error loading product data database.</div>';
            return;
        }
        
        // Flatten categories into a single list
        const rawData = window.PRODUCTS_DATA;
        allProductsFlatList = [];
        
        Object.keys(rawData).forEach(category => {
            rawData[category].forEach(prod => {
                allProductsFlatList.push({
                    ...prod,
                    category: category
                });
            });
        });
        
        // Update stats counters
        if (statProductsCount) {
            statProductsCount.textContent = allProductsFlatList.length + "+";
        }
        
        // Set initial filtered list to all products
        currentFilteredList = [...allProductsFlatList];
        
        // Render Initial Grid
        renderCatalog();
    }

    // 3. Theme Toggle & Dark Mode
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
    
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 4. Header scrolled state & Scroll Spy Navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
            scrollToTopBtn.style.display = 'flex';
        } else {
            header.classList.remove('header-scrolled');
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Spy: Highlight current menu item
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger highlight when section occupies middle 20%-40% viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // IntersectionObserver for general scroll animations (fade in)
    const animateOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.05
    };

    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animating in to preserve resources
                animObserver.unobserve(entry.target);
            }
        });
    }, animateOptions);

    // Apply scroll entrance animation elements
    document.querySelectorAll('.scroll-animate, .fade-in-element').forEach(el => {
        animObserver.observe(el);
    });

    // 5. Mobile Navigation Menu Drawer
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // 6. Product Catalog Rendering, Filtering and Search
    function renderCatalog() {
        productsGrid.innerHTML = '';
        
        if (currentFilteredList.length === 0) {
            productsGrid.innerHTML = `
                <div class="catalog-no-results">
                    <div class="no-results-icon">🔍</div>
                    <h4>No Products Found</h4>
                    <p>No matches were found for "${searchQuery}" in ${currentCategory === 'all' ? 'all categories' : currentCategory}. Try checking your spelling or selecting another category.</p>
                </div>
            `;
            countCurrent.textContent = '0';
            countTotal.textContent = '0';
            catalogActionsContainer.style.display = 'none';
            return;
        }

        // Slice products based on pagination
        const displayedProducts = currentFilteredList.slice(0, itemsToShow);
        
        displayedProducts.forEach((product, idx) => {
            const card = document.createElement('div');
            card.className = 'product-card scroll-animate visible'; // Animate instantly as they render
            
            // Format composition summary (first 3 lines or 150 chars)
            let compClean = product.composition || '';
            
            card.innerHTML = `
                <span class="product-card-category">${product.category}</span>
                <h4 class="product-card-title">${product.name}</h4>
                <p class="product-card-composition">${compClean}</p>
                <span class="product-card-packing">📦 Pack: ${product.packing || 'N/A'}</span>
                <div class="product-card-actions">
                    <button class="btn btn-outline btn-sm view-details-btn" data-index="${idx}">View Details</button>
                </div>
            `;
            
            // Attach event listener for opening details
            card.querySelector('.view-details-btn').addEventListener('click', () => {
                openProductModal(product);
            });
            
            productsGrid.appendChild(card);
        });

        countCurrent.textContent = displayedProducts.length;
        countTotal.textContent = currentFilteredList.length;

        // Show/hide load more button
        if (currentFilteredList.length > itemsToShow) {
            catalogActionsContainer.style.display = 'flex';
        } else {
            catalogActionsContainer.style.display = 'none';
        }
    }

    // Load More Action
    loadMoreBtn.addEventListener('click', () => {
        itemsToShow += 12;
        renderCatalog();
    });

    // Combine Filter & Search Logic
    function applyFilters() {
        currentFilteredList = allProductsFlatList.filter(product => {
            const matchesCategory = (currentCategory === 'all' || product.category === currentCategory);
            const matchesSearch = (
                searchQuery === '' || 
                product.name.toLowerCase().includes(searchQuery) || 
                product.composition.toLowerCase().includes(searchQuery)
            );
            return matchesCategory && matchesSearch;
        });
        
        itemsToShow = 12; // Reset pagination offset
        renderCatalog();
    }

    // Category Selector Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.getAttribute('data-category');
            applyFilters();
        });
    });

    // Real-time Search Box Input Listener
    catalogSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        
        if (searchQuery.length > 0) {
            searchClearBtn.style.display = 'flex';
        } else {
            searchClearBtn.style.display = 'none';
        }
        
        applyFilters();
    });

    // Clear Search Input
    searchClearBtn.addEventListener('click', () => {
        catalogSearch.value = '';
        searchQuery = '';
        searchClearBtn.style.display = 'none';
        applyFilters();
        catalogSearch.focus();
    });

    // 7. Product Details Modal Operations
    let activeProduct = null;

    function openProductModal(product) {
        activeProduct = product;
        
        modalCategory.textContent = product.category;
        modalTitle.textContent = product.name;
        modalComposition.textContent = product.composition;
        modalPacking.textContent = product.packing || 'N/A';
        
        // Dynamic WhatsApp Inquiry Link
        const waText = encodeURIComponent(`Hello Panaurex Team, I have an inquiry regarding the product: ${product.name} (${product.category}).`);
        modalWhatsappBtn.href = `https://wa.me/917498873290?text=${waText}`;
        
        // Dynamic Email Inquiry Link
        const emailSubject = encodeURIComponent(`Inquiry regarding Panaurex Product: ${product.name}`);
        const emailBody = encodeURIComponent(`Hello Panaurex Team,\n\nI am interested in sourcing the following product from your catalog:\n- Product Name: ${product.name}\n- Category: ${product.category}\n\nPlease send me pricing and availability details.\n\nThank you.`);
        modalEmailBtn.href = `mailto:commercial@panaurex.com?subject=${emailSubject}&body=${emailBody}`;
        
        modalOverlay.classList.add('active');
        body.style.overflow = 'hidden'; // Lock body scroll background
        
        // Accessibility focus trap
        modalCloseBtn.focus();
    }

    function closeProductModal() {
        modalOverlay.classList.remove('active');
        body.style.overflow = ''; // Release body scroll
        activeProduct = null;
    }

    modalCloseBtn.addEventListener('click', closeProductModal);
    modalBackBtn.addEventListener('click', closeProductModal);
    
    // Close modal when clicking outside content area
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeProductModal();
        }
    });

    // Press Escape to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeProductModal();
        }
    });

    // Modal Inquire CTA triggers (handled dynamically by link href attributes)

    // 9. Start Catalog Execution
    initializeProducts();
});
