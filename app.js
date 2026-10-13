// ============================================================================
// HANUMAN ESTATES - LUXURY REAL ESTATE & REAL ESTATE INSIGHTS ENGINE
// ============================================================================

// Global Application State & Route Router
let appState = {
  currentRoute: "home", // "home" | "blog" | "article"
  scrolled: false,
  mobileMenuOpen: false,
  filterType: "All",
  filterPurpose: "All",
  filterLocation: "All",
  filterBudget: "All",
  heroPurpose: "Buy",
  heroType: "All",
  lightboxImg: null,
  activePropertyModal: null,
  chatOpen: false,
  formSubmitting: false,
  formSuccess: false,
  formErrors: {},
  chatMessages: [
    {
      sender: "bot",
      text: "Namaste! Welcome to Hanuman Estates. I am your AI Property Concierge. How can I assist you with your luxury property search or real estate marketing inquiries today?"
    }
  ],
  expandedFaqs: { 0: true } // First FAQ expanded by default
};

// ============================================================================
// DATA SOURCES
// ============================================================================

// Property Listings Data
const PROPERTIES_DATA = [
  {
    id: 1,
    title: "The Grand Regal Villa",
    location: "Palm Meadows, Whitefield, Bangalore",
    type: "Villa",
    purpose: "Buy",
    price: "₹ 5.85 Cr",
    numericPrice: 58500000,
    area: "4,600 sq.ft",
    beds: 5,
    baths: 5,
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
    description: "Architectural masterpiece with private infinity pool, Italian marble flooring, and smart home automation."
  },
  {
    id: 2,
    title: "Skyline Panorama Penthouse",
    location: "Marine Drive, Nariman Point, Mumbai",
    type: "Penthouse",
    purpose: "Buy",
    price: "₹ 14.5 Cr",
    numericPrice: 145000000,
    area: "5,800 sq.ft",
    beds: 4,
    baths: 5,
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    description: "Panoramic Arabian sea views, private sundeck, dedicated elevators, and elite concierge services."
  },
  {
    id: 3,
    title: "Eden Gardens Luxury Apartment",
    location: "Golf Course Extension Road, Gurgaon",
    type: "Apartment",
    purpose: "Rent",
    price: "₹ 1.85 Lakh / mo",
    numericPrice: 185000,
    area: "2,950 sq.ft",
    beds: 3,
    baths: 3,
    tag: "Verified",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    description: "Fully furnished designer residence with clubhouse access, tennis courts, and 24/7 high-tier security."
  },
  {
    id: 4,
    title: "Prestige Cyber Tower Suites",
    location: "HITEC City, Madhapur, Hyderabad",
    type: "Commercial",
    purpose: "Rent",
    price: "₹ 3.2 Lakh / mo",
    numericPrice: 320000,
    area: "3,800 sq.ft",
    beds: "Grade A",
    baths: "Centrally AC",
    tag: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    description: "Plug-and-play modern corporate office space in tech hub with dedicated parking & 100% power backup."
  },
  {
    id: 5,
    title: "Serene Green Valley Estate Plot",
    location: "Devanahalli, North Bangalore",
    type: "Plot",
    purpose: "Buy",
    price: "₹ 1.25 Cr",
    numericPrice: 12500000,
    area: "3,200 sq.ft",
    beds: "Gated",
    baths: "BMRDA Approved",
    tag: "Investment",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    description: "Premium villa plot in an eco-sustainable gated community close to the Kempegowda International Airport."
  },
  {
    id: 6,
    title: "The Solitaire Waterfront Villa",
    location: "Alibaug Coastline, Maharashtra",
    type: "Villa",
    purpose: "Buy",
    price: "₹ 9.2 Cr",
    numericPrice: 92000000,
    area: "6,200 sq.ft",
    beds: 6,
    baths: 6,
    tag: "Waterfront",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    description: "Private beach access, landscaped tropical gardens, private pool, and solar-powered smart utilities."
  }
];

// Gallery Showcase Data
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Private Courtyard Villa",
    category: "Residential Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    span: "span-2"
  },
  {
    id: 2,
    title: "Modern Minimalist Living",
    category: "Interior Architecture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    span: ""
  },
  {
    id: 3,
    title: "Sky Penthouse Lounge",
    category: "Penthouse",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    span: ""
  },
  {
    id: 4,
    title: "Metropolitan Business Hub",
    category: "Commercial Spaces",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    span: ""
  },
  {
    id: 5,
    title: "Verdant Sunset Terraces",
    category: "Landscape & Garden",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    span: ""
  },
  {
    id: 6,
    title: "Luxury Infinity Pool Villa",
    category: "Signature Villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    span: "span-2"
  }
];

// Services Data
const SERVICES = [
  {
    id: 1,
    icon: "fa-solid fa-house-chimney",
    title: "Residential Property Sales",
    desc: "Curated collection of ultra-luxury apartments, villas, and independent houses with end-to-end legal title verification."
  },
  {
    id: 2,
    icon: "fa-solid fa-key",
    title: "Property Rentals",
    desc: "Premium rental advisory for executive tenants, diplomats, and families seeking high-end living spaces."
  },
  {
    id: 3,
    icon: "fa-solid fa-building",
    title: "Commercial Properties",
    desc: "Grade-A office tech parks, boutique retail spaces, and co-working floors with high rental yield potentials."
  },
  {
    id: 4,
    icon: "fa-solid fa-map-location-dot",
    title: "Land & Plot Enquiries",
    desc: "Clear-title residential layouts, agricultural holdings, and industrial plots in prime growth corridors."
  },
  {
    id: 5,
    icon: "fa-solid fa-handshake-angle",
    title: "Property Consultation",
    desc: "Strategic portfolio management, asset valuation, market trends analysis, and taxation advisory."
  },
  {
    id: 6,
    icon: "fa-solid fa-bullhorn",
    title: "Property Listing Assistance",
    desc: "Professional photography, digital showcase, high-net-worth client matching, and discreet sale negotiations."
  }
];

// Testimonials Data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh & Sunita Mehra",
    role: "Villa Owners, Bangalore",
    rating: 5,
    comment: "Hanuman Estates made our search for a luxury home completely effortless. Their dedication to transparency, document verification, and personalised tours was truly world-class.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Vikram Singhania",
    role: "Managing Director, Singhania Tech",
    rating: 5,
    comment: "Finding a Grade-A commercial office with 200+ workstations was time-sensitive for us. The Hanuman Estates corporate team executed the lease negotiation flawlessly in 10 days.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Dr. Ananya Roy",
    role: "Penthouse Buyer, Mumbai",
    rating: 5,
    comment: "Extremely discreet, polite, and detail-oriented. They didn't just show me properties; they understood my lifestyle aspirations and found the perfect sea-view penthouse.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  }
];

// Blog Posts Data
const BLOG_POSTS = [
  {
    id: "lead-generation-engine",
    title: "Digital Marketing for Real Estate: Turn Your Landing Page into a Lead Generation Engine with Hanuman Estates",
    author: "Pranathi",
    business: "Hanuman Estates",
    readTime: "7 min read",
    date: "October 14, 2026",
    badge: "Featured Guide",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Learn how Hanuman Estates builds a complete real estate digital marketing strategy, from understanding four core buyer personas to keyword research, local SEO, high-converting landing pages, and analytics tracking."
  },
  {
    id: "prime-location-advisory",
    title: "How to Choose the Right Property: Architectural Integrity & Clear Legal Title Verification",
    author: "Hanuman Advisory Team",
    business: "Hanuman Estates",
    readTime: "5 min read",
    date: "October 10, 2026",
    badge: "Buyer Advisory",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Essential considerations for luxury property buyers: evaluating growth corridors, checking municipal zoning clearances, and ensuring long-term generational asset appreciation."
  },
  {
    id: "luxury-villa-trends",
    title: "Modern Minimalist Living: Sustainable Architecture Trends in Luxury Indian Villas",
    author: "Hanuman Design Desk",
    business: "Hanuman Estates",
    readTime: "4 min read",
    date: "October 05, 2026",
    badge: "Design Trends",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Discover how contemporary home automation, natural ventilation corridors, and solar micro-utilities are redefining bespoke villas across major metropolitan suburbs."
  }
];

// FAQs based directly on PDF Report
const ARTICLE_FAQS = [
  {
    q: "Why is digital marketing important for real estate?",
    a: "Most buyers search online first. Digital marketing helps a property business appear in front of them and guides them to enquire with trustworthy information."
  },
  {
    q: "What is local SEO for real estate?",
    a: "It improves visibility for location-based searches using an accurate Google Business Profile, local keywords (such as flats for sale in [City] or apartments in [Locality]), and genuine customer reviews."
  },
  {
    q: "What makes a good real estate landing page?",
    a: "A clear headline, genuine images, floor plans, trust elements, a simple low-friction enquiry form, and fast, mobile-friendly design."
  },
  {
    q: "Which ads work best for property lead generation?",
    a: "Google Search Ads capture active buyers searching with high intent, while social media ads build awareness, and remarketing brings interested visitors back."
  },
  {
    q: "How long does real estate SEO take?",
    a: "It is a long-term organic effort that usually takes some months to build compounding authority. Targeted ads can bring visitors sooner while SEO grows."
  },
  {
    q: "How do I know if my real estate marketing is working?",
    a: "Track website traffic, conversion rate, cost per lead, qualified leads, and site visit bookings, rather than vanity metrics like raw clicks alone."
  }
];

