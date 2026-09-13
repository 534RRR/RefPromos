export type Locale = 'en' | 'de' | 'fr' | 'it' | 'nl';

export interface Translations {
  [key: string]: string;
}

export const TRANSLATIONS: Record<Locale, Translations> = {
  en: {
    // Nav & Header
    nav_coupons: 'Coupons',
    nav_stores: 'Stores',
    nav_categories: 'Categories',
    nav_guides: 'Guides',
    nav_reviews: 'Reviews',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_admin: 'Admin',
    search_placeholder: 'Search deals...',
    select_region: 'Select Region',
    breadcrumbs_home: 'Home',

    // Hero
    hero_badge: 'VERIFIED PROMO CODES & DAILY DEALS',
    hero_title_1: 'Unlock',
    hero_title_2: 'Smarter Savings.',
    hero_title_3: 'Every Day.',
    hero_desc: 'Access 50,000+ hand-tested promo codes, discount vouchers, and exclusive savings across 500+ top verified retailers.',
    hero_search_input: 'Search stores, brands, or coupon codes...',
    hero_btn_find: 'Find Deals',
    hero_trending: 'Trending:',
    trending_nike: 'Nike 20% Off',
    trending_amazon: 'Amazon Promo Codes',
    trending_sephora: 'Sephora Beauty Deals',
    trending_apple: 'Apple Student Discount',
    trending_asos: 'ASOS Summer Sale',
    hero_floating_1: '25% OFF Sitewide',
    hero_floating_2: '40% OFF',
    hero_floating_3: '15% OFF + Free Ship',
    pill_sitewide: 'Sitewide',
    stat_verified_coupons: 'Verified Coupons',
    stat_promo_codes: 'Promo Codes',
    stat_top_brands: 'Top Brands',
    stat_user_rating: 'User Rating',
    trusted_by_shoppers: 'TRUSTED BY SHOPPERS OF TOP BRANDS',
    more_brands: '+500 more',

    // Section Titles & Badges
    section_highlights_badge: "Today's Highlights",
    section_featured_deals_title: 'Featured Deals & Exclusive Promo Codes',
    view_all_offers: 'View All Offers',
    section_partner_retailers: 'Partner Retailers',
    section_top_stores_title: 'Top Stores with Verified Coupons',
    all_stores_directory: 'All Stores Directory',
    section_browse_departments: 'Browse Departments',
    section_popular_categories_title: 'Popular Shopping Categories',
    all_categories: 'All Categories',
    stores_available: 'Stores Available',
    section_editorial_insights: 'Editorial Insights',
    section_smart_guides_title: 'Smart Shopping Guides & Hacks',
    read_all_guides: 'Read All Guides',
    read_guide: 'Read Guide',
    min_read: 'min read',

    section_featured_coupons: 'Top Verified Promo Codes & Exclusive Offers',
    section_featured_coupons_sub: 'Hand-verified coupon codes saving shoppers the most right now',
    section_popular_stores: 'Trending Stores & Featured Retailers',
    section_popular_stores_sub: "Save instantly at today's most popular shopping destinations",
    section_categories: 'Shop Deals by Popular Categories',
    section_categories_sub: "Find verified promotional codes for whatever you're shopping for",
    section_guides: 'Expert Money-Saving Guides & Tips',
    section_guides_sub: 'Proven shopping strategies, insider discount hacks, and retail advice',
    section_reviews: 'In-Depth Store Reviews & Trust Ratings',
    section_reviews_sub: 'Real shopping experiences, policy breakdowns, and savings credibility',

    // Buttons, Badges & Labels
    btn_get_code: 'Get Code',
    btn_get_deal: 'Get Deal',
    btn_shop_now: 'Shop Now',
    btn_view_all: 'View All',
    btn_visit_store: 'Visit Store',
    badge_verified: 'Verified Today',
    badge_staff_pick: 'Staff Pick',
    badge_exclusive: 'Exclusive',
    badge_expiring: 'Expiring Soon',
    uses_today: 'uses today',
    success_rate: 'Success',
    code_copied: 'Code Copied!',
    copy_code: 'Copy Code',
    promo_code_badge: 'Promo Code',
    direct_deal_badge: 'Direct Deal',
    claim_offer: 'Claim Offer',
    automatic_at_checkout: 'Automatic at checkout',
    available_deals: 'Deals',

    // Stores Directory
    stores_directory_eyebrow: 'Retailers Directory',
    stores_directory_title: 'All Partner Stores & Brands',
    stores_directory_desc: 'Discover verified promo codes, seasonal sales, and cashback deals from top retailers worldwide.',
    search_stores_placeholder: 'Search stores by brand name...',
    top_featured_brands: 'Top Featured Brands',
    az_directory: 'Alphabetical A-Z Directory',
    no_stores_found: 'No stores found matching your search',
    clear_filters: 'Clear Filters',
    coupons_deals_available: 'Coupons & Deals Available',

    // Reviews Hub & Cards
    reviews_eyebrow: 'Editorial Ratings',
    reviews_title: 'Store & Brand Reviews',
    reviews_desc: 'Read unbiased retailer reviews, rating scores, pros & cons, and return policy rundowns before checking out.',
    no_reviews_yet: 'No Reviews Published Yet',
    no_reviews_desc: 'Our deal testing team is currently drafting new brand reviews.',
    review_card_review: 'Review',
    tested_highlights: 'Tested Highlights',
    by_author: 'By',
    read_review: 'Read Review',
    pros: 'Pros & Strengths',
    cons: 'Cons & Limitations',
    verdict: 'Our Verdict',
    overall_score: 'Overall Trust Score',

    // Coupons Directory
    coupons_eyebrow: 'Deals Hub',
    coupons_title: 'Verified Promo Codes & Coupons',
    coupons_desc: 'Browse tested discount codes, voucher coupons, and flash sales verified working today.',
    search_coupons_placeholder: 'Search by store or code (e.g. Nike, SAVE20)...',
    all_offers: 'All Offers',
    filter_codes: 'Promo Codes',
    filter_deals: 'Sales & Deals',
    filter_free_shipping: 'Free Shipping',
    sort_by: 'Sort By',
    sort_popular: 'Most Popular',
    sort_newest: 'Newest',
    sort_expiring: 'Expiring Soon',
    no_coupons_found: 'No coupons found matching your criteria',

    // Categories Hub
    categories_eyebrow: 'Categories Hub',
    categories_title: 'All Shopping Categories',
    categories_desc: 'Explore discounts, promo codes, and daily sales organized by product department.',

    // Blogs Hub
    blogs_eyebrow: 'Shopping Editorial',
    blogs_title: 'Saving Guides, Reviews & Hacks',
    blogs_desc: 'Expert shopping tips, retailer buying guides, and tested strategies to save money at checkout.',
    all_articles: 'All Articles',
    featured_guide: 'Featured Guide',
    read_full_guide: 'Read Full Guide',

    // Modals
    modal_coupon_code: 'Copy this code and paste it at merchant checkout.',
    modal_copied: 'Copied to Clipboard!',
    modal_visit_store: 'Continue to Store',
    modal_feedback_prompt: 'Did this coupon work for you?',
    modal_feedback_yes: 'Yes, worked!',
    modal_feedback_no: 'Expired or invalid',
    modal_thanks: 'Thank you for your feedback!',
    search_modal_placeholder: 'Search stores, deals, promo codes...',
    search_modal_trending: 'Trending Searches',
    search_modal_stores: 'Stores',
    search_modal_coupons: 'Coupons',
    search_modal_categories: 'Categories',
    search_modal_guides: 'Guides',
    search_modal_no_results: 'No results found for',

    // Newsletter
    newsletter_badge: 'STAY UPDATED',
    newsletter_title: 'Get Verified Deals Delivered Weekly',
    newsletter_desc: 'Join 50,000+ smart shoppers and receive our curated weekly digest of tested promo codes and price drops.',
    newsletter_placeholder: 'Enter your email address...',
    newsletter_btn: 'Subscribe Free',
    newsletter_privacy: 'Zero spam. Unsubscribe at any time with 1 click.',
    newsletter_success: '🎉 Thank you for subscribing! Your first weekly deal roundup is on its way.',
    subscribing: 'Subscribing...',

    // Footer
    footer_tagline: 'Your premier destination for verified discount promo codes, daily sales, and exclusive merchant savings.',
    footer_quick_links: 'Quick Links',
    footer_categories: 'Categories',
    footer_stores: 'Popular Stores',
    footer_legal: 'Legal & Info',
    footer_terms: 'Terms & Conditions',
    footer_privacy: 'Privacy Policy',
    footer_rights: 'All rights reserved.',
    footer_trust_1_title: '100% Tested Daily',
    footer_trust_1_desc: 'Every coupon code is verified before listing to guarantee real savings at checkout.',
    footer_trust_2_title: 'Free & No Account Required',
    footer_trust_2_desc: 'Instant 1-click access to tested promo codes without signing up.',
    footer_trust_3_title: 'Affiliate Transparency',
    footer_trust_3_desc: 'We collaborate with verified brands and may earn a commission on qualifying purchases.',
    footer_promo_codes: 'Promo Codes',
    footer_free_shipping: 'Free Shipping',
    footer_nike_codes: 'Nike Promo Codes',
    footer_amazon_deals: 'Amazon Deals',
    footer_sephora_coupons: 'Sephora Coupons',
  },

  de: {
    // Nav & Header
    nav_coupons: 'Gutscheine',
    nav_stores: 'Geschäfte',
    nav_categories: 'Kategorien',
    nav_guides: 'Ratgeber',
    nav_reviews: 'Bewertungen',
    nav_about: 'Über uns',
    nav_contact: 'Kontakt',
    nav_admin: 'Admin',
    search_placeholder: 'Angebote suchen...',
    select_region: 'Region wählen',
    breadcrumbs_home: 'Startseite',

    // Hero
    hero_badge: 'GEPRÜFTE GUTSCHEINCODES & TÄGLICHE DEALS',
    hero_title_1: 'Entdecken Sie',
    hero_title_2: 'Clevere Rabatte.',
    hero_title_3: 'Jeden Tag.',
    hero_desc: 'Zugriff auf über 50.000 geprüfte Gutscheincodes, Rabatt-Gutscheine und exklusive Angebote von mehr als 500 geprüften Top-Händlern.',
    hero_search_input: 'Geschäfte, Marken oder Gutscheincodes suchen...',
    hero_btn_find: 'Angebote finden',
    hero_trending: 'Angesagt:',
    trending_nike: 'Nike 20% Rabatt',
    trending_amazon: 'Amazon Gutscheine',
    trending_sephora: 'Sephora Beauty-Deals',
    trending_apple: 'Apple Studentenrabatt',
    trending_asos: 'ASOS Sommer-Sale',
    hero_floating_1: '25% RABATT Auf alles',
    hero_floating_2: '40% RABATT',
    hero_floating_3: '15% RABATT + Gratis Versand',
    pill_sitewide: 'Auf alles',
    stat_verified_coupons: 'Geprüfte Gutscheine',
    stat_promo_codes: 'Gutscheincodes',
    stat_top_brands: 'Top-Marken',
    stat_user_rating: 'Nutzerbewertung',
    trusted_by_shoppers: 'VON KÄUFERN VON TOP-MARKEN GESCHÄTZT',
    more_brands: '+500 weitere',

    // Section Titles & Badges
    section_highlights_badge: 'Highlights des Tages',
    section_featured_deals_title: 'Ausgewählte Angebote & Exklusive Gutscheincodes',
    view_all_offers: 'Alle Angebote anzeigen',
    section_partner_retailers: 'Partner-Händler',
    section_top_stores_title: 'Top-Geschäfte mit geprüften Gutscheinen',
    all_stores_directory: 'Alle Geschäfte anzeigen',
    section_browse_departments: 'Kategorien durchstöbern',
    section_popular_categories_title: 'Beliebte Shopping-Kategorien',
    all_categories: 'Alle Kategorien',
    stores_available: 'Geschäfte verfügbar',
    section_editorial_insights: 'Experten-Tipps',
    section_smart_guides_title: 'Clevere Einkaufsratgeber & Spartipps',
    read_all_guides: 'Alle Ratgeber lesen',
    read_guide: 'Ratgeber lesen',
    min_read: 'Min. Lesezeit',

    section_featured_coupons: 'Top geprüfte Gutscheincodes & Exklusive Angebote',
    section_featured_coupons_sub: 'Handgeprüfte Gutscheine, mit denen Käufer aktuell am meisten sparen',
    section_popular_stores: 'Beliebte Geschäfte & Top-Händler',
    section_popular_stores_sub: 'Sparen Sie sofort bei den gefragtesten Shopping-Adressen',
    section_categories: 'Angebote nach beliebten Kategorien',
    section_categories_sub: 'Finden Sie geprüfte Rabattcodes für alles, was Sie einkaufen',
    section_guides: 'Spartipps & Einkaufsratgeber von Experten',
    section_guides_sub: 'Bewährte Einkaufsstrategien, Insider-Tricks und Spartipps',
    section_reviews: 'Detaillierte Shop-Bewertungen & Vertrauens-Scores',
    section_reviews_sub: 'Echte Einkaufserfahrungen, Rückgaberichtlinien und Sparvorteile',

    // Buttons, Badges & Labels
    btn_get_code: 'Code anzeigen',
    btn_get_deal: 'Angebot sichern',
    btn_shop_now: 'Jetzt einkaufen',
    btn_view_all: 'Alle anzeigen',
    btn_visit_store: 'Zum Geschäft',
    badge_verified: 'Heute geprüft',
    badge_staff_pick: 'Redaktionstipp',
    badge_exclusive: 'Exklusiv',
    badge_expiring: 'Läuft bald ab',
    uses_today: 'mal heute genutzt',
    success_rate: 'Erfolgsquote',
    code_copied: 'Code kopiert!',
    copy_code: 'Code kopieren',
    promo_code_badge: 'Gutscheincode',
    direct_deal_badge: 'Direkt-Angebot',
    claim_offer: 'Angebot sichern',
    automatic_at_checkout: 'Automatisch an der Kasse',
    available_deals: 'Angebote',

    // Stores Directory
    stores_directory_eyebrow: 'Händlerverzeichnis',
    stores_directory_title: 'Alle Partner-Geschäfte & Marken',
    stores_directory_desc: 'Entdecken Sie geprüfte Gutscheincodes, saisonale Rabatte und Angebote von Top-Händlern weltweit.',
    search_stores_placeholder: 'Geschäfte nach Markennamen suchen...',
    top_featured_brands: 'Beliebte Top-Marken',
    az_directory: 'Alphabetisches A-Z Verzeichnis',
    no_stores_found: 'Keine Geschäfte für Ihre Suche gefunden',
    clear_filters: 'Filter zurücksetzen',
    coupons_deals_available: 'Verfügbare Gutscheine & Angebote',

    // Reviews Hub & Cards
    reviews_eyebrow: 'Redaktionelle Bewertungen',
    reviews_title: 'Shop- & Marken-Bewertungen',
    reviews_desc: 'Lesen Sie unabhängige Händlerberichte, Bewertungs-Scores, Vor- und Nachteile sowie Rückgabebedingungen vor Ihrem Einkauf.',
    no_reviews_yet: 'Noch keine Bewertungen veröffentlicht',
    no_reviews_desc: 'Unser Test-Team verfasst derzeit neue Berichte zu Top-Marken.',
    review_card_review: 'Bewertung',
    tested_highlights: 'Geprüfte Highlights',
    by_author: 'Von',
    read_review: 'Bewertung lesen',
    pros: 'Vorteile & Stärken',
    cons: 'Nachteile & Einschränkungen',
    verdict: 'Unser Fazit',
    overall_score: 'Gesamt-Vertrauenswert',

    // Coupons Directory
    coupons_eyebrow: 'Deals-Zentrale',
    coupons_title: 'Geprüfte Gutscheincodes & Rabatte',
    coupons_desc: 'Durchsuchen Sie geprüfte Rabattcodes, Gutscheine und Blitzangebote, die heute funktionieren.',
    search_coupons_placeholder: 'Nach Geschäft oder Code suchen (z.B. Nike, RABATT20)...',
    all_offers: 'Alle Angebote',
    filter_codes: 'Gutscheincodes',
    filter_deals: 'Deals & Rabatte',
    filter_free_shipping: 'Gratis Versand',
    sort_by: 'Sortieren nach',
    sort_popular: 'Beliebteste',
    sort_newest: 'Neueste',
    sort_expiring: 'Bald ablaufend',
    no_coupons_found: 'Keine Gutscheine für Ihre Kriterien gefunden',

    // Categories Hub
    categories_eyebrow: 'Kategorien-Übersicht',
    categories_title: 'Alle Shopping-Kategorien',
    categories_desc: 'Entdecken Sie Rabatte, Gutscheincodes und Verkäufe sortiert nach Produktbereich.',

    // Blogs Hub
    blogs_eyebrow: 'Shopping-Redaktion',
    blogs_title: 'Spartipps, Einkaufsratgeber & Tricks',
    blogs_desc: 'Experten-Tipps, Händler-Einkaufsführer und erprobte Strategien, um an der Kasse zu sparen.',
    all_articles: 'Alle Artikel',
    featured_guide: 'Top-Ratgeber',
    read_full_guide: 'Ganzen Ratgeber lesen',

    // Modals
    modal_coupon_code: 'Kopieren Sie diesen Code und fügen Sie ihn an der Kasse ein.',
    modal_copied: 'In die Zwischenablage kopiert!',
    modal_visit_store: 'Weiter zum Shop',
    modal_feedback_prompt: 'Hat dieser Gutschein funktioniert?',
    modal_feedback_yes: 'Ja, hat funktioniert!',
    modal_feedback_no: 'Abgelaufen oder ungültig',
    modal_thanks: 'Vielen Dank für Ihr Feedback!',
    search_modal_placeholder: 'Geschäfte, Deals, Gutscheincodes suchen...',
    search_modal_trending: 'Beliebte Suchbegriffe',
    search_modal_stores: 'Geschäfte',
    search_modal_coupons: 'Gutscheine',
    search_modal_categories: 'Kategorien',
    search_modal_guides: 'Ratgeber',
    search_modal_no_results: 'Keine Ergebnisse gefunden für',

    // Newsletter
    newsletter_badge: 'AUF DEM LAUFENDEN BLEIBEN',
    newsletter_title: 'Geprüfte Angebote wöchentlich erhalten',
    newsletter_desc: 'Schließen Sie sich über 50.000 cleveren Käufern an und erhalten Sie wöchentlich getestete Gutscheincodes direkt ins Postfach.',
    newsletter_placeholder: 'E-Mail-Adresse eingeben...',
    newsletter_btn: 'Kostenlos abonnieren',
    newsletter_privacy: 'Kein Spam. Jederzeit mit einem Klick kündbar.',
    newsletter_success: '🎉 Vielen Dank für Ihre Anmeldung! Ihr erster wöchentlicher Deal-Report ist unterwegs.',
    subscribing: 'Wird abonniert...',

    // Footer
    footer_tagline: 'Ihre beste Adresse für geprüfte Gutscheincodes, tägliche Rabatte und exklusive Händler-Angebote.',
    footer_quick_links: 'Schnellzugriff',
    footer_categories: 'Kategorien',
    footer_stores: 'Beliebte Shops',
    footer_legal: 'Rechtliches & Info',
    footer_terms: 'AGB',
    footer_privacy: 'Datenschutz',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_trust_1_title: 'Täglich zu 100% geprüft',
    footer_trust_1_desc: 'Jeder Gutscheincode wird vor der Veröffentlichung geprüft, um echte Rabatte zu garantieren.',
    footer_trust_2_title: 'Kostenlos & Ohne Anmeldung',
    footer_trust_2_desc: 'Direkter 1-Klick-Zugriff auf Rabattcodes und Angebote ohne lästige Registrierung.',
    footer_trust_3_title: 'Transparente Partnerschaften',
    footer_trust_3_desc: 'Wir kooperieren mit vertrauenswürdigen Händlern und erhalten eventuell eine Provision.',
    footer_promo_codes: 'Gutscheincodes',
    footer_free_shipping: 'Kostenloser Versand',
    footer_nike_codes: 'Nike Gutscheine',
    footer_amazon_deals: 'Amazon Angebote',
    footer_sephora_coupons: 'Sephora Beauty-Codes',
  },

  fr: {
    // Nav & Header
    nav_coupons: 'Codes Promo',
    nav_stores: 'Boutiques',
    nav_categories: 'Catégories',
    nav_guides: 'Guides',
    nav_reviews: 'Avis',
    nav_about: 'À propos',
    nav_contact: 'Contact',
    nav_admin: 'Admin',
    search_placeholder: 'Rechercher des offres...',
    select_region: 'Sélectionner la région',
    breadcrumbs_home: 'Accueil',

    // Hero
    hero_badge: 'CODES PROMO VÉRIFIÉS & BONS PLANS DU JOUR',
    hero_title_1: 'Débloquez des',
    hero_title_2: 'Économies Intelligentes.',
    hero_title_3: 'Chaque Jour.',
    hero_desc: 'Accédez à plus de 50 000 codes promo testés à la main, bons de réduction et remises exclusives auprès de plus de 500 grandes boutiques vérifiées.',
    hero_search_input: 'Rechercher magasins, marques, codes...',
    hero_btn_find: 'Trouver des offres',
    hero_trending: 'Tendances :',
    trending_nike: 'Nike 20% de Réduction',
    trending_amazon: 'Codes Promo Amazon',
    trending_sephora: 'Offres Beauté Sephora',
    trending_apple: 'Réduction Étudiant Apple',
    trending_asos: 'Soldes d’Été ASOS',
    hero_floating_1: '25% DE RÉDUCTION sur tout',
    hero_floating_2: '40% DE RÉDUCTION',
    hero_floating_3: '15% DE RÉDUCTION + Livraison Gratuite',
    pill_sitewide: 'Sur tout',
    stat_verified_coupons: 'Codes Vérifiés',
    stat_promo_codes: 'Codes Promo',
    stat_top_brands: 'Grandes Marques',
    stat_user_rating: 'Avis Utilisateurs',
    trusted_by_shoppers: 'PLÉBISCITÉ PAR LES CLIENTS DES PLUS GRANDES MARQUES',
    more_brands: '+500 autres',

    // Section Titles & Badges
    section_highlights_badge: 'Points forts du jour',
    section_featured_deals_title: 'Bons plans du moment & Codes promo exclusifs',
    view_all_offers: 'Voir toutes les offres',
    section_partner_retailers: 'Boutiques partenaires',
    section_top_stores_title: 'Meilleures boutiques avec codes promo vérifiés',
    all_stores_directory: 'Annuaire des boutiques',
    section_browse_departments: 'Parcourir les rayons',
    section_popular_categories_title: "Catégories d'achats populaires",
    all_categories: 'Toutes les catégories',
    stores_available: 'Boutiques disponibles',
    section_editorial_insights: 'Conseils de la rédaction',
    section_smart_guides_title: "Guides d'achat malins & Astuces d'économies",
    read_all_guides: 'Lire tous les guides',
    read_guide: 'Lire le guide',
    min_read: 'min de lecture',

    section_featured_coupons: 'Top Codes Promo Vérifiés & Offres Exclusives',
    section_featured_coupons_sub: 'Codes promo vérifiés à la main qui permettent aux acheteurs de faire les plus grandes économies',
    section_popular_stores: 'Boutiques Tendance & Grandes Enseignes',
    section_popular_stores_sub: 'Économisez immédiatement auprès des destinations shopping les plus prisées',
    section_categories: 'Bons Plans par Catégories Populaires',
    section_categories_sub: 'Trouvez des codes de réduction vérifiés pour tous vos achats',
    section_guides: "Guides d'Experts & Astuces pour Économiser",
    section_guides_sub: "Stratégies d'achat éprouvées, secrets de réduction et conseils shopping",
    section_reviews: 'Avis Détaillés sur les Boutiques & Indices de Confiance',
    section_reviews_sub: 'Vraies expériences clients, analyse des politiques et fiabilité des réductions',

    // Buttons, Badges & Labels
    btn_get_code: 'Voir le code',
    btn_get_deal: "Voir l'offre",
    btn_shop_now: 'Acheter maintenant',
    btn_view_all: 'Tout afficher',
    btn_visit_store: 'Visiter la boutique',
    badge_verified: 'Vérifié aujourd’hui',
    badge_staff_pick: 'Coup de cœur',
    badge_exclusive: 'Exclusif',
    badge_expiring: 'Expire bientôt',
    uses_today: 'utilisations aujourd’hui',
    success_rate: 'Taux de réussite',
    code_copied: 'Code copié !',
    copy_code: 'Copier le code',
    promo_code_badge: 'Code Promo',
    direct_deal_badge: 'Offre Directe',
    claim_offer: "Profiter de l'offre",
    automatic_at_checkout: 'Automatique au panier',
    available_deals: 'Offres',

    // Stores Directory
    stores_directory_eyebrow: 'Annuaire des marchands',
    stores_directory_title: 'Toutes les boutiques et marques partenaires',
    stores_directory_desc: 'Découvrez des codes promo vérifiés, soldes saisonniers et offres exclusives des plus grandes enseignes mondiales.',
    search_stores_placeholder: 'Rechercher par nom de marque...',
    top_featured_brands: 'Marques vedettes populaires',
    az_directory: 'Annuaire alphabétique de A à Z',
    no_stores_found: 'Aucune boutique trouvée pour votre recherche',
    clear_filters: 'Réinitialiser les filtres',
    coupons_deals_available: 'Bons plans et réductions disponibles',

    // Reviews Hub & Cards
    reviews_eyebrow: 'Évaluations éditoriales',
    reviews_title: 'Avis sur les Boutiques et Marques',
    reviews_desc: 'Lisez des avis impartiaux, notes globales, points forts/faibles et conditions de retour avant de passer commande.',
    no_reviews_yet: 'Aucun avis publié pour le moment',
    no_reviews_desc: 'Notre équipe de testeurs rédige actuellement de nouveaux avis.',
    review_card_review: 'Avis',
    tested_highlights: 'Points forts testés',
    by_author: 'Par',
    read_review: "Lire l'avis",
    pros: 'Points forts & Atouts',
    cons: 'Points faibles & Limites',
    verdict: 'Notre Verdict',
    overall_score: 'Indice de confiance global',

    // Coupons Directory
    coupons_eyebrow: 'Espace Bons Plans',
    coupons_title: 'Codes Promo & Réductions Vérifiés',
    coupons_desc: 'Parcourez des codes de réduction testés, bons d’achat et ventes flash vérifiés aujourd’hui.',
    search_coupons_placeholder: 'Rechercher par boutique ou code (ex. Nike, SOLDES20)...',
    all_offers: 'Toutes les offres',
    filter_codes: 'Codes Promo',
    filter_deals: 'Ventes & Bons Plans',
    filter_free_shipping: 'Livraison Gratuite',
    sort_by: 'Trier par',
    sort_popular: 'Les plus populaires',
    sort_newest: 'Plus récents',
    sort_expiring: 'Expire bientôt',
    no_coupons_found: 'Aucun code promo trouvé pour vos critères',

    // Categories Hub
    categories_eyebrow: 'Espace Catégories',
    categories_title: 'Toutes les Catégories Shopping',
    categories_desc: 'Explorez réductions, codes promo et bons plans classés par rayon.',

    // Blogs Hub
    blogs_eyebrow: 'Éditorial Shopping',
    blogs_title: 'Guides d’Économies, Avis & Astuces',
    blogs_desc: 'Astuces shopping d’experts, guides d’achat et stratégies éprouvées pour économiser au panier.',
    all_articles: 'Tous les articles',
    featured_guide: 'Guide en vedette',
    read_full_guide: 'Lire le guide complet',

    // Modals
    modal_coupon_code: 'Copiez ce code et collez-le au moment de payer sur le site marchand.',
    modal_copied: 'Copié dans le presse-papier !',
    modal_visit_store: 'Continuer vers la boutique',
    modal_feedback_prompt: 'Ce code a-t-il fonctionné pour vous ?',
    modal_feedback_yes: 'Oui, ça a marché !',
    modal_feedback_no: 'Expiré ou invalide',
    modal_thanks: 'Merci pour votre retour !',
    search_modal_placeholder: 'Rechercher boutiques, offres, codes promo...',
    search_modal_trending: 'Recherches populaires',
    search_modal_stores: 'Boutiques',
    search_modal_coupons: 'Codes Promo',
    search_modal_categories: 'Catégories',
    search_modal_guides: 'Guides',
    search_modal_no_results: 'Aucun résultat trouvé pour',

    // Newsletter
    newsletter_badge: 'RESTEZ INFORMÉ',
    newsletter_title: 'Recevez les offres vérifiées chaque semaine',
    newsletter_desc: 'Rejoignez plus de 50 000 acheteurs malins et recevez notre sélection hebdomadaire de codes promo testés et baisses de prix.',
    newsletter_placeholder: 'Entrez votre adresse email...',
    newsletter_btn: "S'inscrire gratuitement",
    newsletter_privacy: 'Zéro spam. Désabonnement en 1 clic à tout moment.',
    newsletter_success: '🎉 Merci pour votre inscription ! Votre premier récapitulatif hebdomadaire est en route.',
    subscribing: 'Inscription en cours...',

    // Footer
    footer_tagline: 'Votre référence pour les codes promo vérifiés, réductions quotidiennes et remises marchandes exclusives.',
    footer_quick_links: 'Accès Rapide',
    footer_categories: 'Catégories',
    footer_stores: 'Boutiques Populaires',
    footer_legal: 'Mentions Légales & Infos',
    footer_terms: 'Conditions Générales',
    footer_privacy: 'Politique de Confidentialité',
    footer_rights: 'Tous droits réservés.',
    footer_trust_1_title: '100% Testé Quotidiennement',
    footer_trust_1_desc: 'Chaque code promo est vérifié manuellement pour garantir de vraies économies au panier.',
    footer_trust_2_title: 'Gratuit & Sans Inscription',
    footer_trust_2_desc: 'Accès immédiat en 1 clic aux codes de réduction sans aucune inscription requise.',
    footer_trust_3_title: 'Transparence d’Affiliation',
    footer_trust_3_desc: 'Nous collaborons avec des marchands réputés et pouvons percevoir une commission.',
    footer_promo_codes: 'Codes Promo',
    footer_free_shipping: 'Livraison Gratuite',
    footer_nike_codes: 'Codes Promo Nike',
    footer_amazon_deals: 'Bons Plans Amazon',
    footer_sephora_coupons: 'Codes Réduction Sephora',
  },

  it: {
    // Nav & Header
    nav_coupons: 'Coupon',
    nav_stores: 'Negozi',
    nav_categories: 'Categorie',
    nav_guides: 'Guide',
    nav_reviews: 'Recensioni',
    nav_about: 'Chi siamo',
    nav_contact: 'Contatto',
    nav_admin: 'Admin',
    search_placeholder: 'Cerca offerte...',
    select_region: 'Seleziona Regione',
    breadcrumbs_home: 'Home',

    // Hero
    hero_badge: 'CODICI PROMOZIONALI VERIFICATI & OFFERTE DEL GIORNO',
    hero_title_1: 'Sblocca',
    hero_title_2: 'Risparmi Più Intelligenti.',
    hero_title_3: 'Ogni Giorno.',
    hero_desc: 'Accedi a oltre 50.000 codici promozionali testati a mano, voucher di sconto e offerte esclusive dei migliori 500+ negozi verificati.',
    hero_search_input: 'Cerca negozi, marchi, codici...',
    hero_btn_find: 'Trova Offerte',
    hero_trending: 'Di tendenza:',
    trending_nike: 'Nike 20% di Sconto',
    trending_amazon: 'Codici Promo Amazon',
    trending_sephora: 'Offerte Bellezza Sephora',
    trending_apple: 'Sconto Studenti Apple',
    trending_asos: 'Saldi Estivi ASOS',
    hero_floating_1: '25% DI SCONTO su tutto',
    hero_floating_2: '40% DI SCONTO',
    hero_floating_3: '15% DI SCONTO + Spedizione Gratuita',
    pill_sitewide: 'Su tutto',
    stat_verified_coupons: 'Coupon Verificati',
    stat_promo_codes: 'Codici Promozionali',
    stat_top_brands: 'Migliori Marchi',
    stat_user_rating: 'Valutazione Utenti',
    trusted_by_shoppers: 'SCELTO DAI CLIENTI DEI MIGLIORI MARCHI',
    more_brands: '+500 altri',

    // Section Titles & Badges
    section_highlights_badge: 'In primo piano oggi',
    section_featured_deals_title: 'Offerte in primo piano e codici promozionali esclusivi',
    view_all_offers: 'Vedi tutte le offerte',
    section_partner_retailers: 'Negozi partner',
    section_top_stores_title: 'Migliori negozi con coupon verificati',
    all_stores_directory: 'Elenco di tutti i negozi',
    section_browse_departments: 'Esplora i reparti',
    section_popular_categories_title: 'Categorie di acquisto popolari',
    all_categories: 'Tutte le categorie',
    stores_available: 'Negozi disponibili',
    section_editorial_insights: 'Approfondimenti editoriali',
    section_smart_guides_title: 'Guide allo shopping intelligente e trucchi',
    read_all_guides: 'Leggi tutte le guide',
    read_guide: 'Leggi la guida',
    min_read: 'min di lettura',

    section_featured_coupons: 'Migliori Codici Promozionali Verificati & Offerte',
    section_featured_coupons_sub: 'Codici sconto verificati a mano che fanno risparmiare di più in questo momento',
    section_popular_stores: 'Negozi di Tendenza e Grandi Marchi',
    section_popular_stores_sub: 'Risparmia subito nelle destinazioni di shopping più gettonate',
    section_categories: 'Offerte per Categorie Popolari',
    section_categories_sub: 'Trova codici sconto verificati per qualsiasi acquisto',
    section_guides: 'Guide di Esperti e Consigli per Risparmiare',
    section_guides_sub: 'Strategie di shopping collaudate, segreti di sconto e consigli',
    section_reviews: 'Recensioni Dettagliate sui Negozi e Punteggi di Fiducia',
    section_reviews_sub: 'Vere esperienze di shopping, analisi delle politiche e affidabilità dei coupon',

    // Buttons, Badges & Labels
    btn_get_code: 'Mostra codice',
    btn_get_deal: 'Attiva offerta',
    btn_shop_now: 'Acquista ora',
    btn_view_all: 'Vedi tutti',
    btn_visit_store: 'Visita negozio',
    badge_verified: 'Verificato oggi',
    badge_staff_pick: 'Scelto per voi',
    badge_exclusive: 'Esclusivo',
    badge_expiring: 'In scadenza',
    uses_today: 'utilizzi oggi',
    success_rate: 'Successo',
    code_copied: 'Codice copiato!',
    copy_code: 'Copia codice',
    promo_code_badge: 'Codice Promo',
    direct_deal_badge: 'Offerta Diretta',
    claim_offer: 'Richiedi offerta',
    automatic_at_checkout: 'Automatico al checkout',
    available_deals: 'Offerte',

    // Stores Directory
    stores_directory_eyebrow: 'Elenco rivenditori',
    stores_directory_title: 'Tutti i negozi e marchi partner',
    stores_directory_desc: 'Scopri codici promozionali verificati, saldi stagionali e offerte dei migliori rivenditori di tutto il mondo.',
    search_stores_placeholder: 'Cerca negozi per nome marchio...',
    top_featured_brands: 'Migliori marchi in evidenza',
    az_directory: 'Elenco alfabetico A-Z',
    no_stores_found: 'Nessun negozio trovato per la tua ricerca',
    clear_filters: 'Cancella filtri',
    coupons_deals_available: 'Coupon e offerte disponibili',

    // Reviews Hub & Cards
    reviews_eyebrow: 'Valutazioni editoriali',
    reviews_title: 'Recensioni di Negozi e Marchi',
    reviews_desc: 'Leggi recensioni imparziali sui negozi, punteggi, pro e contro e condizioni di reso prima di completare gli acquisti.',
    no_reviews_yet: 'Nessuna recensione ancora pubblicata',
    no_reviews_desc: 'Il nostro team di esperti sta redigendo nuove recensioni per i marchi.',
    review_card_review: 'Recensione',
    tested_highlights: 'Punti salienti verificati',
    by_author: 'Di',
    read_review: 'Leggi recensione',
    pros: 'Punti di forza e Pro',
    cons: 'Limiti e Contro',
    verdict: 'Il nostro Verdetto',
    overall_score: 'Punteggio di affidabilità globale',

    // Coupons Directory
    coupons_eyebrow: 'Centro Offerte',
    coupons_title: 'Codici Promo e Coupon Verificati',
    coupons_desc: 'Sfoglia codici sconto testati, coupon e offerte lampo verificati e attivi oggi.',
    search_coupons_placeholder: 'Cerca per negozio o codice (es. Nike, SCONTO20)...',
    all_offers: 'Tutte le offerte',
    filter_codes: 'Codici Promo',
    filter_deals: 'Saldi e Offerte',
    filter_free_shipping: 'Spedizione Gratuita',
    sort_by: 'Ordina per',
    sort_popular: 'Più popolari',
    sort_newest: 'Più recenti',
    sort_expiring: 'In scadenza',
    no_coupons_found: 'Nessun coupon trovato per i tuoi criteri',

    // Categories Hub
    categories_eyebrow: 'Hub Categorie',
    categories_title: 'Tutte le Categorie di Shopping',
    categories_desc: 'Scopri sconti, codici promozionali e offerte organizzati per reparto.',

    // Blogs Hub
    blogs_eyebrow: 'Editoriale Shopping',
    blogs_title: 'Guide al Risparmio, Recensioni e Trucchi',
    blogs_desc: 'Consigli per lo shopping da esperti, guide all’acquisto e strategie per risparmiare.',
    all_articles: 'Tutti gli articoli',
    featured_guide: 'Guida in evidenza',
    read_full_guide: 'Leggi la guida completa',

    // Modals
    modal_coupon_code: 'Copia questo codice e incollalo alla cassa del negozio.',
    modal_copied: 'Copiato negli appunti!',
    modal_visit_store: 'Continua al negozio',
    modal_feedback_prompt: 'Questo coupon ha funzionato?',
    modal_feedback_yes: 'Sì, ha funzionato!',
    modal_feedback_no: 'Scaduto o non valido',
    modal_thanks: 'Grazie per il tuo feedback!',
    search_modal_placeholder: 'Cerca negozi, offerte, codici promo...',
    search_modal_trending: 'Ricerche di tendenza',
    search_modal_stores: 'Negozi',
    search_modal_coupons: 'Coupon',
    search_modal_categories: 'Categorie',
    search_modal_guides: 'Guide',
    search_modal_no_results: 'Nessun risultato trovato per',

    // Newsletter
    newsletter_badge: 'RESTA AGGIORNATO',
    newsletter_title: 'Ricevi offerte verificate ogni settimana',
    newsletter_desc: 'Unisciti a oltre 50.000 acquirenti intelligenti e ricevi la nostra rassegna settimanale di codici promozionali testati e sconti.',
    newsletter_placeholder: 'Inserisci il tuo indirizzo email...',
    newsletter_btn: 'Iscriviti Gratis',
    newsletter_privacy: 'Zero spam. Annulla l’iscrizione in 1 clic in qualsiasi momento.',
    newsletter_success: '🎉 Grazie per esserti iscritto! La tua prima selezione settimanale di sconti è in arrivo.',
    subscribing: 'Iscrizione in corso...',

    // Footer
    footer_tagline: 'La tua destinazione principale per codici sconto verificati, saldi quotidiani e risparmi esclusivi.',
    footer_quick_links: 'Link Rapidi',
    footer_categories: 'Categorie',
    footer_stores: 'Negozi Popolari',
    footer_legal: 'Note Legali e Info',
    footer_terms: 'Termini e Condizioni',
    footer_privacy: 'Informativa sulla Privacy',
    footer_rights: 'Tutti i diritti riservati.',
    footer_trust_1_title: '100% Testato Quotidianamente',
    footer_trust_1_desc: 'Ogni codice promozionale viene verificato prima della pubblicazione per garantire un vero risparmio.',
    footer_trust_2_title: 'Gratuito e Senza Account',
    footer_trust_2_desc: 'Accesso istantaneo con 1 clic ai codici sconto senza alcuna registrazione.',
    footer_trust_3_title: 'Trasparenza Affiliazioni',
    footer_trust_3_desc: 'Collaboriamo con marchi verificati e potremmo guadagnare una commissione sugli acquisti idonei.',
    footer_promo_codes: 'Codici Sconto',
    footer_free_shipping: 'Spedizione Gratuita',
    footer_nike_codes: 'Codici Promo Nike',
    footer_amazon_deals: 'Offerte Amazon',
    footer_sephora_coupons: 'Coupon Sephora',
  },

  nl: {
    // Nav & Header
    nav_coupons: 'Kortingscodes',
    nav_stores: 'Winkels',
    nav_categories: 'Categorieën',
    nav_guides: 'Gidsen',
    nav_reviews: 'Reviews',
    nav_about: 'Over ons',
    nav_contact: 'Contact',
    nav_admin: 'Admin',
    search_placeholder: 'Zoek aanbiedingen...',
    select_region: 'Kies Regio',
    breadcrumbs_home: 'Home',

    // Hero
    hero_badge: 'GETESTE KORTINGSCODES & DAGELIJKSE DEALS',
    hero_title_1: 'Ontdek',
    hero_title_2: 'Slimmere Besparingen.',
    hero_title_3: 'Elke Dag.',
    hero_desc: 'Toegang tot 50.000+ handmatig geteste kortingscodes, waardebonnen en exclusieve kortingen bij 500+ topwinkels.',
    hero_search_input: 'Zoek winkels, merken of kortingscodes...',
    hero_btn_find: 'Vind Deals',
    hero_trending: 'Populair:',
    trending_nike: 'Nike 20% Korting',
    trending_amazon: 'Amazon Kortingscodes',
    trending_sephora: 'Sephora Beauty Deals',
    trending_apple: 'Apple Studenten Korting',
    trending_asos: 'ASOS Zomersale',
    hero_floating_1: '25% KORTING op alles',
    hero_floating_2: '40% KORTING',
    hero_floating_3: '15% KORTING + Gratis Verzending',
    pill_sitewide: 'Op alles',
    stat_verified_coupons: 'Geteste Kortingen',
    stat_promo_codes: 'Kortingscodes',
    stat_top_brands: 'Top Merken',
    stat_user_rating: 'Gebruikersscore',
    trusted_by_shoppers: 'VERTROUWD DOOR SHOPPERS VAN TOPMERKEN',
    more_brands: '+500 meer',

    // Section Titles & Badges
    section_highlights_badge: 'Hoogtepunten van vandaag',
    section_featured_deals_title: 'Uitgelichte deals & Exclusieve kortingscodes',
    view_all_offers: 'Bekijk alle aanbiedingen',
    section_partner_retailers: 'Partnerwinkels',
    section_top_stores_title: 'Topwinkels met geteste kortingscodes',
    all_stores_directory: 'Alle winkels overzicht',
    section_browse_departments: 'Blader door categorieën',
    section_popular_categories_title: 'Populaire winkelcategorieën',
    all_categories: 'Alle categorieën',
    stores_available: 'Winkels beschikbaar',
    section_editorial_insights: 'Redactionele inzichten',
    section_smart_guides_title: 'Slimme winkelgidsen & bespaartips',
    read_all_guides: 'Lees alle gidsen',
    read_guide: 'Lees gids',
    min_read: 'min leestijd',

    section_featured_coupons: 'Top Geteste Kortingscodes & Aanbiedingen',
    section_featured_coupons_sub: 'Handmatig geverifieerde actiecodes waarmee u direct het meest bespaart',
    section_popular_stores: 'Populaire Winkels & Topmerken',
    section_popular_stores_sub: 'Bespaar direct bij de populairste winkels van vandaag',
    section_categories: 'Deals per Populaire Categorie',
    section_categories_sub: 'Vind geteste kortingscodes voor al uw online aankopen',
    section_guides: 'Deskundige Bespaargidsen & Tips',
    section_guides_sub: 'Bewezen winkelstrategieën, geheime kortingstrucs en winkeladvies',
    section_reviews: 'Gedetailleerde Winkelreviews & Betrouwbaarheid',
    section_reviews_sub: 'Echte winkelervaringen, retourbeleid en kortingszekerheid',

    // Buttons, Badges & Labels
    btn_get_code: 'Toon code',
    btn_get_deal: 'Pak deal',
    btn_shop_now: 'Shop nu',
    btn_view_all: 'Bekijk alles',
    btn_visit_store: 'Bezoek winkel',
    badge_verified: 'Vandaag getest',
    badge_staff_pick: 'Keuze van redactie',
    badge_exclusive: 'Exclusief',
    badge_expiring: 'Verloopt binnenkort',
    uses_today: 'keer gebruikt vandaag',
    success_rate: 'Succes',
    code_copied: 'Code gekopieerd!',
    copy_code: 'Kopieer code',
    promo_code_badge: 'Kortingscode',
    direct_deal_badge: 'Directe Deal',
    claim_offer: 'Claim deal',
    automatic_at_checkout: 'Automatisch bij afrekenen',
    available_deals: 'Deals',

    // Stores Directory
    stores_directory_eyebrow: 'Winkeloverzicht',
    stores_directory_title: 'Alle partnerwinkels & merken',
    stores_directory_desc: 'Ontdek geverifieerde kortingscodes, seizoensaanbiedingen en deals van topwinkels wereldwijd.',
    search_stores_placeholder: 'Zoek winkels op merknaam...',
    top_featured_brands: 'Uitgelichte topmerken',
    az_directory: 'Alfabetisch A-Z overzicht',
    no_stores_found: 'Geen winkels gevonden voor uw zoekopdracht',
    clear_filters: 'Filters wissen',
    coupons_deals_available: 'Kortingscodes & deals beschikbaar',

    // Reviews Hub & Cards
    reviews_eyebrow: 'Redactionele beoordelingen',
    reviews_title: 'Winkel- & Merkbeoordelingen',
    reviews_desc: 'Lees onafhankelijke winkelbeoordelingen, scores, voor- en nadelen en retourvoorwaarden voordat u bestelt.',
    no_reviews_yet: 'Nog geen beoordelingen gepubliceerd',
    no_reviews_desc: 'Ons team stelt momenteel nieuwe winkelreviews op.',
    review_card_review: 'Beoordeling',
    tested_highlights: 'Geteste hoogtepunten',
    by_author: 'Door',
    read_review: 'Lees review',
    pros: 'Voordelen & Pluspunten',
    cons: 'Nadelen & Beperkingen',
    verdict: 'Ons Oordeel',
    overall_score: 'Totale betrouwbaarheidsscore',

    // Coupons Directory
    coupons_eyebrow: 'Korting Centrum',
    coupons_title: 'Geteste Kortingscodes & Deals',
    coupons_desc: 'Bekijk geteste kortingscodes, waardebonnen en dagaanbiedingen die vandaag werken.',
    search_coupons_placeholder: 'Zoek op winkel of code (bijv. Nike, ACTIE20)...',
    all_offers: 'Alle aanbiedingen',
    filter_codes: 'Kortingscodes',
    filter_deals: 'Sales & Deals',
    filter_free_shipping: 'Gratis Verzending',
    sort_by: 'Sorteren op',
    sort_popular: 'Meest populair',
    sort_newest: 'Nieuwste',
    sort_expiring: 'Binnenkort verlopen',
    no_coupons_found: 'Geen kortingscodes gevonden voor uw criteria',

    // Categories Hub
    categories_eyebrow: 'Categorie Overzicht',
    categories_title: 'Alle Winkelcategorieën',
    categories_desc: 'Ontdek kortingen, actiecodes en sales gesorteerd per afdeling.',

    // Blogs Hub
    blogs_eyebrow: 'Winkel Redactie',
    blogs_title: 'Bespaargidsen, Reviews & Tips',
    blogs_desc: 'Winkeltips van experts, koopgidsen en beproefde strategieën om te besparen bij het afrekenen.',
    all_articles: 'Alle artikelen',
    featured_guide: 'Uitgelichte gids',
    read_full_guide: 'Lees volledige gids',

    // Modals
    modal_coupon_code: 'Kopieer deze code en plak hem bij het afrekenen in de webshop.',
    modal_copied: 'Gekopieerd naar klembord!',
    modal_visit_store: 'Ga door naar de winkel',
    modal_feedback_prompt: 'Werkte deze kortingscode?',
    modal_feedback_yes: 'Ja, werkte!',
    modal_feedback_no: 'Verlopen of ongeldig',
    modal_thanks: 'Bedankt voor uw feedback!',
    search_modal_placeholder: 'Zoek winkels, deals, actiecodes...',
    search_modal_trending: 'Populaire zoekopdrachten',
    search_modal_stores: 'Winkels',
    search_modal_coupons: 'Kortingscodes',
    search_modal_categories: 'Categorieën',
    search_modal_guides: 'Gidsen',
    search_modal_no_results: 'Geen resultaten gevonden voor',

    // Newsletter
    newsletter_badge: 'BLIJF OP DE HOOGTE',
    newsletter_title: 'Ontvang wekelijks geteste kortingen',
    newsletter_desc: 'Meld u aan met 50.000+ slimme shoppers en ontvang onze wekelijkse selectie van geteste kortingscodes en prijsdalingen.',
    newsletter_placeholder: 'Vul uw e-mailadres in...',
    newsletter_btn: 'Gratis aanmelden',
    newsletter_privacy: 'Geen spam. Uitschrijven kan op elk moment met 1 klik.',
    newsletter_success: '🎉 Bedankt voor uw aanmelding! Uw eerste wekelijkse overzicht van aanbiedingen is onderweg.',
    subscribing: 'Bezig met aanmelden...',

    // Footer
    footer_tagline: 'Uw betrouwbare bron voor geteste kortingscodes, dagelijkse deals en exclusieve aanbiedingen.',
    footer_quick_links: 'Snelle Links',
    footer_categories: 'Categorieën',
    footer_stores: 'Populaire Winkels',
    footer_legal: 'Juridisch & Info',
    footer_terms: 'Algemene Voorwaarden',
    footer_privacy: 'Privacybeleid',
    footer_rights: 'Alle rechten voorbehouden.',
    footer_trust_1_title: '100% Dagelijks Getest',
    footer_trust_1_desc: 'Elke kortingscode wordt vooraf getest om echte besparingen te garanderen.',
    footer_trust_2_title: 'Gratis & Zonder Registratie',
    footer_trust_2_desc: 'Direct met 1 klik toegang tot actiecodes zonder aanmeldingsverplichting.',
    footer_trust_3_title: 'Affiliate Transparantie',
    footer_trust_3_desc: 'Wij werken samen met betrouwbare winkels en kunnen een commissie ontvangen.',
    footer_promo_codes: 'Kortingscodes',
    footer_free_shipping: 'Gratis Verzending',
    footer_nike_codes: 'Nike Kortingscodes',
    footer_amazon_deals: 'Amazon Aanbiedingen',
    footer_sephora_coupons: 'Sephora Beauty Coupons',
  },
};

