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
      "composition": "Each 1 gram contains\nPhytase....... 5000 FTU",
      "packing": "25 KG"
    },
    {
      "name": "EnzyX -PRO",
      "composition": "COMPOSITION\nACID & ALKALI PROTEASE ..750000 UNIT/G\nMANNANSE ..........600 Unit/g",
      "packing": "10 kg, 25 kg"
    },
    {
      "name": "Bio-XP",
      "composition": "Each 1 gram contains\nBacillus Subtilis.....1.8X109 CFU\nBacillus Licheniformis......1.8X109 CFU\nClostridium Butyricum .....0.4 x 109 CFU",
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
      "name": "Aur-Dcp",
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
    }
  ],
  "Cattle Supplements": [
    {
      "name": "Min-XT",
      "composition": "Salt Lick for Animal\nEach 1 Kg Contains:\nCalcium: 2.60%\nPhosphorus: 1.40%\nSodium: 31.93%\nChloride: 49.28%\nMg: 1.80%\nCu: 0.32%\nCo: 0.04%\nFe: 0.50%\nK: 0.006%\nI: 0.02%\nZn: 0.36%\nMn: 0.28%\nS: 0.36%\nCaO: 3.64%\nP205:3.21%\nNaCl: 81.21%\nCa/P ratio: 1.8 to 1.",
      "packing": "1kg, 2 kg, 5 kg and 10 kg"
    },
    {
      "name": "Aur-Minerex",
      "composition": "Each Kg contains:\nCopper  312 mg, Cobalt  45 mg, Magnesium  2.114 gm,\nIron  979 mg, Zinc  2.13 gm, Iodine 156 mg,\nBioactive Chromium  65 mg, Dl-Methionine  1.92 gm,\nL-Lysine Mono HCL  4.4 gm, Calcium  240 gm, Phosphorus  120 gm",
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
      "composition": "Each 100 ml Contains:\nCalcium..........1650 mg\nPhosphorus...........850 mg\nVitamin D3...................8000 I.U.\nVitamin B12....100 mcg\nCarbohydrate.................40000 mg\nEnergy value:\nKilocalories.......160\nKilojoules.........670",
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
      "composition": "Each Lit /kg Contain\nVitamin A ......600, 000 IU\nNicotinic Acid.....1200mg\nVitamin D3 ......90,000 IU\nVitamin E.......17,000mg\nVitamin K.......1000mg\nVitamin B1 ........400mg\nVitamin B2.......400mg\nVitamin B6.......1600mg\nVitamin B12......1600mg\nFolic Acid .......500mg\nBiotin ........20mg\nCalcium D-Pantothenate ..2000mg\nCholine Chloride .....4000mg\nAmino Acids\nDL-methionine ......8000mg\nL-lysine hydrochloride ..10,000mg\nTrace Elements\nIron .......1600mg\nIodine ........20mg\nCobalt ........20mg\nCopper .........1400mg\nManganese .......4000mg\nZinc .......5000mg\nSelenium .......7mg",
      "packing": "Powder : 1 kg and 5 kg                                           Liquid : 1 lit and 5 lit"
    },
    {
      "name": "Aurvita ES",
      "composition": "Each kg contain\nVitamin E (alpha- tocopherol acetate)....45000 mg\nSodium selenite.......10 mg\nL-lysine HCl.........50000 mg",
      "packing": "Powder : 1 kg and 5 kg                                           Liquid : 1 lit and 5 lit"
    },
    {
      "name": "Aurplex ORAL",
      "composition": "Each 1000 ml contains\nVitamin B1....1700 mg\nVitamin B6...550 mg\nVitamin B12......3500 mcg",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "FerroX",
      "composition": "Each Lit Contains:\nIron ....6050 mg\nVitamin B6 ....550 mg\nCobalt ....55 mg\nVitamin B12 ...3500 ?g\nCopper ....1700 mg\nFolic Acid ....550 mg\nVitamin B1 ..1350 mg\nVitamin B2 ...850 mg",
      "packing": "150 gm & 1 kg"
    },
    {
      "name": "Aurvita-C",
      "composition": "Each gram contain  Vitamin C (Ascorbic Acid) .........1000 mg",
      "packing": "1 kg and 5 kg"
    },
    {
      "name": "Mintoaur-E",
      "composition": "Each Lit Contain\nPotassium Iodide ...10,000 mg\nPeppermint Oil....5000mg\nEucalyptus Oil .....3000mg\nVitamin A ....1000 IU",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aur-O-Lyte",
      "composition": "Each 100 gm contains\nSodium chloride........1500mg\nPotassium chloride.....5000mg\nGlycine.......................3500mg\nManganese sulphate...6500mg\nMagnesium sulphate...700mg\nCalcium lactate.......1500mg\nSodium bicarbonate...1000mg\nSodium citrate...........2500mg\nVitamin C...................1200mg\nCalcium hypophosphate..800mg\nLactic acid bacillus spores...3500 million\nIn an instant energy base.",
      "packing": "100 gm, 250 gm and 1 kg"
    },
    {
      "name": "Aurvita ES FORTE",
      "composition": "Each Lit Contain\nSodium ........27,100mg\nChloride .........49,500mg\nPotassium .....6200mg\nMagnesium ...300mg\nCalcium ....700mg\nVitamin B1 ....770mg\nVitamin B6 .....260mg\nVitamin B 12 .....1000mg",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aurvita K",
      "composition": "Each ml contain\nVitamin K3 (Menadione sodium bisulfate)...200 mg\nExcipents (solvents).........q.s to 1 ml",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aurvita FORTE",
      "composition": "Each ml contain\nVitamin A...............100 000 IU\nVitamin D3 (cholecalciferol)...........20 000 IU\nVitamin E (alpha- tocopherol acetate).......20 mg\nExcipents (solvents) ............q.s to 1 ml",
      "packing": "500 ml & 1000 ml"
    },
    {
      "name": "Aurboost Powder",
      "composition": "Saccharomyces cerevisiae25 X 109CFU\nLactobacillus sporogenes  20 X 109CFU\nAspergillus Oryzae     20 X 109 CFU\nBiotin                        10 mg\nDL-Methionine            1 gm\nZinc Sulphate             200 mg\nCobalt Sulphate          40 mg\nFructo-oligisaccharide  250 mg",
      "packing": "500 gm & 1 kg"
    },
    {
      "name": "Calcix-P",
      "composition": "Each 50ml contains\nSoluble calcium salts.....100mg\nPhosphorus...........225mg\nVitamin D3............2500IU\nVitamin B12............10mcg\nVitamin C...........10.33mg\nManganese............4.5mg\nZinc..........1000mg\nCobalt..........900mcg\nIron.............1.9mg",
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
      "composition": "Each 10 ml contains\nGlycine.....60mg\nVitamin E......27mg\nSelenium.....1.2ppm\nSodium Chloride.....13mg\nPotassium Chloride.....10mg\nYeast Extract.....20mg\nMilk derived proteins and oligo saccharides in a fortified base.",
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
      "composition": "Each tablet contain:\nVitamin A....1800 IU, Vitamin B1...2 mg,\nVitamin B2...1.5 mg, Vitamin B6...0.3 mg,\nVitamin B12....0.025 mg, Vitamin D3 ......250 IU,\nFolic Acid..0.050 mg, Niacinamide....10 mg,\nCalcium...75 mg, Phosphorus..55 mg,\nCopper .......0.050 mg, Manganese  2 mg,\nCobalt...0.020 mg, Iron..1 mg, Iodine...0.060 mg,\nMagnesium ...3 mg, Sodium....7 mg, Chloride  10 mg,\nInositol....4 mg, DHA .....0.2 mg, Protein....300 mg",
      "packing": "60s Tablet"
    },
    {
      "name": "Aurvita PET ORAL",
      "composition": "Each 5 ml contain:\nVitamin A....1800 IU, Vitamin B1...2 mg,\nVitamin B2...1.5 mg, Vitamin B6...0.3 mg,\nVitamin B12....0.025 mg, Vitamin D3 ......250 IU,\nFolic Acid..0.050 mg, Niacinamide....10 mg,\nCalcium...75 mg, Phosphorus..55 mg,\nCopper .......0.050 mg, Manganese  2 mg,\nCobalt...0.020 mg, Iron..1 mg, Iodine...0.060 mg,\nMagnesium ...3 mg, Sodium....7 mg, Chloride  10 mg,\nInositol....4 mg, DHA .....0.2 mg, Protein....300 mg",
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
      "composition": "Each 1gm contains:\nMOS + Betaglucan                           10mg\nSaccharomyces boulardii               2.5 million cfu\nB.subtillis                                             5 million cfu\nB. licheniformis                                 5 Million cfu\nZinc                                                        20mg\nManganese                                        20mg\nCopper                                                 1mg",
      "packing": "100 gm"
    },
    {
      "name": "Aur-O-Joint",
      "composition": "Composition:\nEach 5 gm powder contain\nGlucosamine hydrochloride ....500 mg\nChondroitin sulfate ........400 mg\nMSM (Methyl Sulfonyl Methane)........51 mg\nMangnesium sulphate ..........5 mg\nVitamin C ............80 mg\nZinc ...............15 mg\nVitamin E .......10 mg\nYucca schidigera extract ...............10 mg\nBoswellia Serrate extract .......50 mg",
      "packing": "100 gm"
    }
  ]
};

// Export if running in Node, otherwise attach to window
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS_DATA;
} else {
    window.PRODUCTS_DATA = PRODUCTS_DATA;
}