// AI Concierge Knowledge Base
const AI_KNOWLEDGE = {
  greetings: [
    "Hello! Welcome to Hanuman Estates. How may I assist you with your luxury property search or real estate marketing inquiries today?",
    "Namaste! I am your Hanuman Estates AI Concierge. Are you looking to explore luxury properties or learn about our digital real estate insights?"
  ],
  pricing: "Our residential offerings start from ₹ 1.25 Cr for gated plots up to ₹ 14.5+ Cr for sea-facing penthouses and luxury estates. Rentals range from ₹ 1.85 Lakh/mo to ₹ 3.5 Lakh/mo.",
  services: "Hanuman Estates provides: 1) Residential Property Sales, 2) Luxury Rentals, 3) Commercial Leasing, 4) Land & Plot Enquiries, 5) Real Estate Investment Consultation, and 6) Premium Listing Assistance.",
  contact: "You can reach our senior advisors at +91 98765 43210 or email us at contact@hanumanestates.com. Our headquarters are located at 45 Luxury Boulevard, Indiranagar, Bangalore.",
  blog: "We have published an in-depth SEO guide: 'Digital Marketing for Real Estate: Turn Your Landing Page into a Lead Generation Engine with Hanuman Estates' by Pranathi. It covers buyer personas, keyword research, local SEO, landing page architecture, and advertising strategies. Click 'Blog' in our navigation to read it!",
  fallback: "Thank you for asking. To provide you with exact bespoke options tailored to your criteria, would you like our senior property specialist to call you? You can also fill out our Enquiry Form."
};

function getAiBotResponse(userText) {
  const q = userText.toLowerCase();
  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("namaste")) {
    return AI_KNOWLEDGE.greetings[Math.floor(Math.random() * AI_KNOWLEDGE.greetings.length)];
  }
  if (q.includes("blog") || q.includes("article") || q.includes("seo") || q.includes("digital marketing") || q.includes("lead generation") || q.includes("landing page")) {
    return AI_KNOWLEDGE.blog;
  }
  if (q.includes("property") || q.includes("villa") || q.includes("apartment") || q.includes("flat") || q.includes("penthouse") || q.includes("commercial") || q.includes("plot")) {
    return "We currently have premier properties available including The Grand Regal Villa in Bangalore, Skyline Panorama Penthouse in Mumbai, and Cyber Tower Suites in Hyderabad. You can filter properties directly on our website or let me know your preferred city!";
  }
  if (q.includes("price") || q.includes("budget") || q.includes("cost") || q.includes("rate")) {
    return AI_KNOWLEDGE.pricing + " Would you like to schedule an advisory consultation or submit a budget preference?";
  }
  if (q.includes("service") || q.includes("what do you do") || q.includes("help")) {
    return AI_KNOWLEDGE.services;
  }
  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("address") || q.includes("location") || q.includes("office")) {
    return AI_KNOWLEDGE.contact;
  }
  if (q.includes("rent") || q.includes("lease")) {
    return "Yes! We represent high-end rental apartments and corporate offices starting from ₹ 1.85 Lakh/mo. Check our 'Rent' filter in the Featured Properties section!";
  }
  if (q.includes("buy") || q.includes("purchase")) {
    return "We have clear-title luxury villas, penthouses, and gated plots available for purchase. You can click 'Enquire About This Property' on any card to request an immediate private viewing.";
  }
  return AI_KNOWLEDGE.fallback;
}

// ============================================================================
// ROUTING & NAVIGATION
// ============================================================================

function navigateTo(route, targetId) {
  appState.currentRoute = route;
  appState.mobileMenuOpen = false;

  // Update URL hash for clean bookmarking & SEO
  if (route === "home") {
    window.location.hash = targetId ? targetId : "home";
    document.title = "Hanuman Estates | Luxury Real Estate & Premium Properties";
  } else if (route === "blog") {
    window.location.hash = "blog";
    document.title = "Real Estate Insights & Guides | Hanuman Estates Blog";
  } else if (route === "article") {
    window.location.hash = "article";
    document.title = "Digital Marketing for Real Estate: Turn Your Landing Page into a Lead Generation Engine | Hanuman Estates";
  }

  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (targetId && route === "home") {
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

function handleHashChange() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "blog") {
    appState.currentRoute = "blog";
  } else if (hash === "article") {
    appState.currentRoute = "article";
  } else {
    appState.currentRoute = "home";
  }
  renderApp();
}

window.addEventListener("hashchange", handleHashChange);

// Navigation UI helpers
function toggleMobileMenu() {
  appState.mobileMenuOpen = !appState.mobileMenuOpen;
  renderApp();
}

function closeMobileMenu() {
  if (appState.mobileMenuOpen) {
    appState.mobileMenuOpen = false;
    renderApp();
  }
}

function toggleFaq(index) {
  appState.expandedFaqs[index] = !appState.expandedFaqs[index];
  renderApp();
}

// ============================================================================
// TEMPLATE SECTIONS
// ============================================================================

// Header & Navigation
function renderHeader() {
  return `
    <header class="header-nav ${appState.scrolled ? "scrolled" : ""}" id="main-header">
      <div class="container nav-container">
        <a href="#home" class="brand-logo" onclick="navigateTo('home'); return false;" aria-label="Hanuman Estates Home">
          <div class="logo-icon"><i class="fa-solid fa-hotel"></i></div>
          <div class="brand-text">
            Hanuman <span>Estates</span>
            <span class="brand-sub">Luxury Real Estate</span>
          </div>
        </a>

        <nav>
          <ul class="nav-links ${appState.mobileMenuOpen ? "open" : ""}" id="nav-links">
            <li><a href="#home" class="nav-link ${appState.currentRoute === "home" ? "active" : ""}" onclick="navigateTo('home'); return false;">Home</a></li>
            <li><a href="#about" class="nav-link" onclick="navigateTo('home', 'about'); return false;">About Us</a></li>
            <li><a href="#properties" class="nav-link" onclick="navigateTo('home', 'properties'); return false;">Properties</a></li>
            <li><a href="#services" class="nav-link" onclick="navigateTo('home', 'services'); return false;">Services</a></li>
            <li><a href="#gallery" class="nav-link" onclick="navigateTo('home', 'gallery'); return false;">Gallery</a></li>
            <li><a href="#blog" class="nav-link ${appState.currentRoute === "blog" || appState.currentRoute === "article" ? "active" : ""}" onclick="navigateTo('blog'); return false;">Blog</a></li>
            <li><a href="#testimonials" class="nav-link" onclick="navigateTo('home', 'testimonials'); return false;">Testimonials</a></li>
            <li><a href="#contact" class="nav-link" onclick="navigateTo('home', 'contact'); return false;">Contact</a></li>
          </ul>
        </nav>

        <div class="nav-cta-group">
          <a href="#enquiry" onclick="navigateTo('home', 'enquiry'); return false;" class="btn-primary">
            <i class="fa-solid fa-calendar-check"></i> Enquire Now
          </a>
          <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Toggle navigation menu">
            <i class="fa-solid ${appState.mobileMenuOpen ? "fa-xmark" : "fa-bars"}"></i>
          </button>
        </div>
      </div>
    </header>
  `;
}

// Footer
function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#home" onclick="navigateTo('home'); return false;" class="brand-logo" style="color: #ffffff;">
              <div class="logo-icon"><i class="fa-solid fa-hotel"></i></div>
              <div class="brand-text">Hanuman <span style="color: var(--primary-gold);">Estates</span></div>
            </a>
            <p class="footer-about">
              Hanuman Estates is a premier real estate advisory boutique dedicated to presenting the finest residential villas, penthouses, commercial workspaces, and investment land parcels across India's top metropolitan locations.
            </p>
            <div class="social-links">
              <a href="#home" class="social-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#home" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#home" class="social-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#home" class="social-btn" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-nav">
              <li><a href="#home" onclick="navigateTo('home'); return false;">Home</a></li>
              <li><a href="#about" onclick="navigateTo('home', 'about'); return false;">About Hanuman Estates</a></li>
              <li><a href="#properties" onclick="navigateTo('home', 'properties'); return false;">Featured Properties</a></li>
              <li><a href="#services" onclick="navigateTo('home', 'services'); return false;">Our Services</a></li>
              <li><a href="#blog" onclick="navigateTo('blog'); return false;">Real Estate Insights & Blog</a></li>
              <li><a href="#gallery" onclick="navigateTo('home', 'gallery'); return false;">Property Gallery</a></li>
              <li><a href="#testimonials" onclick="navigateTo('home', 'testimonials'); return false;">Client Testimonials</a></li>
              <li><a href="#contact" onclick="navigateTo('home', 'contact'); return false;">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Property Categories</h4>
            <ul class="footer-nav">
              <li><a href="#properties" onclick="navigateTo('home', 'properties'); return false;">Luxury Villas</a></li>
              <li><a href="#properties" onclick="navigateTo('home', 'properties'); return false;">Skyline Penthouses</a></li>
              <li><a href="#properties" onclick="navigateTo('home', 'properties'); return false;">Gated Apartments</a></li>
              <li><a href="#properties" onclick="navigateTo('home', 'properties'); return false;">Commercial Tech Parks</a></li>
              <li><a href="#properties" onclick="navigateTo('home', 'properties'); return false;">Prime Residential Plots</a></li>
              <li><a href="#properties" onclick="navigateTo('home', 'properties'); return false;">Waterfront Estates</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact Info</h4>
            <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
              <i class="fa-solid fa-location-dot" style="color: var(--primary-gold); margin-right: 8px;"></i>
              Indiranagar 100ft Rd, Bangalore – 560038
            </p>
            <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
              <i class="fa-solid fa-phone" style="color: var(--primary-gold); margin-right: 8px;"></i>
              +91 98765 43210
            </p>
            <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
              <i class="fa-solid fa-envelope" style="color: var(--primary-gold); margin-right: 8px;"></i>
              contact@hanumanestates.com
            </p>
            <p style="font-size: 0.85rem; color: #6b7280; margin-top: 1rem;">
              RERA Registered Real Estate Consultant & Brokerage Agency.
            </p>
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; ${new Date().getFullYear()} Hanuman Estates. All Rights Reserved. Designed for Mobile, Tablet, Laptop & Desktop.</div>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#home" style="color: #9ca3af;">Privacy Policy</a>
            <a href="#home" style="color: #9ca3af;">Terms of Service</a>
            <a href="#home" style="color: #9ca3af;">RERA Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// AI Chatbot Widget