const KEY_ALIASES: Record<string, string> = {
  reviews_directory_eyebrow: 'reviews_eyebrow',
  reviews_directory_title: 'reviews_title',
  reviews_directory_desc: 'reviews_desc',
  no_reviews_title: 'no_reviews_yet',
  review_suffix: 'review_card_review',
  categories_directory_eyebrow: 'categories_eyebrow',
  categories_directory_title: 'categories_title',
  categories_directory_desc: 'categories_desc',
  blogs_directory_eyebrow: 'blogs_eyebrow',
  blogs_directory_title: 'blogs_title',
  blogs_directory_desc: 'blogs_desc',
  coupons_directory_eyebrow: 'coupons_eyebrow',
  coupons_directory_title: 'coupons_title',
  coupons_directory_desc: 'coupons_desc',
  stores_count_suffix: 'stores_available',
  stat_verified: 'stat_verified_coupons',
};

export function getTranslation(locale: string, key: string, fallback?: string): string {
  const loc = (locale as Locale) in TRANSLATIONS ? (locale as Locale) : 'en';
  const canonicalKey = KEY_ALIASES[key] || key;
  return (
    TRANSLATIONS[loc]?.[canonicalKey] ||
    TRANSLATIONS[loc]?.[key] ||
    TRANSLATIONS.en[canonicalKey] ||
    TRANSLATIONS.en[key] ||
    fallback ||
    key
  );
}

