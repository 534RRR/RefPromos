export type Locale = 'en' | 'de' | 'fr' | 'it' | 'nl' | 'pl' | 'es';

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
    // About Us
    about_mission_eyebrow: 'Our Mission',
    about_hero_title: 'We Help Millions of Smart Shoppers Save on Every Purchase',
    about_hero_desc: 'RefPromos was founded to eliminate expired discount codes and provide online shoppers with 100% verified, tested coupon codes and real deals.',
    metric_brands_sub: 'Top global brands worldwide',
    metric_codes_sub: 'Tested & updated daily',
    shopper_savings: 'Shopper Savings',
    metric_savings_sub: 'In verified discounts',
    global_regions: 'Global Regions',
    metric_regions_sub: 'US, UK, AU, CA, DE, FR, IT, NL, PL, ES',
    how_it_works_title: 'How RefPromos Works For You',
    pillar_1_title: '1. Manual Testing & Verification',
    pillar_1_desc: 'Our team tests codes at actual checkout before publishing. If a code fails to provide the promised discount or has expired, it is immediately flagged or archived.',
    pillar_2_title: '2. 100% Free & Frictionless',
    pillar_2_desc: 'We believe smart shopping should never require paid subscriptions or complex accounts. You can find, copy, and apply any promo code instantly with 1 click.',
    pillar_3_title: '3. Transparent Partnerships',
    pillar_3_desc: 'When you make a purchase using our affiliate links, we may earn a small commission from the merchant at zero additional cost to you, enabling us to keep the platform free.',
    ready_to_save_title: 'Ready to Start Saving?',
    ready_to_save_desc: 'Explore trending coupons and brand deals right now.',

    // Blog Detail & Navigation
    all_shopping_guides: 'All Shopping Guides',
    mentioned_promo_codes: 'Mentioned Promo Codes & Deals',
    related_guides: 'Related Guides',

    // Contact Us
    contact_eyebrow: 'Support & Inquiries',
    contact_title: "We'd Love to Hear From You",
    contact_desc: 'Have a question about a discount code, want to submit a merchant deal, or explore an affiliate partnership? Send us a message.',
    contact_success_title: 'Message Sent Successfully!',
    contact_success_desc: 'Thank you for reaching out to RefPromos. Our support team typically replies within 24 business hours.',
    send_another: 'Send Another Message',
    your_name: 'Your Name *',
    email_address: 'Email Address *',
    subject_label: 'Subject',
    general_inquiry: 'General Inquiry',
    report_broken: 'Report an Expired / Broken Coupon',
    merchant_partner: 'Merchant / Brand Partnership',
    press_editorial: 'Press / Editorial Inquiry',
    message_label: 'Message *',
    message_placeholder: 'Describe your question or feedback...',
    sending_label: 'Sending...',
    send_message: 'Send Message',
    email_support: 'Direct Mailboxes',
    support_desk: 'Customer & Coupon Support',
    general_inquiries: 'General Inquiries & Information',
    response_times: 'Response Times',
    response_times_desc: 'Our editorial and verification desk operates Monday through Friday, 9:00 AM – 6:00 PM EST. Inquiries are reviewed in the order received.',
    for_merchants: 'For Merchant Partners',
    for_merchants_desc: 'Want your brand listed on RefPromos or wish to provide exclusive discount codes for our community? Contact',

    // Privacy Policy
    privacy_eyebrow: 'Legal & Compliance',
    privacy_title: 'Privacy Policy & Affiliate Disclosure',
    privacy_last_updated: 'Last Updated: August 2026',
    privacy_section_1_title: '1. Introduction & Scope',
    privacy_section_1_desc: 'Welcome to RefPromos (referred to as "we", "us", or "our"). We are committed to safeguarding your privacy and ensuring transparent information practices when you use our website (refpromos.com) and services. This Privacy Policy explains what information we collect, how it is used, and your rights regarding your data.',
    privacy_section_2_title: '2. Affiliate Disclosure (FTC Compliance)',
    privacy_section_2_desc_1: 'RefPromos is a free online deals and coupon resource supported by affiliate partnerships. When you click on coupon codes, deals, or store links on our website and make a subsequent purchase at the merchant\'s site, we may receive an affiliate commission from the retailer at no extra cost to you.',
    privacy_section_2_desc_2: 'Our editorial integrity is paramount: our coupon verification processes, store ratings, and review opinions remain independent of affiliate commissions.',
    privacy_section_3_title: '3. Information We Collect',
    privacy_section_3_desc: 'We adhere to strict data minimization principles:',
    privacy_data_non_personal: 'Non-Personal & Analytical Data: Browser type, operating system, referring URL, country/region preferences, and anonymized click timestamps.',
    privacy_data_ip: 'IP Addresses: Processed through one-way cryptographic SHA-256 hashing to prevent duplicate click fraud without identifying individuals.',
    privacy_data_voluntary: 'Voluntary Submissions: Your name and email address when you voluntarily contact our support desk or subscribe to our newsletter.',
    privacy_section_4_title: '4. Cookies & Tracking Technologies',
    privacy_section_4_desc: 'We use essential cookies and lightweight analytics cookies to remember your selected geographic region (e.g. US, UK, AU, CA, DE, FR, IT, NL, PL, ES) and track outbound merchant referrals. You may disable cookies at any time through your browser settings without losing access to our core website.',
    privacy_section_5_title: '5. Your Privacy Rights & Data Erasure (GDPR & CCPA Compliance)',
    privacy_section_5_desc_1: 'Under global privacy frameworks including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you retain full sovereignty over your personal data:',
    privacy_rights_access: 'Right to Access: Request a copy of any personal data or communications held in our systems.',
    privacy_rights_erasure: 'Right to Erasure (Right to be Forgotten): Request the permanent deletion of your email, account records, and associated click telemetry.',
    privacy_rights_optout: 'Right to Opt-Out: Opt out of marketing digests or telemetry tracking at any time without penalty.',
    privacy_section_5_desc_2: 'To initiate an automated data deletion request, you can submit an erasure request to our privacy endpoint at /api/privacy/delete-data with your registered email, or email our Data Protection Desk directly at info@refpromos.com. Requests are processed within 48 hours.',
    privacy_section_6_title: '6. Data Security & Storage Architecture',
    privacy_section_6_desc: 'We implement defense-in-depth security measures to protect user telemetry and credentials:',
    privacy_sec_hashing: 'Salted Hashing: Raw visitor IP addresses are never saved to disk; they are immediately hashed using SHA-256 with an isolated server-side salt.',
    privacy_sec_passwords: 'Password Encryption: All staff and administrator passwords use bcrypt hashing with a minimum work factor of 10. Plaintext passwords are never logged, stored, or transmitted.',
    privacy_sec_cookies: 'Secure Cookies: Session tokens are stored exclusively in HTTP-only, Secure, SameSite cookies inaccessible to client-side scripts. Client-side local storage contains zero personal identifying information (PII).',
    privacy_section_7_title: '7. Contact Us Regarding Privacy',
    privacy_section_7_desc: 'For questions, data access inquiries, or deletion requests regarding your personal information, contact our Data Protection Officer at:',

    // Terms & Conditions
    terms_eyebrow: 'Terms of Service',
    terms_title: 'Terms and Conditions',
    terms_last_updated: 'Last Updated: August 2026',
    terms_section_1_title: '1. Acceptance of Terms',
    terms_section_1_desc: 'By accessing or browsing RefPromos (the "Website"), you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, please discontinue use of our services immediately.',
    terms_section_2_title: '2. Nature of Deals & Coupon Codes',
    terms_section_2_desc: 'RefPromos publishes promotional coupons, discount codes, and sales aggregated from merchants and brand partners. While we take rigorous measures to test and verify every offer before publication:',
    terms_rule_1: 'Merchant coupon validity, discount percentage, pricing, and expiration dates are subject to change at the sole discretion of the retailer without prior notice.',
    terms_rule_2: 'We do not guarantee that all third-party discounts will be honored by the merchant at all times.',
    terms_rule_3: 'All transactions occur directly on the respective merchant\'s website. RefPromos does not process payments or handle order fulfillment.',
    terms_section_3_title: '3. Intellectual Property Rights',
    terms_section_3_desc: 'All original content, design layouts, logos, and software code on RefPromos are protected by international copyright and trademark laws. Third-party brand names, logos, and trademarks (e.g. Nike, Amazon, Sephora) belong to their respective owners and are used solely for identification and referral purposes.',
    terms_section_4_title: '4. Limitation of Liability',
    terms_section_4_desc: 'To the fullest extent permitted by applicable law, RefPromos and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use any promotional offer listed on the site.',
    terms_section_5_title: '5. Contact Information',
    terms_section_5_desc: 'For legal inquiries or notices regarding these terms, please email:',
    footer_affiliate_disclaimer: 'We may earn a commission from purchases made through links on this site, at no additional cost to you.',
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
    // About Us
    about_mission_eyebrow: 'Unsere Mission',
    about_hero_title: 'Wir helfen Millionen cleverer Käufer, bei jedem Einkauf zu sparen',
    about_hero_desc: 'RefPromos wurde gegründet, um abgelaufene Gutscheincodes abzuschaffen und Online-Käufern zu 100 % geprüfte, funktionierende Rabattcodes und echte Angebote zu bieten.',
    metric_brands_sub: 'Führende globale Marken weltweit',
    metric_codes_sub: 'Täglich geprüft & aktualisiert',
    shopper_savings: 'Kunden-Ersparnisse',
    metric_savings_sub: 'An geprüften Rabatten',
    global_regions: 'Globale Regionen',
    metric_regions_sub: 'US, UK, AU, CA, DE, FR, IT, NL, PL, ES',
    how_it_works_title: 'Wie RefPromos für Sie funktioniert',
    pillar_1_title: '1. Manuelle Prüfung & Verifizierung',
    pillar_1_desc: 'Unser Team testet Gutscheincodes vor der Veröffentlichung direkt an der Kasse. Funktioniert ein Code nicht oder ist abgelaufen, wird er sofort markiert oder archiviert.',
    pillar_2_title: '2. 100% Kostenlos & Ohne Barrieren',
    pillar_2_desc: 'Wir finden, cleveres Sparen sollte weder Abos noch Pflicht-Accounts erfordern. Sie können jeden Rabattcode mit 1 Klick sofort finden, kopieren und einlösen.',
    pillar_3_title: '3. Transparente Partnerschaften',
    pillar_3_desc: 'Wenn Sie über unsere Partnerlinks einkaufen, erhalten wir möglicherweise eine kleine Provision vom Händler – für Sie entstehen dadurch keinerlei Zusatzkosten.',
    ready_to_save_title: 'Bereit, mit dem Sparen zu beginnen?',
    ready_to_save_desc: 'Entdecken Sie jetzt beliebte Gutscheine und Top-Markenangebote.',

    // Blog Detail & Navigation
    all_shopping_guides: 'Alle Einkaufsratgeber',
    mentioned_promo_codes: 'Erwähnte Gutscheincodes & Angebote',
    related_guides: 'Ähnliche Ratgeber',

    // Contact Us
    contact_eyebrow: 'Support & Anfragen',
    contact_title: 'Wir freuen uns auf Ihre Nachricht',
    contact_desc: 'Haben Sie Fragen zu einem Gutscheincode, möchten ein Angebot einreichen oder eine Partnerschaft anfragen? Schreiben Sie uns.',
    contact_success_title: 'Nachricht erfolgreich gesendet!',
    contact_success_desc: 'Vielen Dank für Ihre Nachricht an RefPromos. Unser Team antwortet in der Regel innerhalb von 24 Arbeitsstunden.',
    send_another: 'Weitere Nachricht senden',
    your_name: 'Ihr Name *',
    email_address: 'E-Mail-Adresse *',
    subject_label: 'Betreff',
    general_inquiry: 'Allgemeine Anfrage',
    report_broken: 'Abgelaufenen / Defekten Gutschein melden',
    merchant_partner: 'Händler- & Markenpartnerschaft',
    press_editorial: 'Presse- & Redaktionsanfrage',
    message_label: 'Nachricht *',
    message_placeholder: 'Beschreiben Sie Ihre Frage oder Ihr Feedback...',
    sending_label: 'Wird gesendet...',
    send_message: 'Nachricht senden',
    email_support: 'Offizielle E-Mail-Adressen',
    support_desk: 'Kundenservice & Gutschein-Support',
    general_inquiries: 'Allgemeine Anfragen & Auskünfte',
    response_times: 'Antwortzeiten',
    response_times_desc: 'Unsere Redaktion und Gutscheinprüfung arbeitet Montag bis Freitag, 9:00 – 18:00 Uhr MEZ. Anfragen werden in der Reihenfolge des Eingangs bearbeitet.',
    for_merchants: 'Für Händler & Werbepartner',
    for_merchants_desc: 'Möchten Sie Ihre Marke auf RefPromos listen oder exklusive Gutscheincodes für unsere Community bereitstellen? Kontaktieren Sie',

    // Privacy Policy
    privacy_eyebrow: 'Rechtliches & Compliance',
    privacy_title: 'Datenschutzerklärung & Affiliate-Offenlegung',
    privacy_last_updated: 'Zuletzt aktualisiert: August 2026',
    privacy_section_1_title: '1. Einleitung & Geltungsbereich',
    privacy_section_1_desc: 'Willkommen bei RefPromos (bezeichnet als „wir“, „uns“ oder „unser“). Wir verpflichten uns zum Schutz Ihrer Privatsphäre und zu transparenten Informationspraktiken bei der Nutzung unserer Website (refpromos.com) und unserer Dienste. Diese Datenschutzerklärung erläutert, welche Daten wir erfassen, wie sie verwendet werden und welche Rechte Sie bezüglich Ihrer Daten haben.',
    privacy_section_2_title: '2. Affiliate-Offenlegung (FTC-Konformität)',
    privacy_section_2_desc_1: 'RefPromos ist eine kostenlose Plattform für Gutscheine und Angebote, die durch Affiliate-Partnerschaften finanziert wird. Wenn Sie auf Gutscheincodes, Angebote oder Shop-Links auf unserer Website klicken und anschließend einen Kauf beim Händler tätigen, erhalten wir möglicherweise eine Provision – ohne zusätzliche Kosten für Sie.',
    privacy_section_2_desc_2: 'Unsere redaktionelle Unabhängigkeit steht an erster Stelle: Unsere Gutscheinprüfung, Shop-Bewertungen und Testergebnisse erfolgen unabhängig von Affiliate-Provisionen.',
    privacy_section_3_title: '3. Daten, die wir erfassen',
    privacy_section_3_desc: 'Wir befolgen den Grundsatz der Datensparsamkeit:',
    privacy_data_non_personal: 'Nicht-personenbezogene & analytische Daten: Browsertyp, Betriebssystem, verweisende URL, bevorzugte Region und anonymisierte Klick-Zeitstempel.',
    privacy_data_ip: 'IP-Adressen: Werden mittels kryptografischem SHA-256-Hashing anonymisiert, um Klickbetrug zu verhindern, ohne Personen identifizieren zu können.',
    privacy_data_voluntary: 'Freiwillige Angaben: Ihr Name und Ihre E-Mail-Adresse, wenn Sie unseren Support kontaktieren oder den Newsletter abonnieren.',
    privacy_section_4_title: '4. Cookies & Tracking-Technologien',
    privacy_section_4_desc: 'Wir verwenden notwendige Cookies und datensparsame Analyse-Cookies, um Ihre ausgewählte Region (z. B. US, UK, AU, CA, DE, FR, IT, NL, PL, ES) zu speichern und Partnershop-Weiterleitungen zu erfassen. Sie können Cookies jederzeit in Ihrem Browser deaktivieren.',
    privacy_section_5_title: '5. Ihre Datenschutzrechte & Datenlöschung (DSGVO & CCPA)',
    privacy_section_5_desc_1: 'Gemäß der Datenschutz-Grundverordnung (DSGVO) behalten Sie die volle Kontrolle über Ihre personenbezogenen Daten:',
    privacy_rights_access: 'Auskunftsrecht: Fordern Sie eine Kopie aller bei uns gespeicherten personenbezogenen Daten an.',
    privacy_rights_erasure: 'Recht auf Löschung (Recht auf Vergessenwerden): Fordern Sie die dauerhafte Löschung Ihrer E-Mail-Adresse und zugehöriger Datensätze an.',
    privacy_rights_optout: 'Widerspruchsrecht: Sie können Marketing-Mitteilungen und Analysen jederzeit kostenlos widersprechen.',
    privacy_section_5_desc_2: 'Um eine automatisierte Löschung zu veranlassen, nutzen Sie /api/privacy/delete-data oder schreiben Sie an info@refpromos.com. Anfragen werden innerhalb von 48 Stunden bearbeitet.',
    privacy_section_6_title: '6. Datensicherheit & Speicherarchitektur',
    privacy_section_6_desc: 'Wir setzen moderne Sicherheitsmaßnahmen ein, um Daten und Benutzerkonten zu schützen:',
    privacy_sec_hashing: 'Gesalzenes Hashing: IP-Adressen werden niemals im Klartext gespeichert, sondern sofort mit einem geheimen Server-Salt gehasht.',
    privacy_sec_passwords: 'Passwort-Verschlüsselung: Alle internen Kennwörter nutzen bcrypt mit hohem Work-Factor. Klartext-Passwörter werden niemals übertragen oder gespeichert.',
    privacy_sec_cookies: 'Sichere Cookies: Session-Tokens werden ausschließlich in HTTP-Only, Secure, SameSite-Cookies gespeichert.',
    privacy_section_7_title: '7. Kontakt bezüglich Datenschutz',
    privacy_section_7_desc: 'Für Fragen, Auskunftsanfragen oder Löschanträge wenden Sie sich an unseren Datenschutzbeauftragten unter:',

    // Terms & Conditions
    terms_eyebrow: 'Nutzungsbedingungen',
    terms_title: 'Allgemeine Geschäftsbedingungen',
    terms_last_updated: 'Zuletzt aktualisiert: August 2026',
    terms_section_1_title: '1. Annahme der Bedingungen',
    terms_section_1_desc: 'Durch den Zugriff auf RefPromos (die „Website“) erklären Sie sich mit diesen Bedingungen einverstanden. Wenn Sie nicht einverstanden sind, beenden Sie bitte die Nutzung der Website.',
    terms_section_2_title: '2. Art der Angebote & Gutscheincodes',
    terms_section_2_desc: 'RefPromos veröffentlicht Gutscheine, Rabattcodes und Angebote von Partnerhändlern. Trotz sorgfältiger Prüfung vor der Veröffentlichung:',
    terms_rule_1: 'Gültigkeit, Rabatthöhe, Preise und Fristen unterliegen der alleinigen Verantwortung des jeweiligen Händlers und können sich jederzeit ohne Vorankündigung ändern.',
    terms_rule_2: 'Wir können nicht garantieren, dass Angebote zu jedem Zeitpunkt von Drittanbietern eingelöst werden.',
    terms_rule_3: 'Alle Käufe finden direkt auf der Website des Händlers statt. RefPromos wickelt weder Zahlungen noch Bestellungen ab.',
    terms_section_3_title: '3. Geistiges Eigentum',
    terms_section_3_desc: 'Alle originären Inhalte, Layouts, Logos und Programmcodes auf RefPromos sind urheberrechtlich geschützt. Markennamen Dritter (z. B. Nike, Amazon, Sephora) gehören ihren Eigentümern und dienen nur zur Identifikation.',
    terms_section_4_title: '4. Haftungsbeschränkung',
    terms_section_4_desc: 'Soweit gesetzlich zulässig, haftet RefPromos nicht für mittelbare oder unmittelbare Schäden, die aus der Nutzung der aufgeführten Rabatte entstehen.',
    terms_section_5_title: '5. Kontaktinformationen',
    terms_section_5_desc: 'Bei rechtlichen Fragen zu diesen Bedingungen schreiben Sie bitte an:',
    footer_affiliate_disclaimer: 'Wir erhalten möglicherweise eine Provision für Käufe über Links auf dieser Website – für Sie entstehen dadurch keinerlei zusätzliche Kosten.',
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
    // About Us
    about_mission_eyebrow: 'Notre Mission',
    about_hero_title: 'Nous aidons des millions d’acheteurs avisés à économiser sur chaque commande',
    about_hero_desc: 'RefPromos a été créé pour éliminer les codes promo expirés et offrir aux acheteurs en ligne des codes 100 % vérifiés, testés et de vrais bons plans.',
    metric_brands_sub: 'Grandes marques internationales',
    metric_codes_sub: 'Testés et mis à jour quotidiennement',
    shopper_savings: 'Économies Réalisées',
    metric_savings_sub: 'En réductions vérifiées',
    global_regions: 'Régions Mondiales',
    metric_regions_sub: 'US, UK, AU, CA, DE, FR, IT, NL, PL, ES',
    how_it_works_title: 'Comment RefPromos fonctionne pour vous',
    pillar_1_title: '1. Test Manuel & Vérification',
    pillar_1_desc: 'Notre équipe teste chaque code directement au panier avant publication. Si un code ne fonctionne pas ou est expiré, il est immédiatement signalé ou retiré.',
    pillar_2_title: '2. 100% Gratuit & Sans Contrainte',
    pillar_2_desc: 'Nous croyons que faire des économies ne doit jamais exiger d’abonnement payant ni de compte complexe. Trouvez, copiez et appliquez un code en 1 clic.',
    pillar_3_title: '3. Partenariats Transparents',
    pillar_3_desc: 'Lorsque vous effectuez un achat via nos liens d’affiliation, nous pouvons percevoir une commission du marchand sans aucun surcoût pour vous.',
    ready_to_save_title: 'Prêt à commencer à économiser ?',
    ready_to_save_desc: 'Découvrez dès maintenant les codes promo et offres tendance.',

    // Blog Detail & Navigation
    all_shopping_guides: 'Tous les Guides d’Achat',
    mentioned_promo_codes: 'Codes Promo et Bons Plans Mentionnés',
    related_guides: 'Guides Similaires',

    // Contact Us
    contact_eyebrow: 'Support & Demandes',
    contact_title: 'Nous sommes à votre écoute',
    contact_desc: 'Une question sur un code promo, un bon plan à partager ou un projet de partenariat ? Envoyez-nous un message.',
    contact_success_title: 'Message envoyé avec succès !',
    contact_success_desc: 'Merci d’avoir contacté RefPromos. Notre équipe vous répond généralement sous 24 heures ouvrées.',
    send_another: 'Envoyer un autre message',
    your_name: 'Votre Nom *',
    email_address: 'Adresse E-mail *',
    subject_label: 'Sujet',
    general_inquiry: 'Demande Générale',
    report_broken: 'Signaler un code expiré ou invalide',
    merchant_partner: 'Partenariat Marchand & Marque',
    press_editorial: 'Presse & Relations Éditoriales',
    message_label: 'Message *',
    message_placeholder: 'Décrivez votre question ou vos remarques...',
    sending_label: 'Envoi en cours...',
    send_message: 'Envoyer le message',
    email_support: 'Adresses E-mail Officielles',
    support_desk: 'Support Client & Codes Promo',
    general_inquiries: 'Renseignements Généraux & Informations',
    response_times: 'Délais de Réponse',
    response_times_desc: 'Notre équipe éditoriale et de vérification opère du lundi au vendredi, de 9h00 à 18h00. Les demandes sont traitées dans l’ordre d’arrivée.',
    for_merchants: 'Pour les Partenaires Marchands',
    for_merchants_desc: 'Vous souhaitez référencer votre marque sur RefPromos ou proposer des codes promo exclusifs à notre communauté ? Contactez',

    // Privacy Policy
    privacy_eyebrow: 'Mentions Légales & Conformité',
    privacy_title: 'Politique de Confidentialité & Déclaration d’Affiliation',
    privacy_last_updated: 'Dernière mise à jour : Août 2026',
    privacy_section_1_title: '1. Introduction & Champ d’Application',
    privacy_section_1_desc: 'Bienvenue sur RefPromos (« nous », « notre »). Nous nous engageons à protéger votre vie privée et à assurer des pratiques d’information transparentes sur notre site (refpromos.com) et nos services.',
    privacy_section_2_title: '2. Déclaration d’Affiliation (Conformité FTC)',
    privacy_section_2_desc_1: 'RefPromos est un service gratuit de bons plans soutenu par des partenariats d’affiliation. Lorsque vous cliquez sur un lien et achetez chez un marchand, nous pouvons recevoir une commission sans aucun coût supplémentaire pour vous.',
    privacy_section_2_desc_2: 'Notre indépendance éditoriale est primordiale : les avis et tests de coupons restent totalement indépendants des commissions reçues.',
    privacy_section_3_title: '3. Données Collectées',
    privacy_section_3_desc: 'Nous appliquons des règles strictes de minimisation des données :',
    privacy_data_non_personal: 'Données Non Nominatives & Analytiques : Type de navigateur, système d’exploitation, URL référente, préférence de région et horodatages anonymisés.',
    privacy_data_ip: 'Adresses IP : Hachées de manière irréversible via SHA-256 pour prévenir la fraude sans identifier les personnes.',
    privacy_data_voluntary: 'Données Volontaires : Votre nom et e-mail lors de l’envoi d’un message ou de l’inscription à notre lettre d’information.',
    privacy_section_4_title: '4. Cookies & Technologies de Suivi',
    privacy_section_4_desc: 'Nous utilisons des cookies essentiels et analytiques légers pour mémoriser votre pays (ex. FR, DE, US, PL, ES) et suivre les redirections marchandes.',
    privacy_section_5_title: '5. Vos Droits & Suppression des Données (RGPD)',
    privacy_section_5_desc_1: 'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et d’effacement de vos données personnelles.',
    privacy_rights_access: 'Droit d’Accès : Obtenez une copie des données vous concernant.',
    privacy_rights_erasure: 'Droit à l’Oubli : Demandez la suppression définitive de vos données.',
    privacy_rights_optout: 'Droit d’Opposition : Refusez les communications marketing à tout moment.',
    privacy_section_5_desc_2: 'Pour exercer vos droits, rendez-vous sur /api/privacy/delete-data ou écrivez à info@refpromos.com. Traitement sous 48 heures.',
    privacy_section_6_title: '6. Sécurité des Données',
    privacy_section_6_desc: 'Nous mettons en œuvre des mesures de protection rigoureuses :',
    privacy_sec_hashing: 'Hachage Salé : Les IP brutes ne sont jamais stockées sur disque.',
    privacy_sec_passwords: 'Chiffrement des Mots de Passe : Hachage bcrypt pour tous les accès d’administration.',
    privacy_sec_cookies: 'Cookies Sécurisés : Tokens de session strictement limités en HTTP-Only et SameSite.',
    privacy_section_7_title: '7. Contact Concernant la Confidentialité',
    privacy_section_7_desc: 'Pour toute question relative à vos données, contactez notre DPO à :',

    // Terms & Conditions
    terms_eyebrow: 'Conditions d’Utilisation',
    terms_title: 'Conditions Générales d’Utilisation',
    terms_last_updated: 'Dernière mise à jour : Août 2026',
    terms_section_1_title: '1. Acceptation des Conditions',
    terms_section_1_desc: 'En naviguant sur RefPromos, vous acceptez de respecter les présentes Conditions Générales. En cas de désaccord, veuillez cesser toute utilisation du site.',
    terms_section_2_title: '2. Nature des Offres & Codes Promo',
    terms_section_2_desc: 'RefPromos publie des codes de réduction et offres agrégés auprès des marchands partenaires. Malgré nos vérifications régulières :',
    terms_rule_1: 'La validité, le montant des réductions et les prix peuvent être modifiés par les marchands à tout moment et sans préavis.',
    terms_rule_2: 'Nous ne pouvons garantir que chaque offre sera honorée par les tiers en continu.',
    terms_rule_3: 'Les achats s’effectuent exclusivement sur les sites des commerçants concernés. RefPromos n’encaisse aucun paiement.',
    terms_section_3_title: '3. Propriété Intellectuelle',
    terms_section_3_desc: 'Les contenus et marques originales de RefPromos sont protégés. Les logos et marques de tiers appartiennent à leurs propriétaires légitimes respectifs.',
    terms_section_4_title: '4. Limitation de Responsabilité',
    terms_section_4_desc: 'Dans toute la mesure permise par la loi, RefPromos ne saurait être tenu responsable des dommages directs ou indirects résultant de l’utilisation du site.',
    terms_section_5_title: '5. Coordonnées',
    terms_section_5_desc: 'Pour toute question d’ordre légal concernant ces conditions, contactez :',
    footer_affiliate_disclaimer: 'Nous pouvons percevoir une commission sur les achats effectués via les liens de ce site, sans aucun coût supplémentaire pour vous.',
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
    // About Us
    about_mission_eyebrow: 'La Nostra Missione',
    about_hero_title: 'Aiutiamo milioni di acquirenti intelligenti a risparmiare su ogni acquisto',
    about_hero_desc: 'RefPromos è nata per eliminare i codici promozionali scaduti e offrire agli acquirenti online codici sconto testati al 100% e offerte reali.',
    metric_brands_sub: 'Migliori marchi globali in tutto il mondo',
    metric_codes_sub: 'Testati e aggiornati ogni giorno',
    shopper_savings: 'Risparmi dei Clienti',
    metric_savings_sub: 'In sconti verificati',
    global_regions: 'Regioni Globali',
    metric_regions_sub: 'US, UK, AU, CA, DE, FR, IT, NL, PL, ES',
    how_it_works_title: 'Come funziona RefPromos per te',
    pillar_1_title: '1. Test Manuale e Verifica',
    pillar_1_desc: 'Il nostro team verifica i codici direttamente al checkout prima della pubblicazione. Se un codice non applica lo sconto o è scaduto, viene subito rimosso.',
    pillar_2_title: '2. 100% Gratuito e Senza Ostacoli',
    pillar_2_desc: 'Crediamo che lo shopping intelligente non debba mai richiedere abbonamenti a pagamento o account complessi. Copia e applica qualsiasi codice con 1 clic.',
    pillar_3_title: '3. Partnership Trasparenti',
    pillar_3_desc: 'Quando acquisti tramite i nostri link di affiliazione, potremmo ricevere una piccola commissione dal rivenditore senza alcun costo extra per te.',
    ready_to_save_title: 'Pronto per iniziare a risparmiare?',
    ready_to_save_desc: 'Scopri subito i coupon di tendenza e le offerte dei migliori marchi.',

    // Blog Detail & Navigation
    all_shopping_guides: 'Tutte le Guide allo Shopping',
    mentioned_promo_codes: 'Codici Promo e Offerte Menzionati',
    related_guides: 'Guide Correlate',

    // Contact Us
    contact_eyebrow: 'Supporto & Richieste',
    contact_title: 'Ci farebbe piacere sentirti',
    contact_desc: 'Hai una domanda su un codice sconto, vuoi segnalare un\'offerta o proporre una partnership? Inviaci un messaggio.',
    contact_success_title: 'Messaggio inviato con successo!',
    contact_success_desc: 'Grazie per aver contattato RefPromos. Il nostro team di supporto risponde generalmente entro 24 ore lavorative.',
    send_another: 'Invia un altro messaggio',
    your_name: 'Il tuo Nome *',
    email_address: 'Indirizzo Email *',
    subject_label: 'Oggetto',
    general_inquiry: 'Richiesta Generale',
    report_broken: 'Segnala un coupon scaduto o non valido',
    merchant_partner: 'Partnership Rivenditore & Marchio',
    press_editorial: 'Stampa & Ufficio Stampa',
    message_label: 'Messaggio *',
    message_placeholder: 'Descrivi la tua richiesta o il tuo feedback...',
    sending_label: 'Invio in corso...',
    send_message: 'Invia Messaggio',
    email_support: 'Caselle Email Ufficiali',
    support_desk: 'Assistenza Clienti e Coupon',
    general_inquiries: 'Richieste Generali e Informazioni',
    response_times: 'Tempi di Risposta',
    response_times_desc: 'La nostra redazione e il servizio verifica operano dal lunedì al venerdì, dalle 9:00 alle 18:00. Le richieste sono gestite in ordine di ricezione.',
    for_merchants: 'Per Rivenditori e Partner',
    for_merchants_desc: 'Vuoi promuovere il tuo marchio su RefPromos o fornire coupon esclusivi alla nostra community? Scrivi a',

    // Privacy Policy
    privacy_eyebrow: 'Note Legali e Conformità',
    privacy_title: 'Informativa sulla Privacy e Trasparenza Affiliazioni',
    privacy_last_updated: 'Ultimo aggiornamento: Agosto 2026',
    privacy_section_1_title: '1. Introduzione e Ambito',
    privacy_section_1_desc: 'Benvenuti su RefPromos. Ci impegniamo a proteggere la tua privacy e a garantire la massima trasparenza sul nostro sito (refpromos.com).',
    privacy_section_2_title: '2. Trasparenza Affiliazioni (FTC)',
    privacy_section_2_desc_1: 'RefPromos è un servizio gratuito supportato da affiliazioni. Quando effettui un acquisto tramite i nostri link, potremmo ricevere una commissione senza alcun costo aggiuntivo per te.',
    privacy_section_2_desc_2: 'La nostra integrità editoriale è fondamentale: valutazioni e recensioni sono indipendenti dalle commissioni.',
    privacy_section_3_title: '3. Dati che Raccogliamo',
    privacy_section_3_desc: 'Rispettiamo il principio di minimizzazione dei dati:',
    privacy_data_non_personal: 'Dati Non Personali e Analitici: Tipo di browser, sistema operativo, URL di provenienza e timestamp anonimi.',
    privacy_data_ip: 'Indirizzi IP: Anonimizzati tramite hash crittografico SHA-256 per prevenire frodi senza identificare gli utenti.',
    privacy_data_voluntary: 'Dati Volontari: Nome ed email quando compili il modulo di contatto o la newsletter.',
    privacy_section_4_title: '4. Cookie e Tecnologie di Tracciamento',
    privacy_section_4_desc: 'Utilizziamo cookie tecnici per memorizzare la tua regione geografica e tracciare i referral dei negozi.',
    privacy_section_5_title: '5. Diritti di Privacy e Cancellazione (GDPR)',
    privacy_section_5_desc_1: 'Ai sensi del GDPR, hai pieno controllo sui tuoi dati personali:',
    privacy_rights_access: 'Diritto di Accesso: Richiedi una copia dei dati conservati.',
    privacy_rights_erasure: 'Diritto all\'Oblio: Richiedi la cancellazione definitiva dei tuoi dati.',
    privacy_rights_optout: 'Diritto di Opposizione: Disiscriviti in ogni momento dalle comunicazioni.',
    privacy_section_5_desc_2: 'Per inoltrare una richiesta di cancellazione dati, visita /api/privacy/delete-data o scrivi a info@refpromos.com.',
    privacy_section_6_title: '6. Sicurezza dei Dati',
    privacy_section_6_desc: 'Adottiamo misure di sicurezza all\'avanguardia: hash salato per gli IP, crittografia bcrypt per le password e cookie protetti HTTP-Only.',
    privacy_sec_hashing: 'Hash Salato: Gli IP non vengono mai salvati in chiaro sul disco.',
    privacy_sec_passwords: 'Crittografia Password: Bcrypt con fattore elevato per tutte le credenziali interne.',
    privacy_sec_cookies: 'Cookie Protetti: Cookie di sessione sicuri e inaccessibili agli script lato client.',
    privacy_section_7_title: '7. Contatti sulla Privacy',
    privacy_section_7_desc: 'Per domande relative alla privacy e ai tuoi diritti, contatta:',

    // Terms & Conditions
    terms_eyebrow: 'Termini di Servizio',
    terms_title: 'Termini e Condizioni di Utilizzo',
    terms_last_updated: 'Ultimo aggiornamento: Agosto 2026',
    terms_section_1_title: '1. Accettazione dei Termini',
    terms_section_1_desc: 'Accedendo a RefPromos accetti i presenti Termini e Condizioni. Se non sei d\'accordo, ti invitiamo a non utilizzare il sito.',
    terms_section_2_title: '2. Natura delle Offerte e dei Coupon',
    terms_section_2_desc: 'Pubblichiamo codici sconto e promozioni dei negozi partner. Nonostante i nostri accurati controlli:',
    terms_rule_1: 'Validità, percentuali di sconto e prezzi possono variare a discrezione dei singoli rivenditori senza preavviso.',
    terms_rule_2: 'Non possiamo garantire che ogni coupon sia accettato in qualsiasi momento da terze parti.',
    terms_rule_3: 'Le transazioni avvengono direttamente sui siti dei rispettivi venditori. RefPromos non gestisce pagamenti.',
    terms_section_3_title: '3. Proprietà Intellettuale',
    terms_section_3_desc: 'I contenuti e la grafica di RefPromos sono protetti da copyright. I marchi dei negozi appartengono ai rispettivi titolari.',
    terms_section_4_title: '4. Limitazione di Responsabilità',
    terms_section_4_desc: 'Nei limiti previsti dalla legge, RefPromos non risponde di eventuali danni derivanti dall\'uso dei coupon elencati.',
    terms_section_5_title: '5. Informazioni di Contatto',
    terms_section_5_desc: 'Per comunicazioni legali relative a questi termini, scrivere a:',
    footer_affiliate_disclaimer: 'Potremmo guadagnare una commissione dagli acquisti effettuati tramite i link presenti su questo sito, senza alcun costo aggiuntivo per te.',
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
    // About Us
    about_mission_eyebrow: 'Onze Missie',
    about_hero_title: 'Wij helpen miljoenen slimme shoppers te besparen op elke aankoop',
    about_hero_desc: 'RefPromos is opgericht om verlopen kortingscodes uit te bannen en online shoppers te voorzien van 100% geverifieerde actiecodes en echte deals.',
    metric_brands_sub: 'Toonaangevende wereldwijde merken',
    metric_codes_sub: 'Dagelijks getest en bijgewerkt',
    shopper_savings: 'Besparingen van Shoppers',
    metric_savings_sub: 'Aan geverifieerde kortingen',
    global_regions: 'Wereldwijde Regio’s',
    metric_regions_sub: 'US, UK, AU, CA, DE, FR, IT, NL, PL, ES',
    how_it_works_title: 'Hoe RefPromos voor jou werkt',
    pillar_1_title: '1. Handmatige Test & Verificatie',
    pillar_1_desc: 'Ons team test codes bij het afrekenen voordat ze gepubliceerd worden. Als een code verloopt of niet werkt, wordt deze meteen gearchiveerd.',
    pillar_2_title: '2. 100% Gratis & Zonder Drempels',
    pillar_2_desc: 'Wij vinden dat slim winkelen nooit een betaald abonnement of account mag vereisen. Vind, kopieer en gebruik elke actiecode direct in 1 klik.',
    pillar_3_title: '3. Transparante Partnerschappen',
    pillar_3_desc: 'Wanneer je een aankoop doet via onze links, kunnen we een commissie ontvangen van de winkelier zonder extra kosten voor jou.',
    ready_to_save_title: 'Klaar om te beginnen met besparen?',
    ready_to_save_desc: 'Bekijk nu populaire kortingscodes en topdeals van topmerken.',

    // Blog Detail & Navigation
    all_shopping_guides: 'Alle Koopgidsen',
    mentioned_promo_codes: 'Genoemde Kortingscodes & Deals',
    related_guides: 'Gerelateerde Gidsen',

    // Contact Us
    contact_eyebrow: 'Ondersteuning & Vragen',
    contact_title: 'We horen graag van je',
    contact_desc: 'Heb je een vraag over een kortingscode, wil je een deal aanmelden of samenwerken? Stuur ons een bericht.',
    contact_success_title: 'Bericht succesvol verzonden!',
    contact_success_desc: 'Bedankt voor je bericht aan RefPromos. Ons supportteam reageert meestal binnen 24 werkuren.',
    send_another: 'Nog een bericht versturen',
    your_name: 'Jouw Naam *',
    email_address: 'E-mailadres *',
    subject_label: 'Onderwerp',
    general_inquiry: 'Algemene Vraag',
    report_broken: 'Verlopen of niet-werkende code melden',
    merchant_partner: 'Winkel- of Merkpartnerschap',
    press_editorial: 'Pers & Redactionele Vragen',
    message_label: 'Bericht *',
    message_placeholder: 'Beschrijf je vraag of opmerking...',
    sending_label: 'Verzenden...',
    send_message: 'Bericht Verzenden',
    email_support: 'Officiële E-mailadressen',
    support_desk: 'Klantenservice & Kortingshulp',
    general_inquiries: 'Algemene Vragen & Informatie',
    response_times: 'Reactietijden',
    response_times_desc: 'Onze redactie en verificatieafdeling werkt van maandag tot en met vrijdag, 9:00 – 18:00 uur. Vragen worden behandeld op volgorde van binnenkomst.',
    for_merchants: 'Voor Winkels & Partners',
    for_merchants_desc: 'Wil je jouw merk op RefPromos vermelden of exclusieve kortingscodes aanbieden aan onze community? Neem contact op via',

    // Privacy Policy
    privacy_eyebrow: 'Juridisch & Naleving',
    privacy_title: 'Privacybeleid & Affiliate Verantwoording',
    privacy_last_updated: 'Laatst bijgewerkt: Augustus 2026',
    privacy_section_1_title: '1. Inleiding & Reikwijdte',
    privacy_section_1_desc: 'Welkom bij RefPromos. Wij hechten grote waarde aan jouw privacy en transparante informatiepraktijken op refpromos.com.',
    privacy_section_2_title: '2. Affiliate Verantwoording (FTC)',
    privacy_section_2_desc_1: 'RefPromos is een gratis platform ondersteund door affiliate links. Wanneer je via onze links koopt, ontvangen wij mogelijk een commissie zonder extra kosten voor jou.',
    privacy_section_2_desc_2: 'Onze redactionele onafhankelijkheid staat centraal: onze beoordelingen zijn onafhankelijk van commissies.',
    privacy_section_3_title: '3. Gegevens die wij verzamelen',
    privacy_section_3_desc: 'Wij houden ons aan strikte dataminimalisatie:',
    privacy_data_non_personal: 'Niet-persoonlijke gegevens: Browsertype, besturingssysteem, geselecteerde regio en geanonimiseerde kliks.',
    privacy_data_ip: 'IP-adressen: Gehasht met cryptografische SHA-256 om fraude tegen te gaan zonder personen te identificeren.',
    privacy_data_voluntary: 'Vrijwillige gegevens: Naam en e-mailadres wanneer je contact opneemt.',
    privacy_section_4_title: '4. Cookies & Tracking',
    privacy_section_4_desc: 'Wij gebruiken essentiële cookies om jouw landvoorkeur te onthouden.',
    privacy_section_5_title: '5. Jouw Privacyrechten (AVG/GDPR)',
    privacy_section_5_desc_1: 'Onder de AVG heb je volledige controle over jouw gegevens:',
    privacy_rights_access: 'Recht op Inzage: Vraag een kopie aan van jouw opgeslagen gegevens.',
    privacy_rights_erasure: 'Recht op Vergetelheid: Verzoek om definitieve verwijdering van jouw gegevens.',
    privacy_rights_optout: 'Recht van Bezwaar: Meld je op elk moment af voor berichten.',
    privacy_section_5_desc_2: 'Dien een verwijderverzoek in via /api/privacy/delete-data of mail naar info@refpromos.com.',
    privacy_section_6_title: '6. Gegevensbeveiliging',
    privacy_section_6_desc: 'Wij hanteren sterke beveiligingsmaatregelen: gehashte IP-adressen, bcrypt voor beheerders en HTTP-only cookies.',
    privacy_sec_hashing: 'Salted Hashing: IP-adressen worden direct onomkeerbaar gehasht.',
    privacy_sec_passwords: 'Wachtwoordversleuteling: Bcrypt met hoge work factor voor alle beheerders.',
    privacy_sec_cookies: 'Veilige Cookies: Sessiecookies zijn beveiligd met HTTP-Only en SameSite.',
    privacy_section_7_title: '7. Contact over Privacy',
    privacy_section_7_desc: 'Voor vragen over jouw gegevens neem je contact op met:',

    // Terms & Conditions
    terms_eyebrow: 'Algemene Voorwaarden',
    terms_title: 'Algemene Gebruiksvoorwaarden',
    terms_last_updated: 'Laatst bijgewerkt: Augustus 2026',
    terms_section_1_title: '1. Aanvaarding van de Voorwaarden',
    terms_section_1_desc: 'Door RefPromos te bezoeken ga je akkoord met deze voorwaarden. Indien je niet akkoord gaat, verzoeken we je het gebruik te staken.',
    terms_section_2_title: '2. Aard van Aanbiedingen & Codes',
    terms_section_2_desc: 'RefPromos publiceert actiecodes en kortingen van partnerwinkels. Hoewel we alles zorgvuldig testen:',
    terms_rule_1: 'Geldigheid, kortingspercentages en prijzen kunnen op elk moment door de winkelier worden aangepast.',
    terms_rule_2: 'Wij kunnen niet garanderen dat externe partijen kortingen te allen tijde honoreren.',
    terms_rule_3: 'Aankopen vinden rechtstreeks plaats op de website van de winkelier.',
    terms_section_3_title: '3. Intellectueel Eigendom',
    terms_section_3_desc: 'Alle originele content en code op RefPromos is auteursrechtelijk beschermd. Merknamen behoren toe aan de respectievelijke eigenaren.',
    terms_section_4_title: '4. Beperking van Aansprakelijkheid',
    terms_section_4_desc: 'Voor zover wettelijk toegestaan is RefPromos niet aansprakelijk voor schade voortvloeiend uit het gebruik van aanbiedingen.',
    terms_section_5_title: '5. Contactgegevens',
    terms_section_5_desc: 'Voor juridische vragen over deze voorwaarden kun je mailen naar:',
    footer_affiliate_disclaimer: 'We kunnen een commissie ontvangen voor aankopen via links op deze site, zonder extra kosten voor u.',
  },

  pl: {
    // Nav & Header
    nav_coupons: 'Kupony',
    nav_stores: 'Sklepy',
    nav_categories: 'Kategorie',
    nav_guides: 'Poradniki',
    nav_reviews: 'Opinie',
    nav_about: 'O nas',
    nav_contact: 'Kontakt',
    nav_admin: 'Panel',
    search_placeholder: 'Szukaj okazji...',
    select_region: 'Wybierz region',
    breadcrumbs_home: 'Strona główna',

    // Hero
    hero_badge: 'ZWERYFIKOWANE KODY PROMOCYJNE I CODZIENNE OKAZJE',
    hero_title_1: 'Odkryj',
    hero_title_2: 'Mądrzejsze Oszczędności.',
    hero_title_3: 'Każdego Dnia.',
    hero_desc: 'Uzyskaj dostęp do ponad 50 000 sprawdzonych kodów rabatowych, kuponów zniżkowych i ekskluzywnych ofert w ponad 500 zaufanych sklepach.',
    hero_search_input: 'Szukaj sklepów, marek lub kodów rabatowych...',
    hero_btn_find: 'Znajdź okazje',
    hero_trending: 'Popularne:',
    trending_nike: 'Nike 20% zniżki',
    trending_amazon: 'Kody promocyjne Amazon',
    trending_sephora: 'Oferty Sephora Beauty',
    trending_apple: 'Zniżka studencka Apple',
    trending_asos: 'Letnia wyprzedaż ASOS',
    hero_floating_1: '25% ZNIŻKI Na wszystko',
    hero_floating_2: '40% ZNIŻKI',
    hero_floating_3: '15% ZNIŻKI + Darmowa dostawa',
    pill_sitewide: 'Na wszystko',
    stat_verified_coupons: 'Zweryfikowane kupony',
    stat_promo_codes: 'Kody promocyjne',
    stat_top_brands: 'Najlepsze marki',
    stat_user_rating: 'Ocena kupujących',
    trusted_by_shoppers: 'ZAUFANIE KUPUJĄCYCH W WIODĄCYCH MARKACH',
    more_brands: '+500 kolejnych',

    // Section Titles & Badges
    section_highlights_badge: 'Wyróżnione Dzisiaj',
    section_featured_deals_title: 'Wyróżnione okazje i ekskluzywne kody promocyjne',
    view_all_offers: 'Zobacz wszystkie oferty',
    section_partner_retailers: 'Sklepy partnerskie',
    section_top_stores_title: 'Najpopularniejsze sklepy ze zweryfikowanymi kuponami',
    all_stores_directory: 'Katalog wszystkich sklepów',
    section_browse_departments: 'Przeglądaj działy',
    section_popular_categories_title: 'Popularne kategorie zakupowe',
    all_categories: 'Wszystkie kategorie',
    stores_available: 'Dostępne sklepy',
    section_editorial_insights: 'Porady redakcji',
    section_smart_guides_title: 'Sprytne przewodniki i triki oszczędzania',
    read_all_guides: 'Przeczytaj wszystkie poradniki',
    read_guide: 'Czytaj poradnik',
    min_read: 'min czytania',

    section_featured_coupons: 'Najlepsze sprawdzone kody i ekskluzywne promocje',
    section_featured_coupons_sub: 'Ręcznie weryfikowane kupony, które dają dziś największe oszczędności',
    section_popular_stores: 'Popularne sklepy i wyróżnieni sprzedawcy',
    section_popular_stores_sub: 'Oszczędzaj natychmiast w najchętniej wybieranych sklepach',
    section_categories: 'Kupuj z rabatem według popularnych kategorii',
    section_categories_sub: 'Znajdź sprawdzone kody promocyjne na wszystko, czego szukasz',
    section_guides: 'Eksperckie poradniki i wskazówki oszczędzania',
    section_guides_sub: 'Sprawdzone strategie zakupowe, triki rabatowe i porady konsumenckie',
    section_reviews: 'Szczegółowe opinie o sklepach i wskaźniki zaufania',
    section_reviews_sub: 'Prawdziwe doświadczenia zakupowe, zasady zwrotów i wiarygodność',

    // Buttons, Badges & Labels
    btn_get_code: 'Pobierz kod',
    btn_get_deal: 'Odbierz okazję',
    btn_shop_now: 'Kup teraz',
    btn_view_all: 'Zobacz wszystko',
    btn_visit_store: 'Odwiedź sklep',
    badge_verified: 'Zweryfikowano dzisiaj',
    badge_staff_pick: 'Wybór redakcji',
    badge_exclusive: 'Ekskluzywny',
    badge_expiring: 'Wkrótce wygasa',
    uses_today: 'użyć dzisiaj',
    success_rate: 'Skuteczność',
    code_copied: 'Kod skopiowany!',
    copy_code: 'Kopiuj kod',
    promo_code_badge: 'Kod promocyjny',
    direct_deal_badge: 'Oferta bezpośrednia',
    claim_offer: 'Odbierz ofertę',
    automatic_at_checkout: 'Automatycznie przy kasie',
    available_deals: 'Okazje',

    // Stores Directory
    stores_directory_eyebrow: 'Katalog sprzedawców',
    stores_directory_title: 'Wszystkie sklepy partnerskie i marki',
    stores_directory_desc: 'Odkryj zweryfikowane kody promocyjne, sezonowe wyprzedaże i rabaty od najlepszych marek na całym świecie.',
    search_stores_placeholder: 'Szukaj sklepów po nazwie marki...',
    top_featured_brands: 'Najchętniej wybierane marki',
    az_directory: 'Alfabetyczny katalog A-Z',
    no_stores_found: 'Nie znaleziono sklepów pasujących do Twojego wyszukiwania',
    clear_filters: 'Wyczyść filtry',
    coupons_deals_available: 'Dostępne kupony i okazje',

    // Reviews Hub & Cards
    reviews_eyebrow: 'Oceny redakcji',
    reviews_title: 'Recenzje i opinie o sklepach',
    reviews_desc: 'Czytaj obiektywne opinie o sklepach, oceny punktowe, zalety i wady oraz zasady zwrotów przed dokonaniem zakupu.',
    no_reviews_yet: 'Brak opublikowanych recenzji',
    no_reviews_desc: 'Nasz zespół testujący przygotowuje obecnie nowe recenzje marek.',
    review_card_review: 'Recenzja',
    tested_highlights: 'Przetestowane atuty',
    by_author: 'Autor',
    read_review: 'Przeczytaj recenzję',
    pros: 'Zalety i mocne strony',
    cons: 'Wady i ograniczenia',
    verdict: 'Nasz werdykt',
    overall_score: 'Ogólny wskaźnik zaufania',

    // Coupons Directory
    coupons_eyebrow: 'Centrum okazji',
    coupons_title: 'Zweryfikowane kody promocyjne i kupony',
    coupons_desc: 'Przeglądaj przetestowane kody rabatowe, bony zakupowe i błyskawiczne wyprzedaże, które działają dzisiaj.',
    search_coupons_placeholder: 'Szukaj wg sklepu lub kodu (np. Nike, SAVE20)...',
    all_offers: 'Wszystkie oferty',
    filter_codes: 'Kody promocyjne',
    filter_deals: 'Wyprzedaże i okazje',
    filter_free_shipping: 'Darmowa dostawa',
    sort_by: 'Sortuj według',
    sort_popular: 'Najpopularniejsze',
    sort_newest: 'Najnowsze',
    sort_expiring: 'Wkrótce wygasające',
    no_coupons_found: 'Nie znaleziono kuponów spełniających Twoje kryteria',

    // Categories Hub
    categories_eyebrow: 'Katalog kategorii',
    categories_title: 'Wszystkie kategorie zakupów',
    categories_desc: 'Odkrywaj zniżki, kody promocyjne i codzienne wyprzedaże pogrupowane według działów produktów.',

    // Blogs Hub
    blogs_eyebrow: 'Artykuły i porady',
    blogs_title: 'Poradniki oszczędzania, recenzje i wskazówki',
    blogs_desc: 'Eksperckie porady zakupowe, przewodniki po sklepach i sprawdzone metody oszczędzania pieniędzy przy kasie.',
    all_articles: 'Wszystkie artykuły',
    featured_guide: 'Wyróżniony poradnik',
    read_full_guide: 'Przeczytaj cały poradnik',

    // Modals
    modal_coupon_code: 'Skopiuj ten kod i wklej go przy kasie w sklepie.',
    modal_copied: 'Skopiowano do schowka!',
    modal_visit_store: 'Przejdź do sklepu',
    modal_feedback_prompt: 'Czy ten kupon zadziałał?',
    modal_feedback_yes: 'Tak, zadziałał!',
    modal_feedback_no: 'Wygasł lub niepoprawny',
    modal_thanks: 'Dziękujemy za Twoją opinię!',
    search_modal_placeholder: 'Szukaj sklepów, okazji, kodów promocyjnych...',
    search_modal_trending: 'Popularne wyszukiwania',
    search_modal_stores: 'Sklepy',
    search_modal_coupons: 'Kupony',
    search_modal_categories: 'Kategorie',
    search_modal_guides: 'Poradniki',
    search_modal_no_results: 'Brak wyników dla',

    // Newsletter
    newsletter_badge: 'BĄDŹ NA BIEŻĄCO',
    newsletter_title: 'Otrzymuj sprawdzone okazje co tydzień',
    newsletter_desc: 'Dołącz do ponad 50 000 sprytnych kupujących i otrzymuj cotygodniowy przegląd przetestowanych kodów i obniżek cen.',
    newsletter_placeholder: 'Wpisz swój adres e-mail...',
    newsletter_btn: 'Subskrybuj za darmo',
    newsletter_privacy: 'Zero spamu. Wypisz się w dowolnym momencie jednym kliknięciem.',
    newsletter_success: '🎉 Dziękujemy za subskrypcję! Twoje pierwsze zestawienie okazji jest w drodze.',
    subscribing: 'Zapisywanie...',

    // Footer
    footer_tagline: 'Twoje główne źródło sprawdzonych kodów promocyjnych, codziennych wyprzedaży i wyjątkowych rabatów.',
    footer_quick_links: 'Szybkie linki',
    footer_categories: 'Kategorie',
    footer_stores: 'Popularne sklepy',
    footer_legal: 'Informacje prawne',
    footer_terms: 'Regulamin',
    footer_privacy: 'Polityka prywatności',
    footer_rights: 'Wszelkie prawa zastrzeżone.',
    footer_trust_1_title: '100% testowane codziennie',
    footer_trust_1_desc: 'Każdy kod rabatowy jest sprawdzany przed publikacją, co gwarantuje prawdziwe oszczędności przy kasie.',
    footer_trust_2_title: 'Darmowy i bez konieczności rejestracji',
    footer_trust_2_desc: 'Natychmiastowy dostęp jednym kliknięciem do przetestowanych kodów bez konieczności zakładania konta.',
    footer_trust_3_title: 'Przejrzystość afiliacyjna',
    footer_trust_3_desc: 'Współpracujemy ze sprawdzonymi markami i możemy otrzymać prowizję od kwalifikujących się zakupów.',
    footer_promo_codes: 'Kody promocyjne',
    footer_free_shipping: 'Darmowa dostawa',
    footer_nike_codes: 'Kody promocyjne Nike',
    footer_amazon_deals: 'Okazje Amazon',
    footer_sephora_coupons: 'Kupony Sephora',
    // About Us
    about_mission_eyebrow: 'Nasza Misja',
    about_hero_title: 'Pomagamy milionom sprytnych kupujących oszczędzać na każdych zakupach',
    about_hero_desc: 'RefPromos powstało, aby wyeliminować niedziałające kody rabatowe i zapewnić kupującym w 100% sprawdzone, przetestowane zniżki oraz prawdziwe promocje.',
    metric_brands_sub: 'Najlepsze światowe marki',
    metric_codes_sub: 'Testowane i aktualizowane codziennie',
    shopper_savings: 'Oszczędności Kupujących',
    metric_savings_sub: 'W zweryfikowanych rabatach',
    global_regions: 'Regiony Globalne',
    metric_regions_sub: 'US, UK, AU, CA, DE, FR, IT, NL, PL, ES',
    how_it_works_title: 'Jak działa RefPromos dla Ciebie',
    pillar_1_title: '1. Ręczne testowanie i weryfikacja',
    pillar_1_desc: 'Nasz zespół testuje kody przy kasie przed publikacją. Jeśli kod nie nalicza rabatu lub wygasł, zostaje natychmiast oznaczony lub usunięty.',
    pillar_2_title: '2. W 100% za darmo i bez barier',
    pillar_2_desc: 'Wierzymy, że mądre zakupy nie powinny wymagać płatnych subskrypcji ani zakładania konta. Możesz znaleźć i skopiować każdy kod jednym kliknięciem.',
    pillar_3_title: '3. Przejrzyste partnerstwa',
    pillar_3_desc: 'Gdy dokonujesz zakupu za pośrednictwem naszych linków afiliacyjnych, możemy otrzymać prowizję od sprzedawcy bez żadnych dodatkowych kosztów dla Ciebie.',
    ready_to_save_title: 'Gotowy, aby zacząć oszczędzać?',
    ready_to_save_desc: 'Odkryj najpopularniejsze kupony i okazje znanych marek już teraz.',

    // Blog Detail & Navigation
    all_shopping_guides: 'Wszystkie poradniki zakupowe',
    mentioned_promo_codes: 'Wymienione kody promocyjne i okazje',
    related_guides: 'Podobne poradniki',

    // Contact Us
    contact_eyebrow: 'Wsparcie i zapytania',
    contact_title: 'Chętnie odpowiemy na Twoje pytania',
    contact_desc: 'Masz pytanie o kod rabatowy, chcesz zgłosić nową okazję lub nawiązać współpracę? Wyślij do nas wiadomość.',
    contact_success_title: 'Wiadomość została wysłana!',
    contact_success_desc: 'Dziękujemy za kontakt z RefPromos. Nasz zespół zazwyczaj odpowiada w ciągu 24 godzin roboczych.',
    send_another: 'Wyślij kolejną wiadomość',
    your_name: 'Twoje imię i nazwisko *',
    email_address: 'Adres e-mail *',
    subject_label: 'Temat',
    general_inquiry: 'Zapytanie ogólne',
    report_broken: 'Zgłoś niedziałający / wygasły kupon',
    merchant_partner: 'Współpraca ze sklepem lub marką',
    press_editorial: 'Zapytanie prasowe / redakcyjne',
    message_label: 'Wiadomość *',
    message_placeholder: 'Opisz swoje pytanie lub opinię...',
    sending_label: 'Wysyłanie...',
    send_message: 'Wyślij wiadomość',
    email_support: 'Oficjalne skrzynki e-mail',
    support_desk: 'Pomoc dla klientów i kody rabatowe',
    general_inquiries: 'Ogólne zapytania i informacje',
    response_times: 'Czas odpowiedzi',
    response_times_desc: 'Nasz zespół redakcyjny i weryfikacyjny pracuje od poniedziałku do piątku w godzinach 9:00 – 18:00. Zgłoszenia są rozpatrywane w kolejności nadejścia.',
    for_merchants: 'Dla sklepów i partnerów',
    for_merchants_desc: 'Chcesz umieścić swoją markę na RefPromos lub zaoferować ekskluzywne kody rabatowe dla naszej społeczności? Skontaktuj się pod adresem',

    // Privacy Policy
    privacy_eyebrow: 'Kwestie prawne i zgodność',
    privacy_title: 'Polityka Prywatności i Informacja o Afiliacji',
    privacy_last_updated: 'Ostatnia aktualizacja: Sierpień 2026',
    privacy_section_1_title: '1. Wprowadzenie i Zakres',
    privacy_section_1_desc: 'Witamy w RefPromos. Zobowiązujemy się do ochrony Twojej prywatności i przejrzystych zasad przetwarzania informacji w serwisie refpromos.com.',
    privacy_section_2_title: '2. Informacja o Afiliacji (Zgodność z FTC)',
    privacy_section_2_desc_1: 'RefPromos to darmowy serwis z okazjami wspierany przez partnerstwa afiliacyjne. Gdy klikniesz link i zrobisz zakupy, możemy otrzymać prowizję bez żadnych kosztów dla Ciebie.',
    privacy_section_2_desc_2: 'Niezależność redakcyjna jest dla nas kluczowa: testy i oceny kodów są niezależne od prowizji partnerskich.',
    privacy_section_3_title: '3. Gromadzone Dane',
    privacy_section_3_desc: 'Przestrzegamy zasady minimalizacji danych:',
    privacy_data_non_personal: 'Dane nieosobowe i analityczne: Typ przeglądarki, system operacyjny, preferencje kraju i zanonimizowane znaczniki czasu.',
    privacy_data_ip: 'Adresy IP: Szyfrowane jednokierunkowo algorytmem SHA-256 w celu zapobiegania nadużyciom, bez możliwości identyfikacji tożsamości.',
    privacy_data_voluntary: 'Dane dobrowolne: Imię i adres e-mail przy kontakcie z obsługą lub zapisie na newsletter.',
    privacy_section_4_title: '4. Pliki Cookie i Technologie Śledzące',
    privacy_section_4_desc: 'Używamy niezbędnych plików cookie, aby zapamiętać Twój wybrany region i monitorować przekierowania do sklepów.',
    privacy_section_5_title: '5. Twoje Prawa i Usuwanie Danych (RODO)',
    privacy_section_5_desc_1: 'Zgodnie z RODO przysługuje Ci pełna kontrola nad Twoimi danymi osobowymi:',
    privacy_rights_access: 'Prawo do wglądu: Poproś o kopię swoich danych zgromadzonych w naszym systemie.',
    privacy_rights_erasure: 'Prawo do bycia zapomnianym: Zażądaj trwałego usunięcia swojego adresu e-mail i powiązanych rekordów.',
    privacy_rights_optout: 'Prawo do sprzeciwu: W każdej chwili możesz zrezygnować z otrzymywania powiadomień.',
    privacy_section_5_desc_2: 'Wniosek o usunięcie danych możesz złożyć przez endpoint /api/privacy/delete-data lub pisząc na info@refpromos.com.',
    privacy_section_6_title: '6. Bezpieczeństwo Danych',
    privacy_section_6_desc: 'Stosujemy rygorystyczne środki bezpieczeństwa: haszowanie z solą adresów IP, bcrypt dla haseł administracyjnych oraz bezpieczne ciasteczka HTTP-Only.',
    privacy_sec_hashing: 'Solone Haszowanie: Adresy IP nigdy nie są zapisywane w postaci jawnej.',
    privacy_sec_passwords: 'Szyfrowanie Haseł: Wszystkie hasła personelu są chronione funkcją bcrypt.',
    privacy_sec_cookies: 'Bezpieczne Ciasteczka: Pliki cookie sesji są chronione atrybutami HTTP-Only i SameSite.',
    privacy_section_7_title: '7. Kontakt w Sprawach Prywatności',
    privacy_section_7_desc: 'W przypadku pytań dotyczących ochrony danych prosimy o kontakt pod adresem:',

    // Terms & Conditions
    terms_eyebrow: 'Regulamin Serwisu',
    terms_title: 'Regulamin i Warunki Korzystania',
    terms_last_updated: 'Ostatnia aktualizacja: Sierpień 2026',
    terms_section_1_title: '1. Akceptacja Warunków',
    terms_section_1_desc: 'Korzystając z serwisu RefPromos, wyrażasz zgodę na niniejsze Warunki. Jeśli się z nimi nie zgadzasz, prosimy o zaprzestanie korzystania z witryny.',
    terms_section_2_title: '2. Charakter Promocji i Kodów Rabatowych',
    terms_section_2_desc: 'RefPromos publikuje kupony rabatowe i promocje partnerów handlowych. Mimo regularnej weryfikacji ofert:',
    terms_rule_1: 'Ważność kuponów, wysokość zniżek i ceny mogą ulec zmianie według wyłącznego uznania sprzedawcy bez wcześniejszego uprzedzenia.',
    terms_rule_2: 'Nie gwarantujemy, że każda oferta zostanie w dowolnym momencie zrealizowana przez stronę trzecią.',
    terms_rule_3: 'Wszystkie zakupy odbywają się bezpośrednio na stronach poszczególnych sprzedawców. RefPromos nie przetwarza płatności.',
    terms_section_3_title: '3. Własność Intelektualna',
    terms_section_3_desc: 'Wszystkie oryginalne treści na RefPromos są chronione prawem autorskim. Znaki towarowe sklepów należą do ich prawnych właścicieli.',
    terms_section_4_title: '4. Ograniczenie Odpowiedzialności',
    terms_section_4_desc: 'W granicach dozwolonych przez prawo RefPromos nie ponosi odpowiedzialności za szkody wynikające z korzystania z publikowanych ofert.',
    terms_section_5_title: '5. Informacje Kontaktowe',
    terms_section_5_desc: 'W przypadku zapytań prawnych dotyczących niniejszego regulaminu prosimy o kontakt pod adresem:',
    footer_affiliate_disclaimer: 'Możemy otrzymać prowizję od zakupów dokonanych za pośrednictwem linków na tej stronie, bez żadnych dodatkowych kosztów dla Ciebie.',
  },

  es: {
    // Nav & Header
    nav_coupons: 'Cupones',
    nav_stores: 'Tiendas',
    nav_categories: 'Categorías',
    nav_guides: 'Guías',
    nav_reviews: 'Reseñas',
    nav_about: 'Sobre nosotros',
    nav_contact: 'Contacto',
    nav_admin: 'Admin',
    search_placeholder: 'Buscar ofertas...',
    select_region: 'Seleccionar región',
    breadcrumbs_home: 'Inicio',

    // Hero
    hero_badge: 'CÓDIGOS PROMOCIONALES VERIFICADOS Y OFERTAS DIARIAS',
    hero_title_1: 'Desbloquea',
    hero_title_2: 'Ahorros Inteligentes.',
    hero_title_3: 'Cada Día.',
    hero_desc: 'Accede a más de 50.000 códigos promocionales verificados, cupones de descuento y ahorros exclusivos en más de 500 tiendas oficiales.',
    hero_search_input: 'Buscar tiendas, marcas o códigos de descuento...',
    hero_btn_find: 'Buscar ofertas',
    hero_trending: 'Tendencias:',
    trending_nike: 'Nike 20% de descuento',
    trending_amazon: 'Códigos descuento Amazon',
    trending_sephora: 'Ofertas de belleza Sephora',
    trending_apple: 'Descuento de estudiante Apple',
    trending_asos: 'Rebajas de verano ASOS',
    hero_floating_1: '25% DTO en toda la web',
    hero_floating_2: '40% DTO',
    hero_floating_3: '15% DTO + Envío Gratis',
    pill_sitewide: 'Toda la web',
    stat_verified_coupons: 'Cupones verificados',
    stat_promo_codes: 'Códigos descuento',
    stat_top_brands: 'Marcas destacadas',
    stat_user_rating: 'Valoración de usuarios',
    trusted_by_shoppers: 'CON LA CONFIANZA DE COMPRADORES DE PRIMERAS MARCAS',
    more_brands: '+500 más',

    // Section Titles & Badges
    section_highlights_badge: 'Destacados de hoy',
    section_featured_deals_title: 'Ofertas destacadas y códigos promocionales exclusivos',
    view_all_offers: 'Ver todas las ofertas',
    section_partner_retailers: 'Tiendas colaboradoras',
    section_top_stores_title: 'Mejores tiendas con cupones verificados',
    all_stores_directory: 'Directorio de todas las tiendas',
    section_browse_departments: 'Explorar departamentos',
    section_popular_categories_title: 'Categorías de compra populares',
    all_categories: 'Todas las categorías',
    stores_available: 'Tiendas disponibles',
    section_editorial_insights: 'Consejos editoriales',
    section_smart_guides_title: 'Guías de compra inteligente y trucos de ahorro',
    read_all_guides: 'Leer todas las guías',
    read_guide: 'Leer guía',
    min_read: 'min de lectura',

    section_featured_coupons: 'Mejores códigos promocionales verificados y ofertas exclusivas',
    section_featured_coupons_sub: 'Cupones verificados a mano que más ahorran a los compradores hoy',
    section_popular_stores: 'Tiendas en tendencia y comercios destacados',
    section_popular_stores_sub: 'Ahorra al instante en los destinos de compra más populares de hoy',
    section_categories: 'Compra ofertas por categorías populares',
    section_categories_sub: 'Encuentra códigos promocionales verificados para lo que busques',
    section_guides: 'Guías y consejos de expertos para ahorrar dinero',
    section_guides_sub: 'Estrategias de compra probadas, trucos de descuento y consejos',
    section_reviews: 'Reseñas detalladas de tiendas y puntuaciones de confianza',
    section_reviews_sub: 'Experiencias reales de compra, análisis de políticas y credibilidad',

    // Buttons, Badges & Labels
    btn_get_code: 'Obtener código',
    btn_get_deal: 'Obtener oferta',
    btn_shop_now: 'Comprar ahora',
    btn_view_all: 'Ver todo',
    btn_visit_store: 'Visitar tienda',
    badge_verified: 'Verificado hoy',
    badge_staff_pick: 'Selección del equipo',
    badge_exclusive: 'Exclusivo',
    badge_expiring: 'Expira pronto',
    uses_today: 'usos hoy',
    success_rate: 'Éxito',
    code_copied: '¡Código copiado!',
    copy_code: 'Copiar código',
    promo_code_badge: 'Código promocional',
    direct_deal_badge: 'Oferta directa',
    claim_offer: 'Aprovechar oferta',
    automatic_at_checkout: 'Automático al pagar',
    available_deals: 'Ofertas',

    // Stores Directory
    stores_directory_eyebrow: 'Directorio de comercios',
    stores_directory_title: 'Todas las tiendas y marcas asociadas',
    stores_directory_desc: 'Descubre códigos promocionales verificados, rebajas de temporada y ofertas de las mejores tiendas del mundo.',
    search_stores_placeholder: 'Buscar tiendas por nombre de marca...',
    top_featured_brands: 'Marcas destacadas principales',
    az_directory: 'Directorio alfabético de la A a la Z',
    no_stores_found: 'No se encontraron tiendas que coincidan con tu búsqueda',
    clear_filters: 'Limpiar filtros',
    coupons_deals_available: 'Cupones y ofertas disponibles',

    // Reviews Hub & Cards
    reviews_eyebrow: 'Valoraciones editoriales',
    reviews_title: 'Reseñas de tiendas y marcas',
    reviews_desc: 'Lee reseñas imparciales, puntuaciones, ventajas y desventajas, y políticas de devolución antes de pagar.',
    no_reviews_yet: 'Aún no hay reseñas publicadas',
    no_reviews_desc: 'Nuestro equipo de ofertas está preparando nuevas reseñas de marcas.',
    review_card_review: 'Reseña',
    tested_highlights: 'Puntos fuertes probados',
    by_author: 'Por',
    read_review: 'Leer reseña',
    pros: 'Ventajas y puntos fuertes',
    cons: 'Desventajas y limitaciones',
    verdict: 'Nuestro veredicto',
    overall_score: 'Puntuación general de confianza',

    // Coupons Directory
    coupons_eyebrow: 'Centro de ofertas',
    coupons_title: 'Códigos promocionales y cupones verificados',
    coupons_desc: 'Explora códigos de descuento probados, vales promocionales y ventas flash verificadas hoy mismo.',
    search_coupons_placeholder: 'Buscar por tienda o código (ej. Nike, SAVE20)...',
    all_offers: 'Todas las ofertas',
    filter_codes: 'Códigos promocionales',
    filter_deals: 'Ventas y ofertas',
    filter_free_shipping: 'Envío gratis',
    sort_by: 'Ordenar por',
    sort_popular: 'Más populares',
    sort_newest: 'Más recientes',
    sort_expiring: 'Próximos a expirar',
    no_coupons_found: 'No se encontraron cupones que coincidan con tus criterios',

    // Categories Hub
    categories_eyebrow: 'Centro de categorías',
    categories_title: 'Todas las categorías de compra',
    categories_desc: 'Explora descuentos, códigos promocionales y rebajas diarias organizadas por departamento de productos.',

    // Blogs Hub
    blogs_eyebrow: 'Editorial de compras',
    blogs_title: 'Guías de ahorro, reseñas y trucos',
    blogs_desc: 'Consejos de expertos, guías de compra de tiendas y estrategias probadas para ahorrar dinero.',
    all_articles: 'Todos los artículos',
    featured_guide: 'Guía destacada',
    read_full_guide: 'Leer guía completa',

    // Modals
    modal_coupon_code: 'Copia este código y pégalo en el carrito de la tienda.',
    modal_copied: '¡Copiado al portapapeles!',
    modal_visit_store: 'Ir a la tienda',
    modal_feedback_prompt: '¿Te funcionó este cupón?',
    modal_feedback_yes: '¡Sí, funcionó!',
    modal_feedback_no: 'Caducado o no válido',
    modal_thanks: '¡Gracias por tu valoración!',
    search_modal_placeholder: 'Buscar tiendas, ofertas, códigos promocionales...',
    search_modal_trending: 'Búsquedas en tendencia',
    search_modal_stores: 'Tiendas',
    search_modal_coupons: 'Cupones',
    search_modal_categories: 'Categorías',
    search_modal_guides: 'Guías',
    search_modal_no_results: 'No se encontraron resultados para',

    // Newsletter
    newsletter_badge: 'MANTENTE AL DÍA',
    newsletter_title: 'Recibe ofertas verificadas cada semana',
    newsletter_desc: 'Únete a más de 50.000 compradores y recibe semanalmente los mejores códigos verificados y bajadas de precio.',
    newsletter_placeholder: 'Introduce tu correo electrónico...',
    newsletter_btn: 'Suscribirse gratis',
    newsletter_privacy: 'Cero spam. Cancela tu suscripción en cualquier momento con 1 clic.',
    newsletter_success: '🎉 ¡Gracias por suscribirte! Tu primer resumen semanal de ofertas va en camino.',
    subscribing: 'Suscribiendo...',

    // Footer
    footer_tagline: 'Tu destino preferido para códigos promocionales verificados, rebajas diarias y ahorros exclusivos.',
    footer_quick_links: 'Enlaces rápidos',
    footer_categories: 'Categorías',
    footer_stores: 'Tiendas populares',
    footer_legal: 'Información legal',
    footer_terms: 'Términos y condiciones',
    footer_privacy: 'Política de privacidad',
    footer_rights: 'Todos los derechos reservados.',
    footer_trust_1_title: '100% probado a diario',
    footer_trust_1_desc: 'Cada código se prueba antes de publicarse para garantizar ahorros reales al comprar.',
    footer_trust_2_title: 'Gratis y sin registro',
    footer_trust_2_desc: 'Acceso instantáneo en 1 clic a códigos verificados sin necesidad de crear cuenta.',
    footer_trust_3_title: 'Transparencia de afiliados',
    footer_trust_3_desc: 'Colaboramos con marcas verificadas y podemos recibir una comisión por compras que califiquen.',
    footer_promo_codes: 'Códigos descuento',
    footer_free_shipping: 'Envío gratis',
    footer_nike_codes: 'Códigos descuento Nike',
    footer_amazon_deals: 'Ofertas Amazon',
    footer_sephora_coupons: 'Cupones Sephora',
    // About Us
    about_mission_eyebrow: 'Nuestra Misión',
    about_hero_title: 'Ayudamos a millones de compradores inteligentes a ahorrar en cada compra',
    about_hero_desc: 'RefPromos fue fundada para eliminar los códigos caducados y ofrecer a los compradores online códigos de descuento 100% verificados y ofertas reales.',
    metric_brands_sub: 'Principales marcas globales en todo el mundo',
    metric_codes_sub: 'Probados y actualizados a diario',
    shopper_savings: 'Ahorro de los Compradores',
    metric_savings_sub: 'En descuentos verificados',
    global_regions: 'Regiones Globales',
    metric_regions_sub: 'US, UK, AU, CA, DE, FR, IT, NL, PL, ES',
    how_it_works_title: 'Cómo funciona RefPromos para ti',
    pillar_1_title: '1. Pruebas y verificación manual',
    pillar_1_desc: 'Nuestro equipo prueba los códigos en el proceso de pago real antes de publicarlos. Si un código no funciona o ha caducado, se retira inmediatamente.',
    pillar_2_title: '2. 100% Gratis y sin complicaciones',
    pillar_2_desc: 'Creemos que comprar de forma inteligente no debería exigir suscripciones ni registros complejos. Encuentra, copia y aplica cualquier código en 1 clic.',
    pillar_3_title: '3. Asociaciones transparentes',
    pillar_3_desc: 'Cuando compras a través de nuestros enlaces de afiliados, podemos recibir una comisión del comerciante sin ningún coste adicional para ti.',
    ready_to_save_title: '¿Listo para empezar a ahorrar?',
    ready_to_save_desc: 'Explora los cupones y ofertas más populares de las mejores marcas ahora mismo.',

    // Blog Detail & Navigation
    all_shopping_guides: 'Todas las guías de compra',
    mentioned_promo_codes: 'Códigos promocionales y ofertas mencionados',
    related_guides: 'Guías relacionadas',

    // Contact Us
    contact_eyebrow: 'Soporte y consultas',
    contact_title: 'Nos encantaría saber de ti',
    contact_desc: '¿Tienes dudas sobre un código promocional, quieres enviar una oferta o explorar una asociación? Envíanos un mensaje.',
    contact_success_title: '¡Mensaje enviado con éxito!',
    contact_success_desc: 'Gracias por ponerte en contacto con RefPromos. Nuestro equipo suele responder en un plazo de 24 horas laborales.',
    send_another: 'Enviar otro mensaje',
    your_name: 'Tu Nombre *',
    email_address: 'Correo Electrónico *',
    subject_label: 'Asunto',
    general_inquiry: 'Consulta General',
    report_broken: 'Reportar un cupón caducado o no válido',
    merchant_partner: 'Asociación con comercios y marcas',
    press_editorial: 'Consulta de prensa o editorial',
    message_label: 'Mensaje *',
    message_placeholder: 'Describe tu pregunta o sugerencia...',
    sending_label: 'Enviando...',
    send_message: 'Enviar Mensaje',
    email_support: 'Buzones de correo oficiales',
    support_desk: 'Atención al cliente y cupones',
    general_inquiries: 'Consultas generales e información',
    response_times: 'Tiempos de respuesta',
    response_times_desc: 'Nuestro equipo editorial y de verificación opera de lunes a viernes, de 9:00 a 18:00. Las solicitudes se revisan por orden de llegada.',
    for_merchants: 'Para marcas y comercios asociados',
    for_merchants_desc: '¿Quieres incluir tu marca en RefPromos o proporcionar códigos de descuento exclusivos para nuestra comunidad? Escribe a',

    // Privacy Policy
    privacy_eyebrow: 'Legal y Cumplimiento',
    privacy_title: 'Política de Privacidad y Declaración de Afiliados',
    privacy_last_updated: 'Última actualización: Agosto 2026',
    privacy_section_1_title: '1. Introducción y Ámbito',
    privacy_section_1_desc: 'Bienvenido a RefPromos. Nos comprometemos a salvaguardar tu privacidad y garantizar prácticas de información transparentes en refpromos.com.',
    privacy_section_2_title: '2. Declaración de Afiliados (Conformidad FTC)',
    privacy_section_2_desc_1: 'RefPromos es un recurso gratuito financiado mediante asociaciones de afiliados. Cuando realizas una compra a través de nuestros enlaces, podemos recibir una comisión sin coste extra para ti.',
    privacy_section_2_desc_2: 'Nuestra integridad editorial es prioritaria: las comprobaciones y reseñas de códigos son independientes de las comisiones.',
    privacy_section_3_title: '3. Datos que recopilamos',
    privacy_section_3_desc: 'Cumplimos estrictos principios de minimización de datos:',
    privacy_data_non_personal: 'Datos analíticos no personales: Tipo de navegador, sistema operativo, país preferido y marcas de tiempo anonimizadas.',
    privacy_data_ip: 'Direcciones IP: Procesadas mediante hash criptográfico SHA-256 para prevenir fraudes sin identificar a los usuarios.',
    privacy_data_voluntary: 'Datos voluntarios: Tu nombre y correo electrónico al utilizar el formulario de contacto o suscribirte.',
    privacy_section_4_title: '4. Cookies y Tecnologías de Seguimiento',
    privacy_section_4_desc: 'Utilizamos cookies esenciales para recordar tu país seleccionado y gestionar las redirecciones de tiendas asociadas.',
    privacy_section_5_title: '5. Tus Derechos de Privacidad y Borrado de Datos (RGPD)',
    privacy_section_5_desc_1: 'Conforme al RGPD, mantienes el control total sobre tus datos personales:',
    privacy_rights_access: 'Derecho de Acceso: Solicita una copia de tus datos personales registrados.',
    privacy_rights_erasure: 'Derecho al Olvido: Solicita la eliminación definitiva de tu correo y registros.',
    privacy_rights_optout: 'Derecho de Oposición: Cancela la suscripción a comunicaciones en cualquier momento.',
    privacy_section_5_desc_2: 'Para solicitar el borrado automatizado de tus datos, visita /api/privacy/delete-data o contacta con info@refpromos.com.',
    privacy_section_6_title: '6. Seguridad y Almacenamiento de Datos',
    privacy_section_6_desc: 'Aplicamos sólidas medidas de seguridad: hashing con sal para las IP, encriptación bcrypt para contraseñas de administración y cookies seguras HTTP-Only.',
    privacy_sec_hashing: 'Hash con Sal: Las direcciones IP nunca se guardan en texto claro en el disco.',
    privacy_sec_passwords: 'Encriptación de Contraseñas: Bcrypt con alto factor de trabajo para todas las claves de acceso.',
    privacy_sec_cookies: 'Cookies Seguras: Las cookies de sesión son accesibles únicamente vía HTTP-Only y SameSite.',
    privacy_section_7_title: '7. Contacto sobre Privacidad',
    privacy_section_7_desc: 'Para cualquier consulta relacionada con la privacidad, ponte en contacto con nuestro delegado de protección de datos en:',

    // Terms & Conditions
    terms_eyebrow: 'Términos de Servicio',
    terms_title: 'Términos y Condiciones de Uso',
    terms_last_updated: 'Última actualización: Agosto 2026',
    terms_section_1_title: '1. Aceptación de los Términos',
    terms_section_1_desc: 'Al acceder o navegar por RefPromos, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo, por favor cesa el uso de nuestros servicios.',
    terms_section_2_title: '2. Naturaleza de las Ofertas y Códigos de Descuento',
    terms_section_2_desc: 'RefPromos publica cupones de descuento y promociones de comercios asociados. A pesar de nuestras estrictas comprobaciones:',
    terms_rule_1: 'La validez de los cupones, el porcentaje de descuento y los precios están sujetos a cambios a entera discreción del vendedor sin previo aviso.',
    terms_rule_2: 'No garantizamos que todos los descuentos de terceros sean aceptados en todo momento por los comercios.',
    terms_rule_3: 'Todas las transacciones ocurren directamente en el sitio del vendedor correspondiente. RefPromos no gestiona pagos.',
    terms_section_3_title: '3. Derechos de Propiedad Intelectual',
    terms_section_3_desc: 'Todos los contenidos y diseños originales de RefPromos están protegidos por las leyes de derechos de autor. Las marcas de terceros pertenecen a sus propietarios.',
    terms_section_4_title: '4. Limitación de Responsabilidad',
    terms_section_4_desc: 'En la máxima medida permitida por la ley, RefPromos no se hace responsable de daños derivados del uso de ofertas promocionales.',
    terms_section_5_title: '5. Información de Contacto',
    terms_section_5_desc: 'Para consultas legales relacionadas con estos términos, escribe a:',
    footer_affiliate_disclaimer: 'Podemos recibir una comisión por compras realizadas a través de enlaces en este sitio, sin coste adicional para ti.',
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
    pl: '71% zniżki na plan 2-letni + 3 dodatkowe miesiące gratis',
    es: '71% de descuento en el plan de 2 años + 3 meses gratis',
  },
  'Free 8-Piece Luxury Skincare Sample Bag with $45+ Order': {
    en: 'Free 8-Piece Luxury Skincare Sample Bag with $45+ Order',
    de: 'Kostenlose 8-teilige Luxus-Hautpflegetasche ab 45$ Einkaufswert',
    fr: "Trousse de 8 échantillons de soins de luxe offerte dès 45$ d'achat",
    it: 'Borsa di 8 campioni di cura della pelle di lusso in omaggio con 45$+',
    nl: 'Gratis 8-delige luxe huidverzorgingsset bij besteding vanaf 45$',
    pl: 'Darmowa 8-częściowa luksusowa saszetka próbek do pielęgnacji przy zamówieniu od 45$',
    es: 'Bolsa de 8 muestras de lujo para el cuidado de la piel gratis con pedidos de más de 45$',
  },
  '$100 OFF Select Laptops & MacBooks': {
    en: '$100 OFF Select Laptops & MacBooks',
    de: '100$ Rabatt auf ausgewählte Laptops & MacBooks',
    fr: '100$ de réduction sur une sélection de PC portables & MacBooks',
    it: '100$ di sconto su laptop e MacBook selezionati',
    nl: '100$ korting op geselecteerde laptops & MacBooks',
    pl: '100$ zniżki na wybrane laptopy i MacBooki',
    es: '100$ de descuento en portátiles y MacBooks seleccionados',
  },
  '20% OFF First Order with ASOS App': {
    en: '20% OFF First Order with ASOS App',
    de: '20% Rabatt auf die erste Bestellung mit der ASOS-App',
    fr: '20% de réduction sur la 1ère commande avec l’application ASOS',
    it: '20% di sconto sul primo ordine con l’app ASOS',
    nl: '20% korting op de eerste bestelling met de ASOS-app',
    pl: '20% zniżki na pierwsze zamówienie w aplikacji ASOS',
    es: '20% de descuento en el primer pedido con la app ASOS',
  },
  '$15 OFF First Amazon App Order of $30+': {
    en: '$15 OFF First Amazon App Order of $30+',
    de: '15$ Rabatt auf die erste Amazon-App-Bestellung ab 30$',
    fr: '15$ de réduction dès 30$ d’achat sur la 1ère commande Amazon App',
    it: '15$ di sconto sul primo ordine Amazon App da 30$+',
    nl: '15$ korting op de eerste Amazon App bestelling vanaf 30$',
    pl: '15$ zniżki na pierwsze zamówienie w aplikacji Amazon od 30$',
    es: '15$ de descuento en el primer pedido en la app de Amazon desde 30$',
  },
  'Up to 50% OFF Daily Lightning Deals': {
    en: 'Up to 50% OFF Daily Lightning Deals',
    de: 'Bis zu 50% Rabatt auf tägliche Blitzangebote',
    fr: "Jusqu'à 50% de réduction sur les ventes flash du jour",
    it: 'Fino al 50% di sconto sulle offerte lampo del giorno',
    nl: 'Tot 50% korting op dagelijkse bliksemdeals',
    pl: 'Do 50% zniżki na codzienne błyskawiczne okazje',
    es: 'Hasta un 50% de descuento en ofertas flash diarias',
  },
  '30% OFF Summer Styles & Sneakers': {
    en: '30% OFF Summer Styles & Sneakers',
    de: '30% Rabatt auf Sommer-Trends & Sneaker',
    fr: "30% de réduction sur les styles d'été et les baskets",
    it: '30% di sconto su stili estivi e sneaker',
    nl: '30% korting op zomerse stijlen & sneakers',
    pl: '30% zniżki na letnie trendy i sneakersy',
    es: '30% de descuento en moda de verano y zapatillas',
  },
  'Up to 50% OFF Daily Deals & Best Sellers': {
    en: 'Up to 50% OFF Daily Deals & Best Sellers',
    de: 'Bis zu 50% Rabatt auf Tagesangebote & Bestseller',
    fr: "Jusqu'à 50% de réduction sur les offres du jour et best-sellers",
    it: 'Fino al 50% di sconto su offerte del giorno e bestseller',
    nl: 'Tot 50% korting op dagaanbiedingen & bestsellers',
    pl: 'Do 50% zniżki na codzienne okazje i bestsellery',
    es: 'Hasta un 50% de descuento en ofertas diarias y superventas',
  },
  '40% OFF Sitewide Friends & Family Sale': {
    en: '40% OFF Sitewide Friends & Family Sale',
    de: '40% Rabatt auf alles — Freunde & Familie Sale',
    fr: '40% de réduction sur tout le site — Vente Privée',
    it: '40% di sconto su tutto il sito — Saldi Amici & Famiglia',
    nl: '40% korting op de hele site — Vrienden & Familie Sale',
    pl: '40% zniżki na wszystko — Wyprzedaż Friends & Family',
    es: '40% de descuento en toda la web — Venta Amigos y Familia',
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
    pl: 'Gratis',
    es: 'Regalo Gratis',
  },
  'Up to 50% OFF': {
    en: 'Up to 50% OFF',
    de: 'Bis zu 50% Rabatt',
    fr: "Jusqu'à 50% Offert",
    it: 'Fino al 50% Sconto',
    nl: 'Tot 50% Korting',
    pl: 'Do 50% Rabatu',
    es: 'Hasta 50% DTO',
  },
  '71% OFF': {
    en: '71% OFF',
    de: '71% Rabatt',
    fr: '71% de Réduction',
    it: '71% di Sconto',
    nl: '71% Korting',
    pl: '71% Rabatu',
    es: '71% DTO',
  },
  '$100 OFF': {
    en: '$100 OFF',
    de: '100$ Rabatt',
    fr: '100$ de Réduction',
    it: '100$ di Sconto',
    nl: '100$ Korting',
    pl: '100$ Rabatu',
    es: '100$ DTO',
  },
  '20% OFF': {
    en: '20% OFF',
    de: '20% Rabatt',
    fr: '20% de Réduction',
    it: '20% di Sconto',
    nl: '20% Korting',
    pl: '20% Rabatu',
    es: '20% DTO',
  },
  '$15 OFF': {
    en: '$15 OFF',
    de: '15$ Rabatt',
    fr: '15$ de Réduction',
    it: '15$ di Sconto',
    nl: '15$ Korting',
    pl: '15$ Rabatu',
    es: '15$ DTO',
  },
  '30% OFF': {
    en: '30% OFF',
    de: '30% Rabatt',
    fr: '30% de Réduction',
    it: '30% di Sconto',
    nl: '30% Korting',
    pl: '30% Rabatu',
    es: '30% DTO',
  },
  '40% OFF': {
    en: '40% OFF',
    de: '40% Rabatt',
    fr: '40% de Réduction',
    it: '40% di Sconto',
    nl: '40% Korting',
    pl: '40% Rabatu',
    es: '40% DTO',
  },
  'Free Shipping': {
    en: 'Free Shipping',
    de: 'Gratis Versand',
    fr: 'Livraison Gratuite',
    it: 'Spedizione Gratuita',
    nl: 'Gratis Verzending',
    pl: 'Darmowa Dostawa',
    es: 'Envío Gratis',
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
    pl: 'Moda i Odzież',
    es: 'Moda y Ropa',
  },
  'Electronics & Computers': {
    en: 'Electronics & Computers',
    de: 'Elektronik & Computer',
    fr: 'Électronique & Informatique',
    it: 'Elettronica & Computer',
    nl: 'Elektronica & Computers',
    pl: 'Elektronika i Komputery',
    es: 'Electrónica e Informática',
  },
  'Beauty & Skincare': {
    en: 'Beauty & Skincare',
    de: 'Schönheit & Hautpflege',
    fr: 'Beauté & Soins',
    it: 'Bellezza & Cura della Pelle',
    nl: 'Schoonheid & Huidverzorging',
    pl: 'Uroda i Pielęgnacja',
    es: 'Belleza y Cuidado de la Piel',
  },
  'Home & Garden': {
    en: 'Home & Garden',
    de: 'Haus & Garten',
    fr: 'Maison & Jardin',
    it: 'Casa & Giardino',
    nl: 'Huis & Tuin',
    pl: 'Dom i Ogród',
    es: 'Hogar y Jardín',
  },
  'Travel & Flights': {
    en: 'Travel & Flights',
    de: 'Reisen & Flüge',
    fr: 'Voyages & Vols',
    it: 'Viaggi & Voli',
    nl: 'Reizen & Vluchten',
    pl: 'Podróże i Loty',
    es: 'Viajes y Vuelos',
  },
  'Sports & Outdoors': {
    en: 'Sports & Outdoors',
    de: 'Sport & Outdoor',
    fr: 'Sports & Plein Air',
    it: 'Sport & Tempo Libero',
    nl: 'Sport & Buitenactiviteiten',
    pl: 'Sport i Turystyka',
    es: 'Deportes y Aire Libre',
  },
  'Food & Beverages': {
    en: 'Food & Beverages',
    de: 'Essen & Gastronomie',
    fr: 'Alimentation & Boissons',
    it: 'Cibo & Bevande',
    nl: 'Eten & Drinken',
    pl: 'Jedzenie i Napoje',
    es: 'Alimentación y Bebidas',
  },
  'Software & Tech': {
    en: 'Software & Tech',
    de: 'Software & Technik',
    fr: 'Logiciels & High-Tech',
    it: 'Software & Tecnologia',
    nl: 'Software & Technologie',
    pl: 'Oprogramowanie i Nowe Technologie',
    es: 'Software y Tecnología',
  },
  // Blog categories
  'Shopping Guides': {
    en: 'Shopping Guides',
    de: 'Einkaufsratgeber',
    fr: "Guides d'achat",
    it: 'Guide allo shopping',
    nl: 'Winkelgidsen',
    pl: 'Przewodniki Zakupowe',
    es: 'Guías de Compra',
  },
  'Deals & Roundups': {
    en: 'Deals & Roundups',
    de: 'Deals & Übersichten',
    fr: 'Bons plans & Sélections',
    it: 'Offerte & Riassunti',
    nl: 'Deals & Overzichten',
    pl: 'Okazje i Przeglądy',
    es: 'Ofertas y Selecciones',
  },
  'Money Saving Tips': {
    en: 'Money Saving Tips',
    de: 'Spartipps & Tricks',
    fr: 'Astuces d’économie',
    it: 'Consigli di risparmio',
    nl: 'Bespaartips',
    pl: 'Porady Oszczędzania',
    es: 'Consejos de Ahorro',
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
    pl: 'Zniżki na ubrania, buty i markową odzież.',
    es: 'Descuentos en ropa, calzado y prendas de marca.',
  },
  electronics: {
    en: 'Laptops, smartphones, TVs, and gaming gear promos.',
    de: 'Aktionen für Laptops, Smartphones, TVs und Gaming-Equipment.',
    fr: 'Promos sur les PC portables, smartphones, téléviseurs et jeux vidéo.',
    it: 'Promozioni su laptop, smartphone, TV e accessori da gaming.',
    nl: 'Aanbiedingen voor laptops, smartphones, tv’s en gaming-apparatuur.',
    pl: 'Promocje na laptopy, smartfony, telewizory i sprzęt dla graczy.',
    es: 'Promociones en portátiles, smartphones, televisores y gaming.',
  },
  beauty: {
    en: 'Cosmetics, skincare, perfumes, and haircare coupons.',
    de: 'Gutscheine für Kosmetik, Hautpflege, Parfums und Haarpflege.',
    fr: 'Coupons sur les cosmétiques, soins de la peau, parfums et cheveux.',
    it: 'Coupon per cosmetici, cura della pelle, profumi e capelli.',
    nl: 'Kortingsbonnen voor cosmetica, huidverzorging, parfums en haarverzorging.',
    pl: 'Kupony na kosmetyki, pielęgnację skóry, perfumy i produkty do włosów.',
    es: 'Cupones para cosméticos, cuidado de la piel, perfumes y cabello.',
  },
  'home-garden': {
    en: 'Furniture, kitchen appliances, and home decor sales.',
    de: 'Angebote für Möbel, Küchengeräte und Wohndekoration.',
    fr: 'Promotions sur les meubles, électroménager et décoration intérieure.',
    it: 'Saldi su mobili, elettrodomestici per la cucina e arredamento.',
    nl: 'Aanbiedingen voor meubels, keukenapparatuur en woondecoratie.',
    pl: 'Wyprzedaże mebli, sprzętu kuchennego i dekoracji wnętrz.',
    es: 'Rebajas en muebles, electrodomésticos de cocina y decoración.',
  },
  travel: {
    en: 'Hotels, airline tickets, car rentals, and vacation deals.',
    de: 'Deals für Hotels, Flugtickets, Mietwagen und Pauschalreisen.',
    fr: 'Bons plans hôtels, billets d’avion, locations de voiture et séjours.',
    it: 'Offerte per hotel, biglietti aerei, noleggio auto e vacanze.',
    nl: 'Deals voor hotels, vliegtickets, autoverhuur en vakanties.',
    pl: 'Oferty na hotele, bilety lotnicze, wynajem samochodów i wakacje.',
    es: 'Ofertas en hoteles, billetes de avión, alquiler de coches y viajes.',
  },
  sports: {
    en: 'Fitness gear, activewear, camping, and outdoor equipment.',
    de: 'Fitnessgeräte, Sportbekleidung, Camping- und Outdoor-Ausrüstung.',
    fr: 'Équipement de fitness, vêtements de sport, camping et plein air.',
    it: 'Attrezzatura fitness, abbigliamento sportivo, campeggio e outdoor.',
    nl: 'Fitnessapparatuur, sportkleding, camping- en outdoorartikelen.',
    pl: 'Sprzęt fitness, odzież sportowa, kemping i wyposażenie outdoorowe.',
    es: 'Equipamiento de fitness, ropa deportiva, acampada y actividades al aire libre.',
  },
  'food-dining': {
    en: 'Food delivery coupons, meal kits, and dining deals.',
    de: 'Gutscheine für Lieferdienste, Kochboxen und Restaurants.',
    fr: 'Codes promo livraison de repas, paniers repas et restaurants.',
    it: 'Coupon per consegna a domicilio, kit pasto e ristoranti.',
    nl: 'Kortingscodes voor maaltijdbezorging, maaltijdboxen en restaurants.',
    pl: 'Kupony na dostawę jedzenia, zestawy posiłków i restauracje.',
    es: 'Cupones para comida a domicilio, kits de recetas y restaurantes.',
  },
  software: {
    en: 'VPNs, antivirus, cloud storage, and SaaS subscription deals.',
    de: 'Deals für VPNs, Antivirus, Cloud-Speicher und SaaS-Abonnements.',
    fr: 'Promos sur les VPN, antivirus, stockage cloud et logiciels SaaS.',
    it: 'Offerte per VPN, antivirus, cloud storage e abbonamenti SaaS.',
    nl: 'Deals voor VPN’s, antivirus, cloudopslag en SaaS-abonnementen.',
    pl: 'Promocje na VPN, antywirusy, chmurę i subskrypcje SaaS.',
    es: 'Ofertas en VPNs, antivirus, almacenamiento en la nube y suscripciones SaaS.',
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
    pl: 'Najlepsze letnie wyprzedaże i strategie łączenia kuponów, których nie możesz przegapić',
    es: 'Las mejores rebajas de verano y estrategias para combinar cupones que no debes perderte',
  },
  '10 Ways to Save More Online Shopping in 2026': {
    en: '10 Ways to Save More Online Shopping in 2026',
    de: '10 Wege, um 2026 beim Online-Shopping mehr zu sparen',
    fr: '10 façons d’économiser plus lors de vos achats en ligne en 2026',
    it: '10 modi per risparmiare di più sullo shopping online nel 2026',
    nl: '10 manieren om meer te besparen bij online winkelen in 2026',
    pl: '10 sposobów na większe oszczędności podczas zakupów online w 2026 roku',
    es: '10 formas de ahorrar más en compras por internet en 2026',
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
    pl: 'Kompleksowe zestawienie największych obniżek cen w tym sezonie w kategoriach moda, elektronika i podróże.',
    es: 'Un resumen completo de las mayores bajadas de precio de esta temporada en moda, electrónica y viajes.',
  },
  'Discover insider strategies to stack promo codes, avoid hidden checkout fees, and unlock exclusive discounts.': {
    en: 'Discover insider strategies to stack promo codes, avoid hidden checkout fees, and unlock exclusive discounts.',
    de: 'Entdecken Sie Insider-Strategien, um Gutscheincodes zu kombinieren, versteckte Gebühren zu vermeiden und exklusive Rabatte freizuschalten.',
    fr: 'Découvrez des astuces d’initiés pour cumuler les codes promo, éviter les frais cachés et débloquer des remises exclusives.',
    it: 'Scopri strategie da esperti per cumulare codici promozionali, evitare costi nascosti e sbloccare sconti esclusivi.',
    nl: 'Ontdek insiderstrategieën om kortingscodes te combineren, verborgen kosten te vermijden en exclusieve kortingen te ontgrendelen.',
    pl: 'Poznaj sprawdzone strategie łączenia kodów rabatowych, unikania ukrytych opłat i odblokowywania ekskluzywnych zniżek.',
    es: 'Descubre estrategias de expertos para combinar códigos promocionales, evitar costes ocultos y desbloquear descuentos exclusivos.',
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
      pl: 'Recenzja zakupów w Amazon: Jak najlepiej korzystać z codziennych okazji',
      es: 'Reseña de compras en Amazon: Cómo aprovechar al máximo las ofertas diarias',
    },
    summary: {
      en: 'Unbeatable logistics, gigantic catalog, and massive daily Lightning Deal discounts.',
      de: 'Unschlagbare Logistik, riesiges Sortiment und enorme tägliche Rabatte bei Blitzangeboten.',
      fr: 'Logistique imbattable, catalogue gigantesque et remises massives sur les ventes flash quotidiennes.',
      it: 'Logistica imbattibile, catalogo sterminato e grandi sconti giornalieri con le offerte lampo.',
      nl: 'Onverslaanbare logistiek, enorm assortiment en flinke dagelijkse kortingen op bliksemdeals.',
      pl: 'Niezrównana logistyka, gigantyczny katalog produktów i ogromne codzienne zniżki w ofertach błyskawicznych.',
      es: 'Logística inmejorable, catálogo gigantesco y grandes descuentos diarios en ofertas flash.',
    },
  },
  nike: {
    title: {
      en: 'Nike Store Review 2026: Is It Worth Shopping Directly?',
      de: 'Nike Store Bewertung 2026: Lohnt sich der Direkteinkauf?',
      fr: 'Avis Boutique Nike 2026 : Vaut-il le coup d’acheter en direct ?',
      it: 'Recensione Nike Store 2026: Conviene acquistare direttamente?',
      nl: 'Nike Store Review 2026: Is direct kopen de moeite waard?',
      pl: 'Recenzja sklepu Nike 2026: Czy warto kupować bezpośrednio?',
      es: 'Reseña de la tienda Nike 2026: ¿Merece la pena comprar directamente?',
    },
    summary: {
      en: 'Nike is unmatched for build quality, cutting-edge running tech, and generous member perks.',
      de: 'Nike ist unübertroffen bei Verarbeitungsqualität, modernster Lauf-Technologie und großzügigen Mitgliedervorteilen.',
      fr: 'Nike est inégalé en termes de qualité de fabrication, de technologie de pointe et d’avantages membres.',
      it: 'Nike non ha rivali per qualità costruttiva, tecnologie di corsa all’avanguardia e vantaggi per i membri.',
      nl: 'Nike is ongeëvenaard in bouwkwaliteit, geavanceerde hardlooptechnologie en royale ledenvoordelen.',
      pl: 'Nike nie ma sobie równych pod względem jakości wykonania, technologii biegowych i korzyści dla członków.',
      es: 'Nike no tiene rival en calidad de fabricación, tecnología deportiva de vanguardia y ventajas para miembros.',
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
    pl: 'Darmowa dostawa w 1 dzień z Prime',
    es: 'Envío gratis en 1 día con Prime',
  },
  'huge catalog covering all categories': {
    en: 'Huge catalog covering all categories',
    de: 'Riesiger Katalog über alle Kategorien',
    fr: 'Catalogue gigantesque couvrant toutes les catégories',
    it: 'Catalogo enorme su tutte le categorie',
    nl: 'Enorm assortiment in alle categorieën',
    pl: 'Ogromny katalog obejmujący wszystkie kategorie',
    es: 'Enorme catálogo que abarca todas las categorías',
  },
  'free shipping & returns for nike members': {
    en: 'Free shipping & returns for Nike Members',
    de: 'Kostenloser Versand & Rückversand für Nike-Mitglieder',
    fr: 'Livraison et retours gratuits pour les membres Nike',
    it: 'Spedizione e resi gratuiti per i membri Nike',
    nl: 'Gratis verzending & retourneren voor Nike Members',
    pl: 'Darmowa dostawa i zwroty dla członków klubu Nike',
    es: 'Envío y devoluciones gratis para miembros de Nike',
  },
  'exclusive early product drops on the snkrs app': {
    en: 'Exclusive early product drops on the SNKRS app',
    de: 'Exklusive Vorab-Launches in der SNKRS-App',
    fr: 'Lancements de produits exclusifs en avant-première sur l’application SNKRS',
    it: 'Lanci esclusivi in anteprima sull’app SNKRS',
    nl: 'Exclusieve vroege productlanceringen in de SNKRS-app',
    pl: 'Ekskluzywne wczesne premiery produktów w aplikacji SNKRS',
    es: 'Lanzamientos exclusivos anticipados en la aplicación SNKRS',
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
    pl: 'Światowy lider w dziedzinie obuwia sportowego, odzieży treningowej i sprzętu.',
    es: 'Líder mundial en calzado deportivo, ropa de entrenamiento y accesorios.',
  },
  amazon: {
    en: 'The biggest online retailer with millions of daily discounts and Lightning Deals.',
    de: 'Der größte Online-Händler mit Millionen täglichen Rabatten und Blitzangeboten.',
    fr: 'Le plus grand détaillant en ligne avec des millions de réductions et ventes flash.',
    it: 'Il più grande rivenditore online con millions di sconti e offerte lampo giornaliere.',
    nl: 'De grootste online retailer met miljoenen dagelijkse kortingen en bliksemdeals.',
    pl: 'Największy sklep internetowy z milionami codziennych zniżek i ofert błyskawicznych.',
    es: 'El mayor comercio online con millones de descuentos diarios y ofertas flash.',
  },
  asos: {
    en: 'Destination for fashion-loving 20-somethings offering 850+ top clothing brands.',
    de: 'Die Modedestination für Trendsetter mit über 850 beliebten Modemarken.',
    fr: 'La destination mode des jeunes avec plus de 850 marques de vêtements tendance.',
    it: 'La destinazione per gli amanti della moda con oltre 850 marchi di tendenza.',
    nl: 'De ultieme modebestemming met meer dan 850 toonaangevende kledingmerken.',
    pl: 'Ulubione miejsce modowe młodych ludzi, oferujące ponad 850 wiodących marek.',
    es: 'El destino de moda favorito con más de 850 marcas de ropa líderes.',
  },
  sephora: {
    en: 'Premier beauty destination with prestige cosmetics, skincare, and fragrance brands.',
    de: 'Erstklassige Beauty-Destination mit renommierten Kosmetik-, Hautpflege- und Duftmarken.',
    fr: 'Destination beauté d’exception proposant cosmétiques prestigieux, soins et parfums.',
    it: 'La destinazione beauty d’eccellenza con cosmetici di prestigio, skincare e fragranze.',
    nl: 'Dé toonaangevende beautybestemming met prestigieuze cosmetica, verzorging en parfums.',
    pl: 'Wiodąca sieć perfumerii z luksusowymi kosmetykami, pielęgnacją i zapachami.',
    es: 'Destino de belleza de referencia con cosméticos de lujo, cuidado facial y fragancias.',
  },
  apple: {
    en: 'Iconic consumer electronics, MacBooks, iPhones, iPads, and digital services.',
    de: 'Ikonische Unterhaltungselektronik, MacBooks, iPhones, iPads und digitale Services.',
    fr: 'Électronique grand public emblématique, MacBooks, iPhones, iPads et services.',
    it: 'Elettronica di consumo iconica, MacBook, iPhone, iPad e servizi digitali.',
    nl: 'Toonaangevende consumentenelektronica, MacBooks, iPhones, iPads en digitale diensten.',
    pl: 'Kultowa elektronika użytkowa, komputery MacBook, telefony iPhone, iPady i usługi cyfrowe.',
    es: 'Electrónica icónica de consumo, MacBook, iPhone, iPad y servicios digitales.',
  },
  'best-buy': {
    en: 'Leading technology retailer specializing in TVs, computers, appliances, and smart home.',
    de: 'Führender Technik-Händler für Fernseher, Computer, Haushaltsgeräte und Smart Home.',
    fr: 'Spécialiste de la technologie en téléviseurs, ordinateurs, électroménager et domotique.',
    it: 'Rivenditore leader per TV, computer, elettrodomestici e tecnologia smart home.',
    nl: 'Toonaangevende technologieverkoper gespecialiseerd in tv’s, computers en smart home.',
    pl: 'Wiodący sprzedawca elektroniki specjalizujący się w telewizorach, komputerach i smart home.',
    es: 'Comercio líder en tecnología especializado en televisores, ordenadores y domótica.',
  },
  'booking.com': {
    en: 'Global travel accommodation platform with millions of hotels, flights, and car rentals.',
    de: 'Globale Reiseplattform mit Millionen Hotels, Flügen und Mietwagenangeboten.',
    fr: 'Plateforme mondiale d’hébergement avec des millions d’hôtels, vols et locations.',
    it: 'Piattaforma di viaggi globale con milioni di hotel, voli e noleggi auto.',
    nl: 'Wereldwijd reisplatform met miljoenen hotels, vluchten en autoverhuur.',
    pl: 'Globalna platforma rezerwacji z milionami hoteli, lotów i wynajmu samochodów.',
    es: 'Plataforma global de viajes con millones de hoteles, vuelos y coches de alquiler.',
  },
  nordvpn: {
    en: 'Top-tier cybersecurity and VPN provider with high-speed encryption worldwide.',
    de: 'Erstklassiger Cybersicherheits- und VPN-Anbieter mit weltweiter Hochgeschwindigkeits-Verschlüsselung.',
    fr: 'Fournisseur VPN et cybersécurité de premier plan avec chiffrement ultra-rapide.',
    it: 'Provider leader di cybersecurity e VPN con crittografia ad alta velocità in tutto il mondo.',
    nl: 'Hoogwaardige cyberbeveiligings- en VPN-provider met wereldwijde snelle versleuteling.',
    pl: 'Najwyżej oceniany dostawca cyberbezpieczeństwa i VPN z szybkim szyfrowaniem na całym świecie.',
    es: 'Proveedor líder de ciberseguridad y VPN con cifrado de alta velocidad en todo el mundo.',
  },
};