function renderChatbot() {
  return `
    <!-- AI CHATBOT TRIGGER -->
    <button class="chatbot-trigger" onclick="toggleChatbot()" aria-label="Toggle Hanuman AI Property Concierge">
      <span class="chatbot-badge"></span>
      <i class="fa-solid ${appState.chatOpen ? "fa-xmark" : "fa-robot"}"></i>
    </button>

    <!-- AI CHATBOT WINDOW -->
    <div class="chatbot-window" id="chat-window" style="display: ${appState.chatOpen ? "flex" : "none"};">
      <div class="chatbot-header">
        <div class="chatbot-title">
          <div class="chatbot-avatar"><i class="fa-solid fa-robot"></i></div>
          <div>
            <div class="chatbot-name">Hanuman AI Concierge</div>
            <div class="chatbot-status">
              <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span>
              Online • Instant Real Estate Help
            </div>
          </div>
        </div>
        <button class="chatbot-close" onclick="toggleChatbot()" aria-label="Close Chat">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="chatbot-messages" id="chat-msgs">
        ${appState.chatMessages.map((m) => `
          <div class="chat-bubble ${m.sender}">${m.text}</div>
        `).join("")}
      </div>

      <div style="padding: 0.5rem 1rem; background: #f8f9fa; border-top: 1px solid #e5e7eb;">
        <div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 0.35rem; font-weight: 600;">Suggested Questions:</div>
        <div class="chat-quick-replies">
          <button class="quick-reply-btn" onclick="sendChatPrompt('What luxury villas are available?')">Available Villas</button>
          <button class="quick-reply-btn" onclick="sendChatPrompt('What is the price range?')">Price Range</button>
          <button class="quick-reply-btn" onclick="sendChatPrompt('What does the real estate marketing guide cover?')">SEO Marketing Guide</button>
          <button class="quick-reply-btn" onclick="sendChatPrompt('How do I contact your team?')">Contact Details</button>
        </div>
      </div>

      <form onsubmit="handleSendChat(event)" class="chatbot-input-area">
        <input type="text" id="chat-input-text" placeholder="Ask about properties, pricing, locations, SEO guide..." class="chatbot-input" />
        <button type="submit" class="chatbot-send-btn" aria-label="Send Message">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  `;
}

