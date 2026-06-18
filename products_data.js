// Panaurex Product Catalog Database
// Loaded dynamically by the search and filtering engine

const PRODUCTS_DATA = {
  "Poultry Additives": [
    {
      "name": "Enzy-X",
      "composition": "EACH KG CONTAINS\nXYLANASE DS        5,000,000 U\nBETA GLUCANASE      700,000 U\nAMYLASE                  300,000 U\nPECTINASE                   70,000U\nPHYTASE                  1,201,000U\nPROTEASE                3,001,000 U\nLIPASE                        10,000U\nCELLULASE          1, 00, 100,000 U",
      "packing": "10 kg, 25 kg"
    },
    {
      "name": "Enzy -XAP",
      "composition": "Protease (min).................800,000, 000 U/Kg\nXylanase (min)..................10,000,000 U/Kg\nAmylase (min.....................3,500,000 U/Kg\nBacillus subtilis (Min)...........200 Million CFU/g\nBacillus licheniformis (Min).....200 Million CFU/g",
      "packing": "10 kg, 25 kg"
    },
    {
      "name": "Aur-Phyto",
      "composition": "Each 1 gram contains \n Phytase....... 5000 FTU",
      "packing": "25 KG"
    },
    {
      "name": "EnzyX -PRO",
      "composition": "COMPOSITION \nACID & ALKALI PROTEASE ..750000 UNIT/G\nMANNANSE ….........600 Unit/g",
      "packing": "10 kg, 25 kg"
    },
    {
      "name": "Bio-XP",
      "composition": "Each 1 gram contains  \nBacillus Subtilis…....1.8X109 CFU\nBacillus Licheniformis….....1.8X109 CFU\nClostridium Butyricum …....0.4 x 109 CFU",
      "packing": "10 kg"
    },
    {
      "name": "Aur-O -Tox",
      "composition": "Composition: Each 100gm contains\nMannan Oligosaccharide (MOS)............5 gm\nHydrated Sodium Calcium Aluminosilicate.......80.00 gm\nPropionic Acid.........1 gm\nAcetic Acid ..........1 gm\nBenzoic Acid .......0.80 gm\nCalcite ...........q.s.",
      "packing": "25 KG"
    },
    {
      "name": "Acidoxt",
      "composition": "Combination of Formic Acid, Propionic Acid, Benzoic Acid, Butyric Acid & Orthophosphoric Acid",
      "packing": "25 KG"
    },
    {
      "name": "Aur-Coccicin",
      "composition": "Monensin 20%",
      "packing": "25 KG"
    },
    {
      "name": "Salinox",
      "composition": "Salinomycin 12%",
      "packing": "25 KG"
    },
    {
      "name": "Madura-X",
      "composition": "Maduramycin 1%",
      "packing": "25 KG"
    },
    {
      "name": "Madura-X Plus",
      "composition": "Maduramycin 0.75% + Nicarbazine 8%",
      "packing": "25 KG"
    },
    {
      "name": "Decox",
      "composition": "Deconquinate 6%",
      "packing": "25 KG"
    },
    {
      "name": "Diclax",
      "composition": "Diclazuril 0.5%",
      "packing": "25 KG"
    },
    {
      "name": "Aurinidine",
      "composition": "Robinidine 10%",
      "packing": "25 KG"
    },
    {
      "name": "Aur-K-Sone",
      "composition": "Roxarasone 20%",
      "packing": "25 kg"
    },
    {
      "name": "Auritracin",
      "composition": "Zinc Bacitracin 15%",
      "packing": "25 kg"
    },
    {
      "name": "Flyx",
      "composition": "Cyromazine 1%",
      "packing": "25 kg"
    },
    {
      "name": "Aur-Dl Lysine",
      "composition": "Lysine 98%",
      "packing": "25 kg"
    },
    {
      "name": "Aur-Methionine",
      "composition": "Methioinine",
      "packing": "25 kg"
    },
    {
      "name": "Aur-DCP",
      "composition": "Di calcium Phoshphate",
      "packing": "25 kg"
    }
  ],
  "Poultry Supplements": [
    {
      "name": "Calcix-PLUS  (FOR STURDY BONES AND THICK SHELLS)",
      "composition": "Each 20 ml contains: Soluble calcium salts 500 mg, phosphorus 100 mg, Vitamin D3  1200 IU, Vitamin B12  3 mcg, Manganese 2 mg, Zinc 500 mcg, Cobalt 400 mcg, Iron 10 mg, Base:QS",
      "packing": "500 ml, 1000 ml, 5000 ml"
    },
    {
      "name": "Calcix-PREMIX (CALIBRATED CALCIUM PREMIX)",
      "composition": "Phytase, Calcium, Phosphorus, Vitamin D3 in a base enriched with Minerals",
      "packing": "10 kg"
    },
    {
      "name": "Aurplex-DS            (DOUBLE STRENGTH B GROUP VITAMINS WITH PROBIOTICS)",
      "composition": "Each Gm provides: Vitamin B1: 8 mg, B6: 16 mg, B12:80 mcg, Vitamin E:45 mg, Calcium Pantothenate:30 mg, Niacin:120 mg, Active Live Yeast:600 mu, Lactobacillus:20 ms,          Elemental Calcium:130 mg, Folic Acid:2 mg,                                   Elemental Phosphorus: 6 mg",
      "packing": "1 kg"
    },
    {
      "name": "Aurplex ORAL           B COMPLEX",
      "composition": "Each 5 ml contains: Vitamin B2: 1.25 mg, Vitamin B6: 0.65 mg, Vitamin B 12: 6.25 mcg, Cobalt Sulphate; 85 mcg, Manganese Sulphate: 45 mcg, Zinc Sulphate: 110 mcg, Niacinamide: 37.50 mg, D Panthenol: 1.25 mg, L-Lysine: 5.00 mg, DL Methionine: 7.50 mg, Energy base: QS.",
      "packing": "1 ltr, 5 lit"
    },
    {
      "name": "Aurplex FORTE            (B-COMPLEX WITH MINERALS)",
      "composition": "Each 50 gm contains: Vit B1- 500 mg, Vit B2- 250 mg, Vit B 6- 130 mg, Vit B 12-1250 mcg, Niacinamide 7500 mg, D panthenol 250 mg, Lysine 1000 mg, Methionine 500 mg, Copper 75 mg, Cobalt 10 mg, Zinc 30 mg, Iron 40 mg, Manganese 50 mg, Iodine 5 mg",
      "packing": "50 gm, 250 gm"
    },
    {
      "name": "Bio-X",
      "composition": "Yeast",
      "packing": "1 kg"
    },
    {
      "name": "Aur-Biogut",
      "composition": "Prebiotics, Probiotics, pH Regulators, Enzymes",
      "packing": "100 gm, 500 gm"
    },
    {
      "name": "Aurvit",
      "composition": "Each 250 gm contains: Zinc Sulphate:2500 mg, Manganese Sulphate:1500 mg, Vitamin A: 12500000 IU, Vitamin B2: 5000 mg, Vitamin D3:2500000 IU, Vitamin K3: 1000 mg, Vitamin B1: 800 mg, Vitamin B6: 1600 mg, Vitamin B12:25000 mcg, Niacin: 12000 mg, Biotin: 10000 mcg, Calcium Pantothenate: 8000 mg, Vitamin E: 8000 IU, Folic Acid: 800 mg, Yeast: 250000 CFU, Sorbitol: 10000 mg",
      "packing": "250 gm"
    },
    {
      "name": "Orthox",
      "composition": "Phosphorus, Vitamin D3, Vitamin B12, Vitamin B6, Folic Acid, Choline, Pantothenic Acid, Manganese, Zinc, Base: QS",
      "packing": "500 ml, 1 lit, 5 lit"
    },
    {
      "name": "Aurvit Oral",
      "composition": "Each 5 ml contains:Vitamin A 60000 IU, Vitamin E 150 mg, Vitamin D3 25000 IU, Vitamin B12  20mcg, Vitamin C 200 mg, Selenium 10 PPM, Biotin 15 mcg, Zinc 20mg, Lysine 10 mg, Methionine 5 mg, Sodium Chloride 10 mg, Potassium Chloride 8 mg, Cholagogue agents 800 mcg, Preservatives and carriers QS",
      "packing": "500 ml, 1 lit"
    },
    {
      "name": "Aur-Minrex-T (LAYER)           (TRACE MINERALS FOR COMMERCIAL LAYER",
      "composition": "Each kg contains: Manganese: 80 g, Zinc: 80 g, Iron: 60 g, Copper: 15 g, Selenium 300 mg, Iodine 1g, Calcium Base",
      "packing": "25 kg"
    },
    {
      "name": "Aur-Minrex-T (BREEDER)",
      "composition": "Each 1.5 kg contains: Manganese 90 gms, Zinc: 90 gms, Iron: 90 gm, Copper: 10 gm, Iodine:1 gm, Selenium: 0.3 gm",
      "packing": "24 kg"
    },
    {
      "name": "Aur-Biometh",
      "composition": "Methyl donors 100%",
      "packing": "1 kg, 4 kg, 25 kg"
    },
    {
      "name": "Aurvit",
      "composition": "Each 1 kg contains: 12 MIU, Vitamin D3:2 MIU, Vitamin E 50 gm, K3: 4 fm, B1: 3 gm, B2: 8 gm, B6: 8 gm, B12: 30 mg, Niacin: 10 gm, Pantothenic Acid: 14 gm, Folic acid: 500 mg, Biotin: 50 mg, Vitamin C: 150 gm, Sodium Chloride:75 gm, Potassium chloride: 200 gm, Probiotics: QS",
      "packing": "100 gm"
    },
    {
      "name": "Haemaur Liquid (Nutritional Performance Enhancer)",
      "composition": "Contents: Each 15 ml contains: Elemental iron 135 mg, Vitamin B12  150 mcg, Vitamin B6 15 mg, Folic acid 3.75 mg, Potassium chloride 30mg, Sodium chloride 50 mg, Vitamin K3  15 mg, Copper sulphate 100 mg, Cobalt sulphate 30 mg",
      "packing": "500 ml, 1 lit, 5 lit"
    },
    {
      "name": "Haemaur Premix (Nutritional Performance Enhancer)",
      "composition": "Each kg contains: Elemental iron 27000 mg, Vitamin B12 5000 mcg, Vitamin B6  1000 mg, Folic acid 1500 mg, Potassium chloride 10000 mg, Sodium Chloride 20000mg, Vitamin K 1000 mg, Copper Sulphate 10000 mg, Cobalt Sulphate 2000 mg, enriched with Liver stimulants",
      "packing": "10 kg"
    },
    {
      "name": "Immuno-Aur LIQUID INTENSIFYING IMMUNITY",
      "composition": "Each 20 ml contains: Vitamin E: 60 mg, Vitamin C 75 mg, Amino Acids: 150 mg, Omega Fas: 5 mg, Sodium Chloride: 40 mg, Potassium Chloride: 35 mg, Selenium: 10 mcg, Manganese Sulphate: 15 mg, Amla, Philanthus Niruri and Withania Somnifera: 65 mg, Stabilisers: QS",
      "packing": "500 ml, 1 lit, 5 lit"
    },
    {
      "name": "Immuno-Aur PREMIX",
      "composition": "Each 25 gm contains:Amla 40%, Vitamin E 60 mg, Glycine 75 mg, Potassium Chloride 500 mg, Sodium Chloride 165 mg, Manganese Sulphate 20 mg, Magnesium Sulphate 100 mg, Sodium citrate 300 mg, Selenium 25 mcg, Base stabilised with Immunopotentiators and Sodium Bicarbonate",
      "packing": "10 kg"
    },
    {
      "name": "Aur-Stresswell",
      "composition": "Each 20 gm contains: Sodium Chloride: 300 mg, Potassium Chloride: 1000 mg, Glycine: 75 mg, Lactic Acid Bacteria: 120 x 106,  Manganese Sulphate: 250 mg, Magnesium Sulphate: 30 mg, Sodium Bi carbonate:2000 mg, Sodium Citrate: 350 mg, Vitamin C: 100 mg, Calcium Hypophosphite: 100 mg,",
      "packing": "200 gm, 1 kg, 10 kg"
    },
    {
      "name": "Chick-X",
      "composition": "Each 15 gm contains: Sodium Chloride: 225 mg, Potassium Chloride: 750 mg, Glycine: 56 mg, Lactic Acid Baceria: 90 x 1006 , Manganese Sulphate: 187 mg, Magnesium Sulphate: 22.5 mg, Sodium Bicorbonate: 1500 mg, Sodium Citrate: 252.5 mg, Vitamin C: 75 mg, Calcium Hypophosphite: 75 mg, Base: Q.S",
      "packing": "15 gm"
    },
    {
      "name": "Aurvit-C",
      "composition": "Each Gm contains: Vitamin C 50 mg, Vitamin K 10 mg",
      "packing": "200 gms"
    },
    {
      "name": "Aurvit-ES",
      "composition": "Each 200 gm contains: Vitamin E 12.5%, Selenium 25 mg, Arginine 1.25 gm",
      "packing": "200 gm"
    },
    {
      "name": "Aur-VC 100",
      "composition": "Pure Extract of amla",
      "packing": "100 gm"
    },
    {
      "name": "Livo-X",
      "composition": "Each 10 ml contains: Tricholine Citrate 1500mg, Vit B 12: 4 mcg, Inositol: 10 mg, Vit E: 20 mg, Selenium: 7 mcg, Protein Hydrolysate 100 mg, Methyl donor: 66 mg, Biotin: 6 mcg, Copper: 10 mg, Cobalt: 5 mg, Iron: 15 mg with liver stimulants",
      "packing": "500 ml, 1000 ml, 5000 ml"
    },
    {
      "name": "Livoaur Premix                       (A Trusted Performance Enhancer)",
      "composition": "Tricholine citrate, Protein Hydrolyste, Vitamin B12, Inositol, Vitamin E, Biotin, Selenium, Methyl Donors, in a base enriched with liver stimulants, Mould inhibitors and toxin binders",
      "packing": "1 kg, 10 kg, 25 kg"
    },
    {
      "name": "Aur-K-Zyme Forte Layer Special    Optimizing Enzyme Activity,",
      "composition": "Cellulase, Pectinase, Xylanase, Phytase",
      "packing": "25 kg"
    },
    {
      "name": "Aur-Growboost                    For Optimum Performance",
      "composition": "Each 500 ml contains: Methionine activity (MHA): 127.600 gm, Lysine Hydrochloride: 63.125 gm, Choline chloride: 63.125 gm, Sodium: 459.000 mg, Phsophorus: 154.160 mg, Magnesium: 595.400 mg, Zinc: 215.700 mg, Iron: 223.400 mg, Copper: 158.800 mg, Cobalt: 205.250 mgManganese: 384.500 mg",
      "packing": "500 ml, 1000 ml"
    },
    {
      "name": "Aur-Engrow Liquid",
      "composition": "Each 100 ml contains: Amino Acids: MHA 50 mg, Lysine: 30 mg, Arginine: 10 mg, Threonine: 20 mg, Choline: 100 mg, Vitamins: D3: 5 mg, B12: 5 mg, B6:15 mg, B1:10 mg, Niacinamide: 20 mg, Chelated Minerals: Manganese Methionate: 100 mg, Magnesium Methionate: 125 mg, Zinc Methionate: 200 mg, Ferrous Methionate: 150 mg, Copper Methionate: 50 mg, Cobalt Methionate: 150 mg, Chromium: 10 mg, Phosphorus:10 gm",
      "packing": "500 ml, 1000 ml, 5000 ml"
    },
    {
      "name": "Lipoaur Premix (Metabolic Activator)",
      "composition": "Contents;Lecithine extract treated with co-enzymes",
      "packing": "25 kg"
    },
    {
      "name": "Aur-Phyto 2500",
      "composition": "Each gm contains Phytse 2500 units",
      "packing": "1 kg"
    },
    {
      "name": "Nephroaur      (Promotes Renal Efficiency)",
      "composition": "Herbal extract, Nephrotic tissue stimulants, Digestives, Liver stimulants, Diuretics",
      "packing": "500 gm"
    },
    {
      "name": "Kitaur (Kitasamycin 20% Premix)",
      "composition": "Microgranulated solid dispersion Kitasamycin premix",
      "packing": "150 gm"
    },
    {
      "name": "Oxyaur Plus",
      "composition": "Oxytetracycline HCl  : 10 %, Tiamulin Hydrogen Fumerate : 33.33 mg/gm, Electrolytes & antioxidants 3%",
      "packing": "1 kg"
    },
    {
      "name": "Teroxyaur Chick",
      "composition": "Each 250 gm contains: Oxytetracycline HCl 3%, Neomycin Sulphate 3%, Probiotic 1%, Vitamin A10 Lakh IU, Amino Acids 5%, Vitamin K3: 3750 mg, Vitamin E 5000 IU, Vitamin C 5%, Electrolytes 5%, Dextrose QS",
      "packing": "50 gm, 250 gm"
    },
    {
      "name": "Terixyaur DS",
      "composition": "Each kg contains: Oxytetracycline HCl  12250 mg, Neomycin Sulphate 10000 mg, Probiotics 60000 MS and base treated with acidifiers",
      "packing": "1 kg, 5 kg"
    },
    {
      "name": "Herbix",
      "composition": "A synergistic combination of standardized phyto actives, Carvacrol-5%, Cinnamaldehyde: 3%, Capsicum Oleoresins: 2%",
      "packing": "100 gm"
    },
    {
      "name": "Fly-X",
      "composition": "Cyromazine feed grade 1%",
      "packing": "5 kg, 20 kg"
    },
    {
      "name": "Aur-Drylit",
      "composition": "Unique nutritional formulation with selected enzymes and DFMs",
      "packing": "450 gm"
    },
    {
      "name": "Digex LIQUID (FOR BETTER DIGESTIBILITY)",
      "composition": "Liver stimulants, Potassium and sodium salts, Digestives, Cholagogue agents",
      "packing": "500 ml, 1 lit, 5 lit"
    },
    {
      "name": "Digex FORTE PREMIX",
      "composition": "Contents: Liver stimulants, Potassium and sodium salts, Digestives, Nephrotic tissue stimulants",
      "packing": "25 kg"
    },
    {
      "name": "Digex FORTE LIQUID",
      "composition": "Liver stimulants, Potassium and sodium salts, Digestives, Nephrotic tissue stimulants",
      "packing": "500 ml, 1000 ml, 5000 ml"
    },
    {
      "name": "Aurical Premix Calibrated Calcium Premix",
      "composition": "Phytase, Calcium, Phosphorus, Vitamin D3 in a base enriched with Minerals",
      "packing": "10 kg , 25kg"
    },
    {
      "name": "Aurical Liquid (For sturdy bones and thick shells)",
      "composition": "Each 20ml contains: Soluble calcium salts:500mg, Phosphorus:100mg, Vitamin D3:1200 IU, Vitamin B12:3mcg, Manganese:2mg, Zinc:500mcg, Cobalt:400mcg, Iron:10mg",
      "packing": "500ml, 1000 ml, 5000ml 22 ltrs"
    },
    {
      "name": "Levadaur (Probiotic formulation)",
      "composition": "Each 5 gm contains:Saccharomyces Cerevisiae 10-12 billion CFU",
      "packing": "1 kg"
    },
    {
      "name": "Aureosteo Liquid (For better calcium metabolism)",
      "composition": "Phosphorus, Vitamin D3, Vitamin B12, Vitamin B6, Folic Acid, Choline, Pantothenic Acid, Manganese, Zinc, Base: QS",
      "packing": "500 ml, 1000 ml, 5000 ml"
    },
    {
      "name": "Auregut Premix Modulates Immune System",
      "composition": "Each gm contains: Bacillus coagulans (min): 500 million cfu, Bacillus licheniformis (min): 400 Million cfu, Bacillus subtillis (min): 200 million cfu, Saccharomyces boulardii (min): 250 million cfu, Aspergillus oryzae (min): 500 million cfu, Dextrose Monohydrate: QS",
      "packing": "1 kg,  25kg"
    },
    {
      "name": "Auregut Soluble (Modulates Immune System)",
      "composition": "Each 100 gm contains: Lactobacillus Acidophilus  12000 million CFU, Bifidobacterium Lactis  0.166 million CFU, Lactobacillus Casei   6000 million CFU, Bifidobacterium Bifidum :1.666 million CFU, Saccharomyces Boulardii  3.75 X 108 CFU, Lactobacillus Subtilis  7.5 X 108 CFU,Dextrose anhydrous:QS",
      "packing": "100g, 500g"
    },
    {
      "name": "Lipaurex (Liquid choline chloride 75%)",
      "composition": "Each ml contains: Choline Chloride 75% with added fat mobilisers",
      "packing": "1 ltr, 5ltr, 22 ltrs"
    },
    {
      "name": "Colinaur Replacer",
      "composition": "Selected Herbal Ingredients",
      "packing": "25 kg"
    },
    {
      "name": "Panauromin-250 Minerals with AB2D3K & B Complex",
      "composition": "Each 250 gm contain: Zinc Sulphate: 2500mg, Manganese Sulphate:1500 mg, Vitamin A:12500000IU, Vitamin B2:5000mg, Vitamin D3:2500000IU, Vitamin K3:1000 mg, Vitamin B1:800mg, Vitamin B6:1600mg, Vitamin B12:25000mcg, Niacin:12000mg, Biotin:10000  mcg, Calcium Pantothenate:8000mg, Vitamin E:8000IU, Folic Acid:800 mg, Yeast:250000CFU, Sorbitol:10000mg, Zinc Sulphate:2500mg, Manganese Sulphate:1500mg,",
      "packing": "250 gm, 10 kg, 25kg"
    },
    {
      "name": "Panauromin-500 (Vitamin Premix)",
      "composition": "Each 500 gm contains:Vitamin A:20MIU, Vitamin D3:4MIU, Viamin E:50gm, Vitamin K3:4gm, Vitamin B1:4.4gm, Vitamin B6:6gm, Vitamin B2:20 gm, Vitamin B12:35mg, Vitamin C:100gm, Niacin:66gm, Calcium Pantothenate:30gm, Folic Acid:4gm, Biotin:200mg",
      "packing": "500 gm"
    },
    {
      "name": "Panaurevita Liquid (Nutritional Liquid Supplement)",
      "composition": "Each 5 ml Vitamin A:60000 IU,Vitamin E:150 mg\nVitamin D3:25000 IU, Vitamin B12:20 mcg, Vitamin C:200 mg, Selenium  10 ppm, Biotin:15 mcg, Lysine: 10 mg, Methionine:5 mg, Preservatives & Carriers   Q.S",
      "packing": "500 ml, 1ltr, 5ltr"
    },
    {
      "name": "Panaurevita-XT",
      "composition": "Each ml contains:  Vitamin A:50000 IU, Vitamin E:30mg, Vitamin D3: 5000 IU, Vitamin C:100 mg, Arginine:L5mg, Threonine: 5mg,",
      "packing": "500 ml, 1ltr"
    },
    {
      "name": "Panaumin Layer (Trace Mineral Supplement)",
      "composition": "Each kg contains: Manganese:75 gm, Zinc:65 gm, Iron:60gm, Copper:6gm, Selenium:300 mg, Iodine 0.5gm, Calcium Base",
      "packing": "25 kg"
    },
    {
      "name": "Panaumin Broiler (Trace Mineral Supplement)",
      "composition": "Each 1.5kg contains: Manganese: 90gm, Zinc:80gm, Iron:90gm, Copper: 15m, Selenium 0.3gm, Iodine 2gm,",
      "packing": "25kg"
    },
    {
      "name": "Panaumin Breeder",
      "composition": "Each 2 kg contains: Manganese 110gm, Zinc: 120gm, Iron: 110gm, Copper:24gm, Iodine:3.5gm, Cobalt:10gm",
      "packing": "24 kg"
    },
    {
      "name": "Panauplex Liquid",
      "composition": "Each 5 ml contains: Vitamin B2:1.25 mg, Vitamin B6:0.65mg, Vitamin B 12: 6.25 mcg, Niacinamide 37.50 mg, D-Panthenol 1.25 mg, L-Lysine 5.00 mg, DL-Methionine 7.50 mg, Cobalt Sulphate 85 mcg, Manganese Sulphate 45 mcg, Zinc Sulphate 110 mcg,",
      "packing": "500 ml, 1000ml, 5000ml"
    },
    {
      "name": "Aureferol",
      "composition": "Each 100g contains: Calcium Gluconate: 1.75g, Ferric Ammonium Citrate: 1.50g, Copper Sulphate: 0.50g, Cobalt Chloride: 10 mg,Stabilised Vitamin D3: 18000 IU, Niacinamide: 215 mg, Biotin: 350mg, Folic Acid: 5 mg, Vitamin B12\" 75 mcg, Withani Somnifera: 2 g, Tribulus terrestris: 2 g, Malt Extract base: 2 g",
      "packing": "2.5 kg/5 kg"
    },
    {
      "name": "Aurofer Liquid (Haematinic)",
      "composition": "Contents: Each 15 ml contains: Elemental iron 135 mg, Vitamin B12: 150 mcg, Vitamin B6:15mg, Folic acid:3.75 mg, Potassium chloride 30mg, Sodium chloride:50 mg, Vitamin K3:15mg, Copper sulphate:100 mg, Cobalt sulphate:30 mg",
      "packing": "500ml, 1000ml, 5000 ml, 22 ltrs"
    },
    {
      "name": "Aurofer Premix (Nutritional performance enhancer)",
      "composition": "Each kg contains: Elemental Iron, Vitamin B12, Vitamin B6, Folic acid ,Potassium chloride, Sodium Chloride, Vitamin K3 , Copper Sulphate , Cobalt Sulphate\nAmino Acids",
      "packing": "10 kg, 25 kg"
    },
    {
      "name": "Panaur-Stim (Non antibiotic Growth Promoter)",
      "composition": "Each kg contains: Andrographis paniculata: 100 gm, Tribullous Terrestris 100 gm, Saxifraga Ligulata: 100 gm, Zinziber officinale:40 gm, Curcuma longa: 100 gm, Allium sativum: 60gm",
      "packing": "1 kg, 10 kg, 25 kg"
    },
    {
      "name": "Aurefort Liquid Intensifying Immunity",
      "composition": "Each 20 ml contains: Vitamin E: 60 mg, Vitamin C 75 mg, Amino Acids: 150 mg, Omega Fas: 5 mg, Sodium Chloride: 40 mg, Potassium Chloride: 35 mg, Selenium: 10 mcg, Manganese Sulphate: 15 mg, Amla, Philanthus Niruri and Withania Somnifera: 65 mg, Stabilisers: QS",
      "packing": "200 ml, 500 ml, 1000 ml, 5000 ml, 22ltrs"
    },
    {
      "name": "Aurecalm (Relieve summer stress)",
      "composition": "Each 20 gm contains: Sodium Chloride:300 mg, Potassium Chloride:1000 mg, Glycine:75 mg, Lactic Acid Bacillus:120 x 106, , Manganese Sulphate:250 mg, Magnesium Sulphate:30mg, Sodium Bicarbonate:2000 mg, Sodium Citrate:350 mg, Vitamin C:100 mg, Calcium:20mg",
      "packing": "200 gm,          1kg , 10 kg,"
    },
    {
      "name": "Aurecalm Liquid (Organic electrolytes)",
      "composition": "Each 20ml contains:Sodium:100mg, Potassium:500mg, Glycine:75mg, Lactic acid bacillus 120X106, Protein Hydrolysate:50mg, Manganese:80mg, Magnesium:5mg, Sodium bicarbonae:2000mg, Sodium citrate:350mg, Vitamin C:100mg, Calcium:20mg",
      "packing": "200ml, 500ml, 1000ml, 5000ml"
    },
    {
      "name": "Aurenza W/S (Enhansed Immunity)",
      "composition": "Each 200 gm contains: Vitamin E:10%, Selenium: 50 mg, Arginine   2.5gm",
      "packing": "200 gm"
    },
    {
      "name": "Aurenza Premix (Enriched combinatin of Vitamin E, Selenium and Arginine)",
      "composition": "Each kg contains: Vitamin E 20%, Selenium 250mg, Arginine 25 gm",
      "packing": "1 kg"
    },
    {
      "name": "Aurenza Liquid",
      "composition": "Each 200 ml contains: Vitamin E 25 gm, Selenium 25 mg, Arginine 1.25 gm",
      "packing": "200 ml"
    },
    {
      "name": "Aurenza Powder",
      "composition": "Each 200 gm contains:  Vitamin E 10%, Selenium: 50 mg, Arginine: 2.5 gm",
      "packing": "200 ml"
    },
    {
      "name": "Respiraur (An advanced solution to RTI)",
      "composition": "B-Complex Vitamins with Antimicrobials",
      "packing": "200 ml, 500 ml, 1ltr"
    },
    {
      "name": "Aurefit-5 (To reduce heat stress)",
      "composition": "Each 10 ml contains: Sodium Salicylate: 500 mg, Potassium Chloride :50 mg, Pure Amla Extract :150 mcg, Protein Hydrolysate:550 mg, Magnesium Sulphate:60 mg",
      "packing": "500 ml, 1 ltr, 5 ltr, 30 lrs"
    },
    {
      "name": "Hidraur (hydrating ions)",
      "composition": "Each 10 ml contains:  K+, 25.50 mEq, NA+ 86.94 mEq, CL-: 28.16mEq, HCO-3: 32.78 mEq",
      "packing": "1 ltr & 5 ltr"
    },
    {
      "name": "Aure-C 100 (Natural Vitamin C derived from Amla)",
      "composition": "Amla Powder",
      "packing": "100 gm, 1kg, 5 kg"
    },
    {
      "name": "Aure-PRO (For respiratory health)",
      "composition": "Liquid: Ciprofloxacin:7.5%, Enrofloxacin:2.5%, Premix:Ciprofloxacin 2.0%, Enrofloxacin: 4.5%, Levofloxacin 0.25%,Herbal Extract:5%",
      "packing": "5kg"
    },
    {
      "name": "Auregado Liquid (Trusted Performacne enhancer)",
      "composition": "Each 10ml contain: Tricholine citrate: 1500mg, Protein hydrolysate:100mg, Vitamin B12:4mcg, Inositol:10mg, Methyl donors; 66mg, Selenium:7mcg, Vitamin E:20mg, Biotin:6mcg, Base enriched with liver Stimulants Q.S",
      "packing": "500ml, 1Ltr, 5Ltr, 22Ltr & 30 Ltr"
    },
    {
      "name": "Auregut-XT",
      "composition": "Contents: Polyphenols, Insoluble fibres",
      "packing": "25 kg"
    },
    {
      "name": "Auregado Premix (Trusted Performance Enhancer)",
      "composition": "Tricholine citrate, Protein Hydrolyste, Vitamin B12, Inositol, Vitamin E, Biotin, Selenium, Methyl Donors, Niacinamide, Mould inhibitors, Toxin binders",
      "packing": "1 kg, 10 kg, 25 kg"
    },
    {
      "name": "Auregado Concentrate (Multiple Ingredients and Multifaced action)",
      "composition": "Lipotropic Agents, Digestive enhnsers, Emulsifiers, Anti Oxidants, Liver stimulants",
      "packing": "10 kg"
    },
    {
      "name": "Aurezyme Layer Optimizing Enzyme Activity,",
      "composition": "Cellulase, Pectinase, Xylanase, Phytase",
      "packing": "25 kg"
    },
    {
      "name": "Aurezyme Broiler Optimizing Enzyme Activity,",
      "composition": "Cellulase, Pectinase, Xylanase, Phytase, Pancreatin,Vit D3",
      "packing": "25 kg"
    },
    {
      "name": "Aurelipo Premix (Metabolically active choline)",
      "composition": "Contents; Phosphotidyl Choline, emulsifiers and Lipase promoting factors",
      "packing": "25 kg"
    },
    {
      "name": "Auremul (Improving fat digestibility)",
      "composition": "Contents: Lecithin, Glyceryl Polyethylene Glycol Ricinoleate, Glyceryl Monostearate, Polyoxyethylene Sorbitan Monooleate, Surfactants",
      "packing": "10 kg"
    },
    {
      "name": "Panaur-Phytase 2500/5000",
      "composition": "Each gm contains Phytase 2500 units and Phytase 5000 units",
      "packing": "1 kg"
    },
    {
      "name": "Aurenox (Promotes renal efficiency)",
      "composition": "Herbal extract, Nephrotic tissue stimulants, Digestives, Liver stimulants, Diuretics",
      "packing": "500 gm,"
    },
    {
      "name": "Aurenox Liquid (Promotes renal efficiency)",
      "composition": "Herbal extract, Nephrotic tissue stimulants, Digestives, Liver stimulants, Diuretics",
      "packing": "1000 ml , 5000ml"
    },
    {
      "name": "Oxiaurex",
      "composition": "Oxytetracycline HCl  : 10 %, Tiamulin Hydrogen Fumerate : 10 %, Electrolytes & Antioxidants : 3 %",
      "packing": "1kg"
    },
    {
      "name": "Oxiaurex-M W/S For complete chick care",
      "composition": "Each 250 gm contains: Oxytetracycline HC:3%, Neomycin Sulphate:3%, Probiotic:1%, Arginine 2500 mg, Gtriptophan: 1000 mg, Glycine 7500 mg, Threonine:1500 mg, Vitamin A 10 lakh IU, Vitamin K3: 3750 mg, Vitamin E: 5000 IU, Electrolytes: 5%",
      "packing": "50 gm      250 gm"
    },
    {
      "name": "Oxiaurex-M C+ For complete chick care",
      "composition": "Each 250 gm contains:Ciprofloxacin:3%, Neomycin Sulphate:3%, Probiotic:1%, Arginine 2500 mg, Gtriptophan: 1000 mg, Glycine 7500 mg, Threonine:1500 mg, Vitamin A 10 lakh IU, Vitamin K3: 3750 mg, Vitamin E: 5000 IU, Electrolytes: 5%",
      "packing": "250 gm"
    },
    {
      "name": "Panaureolin (Antimicrobial performance enhancer)",
      "composition": "Lincomycin Hydrochloride 0.88%. Neomycin sulphate: 5%",
      "packing": "1kg, 5kg, 25 kg"
    },
    {
      "name": "Auremosca-X",
      "composition": "Cyromazine feed grade 1%",
      "packing": "5 kg, 20kg, 25kg"
    },
    {
      "name": "Aureseco (To minimise fly menace)",
      "composition": "Unique nutritional formulation with selected enzymes and DFMs",
      "packing": "450 gm"
    },
    {
      "name": "Aureseco-XT (Nutritional formulation)",
      "composition": "Selected enzymes, DFMs, fortified with NSP enzymes and cyromazine",
      "packing": "10kg, 25kg"
    },
    {
      "name": "Auregest Premix (For optimum kidney and liver functions)",
      "composition": "Contents: Liver stimulants, Potassium and sodium salts, Digestives, Nephrotic tissue stimulants",
      "packing": "25 kg"
    },
    {
      "name": "Auregest Liquid (Optimum Kidney and Liver Function)",
      "composition": "Contents: Liver stimulants, Potassium and sodium salts, Digestives, Nephrotic tissue stimulants",
      "packing": "500 ml,  1000 ml, 5000 ml 22ltrs"
    },
    {
      "name": "Auretox (Multi spectrum toxin binder)",
      "composition": "Picrorhiza Kurroa, Anti Oxidants, Activated Charcoal, MOS, HSCAS, Bufferred organic acids",
      "packing": "25 KG"
    },
    {
      "name": "Auretox-X (Broad Spectrum Toxin Binder)",
      "composition": "mold inhibitors and HSCAS (Hydrated Sodium and Calcium aluminosilicate).",
      "packing": "25 KG"
    },
    {
      "name": "Auretox Premix (Broad Spectrum toxin binder)",
      "composition": "HSCAS, Mold Inhibitors and MOS",
      "packing": "25 kg"
    },
    {
      "name": "Aurecox (A Proven Anticoccidial with Synergistic Combination)",
      "composition": "Each 100 gm contains: Diaverdine 2.3 gm, Sulphaquinoxaline 13.4gm, Vitamin K3 1 gm",
      "packing": "100 gm"
    },
    {
      "name": "Aureprol 20% (Water soluble Powder)",
      "composition": "Each Kg contains:\nAmprolium hydrochloride:200 gm, Vitamin K3:10 gm, Gallacturonic acid:10 gm",
      "packing": "1 kg"
    },
    {
      "name": "Aureprol 15% (Water soluble Powder)",
      "composition": "Each Kg contains:\nAmprolium HCl   : 150 gm, Menadione sodium bisulphite : 7.5 gm, Gallacturonic acid  : 7.5 gm",
      "packing": "120g, 1Kg"
    },
    {
      "name": "Aurecido Liquid (Acidifying agent)",
      "composition": "Composition: Lactic Acid, Formic Acid, Fumaric Acid, Citric Acid, Sodium Citrate, Acetic acid and essential oils",
      "packing": "500 ml, 1ltr , 5 ltr & 22 ltrs"
    },
    {
      "name": "Aurecido Premix (Acidifying agent)",
      "composition": "Formic acid, Acetic Acid, Lactc Acid, Calcium propionate,Butyric Acid, Fumaric Acid, Citric Acid, Lauric Acid, Benzoic Acid, Sorbic Acid, Copper Oxine",
      "packing": "25 kg"
    },
    {
      "name": "Aureguard (Multiprotective anti-oxidant)",
      "composition": "Ethoxiquin, butylated hydroxytolouene, propyl gallate,citric acid in appropriate proportions",
      "packing": "1kg, 10kg, 25kg"
    },
    {
      "name": "Panaurex Sol",
      "composition": "Neomycin Sulphate  15%",
      "packing": "1 kg"
    }
  ],
  "Cattle Supplements": [
    {
      "name": "Min-XT",
      "composition": "Salt Lick for Animal  \nEach 1 Kg Contains:\nCalcium: 2.60%\nPhosphorus: 1.40%\nSodium: 31.93%\nChloride: 49.28%\nMg: 1.80%\nCu: 0.32%\nCo: 0.04%\nFe: 0.50%\nK: 0.006%\nI: 0.02%\nZn: 0.36%\nMn: 0.28%\nS: 0.36%\nCaO: 3.64%\nP205:3.21%\nNaCl: 81.21%\nCa/P ratio: 1.8 to 1.",
      "packing": "1kg, 2 kg, 5 kg and 10 kg"
    },
    {
      "name": "Aur-Minerex",
      "composition": "Each Kg contains:                 \nCopper  312 mg, Cobalt  45 mg, Magnesium  2.114 gm, \nIron  979 mg, Zinc  2.13 gm, Iodine 156 mg, \nBioactive Chromium  65 mg, Dl-Methionine  1.92 gm, \nL-Lysine Mono HCL  4.4 gm, Calcium  240 gm, Phosphorus  120 gm",
      "packing": "1 Kg  & 5 kg"
    },
    {
      "name": "Aur-Minerex Forte",
      "composition": "Chelated mineral + vitamin+ probiotic + Yeast mixture",
      "packing": "1 Kg & 5 kg"
    },
    {
      "name": "Aurboost Bolus",
      "composition": "Each Bolus contain:\nSaccharomyces cerevisiae 25 X 109CFU\nLactobacillus sporogenes  20 X 109CFU\nAspergillus Oryzae     20 X 109 CFU\nBiotin                        10 mg\nDL-Methionine            1 gm\nZinc Sulphate             200 mg\nCobalt Sulphate          40 mg\nFructo-Oligisaccharide  250 mg",
      "packing": "1 X 8's Boli Pack"
    },
    {
      "name": "Calcix-L",
      "composition": "Each 100 ml Contains: \nCalcium..........1650 mg\nPhosphorus...........850 mg\nVitamin D3...................8000 I.U.\nVitamin B12…...100 mcg\nCarbohydrate.................40000 mg\n\nEnergy value: \nKilocalories…......160\nKilojoules…........670",
      "packing": "1 lit, 5 lit & 20 lit"
    },
    {
      "name": "EnerXT",
      "composition": "Short Chain Saturated\nC12:0 Lauric              0.2%-0.5\nC14:0 Myristic               1.0 -1.4%\nLong Chain Saturated\nC16:0 Palmitic              43% - 47%\nC18:0 Stearic                   3% - 5%\nLong Chain Unsaturated\nC18:1 Oleic           -        35%- 40%\nC18:2 Linoleic      -           8%-10%",
      "packing": "1 Kg & 25 kg"
    },
    {
      "name": "Aur-Ketonish",
      "composition": "Composition per ml\nPropylene glycol 892 mg\nCholine chloride 75 mg\nCobalt chloride 0.75 mg\nPotassium iodide 045 mg\nSorbitol q.s",
      "packing": "100 ml, 500 ml And 1 lit"
    },
    {
      "name": "Aur-Pregamin Bolus",
      "composition": "Chelated mineral + vitamin + bioactive chromium Bolus for anoestrus",
      "packing": "30s or 4s bolus"
    }
  ],
  "Equine Supplements": [
    {
      "name": "Aurvita",
      "composition": "Each Lit /kg Contain \nVitamin A ......600, 000 IU \nNicotinic Acid.....1200mg \nVitamin D3 ......90,000 IU \nVitamin E.......17,000mg \nVitamin K.......1000mg \nVitamin B1 ........400mg \nVitamin B2.......400mg \nVitamin B6.......1600mg \nVitamin B12......1600mg \nFolic Acid .......500mg \nBiotin ........20mg \nCalcium D-Pantothenate ..2000mg \nCholine Chloride .....4000mg \nAmino Acids\nDL-methionine ......8000mg \nL-lysine hydrochloride ..10,000mg \nTrace Elements \nIron .......1600mg \nIodine ........20mg \nCobalt ........20mg\nCopper .........1400mg \nManganese .......4000mg \nZinc .......5000mg \nSelenium .......7mg",
      "packing": "Powder : 1 kg and 5 kg                                           Liquid : 1 lit and 5 lit"
    },
    {
      "name": "Aurvita ES",
      "composition": "Each kg contain\nVitamin E (alpha- tocopherol acetate)…...45000 mg\nSodium selenite…......10 mg\nL-lysine HCl…........50000 mg",
      "packing": "Powder : 1 kg and 5 kg                                           Liquid : 1 lit and 5 lit"
    },
    {
      "name": "Aurplex ORAL",
      "composition": "Each 1000 ml contains                                                              \nVitamin B1....1700 mg \nVitamin B6…..550 mg\nVitamin B12......3500 mcg",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "FerroX",
      "composition": "Each Lit Contains:\nIron …...6050 mg \nVitamin B6 ....550 mg \nCobalt …...55 mg \nVitamin B12 …..3500 ?g \nCopper …...1700 mg \nFolic Acid …...550 mg \nVitamin B1 ….1350 mg \nVitamin B2 …..850 mg",
      "packing": "150 gm & 1 kg"
    },
    {
      "name": "Aurvita-C",
      "composition": "Each gram contain  Vitamin C (Ascorbic Acid) …........1000 mg",
      "packing": "1 kg and 5 kg"
    },
    {
      "name": "Mintoaur-E",
      "composition": "Each Lit Contain \nPotassium Iodide …..10,000 mg \nPeppermint Oil…...5000mg \nEucalyptus Oil …....3000mg \nVitamin A …...1000 IU",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aur-O-Lyte",
      "composition": "Each 100 gm contains\nSodium chloride........1500mg\nPotassium chloride.....5000mg\nGlycine.......................3500mg\nManganese sulphate...6500mg\nMagnesium sulphate...700mg\nCalcium lactate.......1500mg\nSodium bicarbonate...1000mg\nSodium citrate...........2500mg\nVitamin C...................1200mg\nCalcium hypophosphate..800mg\nLactic acid bacillus spores...3500 million\nIn an instant energy base.",
      "packing": "100 gm, 250 gm and 1 kg"
    },
    {
      "name": "Aurvita ES FORTE",
      "composition": "Each Lit Contain \nSodium ….......27,100mg \nChloride …........49,500mg\nPotassium …....6200mg \nMagnesium …..300mg \nCalcium …...700mg \nVitamin B1 …...770mg\nVitamin B6 …....260mg \nVitamin B 12 …....1000mg",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aurvita K",
      "composition": "Each ml contain\nVitamin K3 (Menadione sodium bisulfate)…..200 mg\nExcipents (solvents)…........q.s to 1 ml",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aurvita FORTE",
      "composition": "Each ml contain\nVitamin A…..............100 000 IU\nVitamin D3 (cholecalciferol)…..........20 000 IU\nVitamin E (alpha- tocopherol acetate)…......20 mg\nExcipents (solvents) …...........q.s to 1 ml",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aurboost Powder",
      "composition": "Saccharomyces cerevisiae25 X 109CFU\nLactobacillus sporogenes  20 X 109CFU\nAspergillus Oryzae     20 X 109 CFU\nBiotin                        10 mg\nDL-Methionine            1 gm\nZinc Sulphate             200 mg\nCobalt Sulphate          40 mg\nFructo-oligisaccharide  250 mg",
      "packing": "500 gm & 1 kg"
    },
    {
      "name": "Calcix-P",
      "composition": "Each 50ml contains\nSoluble calcium salts…....100mg\nPhosphorus…..........225mg\nVitamin D3…...........2500IU\nVitamin B12…...........10mcg\nVitamin C…..........10.33mg\nManganese…...........4.5mg\nZinc….........1000mg\nCobalt….........900mcg\nIron…............1.9mg",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aur-K-Promin",
      "composition": "Each 500ml\nMethionine...........146.7 g        Lysine.......72.6 g\nPhosphorus.........161.85 mg    Zinc............248.05 mg\nIron.............256.90 mg    Cobalt..............237.20 mg\nCholine chloride...........72.6 gm        Sodium........527.85 mg\nMagnesium...........684.7 mg      Calcium..........1058 mg\nCopper............182.6 mg       Manganese....... 442.25 mg\nBase fortified with........10000ppm Aminonitogen",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Liv-XT PLUS",
      "composition": "Each 100 ml/gm contains\nVitamin B1..........40mg\nVitamin B12.........35mcg\nLiver Extract.........1750mg\nYeast Extract.........600mg\nCholine chloride......30g\nAscorbic acid...........100mg\nSaccharomyces cerevisiae.. 250000 million cfu\nAlpha amylase.......15000mcg\nPapain..................5000mcg\nProtein hydrolysate...500mg\nInositol........................300mg\nBiotin..........................25mcg\nNiacin.........................300mg\nD panthenol................30mg\nBase enriched with milk protein, detoxifiers and amino nitrogen.",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Liv-XT",
      "composition": "Each 10 ml contains\nTricholine Citrate.........1800mg\nProtein Hydrolysaten.....125mg\nFresh Liver Extract.........800mg\nVitamin B12....................10mcg\nInositol............................14mg\nMethyl Sulfonyl Methane.....1200mg\nSelenium...........................8mcg\nVitamin E.......................30mg\nBiotin.............................10mcg\nBase enriched with milk protein, detoxifiers and amino nitrogen.",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Imunox",
      "composition": "Each 10 ml contains\nGlycine…....60mg\nVitamin E….....27mg\nSelenium…....1.2ppm\nSodium Chloride.....13mg\nPotassium Chloride.....10mg\nYeast Extract…....20mg\nMilk derived proteins and oligo saccharides in a fortified base.",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Ostox",
      "composition": "Glucosamine HCL 1800mg\nSodium Chondroitin Sulphate 600mg\nManganese Sulphate 16mg\nCalcium ascorbate 104mg\nHyaluronic acid 10mg",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Psyllix",
      "composition": "Psyllium husk",
      "packing": "125 gm"
    }
  ],
  "Pet Supplements": [
    {
      "name": "Calcix-PET",
      "composition": "Each 5 ml contain\nCalcium 82.5 mg\nPhosphorus 42.5 mg\nVitamin D3 400 IU\nVitamin B12 5 mcg\nCarbohydrates 2000 mg",
      "packing": "100 ml & 200 ml"
    },
    {
      "name": "Calcix PET",
      "composition": "Calcium and Mineral Tablet",
      "packing": "60s Tablet"
    },
    {
      "name": "Aurvita PET",
      "composition": "Each tablet contain:\nVitamin A....1800 IU, Vitamin B1...2 mg, \nVitamin B2...1.5 mg, Vitamin B6...0.3 mg, \nVitamin B12....0.025 mg, Vitamin D3 ......250 IU, \nFolic Acid..0.050 mg, Niacinamide....10 mg, \nCalcium...75 mg, Phosphorus..55 mg, \nCopper .......0.050 mg, Manganese  2 mg, \nCobalt...0.020 mg, Iron..1 mg, Iodine...0.060 mg, \nMagnesium ...3 mg, Sodium....7 mg, Chloride  10 mg, \nInositol....4 mg, DHA .....0.2 mg, Protein....300 mg",
      "packing": "60s Tablet"
    },
    {
      "name": "Aurvita PET ORAL",
      "composition": "Each 5 ml contain:\nVitamin A....1800 IU, Vitamin B1...2 mg, \nVitamin B2...1.5 mg, Vitamin B6...0.3 mg, \nVitamin B12....0.025 mg, Vitamin D3 ......250 IU, \nFolic Acid..0.050 mg, Niacinamide....10 mg, \nCalcium...75 mg, Phosphorus..55 mg, \nCopper .......0.050 mg, Manganese  2 mg, \nCobalt...0.020 mg, Iron..1 mg, Iodine...0.060 mg, \nMagnesium ...3 mg, Sodium....7 mg, Chloride  10 mg, \nInositol....4 mg, DHA .....0.2 mg, Protein....300 mg",
      "packing": "150 ml"
    },
    {
      "name": "Aur-Perro",
      "composition": "WEANING FORMULA",
      "packing": "400 gm"
    },
    {
      "name": "Immuno-Aur PET",
      "composition": "Each 1gm contains:\nNucleotide                                                   10mg\nMOS (Monnon Oligosacchoride)       110mg\nSaccharomyces Boulardii                       60mg\nLactobacillus acidophilus                      40mg\nDextrose                                                   780mg",
      "packing": "100 gm"
    },
    {
      "name": "Bio-X PET",
      "composition": "Each 1gm contains:\nMOS + Betaglucan                           10mg\nSaccharomyces boulardii               2.5 million cfu\nB.subtillis                                             5 million cfu \nB. licheniformis                                 5 Million cfu\nZinc                                                        20mg\nManganese                                        20mg\nCopper                                                 1mg",
      "packing": "100 gm"
    },
    {
      "name": "Aur-O-Joint",
      "composition": "Composition: \nEach 5 gm powder contain\nGlucosamine hydrochloride ....500 mg\nChondroitin sulfate ........400 mg\nMSM (Methyl Sulfonyl Methane)........51 mg\nMangnesium sulphate ..........5 mg\nVitamin C ............80 mg\nZinc ...............15 mg\nVitamin E .......10 mg\nYucca schidigera extract ...............10 mg\nBoswellia Serrate extract .......50 mg",
      "packing": "100 gm"
    },
    {
      "name": "Auregado (Livertonic enriched with essential vitamins)",
      "composition": "Each 5 ml contains:Choline:150mg, Vitamin B12:50mcg, Inositol: 75mg, Protein Hydrolysate:10 mg, Selenium:2.5 mcg, Vitamin E:20 mg, Biotin:2.5mcg",
      "packing": "200ml"
    },
    {
      "name": "Auregado-XT (Effective remedy for liver damage and detoxification)",
      "composition": "Each 5 ml contains:S-Aden9osylmethionine: 150mg, Milk Thistle (Sylimarin): 25mg, Dandelian:50mg, Green Tea Extract: 200mg, Turmereic Extract: 125mg, Bhringaraj Extract: 250mg, Picrorhiza Kurroa (Kutki):25mg, Phylanthus Niruri (Amla): 125mg, Boerhavia diffusa (Punarnava): 125mg, Choline: 200mg, Inositol: 50mg, ARginine:250mg",
      "packing": "50ml/100ml"
    },
    {
      "name": "Aurenox (Advanced kidney support)",
      "composition": "Each 5ml contains:Astragalus Root powder: 25mg, Saxifraga ligulata (Pashanbheda): 25mg, Tribulus terrestris (Gokshura):25mg, Boerhavia diffusa (Punarnava): 25mg, N-acetycysteine: 50mg, Asparagus racaemosus (Shatavari root):25mg, Milk thistle (Silymarin): 25mg, Rubia Cardifolia (Manjista): 25mg, Omega 3 fatty acid:500mg, Cranberry extract:12.5mg, Rhubarb extract:25mg, N-Dimethyglycine:12.5mg, Dandelion: 25mg, Choline:25mg, Green Tea Extract: 12.5mg, Inositol:4mg, Thiamine (B1): 1.25mg, Riboflavin (B2):0.50mg, NIacin (B3): 5mg, Pantothenic Acid (B5):1mg, Phyridoxine (B6):1mg, Cyanocobalamin(B12): 0.50mg, Folic acid:10mcg, Vitamin C:20mg, Biotin:12.5mcg",
      "packing": "50ml/200 ml"
    },
    {
      "name": "Aurenox-Sol (Herbal preparation for kidney stone and urinary tract infection)",
      "composition": "Each 5ml contains:Saxifraga ligulata (Pashanbheda):50mg, Boerhavia diffusa (Punarnava):50mg, Crataeva Nurvala (Varuna):50mg, Asparagus racemosus (Shatavari):25mg, Rubia cordifolia (Manjishta:25mg, Cranberry Extract: 125mg, Apple Cider Vinegar: 25mg, Vitamin E:100mg",
      "packing": "50ml/200 ml"
    },
    {
      "name": "Auriflora (Anti diarrheal liquid with probiotics)",
      "composition": "Each 5ml contains: Kaolin:1200mg, Pectin:100mg, Enterococcus faecalis:1 billion CFU, Saccharomyces boulardii:15 billion CFU",
      "packing": "60ml"
    },
    {
      "name": "Auregest (Digestive Enzyme Powder)",
      "composition": "Each 5gm contains: Alpha-Amylase:1150IU, Protease:1400IU, Lipase:320IU, Cellulase:400IU, Hemi cellulase:350IU, Papain:200IU, Bromelain:360IU, Phytase:300IU, Lactase:250IU, Invertase:50IU,",
      "packing": "50gm, 150 gm"
    },
    {
      "name": "Aurefort (Immuno modulator syrup)",
      "composition": "Each 5ml contains: Tinospora cordifolia (Guduchi):100mg, Withania somnifera (Ashwagandha):50mg, Boerhavia diffusa (Punarnava): 5mg, Asparagus racemosus (Shathavari):50mg, Trigoneila foenumgraecum (Methi): 50mg, Tylophoraindica (antamool): 50mg, Ocimum sanctum: (Purple coneflower): 50mg, Echinacea purpurea:25mg, Haridra curcuma (Turmeric):10mg, Folic acid:10mcg, Iron:2.5mg, Zinc:7.5mg, Vitamin E:10mg",
      "packing": "200 ml"
    },
    {
      "name": "Aero-X Drops (Antiflatulant Enzyme Drops)",
      "composition": "Each 5ml contains; Alpha-amylase: 60mg, Papain:80mg, Cinnamon oil:0.1ml, Cardamom oil:0.3mg, Caraway oil:0.42g, Dill oil:0.03ml, Fennel oil:0.003 ml, Mint: 0.2mg, Ajwain:0.1mg,",
      "packing": "30ml"
    },
    {
      "name": "Aurofer (Hematinic Syrup)",
      "composition": "Each 5 ml contains:Ferrous Ascorbate: 30mg, Folic acid:500mcg, Mecobalamin: 500mcg, Pyridoxine (B6):3 mg",
      "packing": "100ml"
    },
    {
      "name": "Plaquetaur (Platelet Enhancer Syrup)",
      "composition": "Each 5ml contains:Erandakarkati (Crica papaya):250 mg, Guduchi (Tinospora cordifolia):75mg, Almond dry extract (Prunus dulcis):20mg, Wheat grass: (Triticum sativum:25mg, Goat milk powder Dry extract:50mg, Kiwi dry extract:(actirelia deiliciosa)25mg, Pomegranate Dry Extract (Punica granatum):25mg",
      "packing": "200ml"
    },
    {
      "name": "Respiraur (Cough syrup)",
      "composition": "Each 10ml contains: Ocimum sanctum (Tulsi): 100mg, Althgaea officinalis (Khatmi): 100mg, Glycyrrhiza glabra (Yashtimadhu):60mg, Curcuma longa (Haldi): 10mg, Gingibar officinale (sonth):20mg, Vigna aconitifolia (varaka):50mg, Indian gooseberry (amla:50mg, Solanum indicum (Brathi): 20mg, Amomum subulatum(black cardamom):10mg, Clerodendrum Indicum (Bamun hati):10mg, Mentha viridis (Pudina satva):5mg",
      "packing": "100 ml"
    },
    {
      "name": "Aurevita (Nutritional supplement)",
      "composition": "Each 5ml contains:  Arginine: 3mg,Histidine:1mg, Tryptophan:2.5mg, Lysine HCL: 10mg, Tahreonine:2.5mg, Methionine: 4.5mg, Leucine:7.5mg, Isoleucine:2.5mg, Valine:2.5mg, Phenylalanine:2.5mg, Thiamine (B1):2.5mg, Riboflavin (B2):1mg, Niacin (B3):10mg, Pantothenic Acid(B5):2mg, Pyridoxine(B6):2mg, Cyanocobalamin(B12):1mg, Folic Acid:0.25mg, Vitamin E:15mg, Biotin:100mg",
      "packing": "200ml"
    },
    {
      "name": "Aurevita Drops (Nutritional supplement)",
      "composition": "Each ml contains: Arginine:2mg, Tryptophan:0.5mg, Lysine Hcl:4mg, Threonine:0.5mg, Methionine:1mg, Leucine:2mg, Valine: 0.8mg, Phenylalanine:0.5mg, Choline:5mg, Thiamine(B1):0.3mg, Riboflavin (B2): 0.5mg, Niacin (B3):10mg, Pantothenic acid(B5): 1mg, Pyridoxine (B6):1mg, Biotin:0.2mcg, Vitamin A:15IU, Vitamin D3:200IU, Vitamin C:30mg, Vitain E:6mg, Taurine:200mg, DHA:0.1mg",
      "packing": "30ml"
    },
    {
      "name": "Aurical-X (Oral calcium enriched with vitamin D3)",
      "composition": "Each 5 ml contains:Calcium:105mg, Phosphorus:75mg, Vitamin D3:400IU, Vitamin B12:6.25mcg, Vitamin C:25mg",
      "packing": "200ml"
    },
    {
      "name": "Brillaur (Coat & Shine Supplement)",
      "composition": "Each 5ml contains:Omega 6:3300mg, Omega 3:375mg, Vitamin A Palmitate: 28.75IU, Phyridoxine Hydrochloride (B6):0.03mg, Biotin (B7):4mg, Vitamin E:10IU, Inositol:0.08mg, Zinc sulphate monohydrate:1.5mg",
      "packing": "50ml, 200 ml"
    }
  ]
};

// Export if running in Node, otherwise attach to window
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS_DATA;
} else {
    window.PRODUCTS_DATA = PRODUCTS_DATA;
}