// Localized deal titles dictionary
const LOCALIZED_DEAL_TITLES: Record<string, Record<Locale, string>> = {
  '71% OFF 2-Year Plan + 3 Extra Months Free': {
    en: '71% OFF 2-Year Plan + 3 Extra Months Free',
    de: '71% Rabatt auf den 2-Jahres-Plan + 3 Gratismonate',
    fr: '71% de réduction sur le forfait 2 ans + 3 mois offerts',
    it: '71% di sconto sul piano di 2 anni + 3 mesi extra gratis',
    nl: '71% korting op 2-jarig abonnement + 3 extra maanden gratis',
  },
  'Free 8-Piece Luxury Skincare Sample Bag with $45+ Order': {
    en: 'Free 8-Piece Luxury Skincare Sample Bag with $45+ Order',
    de: 'Kostenlose 8-teilige Luxus-Hautpflegetasche ab 45$ Einkaufswert',
    fr: "Trousse de 8 échantillons de soins de luxe offerte dès 45$ d'achat",
    it: 'Borsa di 8 campioni di cura della pelle di lusso in omaggio con 45$+',
    nl: 'Gratis 8-delige luxe huidverzorgingsset bij besteding vanaf 45$',
  },
  '$100 OFF Select Laptops & MacBooks': {
    en: '$100 OFF Select Laptops & MacBooks',
    de: '100$ Rabatt auf ausgewählte Laptops & MacBooks',
    fr: '100$ de réduction sur une sélection de PC portables & MacBooks',
    it: '100$ di sconto su laptop e MacBook selezionati',
    nl: '100$ korting op geselecteerde laptops & MacBooks',
  },
  '20% OFF First Order with ASOS App': {
    en: '20% OFF First Order with ASOS App',
    de: '20% Rabatt auf die erste Bestellung mit der ASOS-App',
    fr: '20% de réduction sur la 1ère commande avec l’application ASOS',
    it: '20% di sconto sul primo ordine con l’app ASOS',
    nl: '20% korting op de eerste bestelling met de ASOS-app',
  },
  '$15 OFF First Amazon App Order of $30+': {
    en: '$15 OFF First Amazon App Order of $30+',
    de: '15$ Rabatt auf die erste Amazon-App-Bestellung ab 30$',
    fr: '15$ de réduction dès 30$ d’achat sur la 1ère commande Amazon App',
    it: '15$ di sconto sul primo ordine Amazon App da 30$+',
    nl: '15$ korting op de eerste Amazon App bestelling vanaf 30$',
  },
  'Up to 50% OFF Daily Lightning Deals': {
    en: 'Up to 50% OFF Daily Lightning Deals',
    de: 'Bis zu 50% Rabatt auf tägliche Blitzangebote',
    fr: "Jusqu'à 50% de réduction sur les ventes flash du jour",
    it: 'Fino al 50% di sconto sulle offerte lampo del giorno',
    nl: 'Tot 50% korting op dagelijkse bliksemdeals',
  },
  '30% OFF Summer Styles & Sneakers': {
    en: '30% OFF Summer Styles & Sneakers',
    de: '30% Rabatt auf Sommer-Trends & Sneaker',
    fr: "30% de réduction sur les styles d'été et les baskets",
    it: '30% di sconto su stili estivi e sneaker',
    nl: '30% korting op zomerse stijlen & sneakers',
  },
  'Up to 50% OFF Daily Deals & Best Sellers': {
    en: 'Up to 50% OFF Daily Deals & Best Sellers',
    de: 'Bis zu 50% Rabatt auf Tagesangebote & Bestseller',
    fr: "Jusqu'à 50% de réduction sur les offres du jour et best-sellers",
    it: 'Fino al 50% di sconto su offerte del giorno e bestseller',
    nl: 'Tot 50% korting op dagaanbiedingen & bestsellers',
  },
  '40% OFF Sitewide Friends & Family Sale': {
    en: '40% OFF Sitewide Friends & Family Sale',
    de: '40% Rabatt auf alles — Freunde & Familie Sale',
    fr: '40% de réduction sur tout le site — Vente Privée',
    it: '40% di sconto su tutto il sito — Saldi Amici & Famiglia',
    nl: '40% korting op de hele site — Vrienden & Familie Sale',
  },
};