export function getLocalizedStoreDescription(storeSlug: string, fallback: string | null | undefined, locale: Locale): string {
  const item = LOCALIZED_STORE_DESCRIPTIONS[storeSlug.toLowerCase().trim()];
  if (item && item[locale]) {
    return item[locale];
  }
  return fallback || '';
}


// Localized full body content for seeded blog articles
const LOCALIZED_BLOG_CONTENT: Record<string, Record<Locale, string>> = {
  '10-ways-to-save-more-online-shopping-2026': {
    en: `# 10 Smart Ways to Save Money Online in 2026

Online shopping doesn't have to break your wallet. With a few smart shopping habits, you can routinely save 20% to 50% on every order.

## 1. Always Check for Verified Promo Codes First
Before clicking the checkout button, take 30 seconds to check RefPromos for active coupons. A simple code like \`SAVE25\` or \`FREESHIP\` can instantly drop your order total.

## 2. Leverage First-Order Mobile App Promos
Many major retailers like ASOS, Amazon, and Nike offer higher discount rates (15% to 20% off) exclusively on their mobile apps.

## 3. Stack Promo Codes with Clearance Sales
The greatest savings occur when you apply a promo code on top of an existing clearance or seasonal sale item.

## 4. Join Free Brand Loyalty Programs
Most stores offer free loyalty programs (e.g., Nike Membership or Sephora Beauty Insider) that provide free standard shipping with zero minimum spend requirements.`,
    de: `# 10 Clevere Spartipps für Online-Einkäufe im Jahr 2026

Online-Shopping muss das Budget nicht sprengen. Mit ein paar cleveren Einkaufsgewohnheiten können Sie bei fast jeder Bestellung 20 % bis 50 % sparen.

## 1. Immer zuerst nach geprüften Gutscheincodes suchen
Bevor Sie zur Kasse gehen, nehmen Sie sich 30 Sekunden Zeit und prüfen Sie RefPromos auf aktive Gutscheine. Ein einfacher Code wie \`SAVE25\` oder \`FREESHIP\` senkt die Gesamtsumme sofort.

## 2. Neukunden-Rabatte in mobilen Apps nutzen
Viele große Händler wie ASOS, Amazon und Nike bieten exklusiv in ihren mobilen Apps höhere Rabattsätze (15 % bis 20 % Rabatt) an.

## 3. Gutscheincodes mit Sale-Angeboten kombinieren
Die größten Ersparnisse erzielen Sie, wenn Sie einen Gutscheincode auf bereits reduzierte Artikel im Ausverkauf oder Saison-Sale anwenden.

## 4. Kostenlosen Treueprogrammen von Marken beitreten
Die meisten Shops bieten kostenlose Treueprogramme (z. B. Nike Membership oder Sephora Beauty Insider) an, die kostenlosen Standardversand ohne Mindestbestellwert bieten.`,
    fr: `# 10 Astuces Malin pour Économiser de l'Argent en Ligne en 2026

Le shopping en ligne ne doit pas ruiner votre portefeuille. Avec quelques bonnes habitudes d'achat, vous pouvez facilement économiser de 20 % à 50 % sur chaque commande.

## 1. Vérifiez toujours les codes promo actifs avant de payer
Avant de cliquer sur le bouton de paiement, prenez 30 secondes pour vérifier les bons plans sur RefPromos. Un simple code comme \`SAVE25\` ou \`FREESHIP\` peut immédiatement réduire le montant total de votre panier.

## 2. Profitez des remises exclusives sur les applications mobiles
De nombreux grands détaillants comme ASOS, Amazon et Nike proposent des taux de réduction plus avantageux (15 % à 20 % de réduction) réservés à leurs applications pour smartphones.

## 3. Cumulez les codes promo avec les soldes et déstockages
Les économies les plus spectaculaires sont réalisées lorsque vous appliquez un code de réduction sur un article déjà remisé en période de soldes ou de fin de série.

## 4. Rejoignez gratuitement les programmes de fidélité des marques
La majorité des boutiques proposent des programmes membres gratuits (par ex. Nike Membership ou Sephora Beauty Insider) offrant la livraison gratuite sans minimum d'achat.`,
    it: `# 10 Strategie Intelligenti per Risparmiare Online nel 2026

Lo shopping online non deve prosciugare il tuo conto in banca. Con poche e semplici abitudini, puoi risparmiare regolarmente tra il 20% e il 50% su ogni ordine.

## 1. Controlla sempre i codici sconto verificati prima del checkout
Prima di procedere al pagamento, dedica 30 secondi a verificare su RefPromos se sono disponibili coupon attivi. Un semplice codice promozionale come \`SAVE25\` o \`FREESHIP\` ridurrà all'istante il totale del tuo ordine.

## 2. Sfrutta le promozioni per il primo ordine sulle app mobili
Molti grandi brand come ASOS, Amazon e Nike offrono sconti esclusivi e percentuali più alte (dal 15% al 20% in meno) a chi acquista dalle loro app mobili.

## 3. Cumula i codici promozionali con gli sconti di fine stagione
Il risparmio maggiore si ottiene applicando un codice coupon sopra ad articoli già scontati della sezione outlet o durante i saldi stagionali.

## 4. Iscriviti ai programmi fedeltà gratuiti dei marchi
La maggior parte dei negozi offre programmi fedeltà a costo zero (come Nike Membership o Sephora Beauty Insider) che garantiscono spedizione standard gratuita senza alcun importo minimo di spesa.`,
    nl: `# 10 Slimme Manieren om Online Geld te Besparen in 2026

Online winkelen hoeft niet duur te zijn. Met een paar slimme winkelgewoonten kun je standaard 20% tot 50% besparen op elke bestelling.

## 1. Controleer altijd eerst op geverifieerde kortingscodes
Neem voordat je afrekent 30 seconden de tijd om RefPromos te raadplegen voor actieve kortingscodes. Een eenvoudige code zoals \`SAVE25\` of \`FREESHIP\` verlaagt direct je totaalbedrag.

## 2. Benut app-kortingen voor je eerste bestelling
Veel grote retailers zoals ASOS, Amazon en Nike bieden exclusieve kortingspercentages (15% tot 20% korting) speciaal voor bestellingen via hun mobiele app.

## 3. Combineer actiecodes met sale en opruiming
De allerhoogste besparingen behaal je door een kortingscode toe te passen bovenop een product dat al in de opruiming of seizoenssale is afgeprijsd.

## 4. Meld je aan voor gratis loyaliteitsprogramma's
Veel winkels bieden gratis lidmaatschappen aan (zoals Nike Membership of Sephora Beauty Insider) waarmee je gratis standaardverzending krijgt zonder minimum bestelbedrag.`,
    pl: `# 10 Sprytnych Sposobów na Oszczędzanie Pieniędzy Online w 2026 Roku

Zakupy przez internet nie muszą drenować Twojego portfela. Dzięki kilku prostym nawykom zakupowym możesz rutynowo oszczędzać od 20% do nawet 50% na każdym zamówieniu.

## 1. Zawsze najpierw sprawdź zweryfikowane kody promocyjne
Przed kliknięciem przycisku zapłaty poświęć 30 sekund na sprawdzenie aktywnych kodów na RefPromos. Prosty kod rabatowy, taki jak \`SAVE25\` czy \`FREESHIP\`, potrafi natychmiast obniżyć łączną kwotę zamówienia.

## 2. Wykorzystaj promocje na pierwsze zamówienie w aplikacjach mobilnych
Wielu czołowych sprzedawców, takich jak ASOS, Amazon czy Nike, oferuje wyższe rabaty (od 15% do 20% zniżki) wyłącznie użytkownikom swoich aplikacji na telefon.

## 3. Łącz kody rabatowe z wyprzedażami
Największe korzyści finansowe osiąga się wtedy, gdy połączysz aktywny kod promocyjny z produktem już przecenionym w ramach sezonowej wyprzedaży lub outletu.

## 4. Dołącz do bezpłatnych programów lojalnościowych marek
Większość znanych marek oferuje bezpłatne programy klubowe (np. Nike Membership czy Sephora Beauty Insider), które zapewniają darmową standardową dostawę bez minimalnej wartości koszyka.`,
    es: `# 10 Formas Inteligentes de Ahorrar Dinero al Comprar por Internet en 2026

Comprar online no tiene por qué arruinar tu bolsillo. Con unos pocos hábitos de compra inteligentes, puedes ahorrar habitualmente entre un 20% y un 50% en cada pedido.

## 1. Comprueba siempre los códigos promocionales verificados antes de pagar
Antes de pulsar el botón de finalizar compra, tómate 30 segundos para revisar los cupones activos en RefPromos. Un código tan sencillo como \`SAVE25\` o \`FREESHIP\` puede reducir de inmediato el total de tu cesta.

## 2. Aprovecha los descuentos por primer pedido en aplicaciones móviles
Muchas de las principales tiendas, como ASOS, Amazon y Nike, ofrecen mayores descuentos (del 15% al 20% de rebaja) de forma exclusiva a través de sus apps móviles.

## 3. Combina códigos descuento con artículos en liquidación o rebajas
El mayor ahorro posible se consigue al aplicar un cupón descuento sobre un artículo que ya cuenta con una rebaja previa de temporada o en outlet.

## 4. Únete gratis a los programas de fidelización de las marcas
La gran mayoría de marcas cuentan con programas para miembros 100% gratuitos (como Nike Membership o Sephora Beauty Insider) que incluyen envío estándar gratuito sin importe mínimo de compra.`,
  },
  'best-summer-sales-coupon-stacking-guide': {
    en: `# Best Summer Sales & Coupon Stacking Strategies

Summer is one of the premier shopping periods of the year. From mid-season fashion markdowns to 4th of July tech doorbusters, here is how you can maximize every dollar.

## Top Retailers with Massive Summer Markdowns:
- **Nike**: Up to 40% off summer running apparel and lifestyle sneakers.
- **ASOS**: Clearance discounts up to 70% off seasonal swimwear and dresses.
- **Best Buy**: Laptops and gaming monitor doorbusters.`,
    de: `# Die besten Sommer-Sales & Strategien zur Gutschein-Kombination

Der Sommer ist eine der attraktivsten Einkaufszeiten des Jahres. Von Rabatten zur Saisonmitte bis hin zu spektakulären Technik-Angeboten – so holen Sie das Maximum aus jedem Euro heraus.

## Top-Händler mit riesigen Sommer-Rabatten:
- **Nike**: Bis zu 40 % Rabatt auf Sommer-Laufbekleidung und Lifestyle-Sneaker.
- **ASOS**: Bis zu 70 % Ausverkaufsrabatt auf saisonale Bademode und Kleider.
- **Best Buy**: Spitzenangebote für Laptops und Gaming-Monitore.`,
    fr: `# Les Meilleurs Soldes d’Été & Stratégies pour Cumuler les Codes Promo

L’été est l’une des périodes shopping les plus avantageuses de l’année. Des démarques de mi-saison aux promotions exceptionnelles sur la tech, découvrez comment optimiser chaque euro dépensé.

## Les Meilleurs Marchands avec des Soldes Massifs :
- **Nike** : Jusqu’à 40 % de réduction sur les tenues de running et les baskets tendance d’été.
- **ASOS** : Jusqu’à 70 % de remise en déstockage sur les maillots de bain et robes de saison.
- **Best Buy** : Offres imbattables sur les ordinateurs portables et moniteurs gaming.`,
    it: `# I Migliori Saldi Estivi & Strategie per Cumulare i Coupon

L'estate è uno dei momenti più propizi dell'anno per fare acquisti vantaggiosi. Dai ribassi di metà stagione alle offerte speciali sull'elettronica, ecco come ottenere il massimo valore da ogni euro.

## I Migliori Negozi con Grandi Saldi Estivi:
- **Nike**: Fino al 40% di sconto su abbigliamento da corsa e sneaker per l'estate.
- **ASOS**: Saldi fino al 70% su costumi da bagno e abiti di stagione.
- **Best Buy**: Occasioni imperdibili su computer portatili e monitor per gaming.`,
    nl: `# De Beste Zomersales & Strategieën om Kortingscodes te Combineren

De zomer is een van de aantrekkelijkste winkelperiodes van het jaar. Van prijsverlagingen halverwege het seizoen tot flinke tech-aanbiedingen: zo haal je het meeste uit elke euro.

## Topwinkels met Enorme Zomerkortingen:
- **Nike**: Tot 40% korting op zomerse hardloopkleding en populaire sneakers.
- **ASOS**: Opruimingskortingen tot 70% op seizoensgebonden badmode en jurken.
- **Best Buy**: Topdeals voor laptops en gaming monitoren.`,
    pl: `# Najlepsze Letnie Wyprzedaże i Strategie Łączenia Kuponów

Lato to jeden z najgorętszych okresów zakupowych w roku. Od śródsezonowych obniżek odzieży po wielkie okazje na elektronikę – podpowiadamy, jak wyciągnąć maksimum z każdej wydanej złotówki.

## Najlepsi Sprzedawcy z Potężnymi Letnimi Rabatami:
- **Nike**: Do 40% zniżki na letnią odzież biegową i sneakersy lifestyle.
- **ASOS**: Wyprzedaż do 70% na stroje kąpielowe i letnie sukienki.
- **Best Buy**: Wyjątkowe okazje na laptopy oraz monitory gamingowe.`,
    es: `# Las Mejores Rebajas de Verano & Estrategias para Combinar Cupones

El verano es uno de los mejores periodos de compras de todo el año. Desde las rebajas de mitad de temporada en moda hasta las mejores gangas en electrónica, aquí te explicamos cómo exprimir al máximo cada euro.

## Principales Tiendas con Grandes Rebajas de Verano:
- **Nike**: Hasta un 40% de descuento en ropa de running de verano y zapatillas deportivas.
- **ASOS**: Descuentos de liquidación de hasta el 70% en bañadores, bikinis y vestidos de temporada.
- **Best Buy**: Grandes chollos en portátiles y monitores para videojuegos.`,
  },
};

export function getLocalizedBlogContent(slug: string, fallback: string, locale: Locale): string {
  if (!slug) return fallback;
  const normalized = slug.toLowerCase().trim();
  const entry = LOCALIZED_BLOG_CONTENT[normalized];
  if (entry && entry[locale]) {
    return entry[locale];
  }
  return fallback;
}