// Lightbox & Property Modal
function renderModals() {
  return `
    <!-- LIGHTBOX -->
    <div id="lightbox-modal" class="lightbox-modal" style="display: ${appState.lightboxImg ? "flex" : "none"};" onclick="closeLightbox()">
      <div class="lightbox-content" onclick="event.stopPropagation()">
        <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close Lightbox">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img id="lightbox-img-el" src="${appState.lightboxImg ? appState.lightboxImg.image : ""}" alt="" class="lightbox-img" />
        <div class="lightbox-info">
          <h3 id="lightbox-title-el">${appState.lightboxImg ? appState.lightboxImg.title : ""}</h3>
          <p id="lightbox-cat-el" style="color: var(--primary-gold);">${appState.lightboxImg ? appState.lightboxImg.category : ""}</p>
        </div>
      </div>
    </div>

    <!-- PROPERTY MODAL -->
    <div id="prop-modal" class="modal-overlay" style="display: ${appState.activePropertyModal ? "flex" : "none"};" onclick="closePropertyModal()">
      <div class="modal-card" onclick="event.stopPropagation()">
        <button class="modal-close-btn" onclick="closePropertyModal()" aria-label="Close Modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img id="modal-img" src="${appState.activePropertyModal ? appState.activePropertyModal.image : ""}" alt="" style="width: 100%; height: 300px; object-fit: cover;" />
        <div style="padding: 1.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span class="section-badge" id="modal-badge">${appState.activePropertyModal ? appState.activePropertyModal.type + " • " + appState.activePropertyModal.purpose : ""}</span>
            <span id="modal-price" style="font-size: 1.5rem; font-weight: 800; color: var(--primary-gold);">${appState.activePropertyModal ? appState.activePropertyModal.price : ""}</span>
          </div>
          <h2 id="modal-title" style="font-size: 1.6rem; margin-bottom: 0.5rem;">${appState.activePropertyModal ? appState.activePropertyModal.title : ""}</h2>
          <p id="modal-loc" style="color: #6b7280; margin-bottom: 1rem;">
            <i class="fa-solid fa-location-dot" style="color: var(--primary-gold);"></i> ${appState.activePropertyModal ? appState.activePropertyModal.location : ""}
          </p>
          <div class="property-features" style="margin: 1rem 0;">
            <span><i class="fa-solid fa-vector-square"></i> Area: ${appState.activePropertyModal ? appState.activePropertyModal.area : ""}</span>
            <span><i class="fa-solid fa-bed"></i> Bedrooms: ${appState.activePropertyModal ? appState.activePropertyModal.beds : ""}</span>
            <span><i class="fa-solid fa-bath"></i> Bathrooms: ${appState.activePropertyModal ? appState.activePropertyModal.baths : ""}</span>
          </div>
          <p id="modal-desc" style="color: #4b5563; line-height: 1.7; margin-bottom: 1.5rem;">
            ${appState.activePropertyModal ? appState.activePropertyModal.description : ""} Complete with premium Italian fixtures, high security gated community, 100% power backup, club facilities, and landscaped gardens.
          </p>
          <div style="display: flex; gap: 1rem;">
            <button class="btn-primary" style="flex: 1;" onclick="scheduleModalVisit()">
              <i class="fa-solid fa-calendar-check"></i> Schedule Site Visit
            </button>
            <button class="btn-secondary" onclick="closePropertyModal()">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 1. HOMEPAGE VIEW
// ============================================================================

function renderHomePage() {
  const filtered = PROPERTIES_DATA.filter((item) => {
    if (appState.filterType !== "All" && item.type.toLowerCase() !== appState.filterType.toLowerCase()) return false;
    if (appState.filterPurpose !== "All" && item.purpose.toLowerCase() !== appState.filterPurpose.toLowerCase()) return false;
    if (appState.filterLocation !== "All" && !item.location.toLowerCase().includes(appState.filterLocation.toLowerCase())) return false;
    if (appState.filterBudget === "under2cr" && item.numericPrice > 20000000) return false;
    if (appState.filterBudget === "2to5cr" && (item.numericPrice < 20000000 || item.numericPrice > 50000000)) return false;
    if (appState.filterBudget === "above5cr" && item.numericPrice < 50000000) return false;
    return true;
  });

  const featuredBlog = BLOG_POSTS[0];

  return `
    <!-- HERO SECTION -->
    <section id="home" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-pill"><i class="fa-solid fa-crown"></i> Prime Luxury Real Estate Boutique</div>
          <h1 class="hero-title">Find Your Dream Property with <span>Hanuman Estates</span></h1>
          <p class="hero-desc">Explore residential and commercial properties with a simple, reliable, and personalized property-search experience.</p>

          <div class="hero-actions">
            <a href="#properties" onclick="navigateTo('home', 'properties'); return false;" class="btn-primary"><i class="fa-solid fa-compass"></i> Explore Properties</a>
            <a href="#enquiry" onclick="navigateTo('home', 'enquiry'); return false;" class="btn-secondary"><i class="fa-solid fa-envelope"></i> Enquire Now</a>
          </div>

          <!-- Search Card -->
          <div class="search-filter-card">
            <div class="search-tabs">
              <button class="search-tab ${appState.heroPurpose === "Buy" ? "active" : ""}" onclick="setHeroPurpose('Buy')">
                <i class="fa-solid fa-house"></i> Buy Property
              </button>
              <button class="search-tab ${appState.heroPurpose === "Rent" ? "active" : ""}" onclick="setHeroPurpose('Rent')">
                <i class="fa-solid fa-key"></i> Rent Property
              </button>
            </div>

            <form onsubmit="handleHeroSubmit(event)" class="search-grid">
              <div class="filter-group">
                <label class="filter-label"><i class="fa-solid fa-location-dot"></i> Preferred Location</label>
                <select class="filter-select" id="hero-loc" onchange="setHeroLoc(this.value)">
                  <option value="All" ${appState.filterLocation === "All" ? "selected" : ""}>All Major Cities</option>
                  <option value="Bangalore" ${appState.filterLocation === "Bangalore" ? "selected" : ""}>Bangalore (Whitefield/Devanahalli)</option>
                  <option value="Mumbai" ${appState.filterLocation === "Mumbai" ? "selected" : ""}>Mumbai (Marine Drive/Bandra)</option>
                  <option value="Gurgaon" ${appState.filterLocation === "Gurgaon" ? "selected" : ""}>Gurgaon (Golf Course Rd)</option>
                  <option value="Hyderabad" ${appState.filterLocation === "Hyderabad" ? "selected" : ""}>Hyderabad (HITEC City)</option>
                </select>
              </div>

              <div class="filter-group">
                <label class="filter-label"><i class="fa-solid fa-building"></i> Property Type</label>
                <select class="filter-select" id="hero-type" onchange="setHeroType(this.value)">
                  <option value="All" ${appState.heroType === "All" ? "selected" : ""}>All Property Types</option>
                  <option value="Villa" ${appState.heroType === "Villa" ? "selected" : ""}>Luxury Villa</option>
                  <option value="Penthouse" ${appState.heroType === "Penthouse" ? "selected" : ""}>Penthouse</option>
                  <option value="Apartment" ${appState.heroType === "Apartment" ? "selected" : ""}>Modern Apartment</option>
                  <option value="Commercial" ${appState.heroType === "Commercial" ? "selected" : ""}>Commercial Office</option>
                  <option value="Plot" ${appState.heroType === "Plot" ? "selected" : ""}>Gated Plot / Land</option>
                </select>
              </div>

              <div class="filter-group">
                <label class="filter-label"><i class="fa-solid fa-indian-rupee-sign"></i> Budget Range</label>
                <select class="filter-select" id="hero-budget" onchange="setHeroBudget(this.value)">
                  <option value="All" ${appState.filterBudget === "All" ? "selected" : ""}>Any Budget</option>
                  <option value="under2cr" ${appState.filterBudget === "under2cr" ? "selected" : ""}>Under ₹ 2 Cr</option>
                  <option value="2to5cr" ${appState.filterBudget === "2to5cr" ? "selected" : ""}>₹ 2 Cr - ₹ 5 Cr</option>
                  <option value="above5cr" ${appState.filterBudget === "above5cr" ? "selected" : ""}>₹ 5 Cr & Above</option>
                </select>
              </div>

              <div class="filter-group">
                <label class="filter-label"><i class="fa-solid fa-tag"></i> Transaction</label>
                <select class="filter-select" id="hero-trans" onchange="setHeroPurpose(this.value)">
                  <option value="Buy" ${appState.heroPurpose === "Buy" ? "selected" : ""}>For Sale (Buy)</option>
                  <option value="Rent" ${appState.heroPurpose === "Rent" ? "selected" : ""}>For Lease (Rent)</option>
                </select>
              </div>

              <button type="submit" class="btn-search">
                <i class="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT US -->
    <section id="about" class="section-padding">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-wrapper">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" alt="Hanuman Estates Luxury Real Estate Architecture" class="about-main-img" />
            <div class="about-floating-card">
              <div class="floating-num">15+</div>
              <div class="floating-text">Years of Trusted Excellence in Real Estate Advisory</div>
            </div>
          </div>

          <div class="about-content">
            <span className="section-badge">About Hanuman Estates</span>
            <h2>Dedicated to Fulfilling Your Property Aspirations</h2>
            <p class="about-text">
              At <strong>Hanuman Estates</strong>, we believe that discovering the right real estate is more than just a transaction — it is about finding a space where dreams flourish and generational wealth is built. Inspired by boutique real estate standards, we combine deep market knowledge, absolute transparency, and bespoke advisory to assist homebuyers, corporates, and discerning investors.
            </p>
            <p class="about-text">
              Our customer-first philosophy ensures that every property recommended undergoes rigorous legal documentation, clear-title verification, and fair valuation, giving you complete peace of mind.
            </p>

            <div class="about-highlights">
              <div class="highlight-item">
                <div class="highlight-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <div class="highlight-text">
                  <h4>100% Verified Titles</h4>
                  <p>Transparent legal verification</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon"><i class="fa-solid fa-user-tie"></i></div>
                <div class="highlight-text">
                  <h4>Tailored Advisory</h4>
                  <p>Dedicated relationship managers</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon"><i class="fa-solid fa-award"></i></div>
                <div class="highlight-text">
                  <h4>Curated Portfolio</h4>
                  <p>Only prime, top-tier developments</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon"><i class="fa-solid fa-comments"></i></div>
                <div class="highlight-text">
                  <h4>Prompt Assistance</h4>
                  <p>24/7 client care & AI support</p>
                </div>
              </div>
            </div>

            <a href="#services" onclick="navigateTo('home', 'services'); return false;" class="btn-primary">
              Learn More About Our Approach <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section-padding services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Comprehensive Solutions</span>
          <h2 class="section-title">Specialised Real Estate Services</h2>
          <p class="section-subtitle">
            Whether you are buying your first luxury home, leasing Grade-A corporate towers, or expanding your investment portfolio, our bespoke services are tailored to your needs.
          </p>
        </div>

        <div class="services-grid">
          ${SERVICES.map((s) => `
            <div class="service-card">
              <div>
                <div class="service-icon-box"><i class="${s.icon}"></i></div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
              </div>
              <div>
                <a href="#enquiry" onclick="prefillServiceEnquiry('${s.title}')" class="service-btn">
                  Know More & Enquire <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- PROPERTIES -->
    <section id="properties" class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Exclusive Listings</span>
          <h2 class="section-title">Featured Properties</h2>
          <p class="section-subtitle">
            Explore our handpicked collection of prime residential villas, apartments, penthouses, commercial suites, and gated plots.
          </p>
        </div>

        <div class="properties-filter-bar">
          ${["All", "Villa", "Penthouse", "Apartment", "Commercial", "Plot"].map((t) => `
            <button class="pill-filter-btn ${appState.filterType === t ? "active" : ""}" onclick="setFilterType('${t}')">
              ${t === "All" ? "All Properties" : t}
            </button>
          `).join("")}
          <button class="pill-filter-btn ${appState.filterPurpose === "Buy" ? "active" : ""}" onclick="togglePurpose('Buy')">
            <i class="fa-solid fa-tag"></i> For Sale
          </button>
          <button class="pill-filter-btn ${appState.filterPurpose === "Rent" ? "active" : ""}" onclick="togglePurpose('Rent')">
            <i class="fa-solid fa-key"></i> For Rent
          </button>
        </div>

        <div class="properties-grid">
          ${filtered.length > 0 ? filtered.map((prop) => `
            <div class="property-card">
              <div class="property-media">
                <img src="${prop.image}" alt="${prop.title}" class="property-img" />
                <span class="property-badge-type">${prop.type}</span>
                <span class="property-badge-status">${prop.purpose}</span>
                <div class="property-price-tag">${prop.price}</div>
              </div>

              <div class="property-content">
                <h3 class="property-title">${prop.title}</h3>
                <div class="property-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</div>

                <div class="property-features">
                  <span><i class="fa-solid fa-vector-square"></i> ${prop.area}</span>
                  <span><i class="fa-solid fa-bed"></i> ${prop.beds} Beds</span>
                  <span><i class="fa-solid fa-bath"></i> ${prop.baths} Baths</span>
                </div>

                <p style="font-size: 0.88rem; color: #6b7280; margin-bottom: 1.25rem;">
                  ${prop.description}
                </p>

                <div class="property-actions">
                  <button class="btn-card-details" onclick="openPropertyModal(${prop.id})">
                    <i class="fa-solid fa-circle-info"></i> View Details
                  </button>
                  <button class="btn-card-enquire" onclick="prefillPropertyEnquiry(${prop.id})">
                    <i class="fa-solid fa-envelope"></i> Enquire
                  </button>
                </div>
              </div>
            </div>
          `).join("") : `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
              <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: #d1d5db;"></i>
              <h3 style="margin-top: 1rem;">No properties match the selected criteria</h3>
              <p style="color: #6b7280;">Try clearing your filters to view all available listings.</p>
              <button onclick="resetFilters()" class="btn-primary" style="margin-top: 1rem;">Reset All Filters</button>
            </div>
          `}
        </div>
      </div>
    </section>

    <!-- REAL ESTATE INSIGHTS & GUIDES (FEATURED BLOG SECTION) -->
    <section id="insights" class="section-padding" style="background: var(--bg-sand);">
      <div class="container">
        <div class="section-header">
          <span class="section-badge"><i class="fa-solid fa-book-open"></i> Educational Guides</span>
          <h2 class="section-title">Real Estate Insights & Guides</h2>
          <p class="section-subtitle">
            Expert frameworks, property search tips, and digital real estate lead generation strategies to help buyers and developers succeed.
          </p>
        </div>

        <div style="max-width: 1040px; margin: 0 auto;">
          <div class="blog-card" style="display: grid; grid-template-columns: 1fr 1.15fr; overflow: hidden; border-radius: var(--radius-lg);">
            <div class="blog-card-media" style="height: 100%; min-height: 320px;">
              <img src="${featuredBlog.image}" alt="${featuredBlog.title}" class="blog-card-img" />
              <span class="blog-card-badge">${featuredBlog.badge}</span>
            </div>
            <div class="blog-card-content" style="padding: 2.5rem; justify-content: center;">
              <div class="blog-card-meta">
                <span><i class="fa-solid fa-user-pen"></i> By ${featuredBlog.author}</span>
                <span><i class="fa-solid fa-clock"></i> ${featuredBlog.readTime}</span>
                <span><i class="fa-solid fa-calendar"></i> ${featuredBlog.date}</span>
              </div>
              <h3 style="font-size: 1.65rem; line-height: 1.3; margin-bottom: 1rem; color: #111827;">
                ${featuredBlog.title}
              </h3>
              <p class="blog-card-desc">
                ${featuredBlog.excerpt}
              </p>
              <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <button onclick="navigateTo('article');" class="btn-primary">
                  Read Complete Article <i class="fa-solid fa-arrow-right"></i>
                </button>
                <button onclick="navigateTo('blog');" class="btn-secondary">
                  Explore All Insights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section id="gallery" class="section-padding gallery-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Visual Showcase</span>
          <h2 class="section-title">Property Gallery</h2>
          <p class="section-subtitle" style="color: #9ca3af;">
            Immerse yourself in breathtaking architectural designs, opulent interiors, and picturesque community landscapes. Click any image to view in high definition.
          </p>
        </div>

        <div class="gallery-grid">
          ${GALLERY_ITEMS.map((item) => `
            <div class="gallery-item ${item.span}" onclick="openLightbox(${item.id})">
              <img src="${item.image}" alt="${item.title}" class="gallery-img" />
              <div class="gallery-overlay">
                <div class="gallery-caption">${item.title}</div>
                <div class="gallery-sub"><i class="fa-solid fa-expand"></i> ${item.category} • Click to enlarge</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">The Hanuman Advantage</span>
          <h2 class="section-title">Why Choose Hanuman Estates?</h2>
          <p class="section-subtitle">
            We stand apart through uncompromising integrity, bespoke consultation, and a transparent discovery workflow.
          </p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <h3>Transparent Pricing</h3>
            <p>Direct developer rates and honest pricing with zero hidden commissions or misleading terms.</p>
          </div>
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-file-contract"></i></div>
            <h3>Legal Verification</h3>
            <p>Every title deed, encumbrance certificate, and municipal approval is vetted by legal specialists.</p>
          </div>
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-route"></i></div>
            <h3>Personalized Tours</h3>
            <p>Private chauffeur-driven site inspections and tailored property recommendations according to your timeline.</p>
          </div>
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-headset"></i></div>
            <h3>Responsive Support</h3>
            <p>Dedicated relationship advisors and 24/7 AI-assisted assistance throughout your property journey.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section id="testimonials" class="section-padding testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Client Experiences</span>
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">
            Read authentic feedback from families and business leaders who found their ideal properties through Hanuman Estates.
          </p>
        </div>

        <div class="testimonials-grid">
          ${TESTIMONIALS.map((t) => `
            <div class="testimonial-card">
              <div>
                <div class="testimonial-stars">
                  ${`<i class="fa-solid fa-star"></i>`.repeat(t.rating)}
                </div>
                <p class="testimonial-quote">"${t.comment}"</p>
              </div>
              <div class="testimonial-author">
                <img src="${t.image}" alt="${t.name}" class="author-avatar" />
                <div>
                  <div class="author-name">${t.name}</div>
                  <div class="author-role">${t.role}</div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="container">
        <h2>Ready to Find Your Next Property?</h2>
        <p>Tell us what you are looking for, and let Hanuman Estates help you explore suitable options.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#properties" onclick="navigateTo('home', 'properties'); return false;" class="btn-primary"><i class="fa-solid fa-compass"></i> Explore Properties</a>
          <a href="#enquiry" onclick="navigateTo('home', 'enquiry'); return false;" class="btn-secondary"><i class="fa-solid fa-paper-plane"></i> Send an Enquiry</a>
        </div>
      </div>
    </section>

    <!-- ENQUIRY & CONTACT -->
    <section id="enquiry" class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Get in Touch</span>
          <h2 class="section-title">Schedule a Consultation or Site Visit</h2>
          <p class="section-subtitle">
            Leave your details below. Our senior property advisor will reach out within 2 hours with curated options and detailed floor plans.
          </p>
        </div>

        <div class="enquiry-container">
          <div class="form-wrapper">
            <div id="enquiry-success" class="alert-success" style="display: ${appState.formSuccess ? "flex" : "none"};">
              <i class="fa-solid fa-circle-check" style="font-size: 1.4rem;"></i>
              <div>
                <strong>Enquiry Submitted Successfully!</strong>
                <p style="font-size: 0.85rem; margin-top: 2px;">Thank you. Your request has been assigned to our senior property specialist. We will contact you shortly.</p>
              </div>
            </div>

            <form id="enquiry-form" onsubmit="handleFormSubmit(event)">
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" placeholder="e.g. Rahul Sharma" class="form-input" required />
                  <div id="err-fullName" class="form-error" style="display: none;"></div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" placeholder="e.g. +91 98765 43210" class="form-input" required />
                  <div id="err-phone" class="form-error" style="display: none;"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="e.g. rahul.sharma@example.com" class="form-input" required />
                <div id="err-email" class="form-error" style="display: none;"></div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="propertyType">Interested Property Type</label>
                  <select id="propertyType" name="propertyType" class="form-select-full">
                    <option value="Luxury Villa">Luxury Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Apartment">Modern Apartment</option>
                    <option value="Commercial Space">Commercial Space / Office</option>
                    <option value="Residential Plot">Residential Plot / Land</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="budget">Budget Range</label>
                  <select id="budget" name="budget" class="form-select-full">
                    <option value="₹ 1 Cr - ₹ 2 Cr">₹ 1 Cr - ₹ 2 Cr</option>
                    <option value="₹ 2 Cr - ₹ 5 Cr" selected>₹ 2 Cr - ₹ 5 Cr</option>
                    <option value="₹ 5 Cr - ₹ 10 Cr">₹ 5 Cr - ₹ 10 Cr</option>
                    <option value="₹ 10 Cr+">₹ 10 Cr + (Ultra Luxury)</option>
                    <option value="Rental">Rental / Lease Requirement</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="location">Preferred Location</label>
                <input type="text" id="location" name="location" placeholder="e.g. Bangalore, Mumbai, Gurgaon" class="form-input" value="Bangalore" />
              </div>

              <div class="form-group">
                <label class="form-label" for="message">Message or Specific Requirements *</label>
                <textarea id="message" name="message" placeholder="Describe specific preferences (e.g. east facing, ready to move, possession timeline, amenities desired)..." class="form-textarea" required></textarea>
                <div id="err-message" class="form-error" style="display: none;"></div>
              </div>

              <button type="submit" id="submit-btn" class="btn-primary" style="width: 100%; padding: 1rem;">
                <i class="fa-solid fa-paper-plane"></i> Submit Enquiry
              </button>
            </form>
          </div>

          <div class="contact-sidebar" id="contact">
            <div class="contact-card">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Head Office & Advisory Desk</h3>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="contact-details">
                  <h4>Corporate Address</h4>
                  <p>Hanuman Estates Tower, 45 Luxury Boulevard, Indiranagar 100ft Road, Bangalore – 560038, India</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                <div class="contact-details">
                  <h4>Direct Phone Line</h4>
                  <p>+91 (080) 4123 8899<br />+91 98765 43210 (VIP Desk)</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                <div class="contact-details">
                  <h4>Email Inquiries</h4>
                  <p>contact@hanumanestates.com<br />vip@hanumanestates.com</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-solid fa-clock"></i></div>
                <div class="contact-details">
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 9:30 AM – 7:30 PM<br />Sunday: Prior Appointment Only</p>
                </div>
              </div>

              <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem;">
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" class="btn-secondary" style="flex: 1; text-align: center;">
                  <i class="fa-brands fa-whatsapp" style="color: #25D366;"></i> WhatsApp
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" class="btn-secondary" style="flex: 1; text-align: center;">
                  <i class="fa-solid fa-map-location-dot"></i> Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================================
// 2. BLOG LISTING PAGE VIEW
// ============================================================================

function renderBlogPage() {
  return `
    <div class="breadcrumbs-bar">
      <div class="container">
        <a href="#home" onclick="navigateTo('home'); return false;"><i class="fa-solid fa-house"></i> Home</a>
        <span>/</span>
        <strong>Real Estate Insights & Blog</strong>
      </div>
    </div>

    <section class="section-padding" style="padding-top: 4rem;">
      <div class="container">
        <div class="section-header">
          <span class="section-badge"><i class="fa-solid fa-newspaper"></i> Educational Resources</span>
          <h1 class="section-title">Hanuman Real Estate Insights</h1>
          <p class="section-subtitle">
            Authoritative guides, lead generation strategies, architectural spotlights, and property research advice from Hanuman Estates.
          </p>
        </div>

        <div class="blog-grid">
          ${BLOG_POSTS.map((post) => `
            <div class="blog-card">
              <div class="blog-card-media">
                <img src="${post.image}" alt="${post.title}" class="blog-card-img" />
                <span class="blog-card-badge">${post.badge}</span>
              </div>
              <div class="blog-card-content">
                <div class="blog-card-meta">
                  <span><i class="fa-solid fa-user-pen"></i> ${post.author}</span>
                  <span><i class="fa-solid fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-desc">${post.excerpt}</p>
                <div>
                  <button onclick="navigateTo('article');" class="blog-read-more-btn">
                    Read Full Article <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- In-Blog Conversion Banner -->
        <div class="article-cta-box" style="margin-top: 5rem;">
          <h3>Looking for Your Next Luxury Property?</h3>
          <p>
            Explore our curated residential and commercial inventory or connect directly with our senior property advisors.
          </p>
          <div class="article-cta-actions">
            <button onclick="navigateTo('home', 'properties');" class="btn-primary">
              <i class="fa-solid fa-compass"></i> Explore Properties
            </button>
            <button onclick="navigateTo('home', 'enquiry');" class="btn-secondary">
              <i class="fa-solid fa-envelope"></i> Enquire Now
            </button>
            <button onclick="bookSiteVisit();" class="btn-primary" style="background: linear-gradient(135deg, #10b981, #059669);">
              <i class="fa-solid fa-calendar-check"></i> Book a Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================================
// 3. FULL ARTICLE PAGE VIEW (Exact Content from PDF Report)
// ============================================================================

function renderArticlePage() {
  return `
    <!-- BREADCRUMBS -->
    <div class="breadcrumbs-bar">
      <div class="container">
        <a href="#home" onclick="navigateTo('home'); return false;"><i class="fa-solid fa-house"></i> Home</a>
        <span>/</span>
        <a href="#blog" onclick="navigateTo('blog'); return false;">Blog</a>
        <span>/</span>
        <strong>Digital Marketing for Real Estate</strong>
      </div>
    </div>

    <!-- ARTICLE HERO HEADER -->
    <header class="article-header">
      <div class="container">
        <span class="section-badge"><i class="fa-solid fa-award"></i> Comprehensive Real Estate Marketing Guide</span>
        <h1 class="article-header-title">
          Digital Marketing for Real Estate: Turn Your Landing Page into a Lead Generation Engine with Hanuman Estates
        </h1>
        <div class="article-meta-bar">
          <span><i class="fa-solid fa-user-circle"></i> Submitted By: <strong>Pranathi</strong></span>
          <span><i class="fa-solid fa-building"></i> Business: <strong>Hanuman Estates</strong></span>
          <span><i class="fa-solid fa-clock"></i> Estimated Read: <strong>7 min read</strong></span>
          <span><i class="fa-solid fa-calendar-alt"></i> Published: <strong>October 14, 2026</strong></span>
        </div>
      </div>
    </header>

    <!-- ARTICLE LAYOUT -->
    <div class="container">
      <div class="article-layout">
        <!-- STICKY TABLE OF CONTENTS -->
        <aside class="toc-sidebar">
          <div class="toc-title"><i class="fa-solid fa-list-ol"></i> Table of Contents</div>
          <nav>
            <ul class="toc-list">
              <li><a href="#section-overview">1. Executive Overview</a></li>
              <li><a href="#section-lead-gen">2. How Digital Marketing Simplifies Lead Gen</a></li>
              <li><a href="#section-buyer-personas">3. Know Your Buyers: Four Personas</a></li>
              <li><a href="#section-keyword-research">4. Keyword Research & Search Intent</a></li>
              <li><a href="#section-local-seo">5. Local SEO: Reach Buyers in Your Area</a></li>
              <li><a href="#section-landing-page">6. High-Converting Landing Page Guide</a></li>
              <li><a href="#section-advertising">7. Advertising Channels & Strategy</a></li>
              <li><a href="#section-benefits">8. Benefits of a Complete Plan</a></li>
              <li><a href="#section-content-marketing">9. Content Marketing Strategy</a></li>
              <li><a href="#section-metrics">10. Reporting Metrics, KPIs & Tools</a></li>
              <li><a href="#section-tips">11. Landing Page Optimization Tips</a></li>
              <li><a href="#section-faqs">12. Frequently Asked Questions</a></li>
              <li><a href="#section-conclusion">13. Moving Forward with Hanuman Estates</a></li>
            </ul>
          </nav>

          <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light); text-align: center;">
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem;">
              Need personalized advisory on property listings or lead generation?
            </p>
            <button onclick="navigateTo('home', 'enquiry');" class="btn-primary" style="width: 100%; font-size: 0.85rem; padding: 0.65rem;">
              <i class="fa-solid fa-envelope"></i> Speak to an Advisor
            </button>
          </div>
        </aside>

        <!-- MAIN ARTICLE CONTENT -->
        <article class="article-body">
          <!-- 1. Executive Overview -->
          <section id="section-overview">
            <div class="quote-box">
              “Finding the right property shouldn’t be complicated, yet many buyers struggle to find trustworthy information online; digital marketing for real estate helps buyers discover the right homes and helps businesses like Hanuman Estates connect with them easily and at the right time.”
            </div>

            <p>
              Most buyers now research flats, apartments, and villas online long before they speak to an agent. A well-planned <strong>real estate landing page</strong>, supported by <strong>real estate SEO</strong>, local marketing, and targeted advertising, turns that initial digital research into genuine enquiries and in-person site visits.
            </p>

            <p>
              This comprehensive guide explains how <strong>Hanuman Estates</strong> can build a complete <strong>real estate digital marketing strategy</strong> — from understanding buyers to measuring commercial results. <em>The recommendations presented here are conceptual; no property details, prices, statistics, reviews, or returns have been invented.</em>
            </p>

            <figure class="article-figure">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" alt="Residential apartments promoted through a well-planned real estate digital marketing strategy" />
              <figcaption>Residential apartments and luxury towers promoted through a cohesive real estate digital marketing strategy.</figcaption>
            </figure>
          </section>

          <!-- 2. Lead Generation -->
          <section id="section-lead-gen">
            <h2>How Digital Marketing Simplifies Property Lead Generation</h2>
            <p>
              Instead of waiting passively for buyers to find them, real estate businesses can leverage digital marketing to reach people who are already actively searching. Here is how digital architecture makes the difference:
            </p>

            <ul>
              <li><strong>Reach buyers where they search:</strong> Search engines and social media channels are where over 90% of modern property research begins. Being prominently visible brings high-intent visitors straight to your landing page.</li>
              <li><strong>Build trust before the first call:</strong> Genuine property photos, clear specifications, and verified details help buyers feel confident and respected before they make contact.</li>
              <li><strong>Target the right audience:</strong> Geographic location, lifestyle interests, and search intent allow you to speak to first-time buyers, growing families, commercial investors, and luxury buyers with tailored messaging.</li>
              <li><strong>Measure what works:</strong> Every click, enquiry submission, and booked site visit can be accurately tracked, ensuring budgets are allocated to efforts that generate actual property leads.</li>
            </ul>

            <div class="key-takeaway-box">
              <strong>Key Takeaway:</strong> Digital marketing works best as one connected system: SEO and targeted ads bring visitors, the landing page convinces them with transparency, and clear calls to action turn interest into confirmed enquiries.
            </div>
          </section>

          <!-- 3. Buyer Personas -->
          <section id="section-buyer-personas">
            <h2>Know Your Buyers: Four Buyer Personas</h2>
            <p>
              A <strong>buyer persona</strong> is a semi-fictional profile of your ideal customer. Understanding each persona helps Hanuman Estates craft the right headlines, ad copy, and landing page content that resonates deeply.
            </p>

            <div class="persona-grid">
              <div class="persona-card">
                <div class="persona-icon"><i class="fa-solid fa-key"></i></div>
                <h4>First-Time Homebuyers</h4>
                <div class="persona-needs"><strong>Key Needs:</strong> Affordable options, transparent pricing, home loan assistance, step-by-step paperwork guidance.</div>
                <div class="persona-approach"><strong>Marketing Approach:</strong> Informative educational content, clear location benefits, and simple, low-friction enquiry forms.</div>
              </div>

              <div class="persona-card">
                <div class="persona-icon"><i class="fa-solid fa-house-chimney-window"></i></div>
                <h4>Families</h4>
                <div class="persona-needs"><strong>Key Needs:</strong> Safety, spacious layouts, proximity to reputable schools, healthcare, green parks, and transit.</div>
                <div class="persona-approach"><strong>Marketing Approach:</strong> Floor layouts, neighbourhood amenity spotlights, connectivity maps, and family-friendly community features.</div>
              </div>

              <div class="persona-card">
                <div class="persona-icon"><i class="fa-solid fa-chart-line"></i></div>
                <h4>Investors</h4>
                <div class="persona-needs"><strong>Key Needs:</strong> Rental yield potential, long-term capital appreciation, growth corridor trends, portfolio diversification.</div>
                <div class="persona-approach"><strong>Marketing Approach:</strong> Verified property details, infrastructure pipeline data, and legal status with <em>no guaranteed returns promised</em>.</div>
              </div>

              <div class="persona-card">
                <div class="persona-icon"><i class="fa-solid fa-gem"></i></div>
                <h4>Luxury Buyers</h4>
                <div class="persona-needs"><strong>Key Needs:</strong> Ultra-premium penthouses, bespoke villas, exclusive architectural amenities, privacy, prestigious addresses.</div>
                <div class="persona-approach"><strong>Marketing Approach:</strong> High-definition architectural photography, cinematic virtual walkthroughs, and discreet, personalized consultation.</div>
              </div>
            </div>
          </section>

          <!-- 4. Keyword Research -->
          <section id="section-keyword-research">
            <h2>Keyword Research: What Property Buyers Search For</h2>
            <p>
              Keyword research uncovers the exact words and queries prospective buyers type into Google. Use these keywords naturally across page titles, meta descriptions, introductions, H2/H3 subheadings, and body paragraphs without keyword stuffing.
            </p>

            <div class="table-responsive">
              <table class="article-table">
                <thead>
                  <tr>
                    <th>Keyword Type</th>
                    <th>Target Search Phrases & Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Primary Keywords</strong></td>
                    <td><code>digital marketing for real estate</code>, <code>real estate landing page</code></td>
                  </tr>
                  <tr>
                    <td><strong>Secondary Keywords</strong></td>
                    <td><code>real estate SEO</code>, <code>property lead generation</code>, <code>real estate Google Ads</code>, <code>local SEO for real estate</code></td>
                  </tr>
                  <tr>
                    <td><strong>Long-Tail Keywords</strong></td>
                    <td><code>how to choose the right property</code>, <code>real estate consultation in [City]</code>, <code>buy a house in [City]</code></td>
                  </tr>
                  <tr>
                    <td><strong>Local SEO Keywords</strong></td>
                    <td><code>flats for sale in [City]</code>, <code>apartments in [Locality]</code>, <code>luxury villas in [City]</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="key-takeaway-box">
              <strong>SEO Tip:</strong> Write for human buyers first. Natural, helpful sentences always rank better than artificially repeated phrases. Verify search volume and local competition before finalizing editorial schedules.
            </div>
          </section>

          <!-- 5. Local SEO -->
          <section id="section-local-seo">
            <h2>Local SEO: Reach Buyers in Your Area</h2>
            <p>
              Real estate is fundamentally a hyper-local decision. <strong>Local SEO for real estate</strong> ensures Hanuman Estates appears right when people search for homes within its genuine service corridors.
            </p>

            <ul>
              <li><strong>Optimise your Google Business Profile:</strong> Ensure your official business name, registered address, service areas, phone number, operating hours, and website URL are 100% accurate and consistent (NAP consistency).</li>
              <li><strong>Use location-based keywords ethically:</strong> Integrate phrases such as <em>“apartments in [Locality]”</em> only on pages that genuinely showcase properties in those specific neighbourhoods.</li>
              <li><strong>Add accurate property photos:</strong> Upload authentic, high-resolution photographs to your business profile and website with descriptive, search-friendly alt tags.</li>
              <li><strong>Collect genuine customer reviews:</strong> Invite honest feedback from verified clients and respond courteously. Never purchase, fabricate, or manipulate reviews.</li>
              <li><strong>Publish local property guides:</strong> Provide rich neighbourhood guides highlighting school ratings, transit connectivity, upcoming metro lines, and civic infrastructure.</li>
            </ul>

            <figure class="article-figure">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" alt="Local map listing and property search for nearby homes" />
              <figcaption>Local search engine maps and mobile proximity queries connect active home seekers with nearby developments.</figcaption>
            </figure>
          </section>

          <!-- 6. Landing Page Guide -->
          <section id="section-landing-page">
            <h2>Step-by-Step Guide to a High-Converting Landing Page</h2>
            <p>
              A focused real estate landing page has one singular purpose: to turn an interested visitor into an enquiry or booked site visit. Follow this 5-step framework:
            </p>

            <ol>
              <li><strong>Start with a clear, compelling headline:</strong> State exactly what you offer and where. Example: <em>“Explore Premium Properties in [City] with Hanuman Estates.”</em></li>
              <li><strong>Add genuine images and floor plans:</strong> Incorporate authentic photography, dimensioned architectural floor plans, and immersive 360° virtual tours where available.</li>
              <li><strong>Place clear call-to-action buttons:</strong> Prominently feature actionable CTAs such as <strong>“Enquire Now”</strong>, <strong>“Explore Properties”</strong>, and <strong>“Book a Site Visit”</strong> above and below the fold.</li>
              <li><strong>Keep enquiry forms simple:</strong> Limit initial fields to essentials — Full Name, Phone Number, Email, and Preferred Property Type — to minimize abandonment.</li>
              <li><strong>Build trust, speed, and mobile comfort:</strong> Display verified regulatory approvals (RERA), compress imagery using modern formats for lightning-fast loads, and test for seamless mobile usability.</li>
            </ol>

            <div class="quote-box">
              “A great landing page doesn’t just show properties. It helps buyers take the next step with confidence.”
            </div>
          </section>

          <!-- 7. Advertising Strategy -->
          <section id="section-advertising">
            <h2>Advertising Strategy for Property Lead Generation</h2>
            <p>
              While SEO builds compounding organic visibility over time, targeted advertising accelerates immediate enquiry volume. Each digital advertising channel fulfills a unique stage in the property discovery funnel:
            </p>

            <ul>
              <li><strong>Google Search Ads:</strong> Captures high-intent buyers actively typing search queries. Direct clicks to dedicated landing pages rather than a generic home page.</li>
              <li><strong>Instagram & Facebook Ads:</strong> Showcases eye-catching visuals, carousel walkthroughs, and curated lifestyle elements targeted by demographics, locality, and affinity.</li>
              <li><strong>Video Advertising:</strong> Short drone videos, interior walkthroughs, and neighbourhood perspectives enable prospective buyers to envision living in the space.</li>
              <li><strong>Remarketing Campaigns:</strong> Cost-effective reminder banners that re-engage visitors who browsed your listings but did not submit an enquiry on their initial visit.</li>
            </ul>

            <figure class="article-figure">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="How SEO, advertising, and the landing page work together to generate leads" />
              <figcaption>The digital property funnel: Search ads and SEO attract traffic; the landing page qualifies intent into confirmed site visits.</figcaption>
            </figure>
          </section>

          <!-- 8. Benefits Table -->
          <section id="section-benefits">
            <h2>Benefits of a Complete Digital Marketing Plan</h2>
            <div class="table-responsive">
              <table class="article-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>How It Helps</th>
                    <th>Key Business Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Local SEO</strong></td>
                    <td>Puts Hanuman Estates in front of nearby buyers searching locally</td>
                    <td>Maximum local visibility</td>
                  </tr>
                  <tr>
                    <td><strong>Landing Page</strong></td>
                    <td>Focuses visitor attention on one clear, friction-free action</td>
                    <td>Higher enquiry conversion</td>
                  </tr>
                  <tr>
                    <td><strong>Google Search Ads</strong></td>
                    <td>Instantly reaches people actively looking for property right now</td>
                    <td>Faster lead generation</td>
                  </tr>
                  <tr>
                    <td><strong>Social & Video Ads</strong></td>
                    <td>Builds emotional connection and lifestyle awareness</td>
                    <td>Expanded brand reach</td>
                  </tr>
                  <tr>
                    <td><strong>Remarketing</strong></td>
                    <td>Brings back interested visitors who didn't enquire initially</td>
                    <td>Cost-effective conversions</td>
                  </tr>
                  <tr>
                    <td><strong>Analytics & Reporting</strong></td>
                    <td>Identifies exactly what channels and copy are performing</td>
                    <td>Informed budget decisions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- In-Article CTAs -->
          <div class="article-cta-box">
            <h3>Ready to Experience Hanuman Estates?</h3>
            <p>
              Discover our exclusive portfolio of luxury villas, penthouses, and prime plots, or speak with our property advisors today.
            </p>
            <div class="article-cta-actions">
              <button onclick="navigateTo('home', 'properties');" class="btn-primary">
                <i class="fa-solid fa-compass"></i> Explore Properties
              </button>
              <button onclick="navigateTo('home', 'enquiry');" class="btn-secondary">
                <i class="fa-solid fa-envelope"></i> Enquire Now
              </button>
              <button onclick="bookSiteVisit();" class="btn-primary" style="background: linear-gradient(135deg, #10b981, #059669);">
                <i class="fa-solid fa-calendar-check"></i> Book a Site Visit
              </button>
            </div>
          </div>

          <!-- 9. Content Marketing Strategy -->
          <section id="section-content-marketing">
            <h2>Content Marketing Strategy</h2>
            <p>
              Publishing regular, genuinely helpful content builds enduring domain authority and attracts organic traffic over time. Core editorial pillars include:
            </p>

            <ul>
              <li><strong>Property guides:</strong> Guides on home architectural styles, layouts, square footage evaluation, and essential pre-purchase checklists.</li>
              <li><strong>Neighbourhood information:</strong> Deep dives into local schools, commute times, green spaces, retail hubs, and future civic expansion.</li>
              <li><strong>Buying tips & FAQs:</strong> Practical advice on financial budgeting, loan eligibility, legal title scrutiny, stamp duty, and site inspection etiquette.</li>
              <li><strong>Project updates:</strong> Transparent reports on construction milestones, shared strictly when verified by project engineers.</li>
            </ul>
          </section>

          <!-- 10. Reporting Metrics and KPIs -->
          <section id="section-metrics">
            <h2>Reporting Metrics, KPIs & Analytical Tools</h2>
            <p>
              Sustainable marketing requires data-driven iteration. Rather than tracking superficial impressions alone, Hanuman Estates monitors metrics tied directly to business results:
            </p>

            <div class="table-responsive">
              <table class="article-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>What It Tells You</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Website Traffic</strong></td>
                    <td>Total visitor volume and geographic/channel traffic origins.</td>
                  </tr>
                  <tr>
                    <td><strong>Organic Clicks</strong></td>
                    <td>High-intent visitors arriving from unpaid search engine rankings.</td>
                  </tr>
                  <tr>
                    <td><strong>Keyword Rankings</strong></td>
                    <td>Search engine position for core property discovery terms.</td>
                  </tr>
                  <tr>
                    <td><strong>Conversion Rate</strong></td>
                    <td>The exact percentage of visitors who submit an enquiry or book a visit.</td>
                  </tr>
                  <tr>
                    <td><strong>Cost per Lead (CPL)</strong></td>
                    <td>Advertising budget divided by the number of received enquiries.</td>
                  </tr>
                  <tr>
                    <td><strong>Qualified Leads</strong></td>
                    <td>Inquiries from verified, financially suitable buyers.</td>
                  </tr>
                  <tr>
                    <td><strong>Site Visit Bookings</strong></td>
                    <td>Prospective buyers who schedule and attend in-person property tours.</td>
                  </tr>
                  <tr>
                    <td><strong>ROAS</strong></td>
                    <td>Gross revenue value generated for every rupee invested in marketing.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Core Marketing Technology Stack</h3>
            <div class="table-responsive">
              <table class="article-table">
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Conceptual Use Case in Real Estate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Google Analytics (GA4)</strong></td>
                    <td>Analyze visitor traffic sources, engagement depth, and goal conversion funnels.</td>
                  </tr>
                  <tr>
                    <td><strong>Google Search Console</strong></td>
                    <td>Monitor search queries, crawl indexing status, CTRs, and technical health.</td>
                  </tr>
                  <tr>
                    <td><strong>Google AI Studio</strong></td>
                    <td>Draft and refine property descriptions, FAQ variations, and ad copy (always human-reviewed).</td>
                  </tr>
                  <tr>
                    <td><strong>Canva</strong></td>
                    <td>Produce clean digital social creatives, property brochures, and visual infographics.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- 11. Tips for Landing Pages -->
          <section id="section-tips">
            <h2>Tips for Making the Most of Your Landing Page</h2>
            <ul>
              <li><strong>Keep property details accurate:</strong> Only publish information that is legally verified and completely up to date.</li>
              <li><strong>Respond to enquiries quickly:</strong> Fast, professional follow-ups within 15–30 minutes dramatically improve site visit scheduling rates.</li>
              <li><strong>Use genuine photos:</strong> Real architectural photographs inspire authentic trust far more effectively than generic stock images.</li>
              <li><strong>Review reports regularly:</strong> Audit keyword positions, traffic quality, and lead acquisition costs monthly.</li>
              <li><strong>Test headlines and buttons (A/B testing):</strong> Experimenting with clear button labels and headlines produces compounding gains over time.</li>
            </ul>
          </section>

          <!-- 12. Frequently Asked Questions -->
          <section id="section-faqs">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-list">
              ${ARTICLE_FAQS.map((faq, idx) => `
                <div class="faq-card">
                  <button class="faq-question" onclick="toggleFaq(${idx})">
                    <span>${faq.q}</span>
                    <i class="fa-solid ${appState.expandedFaqs[idx] ? "fa-minus" : "fa-plus"}"></i>
                  </button>
                  ${appState.expandedFaqs[idx] ? `
                    <div class="faq-answer">
                      ${faq.a}
                    </div>
                  ` : ""}
                </div>
              `).join("")}
            </div>
          </section>

          <!-- 13. Conclusion -->
          <section id="section-conclusion">
            <h2>Moving Forward with Hanuman Estates</h2>
            <p>
              Finding a home shouldn’t be the hardest part of moving forward. With the right <strong>real estate SEO</strong>, local marketing, targeted advertising, and an optimized <strong>real estate landing page</strong>, Hanuman Estates can reach the right buyers, build unshakeable trust, and turn digital interest into confirmed site visits.
            </p>
            <p>
              Measure the right metrics, keep improving your digital touchpoints, and ensure every visitor enjoys a transparent, friction-free path from searching to enquiring.
            </p>

            <div class="article-cta-box" style="margin-top: 3rem;">
              <h3>Looking for your next property?</h3>
              <p>Explore Hanuman Estates, send an enquiry, or book your private site visit today.</p>
              <div class="article-cta-actions">
                <button onclick="bookSiteVisit();" class="btn-primary" style="padding: 0.9rem 2rem; font-size: 1.05rem;">
                  <i class="fa-solid fa-calendar-check"></i> BOOK A SITE VISIT
                </button>
                <button onclick="navigateTo('home', 'properties');" class="btn-secondary">
                  Explore Properties
                </button>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  `;
}

// ============================================================================
// MAIN APPLICATION RENDERER
// ============================================================================

function renderApp() {
  const root = document.getElementById("root");
  if (!root) return;

  let mainContent = "";
  if (appState.currentRoute === "home") {
    mainContent = renderHomePage();
  } else if (appState.currentRoute === "blog") {
    mainContent = renderBlogPage();
  } else if (appState.currentRoute === "article") {
    mainContent = renderArticlePage();
  }

  root.innerHTML = `
    <div class="site-wrapper">
      ${renderHeader()}
      <main id="main-content">
        ${mainContent}
      </main>
      ${renderFooter()}
      ${renderChatbot()}
      ${renderModals()}
    </div>
  `;

  // Attach scroll listener once
  window.onscroll = () => {
    const isScrolled = window.scrollY > 40;
    if (isScrolled !== appState.scrolled) {
      appState.scrolled = isScrolled;
      const header = document.getElementById("main-header");
      if (header) {
        if (isScrolled) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
    }
  };
}

// ============================================================================
// EVENT HANDLERS & HELPERS
// ============================================================================

// Filters
function setFilterType(type) {
  appState.filterType = type;
  renderApp();
}

function togglePurpose(purpose) {
  appState.filterPurpose = appState.filterPurpose === purpose ? "All" : purpose;
  renderApp();
}

function setHeroPurpose(val) {
  appState.heroPurpose = val;
  renderApp();
}

function setHeroLoc(val) {
  appState.filterLocation = val;
}

function setHeroType(val) {
  appState.heroType = val;
}

function setHeroBudget(val) {
  appState.filterBudget = val;
}

function resetFilters() {
  appState.filterType = "All";
  appState.filterPurpose = "All";
  appState.filterLocation = "All";
  appState.filterBudget = "All";
  renderApp();
}

function handleHeroSubmit(e) {
  e.preventDefault();
  const loc = document.getElementById("hero-loc");
  const type = document.getElementById("hero-type");
  const budget = document.getElementById("hero-budget");

  if (loc) appState.filterLocation = loc.value;
  if (type) appState.filterType = type.value;
  if (budget) appState.filterBudget = budget.value;
  appState.filterPurpose = appState.heroPurpose;

  renderApp();
  const el = document.getElementById("properties");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Modals
function openPropertyModal(id) {
  appState.activePropertyModal = PROPERTIES_DATA.find((p) => p.id === id);
  renderApp();
}

function closePropertyModal() {
  appState.activePropertyModal = null;
  renderApp();
}

function scheduleModalVisit() {
  if (appState.activePropertyModal) {
    prefillPropertyEnquiry(appState.activePropertyModal.id);
    closePropertyModal();
  }
}

function openLightbox(id) {
  appState.lightboxImg = GALLERY_ITEMS.find((g) => g.id === id);
  renderApp();
}

function closeLightbox() {
  appState.lightboxImg = null;
  renderApp();
}

// Enquiry & Site Visit triggers
function bookSiteVisit() {
  navigateTo('home', 'enquiry');
  setTimeout(() => {
    const msgInput = document.getElementById("message");
    if (msgInput) {
      msgInput.value = "I would like to schedule a private site visit to inspect available Hanuman Estates luxury properties. Please arrange a consultation.";
    }
  }, 150);
}

function prefillServiceEnquiry(serviceTitle) {
  navigateTo('home', 'enquiry');
  setTimeout(() => {
    const msgInput = document.getElementById("message");
    if (msgInput) {
      msgInput.value = `I would like to inquire about: ${serviceTitle}. Please provide further details.`;
    }
  }, 150);
}

function prefillPropertyEnquiry(propId) {
  const prop = PROPERTIES_DATA.find((p) => p.id === propId);
  if (!prop) return;
  navigateTo('home', 'enquiry');

  setTimeout(() => {
    const propTypeInput = document.getElementById("propertyType");
    const locInput = document.getElementById("location");
    const msgInput = document.getElementById("message");

    if (propTypeInput) {
      propTypeInput.value = prop.type === "Villa" ? "Luxury Villa" : prop.type === "Penthouse" ? "Penthouse" : prop.type === "Apartment" ? "Modern Apartment" : prop.type === "Commercial" ? "Commercial Space" : "Residential Plot";
    }
    if (locInput) locInput.value = prop.location.split(",").pop().trim();
    if (msgInput) msgInput.value = `I am interested in exploring '${prop.title}' (${prop.price}) located at ${prop.location}. Please schedule a site visit.`;
  }, 150);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let hasError = false;

  if (!name) {
    showError("fullName", "Please enter your full name.");
    hasError = true;
  } else hideError("fullName");

  if (!phone || !/^[0-9+\-\s]{8,15}$/.test(phone)) {
    showError("phone", "Please enter a valid phone number (min 8 digits).");
    hasError = true;
  } else hideError("phone");

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Please enter a valid email address.");
    hasError = true;
  } else hideError("email");

  if (!message) {
    showError("message", "Please describe your requirement or question.");
    hasError = true;
  } else hideError("message");

  if (hasError) return;

  const btn = document.getElementById("submit-btn");
  if (btn) {
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting Enquiry...`;
    btn.disabled = true;
  }

  setTimeout(() => {
    appState.formSuccess = true;
    const formEl = document.getElementById("enquiry-form");
    if (formEl) formEl.reset();
    if (btn) {
      btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Enquiry`;
      btn.disabled = false;
    }
    const succAlert = document.getElementById("enquiry-success");
    if (succAlert) succAlert.style.display = "flex";
    setTimeout(() => {
      appState.formSuccess = false;
      if (succAlert) succAlert.style.display = "none";
    }, 7000);
  }, 1200);
}

function showError(fieldId, msg) {
  const errEl = document.getElementById("err-" + fieldId);
  if (errEl) {
    errEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${msg}`;
    errEl.style.display = "flex";
  }
}

function hideError(fieldId) {
  const errEl = document.getElementById("err-" + fieldId);
  if (errEl) errEl.style.display = "none";
}

// Chatbot interactions
function toggleChatbot() {
  appState.chatOpen = !appState.chatOpen;
  renderApp();
  if (appState.chatOpen) {
    setTimeout(() => {
      const msgs = document.getElementById("chat-msgs");
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 50);
  }
}

function handleSendChat(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("chat-input-text");
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  appState.chatMessages.push({ sender: "user", text: val });
  input.value = "";
  renderApp();

  setTimeout(() => {
    const msgs = document.getElementById("chat-msgs");
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }, 50);

  setTimeout(() => {
    const botReply = getAiBotResponse(val);
    appState.chatMessages.push({ sender: "bot", text: botReply });
    renderApp();
    setTimeout(() => {
      const msgs = document.getElementById("chat-msgs");
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 50);
  }, 600);
}

function sendChatPrompt(promptText) {
  appState.chatMessages.push({ sender: "user", text: promptText });
  renderApp();
  setTimeout(() => {
    const msgs = document.getElementById("chat-msgs");
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }, 50);

  setTimeout(() => {
    const botReply = getAiBotResponse(promptText);
    appState.chatMessages.push({ sender: "bot", text: botReply });
    renderApp();
    setTimeout(() => {
      const msgs = document.getElementById("chat-msgs");
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 50);
  }, 600);
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  handleHashChange();
});
if (document.readyState === "complete" || document.readyState === "interactive") {
  handleHashChange();
}