export function getLocalizedDealTitle(title: string, locale: Locale): string {
  if (!title) return '';
  const normalized = title.replace(/[’']/g, "'").toLowerCase().trim();
  for (const [key, mapping] of Object.entries(LOCALIZED_DEAL_TITLES)) {
    if (key.replace(/[’']/g, "'").toLowerCase().trim() === normalized) {
      return mapping[locale] || mapping.en || title;
    }
  }
  return title;
}

// Localized discount badges
const LOCALIZED_DISCOUNTS: Record<string, Record<Locale, string>> = {
  'Free Gift': {
    en: 'Free Gift',
    de: 'Gratis-Geschenk',
    fr: 'Cadeau Offert',
    it: 'Regalo Gratis',
    nl: 'Gratis Cadeau',
  },
  'Up to 50% OFF': {
    en: 'Up to 50% OFF',
    de: 'Bis zu 50% Rabatt',
    fr: "Jusqu'à 50% Offert",
    it: 'Fino al 50% Sconto',
    nl: 'Tot 50% Korting',
  },
  '71% OFF': {
    en: '71% OFF',
    de: '71% Rabatt',
    fr: '71% de Réduction',
    it: '71% di Sconto',
    nl: '71% Korting',
  },
  '$100 OFF': {
    en: '$100 OFF',
    de: '100$ Rabatt',
    fr: '100$ de Réduction',
    it: '100$ di Sconto',
    nl: '100$ Korting',
  },
  '20% OFF': {
    en: '20% OFF',
    de: '20% Rabatt',
    fr: '20% de Réduction',
    it: '20% di Sconto',
    nl: '20% Korting',
  },
  '$15 OFF': {
    en: '$15 OFF',
    de: '15$ Rabatt',
    fr: '15$ de Réduction',
    it: '15$ di Sconto',
    nl: '15$ Korting',
  },
  '30% OFF': {
    en: '30% OFF',
    de: '30% Rabatt',
    fr: '30% de Réduction',
    it: '30% di Sconto',
    nl: '30% Korting',
  },
  '40% OFF': {
    en: '40% OFF',
    de: '40% Rabatt',
    fr: '40% de Réduction',
    it: '40% di Sconto',
    nl: '40% Korting',
  },
  'Free Shipping': {
    en: 'Free Shipping',
    de: 'Gratis Versand',
    fr: 'Livraison Gratuite',
    it: 'Spedizione Gratuita',
    nl: 'Gratis Verzending',
  },
};

export function getLocalizedDiscountValue(discount: string, locale: Locale): string {
  if (!discount) return '';
  const trimmed = discount.trim();
  if (LOCALIZED_DISCOUNTS[trimmed] && LOCALIZED_DISCOUNTS[trimmed][locale]) {
    return LOCALIZED_DISCOUNTS[trimmed][locale];
  }
  return discount;
}

// Localized category names
const LOCALIZED_CATEGORIES: Record<string, Record<Locale, string>> = {
  'Fashion & Apparel': {
    en: 'Fashion & Apparel',
    de: 'Mode & Kleidung',
    fr: 'Mode & Vêtements',
    it: 'Moda & Abbigliamento',
    nl: 'Mode & Kleding',
  },
  'Electronics & Computers': {
    en: 'Electronics & Computers',
    de: 'Elektronik & Computer',
    fr: 'Électronique & Informatique',
    it: 'Elettronica & Computer',
    nl: 'Elektronica & Computers',
  },
  'Beauty & Skincare': {
    en: 'Beauty & Skincare',
    de: 'Schönheit & Hautpflege',
    fr: 'Beauté & Soins',
    it: 'Bellezza & Cura della Pelle',
    nl: 'Schoonheid & Huidverzorging',
  },
  'Home & Garden': {
    en: 'Home & Garden',
    de: 'Haus & Garten',
    fr: 'Maison & Jardin',
    it: 'Casa & Giardino',
    nl: 'Huis & Tuin',
  },
  'Travel & Flights': {
    en: 'Travel & Flights',
    de: 'Reisen & Flüge',
    fr: 'Voyages & Vols',
    it: 'Viaggi & Voli',
    nl: 'Reizen & Vluchten',
  },
  'Sports & Outdoors': {
    en: 'Sports & Outdoors',
    de: 'Sport & Outdoor',
    fr: 'Sports & Plein Air',
    it: 'Sport & Tempo Libero',
    nl: 'Sport & Buitenactiviteiten',
  },
  'Food & Beverages': {
    en: 'Food & Beverages',
    de: 'Essen & Gastronomie',
    fr: 'Alimentation & Boissons',
    it: 'Cibo & Bevande',
    nl: 'Eten & Drinken',
  },
  'Software & Tech': {
    en: 'Software & Tech',
    de: 'Software & Technik',
    fr: 'Logiciels & High-Tech',
    it: 'Software & Tecnologia',
    nl: 'Software & Technologie',
  },
  // Blog categories
  'Shopping Guides': {
    en: 'Shopping Guides',
    de: 'Einkaufsratgeber',
    fr: "Guides d'achat",
    it: 'Guide allo shopping',
    nl: 'Winkelgidsen',
  },
  'Deals & Roundups': {
    en: 'Deals & Roundups',
    de: 'Deals & Übersichten',
    fr: 'Bons plans & Sélections',
    it: 'Offerte & Riassunti',
    nl: 'Deals & Overzichten',
  },
  'Money Saving Tips': {
    en: 'Money Saving Tips',
    de: 'Spartipps & Tricks',
    fr: 'Astuces d’économie',
    it: 'Consigli di risparmio',
    nl: 'Bespaartips',
  },
};

export function getLocalizedCategoryName(name: string, locale: Locale): string {
  if (!name) return '';
  const trimmed = name.toLowerCase().trim();
  for (const [key, mapping] of Object.entries(LOCALIZED_CATEGORIES)) {
    if (key.toLowerCase().trim() === trimmed) {
      return mapping[locale] || mapping.en || name;
    }
  }
  return name;
}

// Localized category descriptions
const LOCALIZED_CATEGORY_DESCRIPTIONS: Record<string, Record<Locale, string>> = {
  fashion: {
    en: 'Discounts on clothing, shoes, and designer apparel.',
    de: 'Rabatte auf Kleidung, Schuhe und Designer-Mode.',
    fr: 'Réductions sur les vêtements, chaussures et prêt-à-porter.',
    it: 'Sconti su abbigliamento, scarpe e moda firmata.',
    nl: 'Kortingen op kleding, schoenen en merkkleding.',
  },
  electronics: {
    en: 'Laptops, smartphones, TVs, and gaming gear promos.',
    de: 'Aktionen für Laptops, Smartphones, TVs und Gaming-Equipment.',
    fr: 'Promos sur les PC portables, smartphones, téléviseurs et jeux vidéo.',
    it: 'Promozioni su laptop, smartphone, TV e accessori da gaming.',
    nl: 'Aanbiedingen voor laptops, smartphones, tv’s en gaming-apparatuur.',
  },
  beauty: {
    en: 'Cosmetics, skincare, perfumes, and haircare coupons.',
    de: 'Gutscheine für Kosmetik, Hautpflege, Parfums und Haarpflege.',
    fr: 'Coupons sur les cosmétiques, soins de la peau, parfums et cheveux.',
    it: 'Coupon per cosmetici, cura della pelle, profumi e capelli.',
    nl: 'Kortingsbonnen voor cosmetica, huidverzorging, parfums en haarverzorging.',
  },
  'home-garden': {
    en: 'Furniture, kitchen appliances, and home decor sales.',
    de: 'Angebote für Möbel, Küchengeräte und Wohndekoration.',
    fr: 'Promotions sur les meubles, électroménager et décoration intérieure.',
    it: 'Saldi su mobili, elettrodomestici per la cucina e arredamento.',
    nl: 'Aanbiedingen voor meubels, keukenapparatuur en woondecoratie.',
  },
  travel: {
    en: 'Hotels, airline tickets, car rentals, and vacation deals.',
    de: 'Deals für Hotels, Flugtickets, Mietwagen und Pauschalreisen.',
    fr: 'Bons plans hôtels, billets d’avion, locations de voiture et séjours.',
    it: 'Offerte per hotel, biglietti aerei, noleggio auto e vacanze.',
    nl: 'Deals voor hotels, vliegtickets, autoverhuur en vakanties.',
  },
  sports: {
    en: 'Fitness gear, activewear, camping, and outdoor equipment.',
    de: 'Fitnessgeräte, Sportbekleidung, Camping- und Outdoor-Ausrüstung.',
    fr: 'Équipement de fitness, vêtements de sport, camping et plein air.',
    it: 'Attrezzatura fitness, abbigliamento sportivo, campeggio e outdoor.',
    nl: 'Fitnessapparatuur, sportkleding, camping- en outdoorartikelen.',
  },
  'food-dining': {
    en: 'Food delivery coupons, meal kits, and dining deals.',
    de: 'Gutscheine für Lieferdienste, Kochboxen und Restaurants.',
    fr: 'Codes promo livraison de repas, paniers repas et restaurants.',
    it: 'Coupon per consegna a domicilio, kit pasto e ristoranti.',
    nl: 'Kortingscodes voor maaltijdbezorging, maaltijdboxen en restaurants.',
  },
  software: {
    en: 'VPNs, antivirus, cloud storage, and SaaS subscription deals.',
    de: 'Deals für VPNs, Antivirus, Cloud-Speicher und SaaS-Abonnements.',
    fr: 'Promos sur les VPN, antivirus, stockage cloud et logiciels SaaS.',
    it: 'Offerte per VPN, antivirus, cloud storage e abbonamenti SaaS.',
    nl: 'Deals voor VPN’s, antivirus, cloudopslag en SaaS-abonnementen.',
  },
};

export function getLocalizedCategoryDescription(slug: string, locale: Locale): string {
  if (!slug) return '';
  const trimmed = slug.toLowerCase().trim();
  if (LOCALIZED_CATEGORY_DESCRIPTIONS[trimmed]) {
    return LOCALIZED_CATEGORY_DESCRIPTIONS[trimmed][locale] || LOCALIZED_CATEGORY_DESCRIPTIONS[trimmed].en || '';
  }
  return '';
}

// Localized blog titles
const LOCALIZED_BLOG_TITLES: Record<string, Record<Locale, string>> = {
  "Best Summer Sales & Coupon Stacking Strategies You Shouldn't Miss": {
    en: "Best Summer Sales & Coupon Stacking Strategies You Shouldn't Miss",
    de: 'Beste Sommerschlussverkäufe & Gutschein-Stacking-Strategien',
    fr: 'Meilleurs soldes d’été et astuces pour cumuler les codes promo',
    it: 'I migliori saldi estivi e strategie per cumulare coupon',
    nl: 'Beste zomersolden en strategieën om kortingscodes te combineren',
  },
  '10 Ways to Save More Online Shopping in 2026': {
    en: '10 Ways to Save More Online Shopping in 2026',
    de: '10 Wege, um 2026 beim Online-Shopping mehr zu sparen',
    fr: '10 façons d’économiser plus lors de vos achats en ligne en 2026',
    it: '10 modi per risparmiare di più sullo shopping online nel 2026',
    nl: '10 manieren om meer te besparen bij online winkelen in 2026',
  },
};

export function getLocalizedBlogTitle(title: string, locale: Locale): string {
  if (!title) return '';
  const normalized = title.replace(/[’']/g, "'").toLowerCase().trim();
  for (const [key, mapping] of Object.entries(LOCALIZED_BLOG_TITLES)) {
    if (key.replace(/[’']/g, "'").toLowerCase().trim() === normalized) {
      return mapping[locale] || mapping.en || title;
    }
  }
  return title;
}

// Localized blog excerpts
const LOCALIZED_BLOG_EXCERPTS: Record<string, Record<Locale, string>> = {
  'A comprehensive roundup of this season’s biggest price drops across fashion, electronics, and travel.': {
    en: 'A comprehensive roundup of this season’s biggest price drops across fashion, electronics, and travel.',
    de: 'Eine umfassende Übersicht der größten Preissenkungen dieser Saison in den Bereichen Mode, Elektronik und Reisen.',
    fr: 'Un récapitulatif complet des plus grosses baisses de prix de la saison en mode, électronique et voyage.',
    it: 'Una panoramica completa dei maggiori cali di prezzo di questa stagione su moda, elettronica e viaggi.',
    nl: 'Een compleet overzicht van de grootste prijsdalingen van dit seizoen op het gebied van mode, elektronica en reizen.',
  },
  'Discover insider strategies to stack promo codes, avoid hidden checkout fees, and unlock exclusive discounts.': {
    en: 'Discover insider strategies to stack promo codes, avoid hidden checkout fees, and unlock exclusive discounts.',
    de: 'Entdecken Sie Insider-Strategien, um Gutscheincodes zu kombinieren, versteckte Gebühren zu vermeiden und exklusive Rabatte freizuschalten.',
    fr: 'Découvrez des astuces d’initiés pour cumuler les codes promo, éviter les frais cachés et débloquer des remises exclusives.',
    it: 'Scopri strategie da esperti per cumulare codici promozionali, evitare costi nascosti e sbloccare sconti esclusivi.',
    nl: 'Ontdek insiderstrategieën om kortingscodes te combineren, verborgen kosten te vermijden en exclusieve kortingen te ontgrendelen.',
  },
};

export function getLocalizedBlogExcerpt(excerpt: string | null | undefined, locale: Locale): string {
  if (!excerpt) return '';
  const normalized = excerpt.replace(/[’']/g, "'").toLowerCase().trim();
  for (const [key, mapping] of Object.entries(LOCALIZED_BLOG_EXCERPTS)) {
    if (key.replace(/[’']/g, "'").toLowerCase().trim() === normalized) {
      return mapping[locale] || mapping.en || excerpt;
    }
  }
  return excerpt;
}

// Localized reviews titles and summaries
const LOCALIZED_REVIEWS: Record<string, { title: Record<Locale, string>; summary: Record<Locale, string> }> = {
  amazon: {
    title: {
      en: 'Amazon Online Shopping Review: Maximizing Daily Deals',
      de: 'Amazon Online-Shopping Bewertung: Tagesdeals optimal nutzen',
      fr: 'Avis Shopping Amazon : Maximiser les Ventes Flash',
      it: 'Recensione Shopping Amazon: Massimizzare le Offerte Lampo',
      nl: 'Amazon Online Shopping Review: Dagelijkse Deals Benutten',
    },
    summary: {
      en: 'Unbeatable logistics, gigantic catalog, and massive daily Lightning Deal discounts.',
      de: 'Unschlagbare Logistik, riesiges Sortiment und enorme tägliche Rabatte bei Blitzangeboten.',
      fr: 'Logistique imbattable, catalogue gigantesque et remises massives sur les ventes flash quotidiennes.',
      it: 'Logistica imbattibile, catalogo sterminato e grandi sconti giornalieri con le offerte lampo.',
      nl: 'Onverslaanbare logistiek, enorm assortiment en flinke dagelijkse kortingen op bliksemdeals.',
    },
  },
  nike: {
    title: {
      en: 'Nike Store Review 2026: Is It Worth Shopping Directly?',
      de: 'Nike Store Bewertung 2026: Lohnt sich der Direkteinkauf?',
      fr: 'Avis Boutique Nike 2026 : Vaut-il le coup d’acheter en direct ?',
      it: 'Recensione Nike Store 2026: Conviene acquistare direttamente?',
      nl: 'Nike Store Review 2026: Is direct kopen de moeite waard?',
    },
    summary: {
      en: 'Nike is unmatched for build quality, cutting-edge running tech, and generous member perks.',
      de: 'Nike ist unübertroffen bei Verarbeitungsqualität, modernster Lauf-Technologie und großzügigen Mitgliedervorteilen.',
      fr: 'Nike est inégalé en termes de qualité de fabrication, de technologie de pointe et d’avantages membres.',
      it: 'Nike non ha rivali per qualità costruttiva, tecnologie di corsa all’avanguardia e vantaggi per i membri.',
      nl: 'Nike is ongeëvenaard in bouwkwaliteit, geavanceerde hardlooptechnologie en royale ledenvoordelen.',
    },
  },
};

export function getLocalizedReviewTitle(storeSlug: string, fallback: string, locale: Locale): string {
  const item = LOCALIZED_REVIEWS[storeSlug.toLowerCase().trim()];
  if (item && item.title[locale]) {
    return item.title[locale];
  }
  return fallback;
}

export function getLocalizedReviewSummary(storeSlug: string, fallback: string | null | undefined, locale: Locale): string {
  const item = LOCALIZED_REVIEWS[storeSlug.toLowerCase().trim()];
  if (item && item.summary[locale]) {
    return item.summary[locale];
  }
  return fallback || '';
}

// Localized review highlights / pros
const LOCALIZED_HIGHLIGHTS: Record<string, Record<Locale, string>> = {
  'prime 1-day free delivery': {
    en: 'Prime 1-day free delivery',
    de: 'Kostenlose 1-Tages-Lieferung mit Prime',
    fr: 'Livraison gratuite en 1 jour avec Prime',
    it: 'Spedizione gratuita in 1 giorno con Prime',
    nl: 'Gratis 1-daagse levering met Prime',
  },
  'huge catalog covering all categories': {
    en: 'Huge catalog covering all categories',
    de: 'Riesiger Katalog über alle Kategorien',
    fr: 'Catalogue gigantesque couvrant toutes les catégories',
    it: 'Catalogo enorme su tutte le categorie',
    nl: 'Enorm assortiment in alle categorieën',
  },
  'free shipping & returns for nike members': {
    en: 'Free shipping & returns for Nike Members',
    de: 'Kostenloser Versand & Rückversand für Nike-Mitglieder',
    fr: 'Livraison et retours gratuits pour les membres Nike',
    it: 'Spedizione e resi gratuiti per i membri Nike',
    nl: 'Gratis verzending & retourneren voor Nike Members',
  },
  'exclusive early product drops on the snkrs app': {
    en: 'Exclusive early product drops on the SNKRS app',
    de: 'Exklusive Vorab-Launches in der SNKRS-App',
    fr: 'Lancements de produits exclusifs en avant-première sur l’application SNKRS',
    it: 'Lanci esclusivi in anteprima sull’app SNKRS',
    nl: 'Exclusieve vroege productlanceringen in de SNKRS-app',
  },
};

export function getLocalizedHighlight(pro: string, locale: Locale): string {
  if (!pro) return '';
  const normalized = pro.toLowerCase().trim();
  if (LOCALIZED_HIGHLIGHTS[normalized]) {
    return LOCALIZED_HIGHLIGHTS[normalized][locale] || pro;
  }
  return pro;
}

// Localized store descriptions
const LOCALIZED_STORE_DESCRIPTIONS: Record<string, Record<Locale, string>> = {
  nike: {
    en: 'World leader in athletic footwear, activewear, and sports equipment.',
    de: 'Weltmarktführer für Sportschuhe, Sportbekleidung und Trainingsausrüstung.',
    fr: 'Leader mondial des chaussures de sport, vêtements de sport et équipements.',
    it: 'Leader mondiale nelle calzature sportive, abbigliamento activewear e attrezzature.',
    nl: 'Wereldleider in sportschoenen, sportkleding en sportuitrusting.',
  },
  amazon: {
    en: 'The biggest online retailer with millions of daily discounts and Lightning Deals.',
    de: 'Der größte Online-Händler mit Millionen täglichen Rabatten und Blitzangeboten.',
    fr: 'Le plus grand détaillant en ligne avec des millions de réductions et ventes flash.',
    it: 'Il più grande rivenditore online con milioni di sconti e offerte lampo giornaliere.',
    nl: 'De grootste online retailer met miljoenen dagelijkse kortingen en bliksemdeals.',
  },
  asos: {
    en: 'Destination for fashion-loving 20-somethings offering 850+ top clothing brands.',
    de: 'Die Modedestination für Trendsetter mit über 850 beliebten Modemarken.',
    fr: 'La destination mode des jeunes avec plus de 850 marques de vêtements tendance.',
    it: 'La destinazione per gli amanti della moda con oltre 850 marchi di tendenza.',
    nl: 'De ultieme modebestemming met meer dan 850 toonaangevende kledingmerken.',
  },
  sephora: {
    en: 'Premier beauty destination with prestige cosmetics, skincare, and fragrance brands.',
    de: 'Erstklassige Beauty-Destination mit renommierten Kosmetik-, Hautpflege- und Duftmarken.',
    fr: 'Destination beauté d’exception proposant cosmétiques prestigieux, soins et parfums.',
    it: 'La destinazione beauty d’eccellenza con cosmetici di prestigio, skincare e fragranze.',
    nl: 'Dé toonaangevende beautybestemming met prestigieuze cosmetica, verzorging en parfums.',
  },
  apple: {
    en: 'Iconic consumer electronics, MacBooks, iPhones, iPads, and digital services.',
    de: 'Ikonische Unterhaltungselektronik, MacBooks, iPhones, iPads und digitale Services.',
    fr: 'Électronique grand public emblématique, MacBooks, iPhones, iPads et services.',
    it: 'Elettronica di consumo iconica, MacBook, iPhone, iPad e servizi digitali.',
    nl: 'Toonaangevende consumentenelektronica, MacBooks, iPhones, iPads en digitale diensten.',
  },
  'best-buy': {
    en: 'Leading technology retailer specializing in TVs, computers, appliances, and smart home.',
    de: 'Führender Technik-Händler für Fernseher, Computer, Haushaltsgeräte und Smart Home.',
    fr: 'Spécialiste de la technologie en téléviseurs, ordinateurs, électroménager et domotique.',
    it: 'Rivenditore leader per TV, computer, elettrodomestici e tecnologia smart home.',
    nl: 'Toonaangevende technologieverkoper gespecialiseerd in tv’s, computers en smart home.',
  },
  'booking.com': {
    en: 'Global travel accommodation platform with millions of hotels, flights, and car rentals.',
    de: 'Globale Reiseplattform mit Millionen Hotels, Flügen und Mietwagenangeboten.',
    fr: 'Plateforme mondiale d’hébergement avec des millions d’hôtels, vols et locations.',
    it: 'Piattaforma di viaggi globale con milioni di hotel, voli e noleggi auto.',
    nl: 'Wereldwijd reisplatform met miljoenen hotels, vluchten en autoverhuur.',
  },
  nordvpn: {
    en: 'Top-tier cybersecurity and VPN provider with high-speed encryption worldwide.',
    de: 'Erstklassiger Cybersicherheits- und VPN-Anbieter mit weltweiter Hochgeschwindigkeits-Verschlüsselung.',
    fr: 'Fournisseur VPN et cybersécurité de premier plan avec chiffrement ultra-rapide.',
    it: 'Provider leader di cybersecurity e VPN con crittografia ad alta velocità in tutto il mondo.',
    nl: 'Hoogwaardige cyberbeveiligings- en VPN-provider met wereldwijde snelle versleuteling.',
  },
};

export function getLocalizedStoreDescription(storeSlug: string, fallback: string | null | undefined, locale: Locale): string {
  const item = LOCALIZED_STORE_DESCRIPTIONS[storeSlug.toLowerCase().trim()];
  if (item && item[locale]) {
    return item[locale];
  }
  return fallback || '';
}
