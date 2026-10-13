// Global App State
let appState = {
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
      text: "Namaste! Welcome to Hanuman Estates. I am your AI Property Concierge. How can I assist you with your luxury property search today?"
    }
  ]
};

// Sample Property Data
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

// Gallery Items
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

// AI Concierge Knowledge Engine
const AI_KNOWLEDGE = {
  greetings: [
    "Hello! Welcome to Hanuman Estates. How may I assist you with your luxury property search today?",
    "Namaste! I am your Hanuman Estates AI Property Concierge. Are you looking to buy, rent, or invest in real estate?"
  ],
  pricing: "Our residential offerings start from ₹ 1.25 Cr for gated plots up to ₹ 14.5+ Cr for sea-facing penthouses and luxury estates. Rentals range from ₹ 1.5 Lakh/mo to ₹ 3.5 Lakh/mo.",
  services: "Hanuman Estates provides: 1) Residential Property Sales, 2) Luxury Rentals, 3) Commercial Leasing, 4) Land & Plot Enquiries, 5) Real Estate Investment Consultation, and 6) Premium Listing Assistance.",
  contact: "You can reach our senior advisors at +91 98765 43210 or email us at contact@hanumanestates.com. Our headquarters are located at 45 Luxury Boulevard, Indiranagar, Bangalore.",
  fallback: "Thank you for asking. To provide you with exact bespoke options tailored to your criteria, would you like our senior property specialist to call you? You can also fill out the Enquiry Form right below."
};

function getAiBotResponse(userText) {
  const q = userText.toLowerCase();
  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("namaste")) {
    return AI_KNOWLEDGE.greetings[Math.floor(Math.random() * AI_KNOWLEDGE.greetings.length)];
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

// Render Functions
function renderApp() {
  const root = document.getElementById("root");
  if (!root) return;

  // Filter properties
  const filtered = PROPERTIES_DATA.filter((item) => {
    if (appState.filterType !== "All" && item.type.toLowerCase() !== appState.filterType.toLowerCase()) return false;
    if (appState.filterPurpose !== "All" && item.purpose.toLowerCase() !== appState.filterPurpose.toLowerCase()) return false;
    if (appState.filterLocation !== "All" && !item.location.toLowerCase().includes(appState.filterLocation.toLowerCase())) return false;
    if (appState.filterBudget === "under2cr" && item.numericPrice > 20000000) return false;
    if (appState.filterBudget === "2to5cr" && (item.numericPrice < 20000000 || item.numericPrice > 50000000)) return false;
    if (appState.filterBudget === "above5cr" && item.numericPrice < 50000000) return false;
    return true;
  });

  root.innerHTML = `
    <div class="site-wrapper">
      <!-- HEADER -->
      <header class="header-nav ${appState.scrolled ? "scrolled" : ""}" id="main-header">
        <div class="container nav-container">
          <a href="#home" class="brand-logo" aria-label="Hanuman Estates Home">
            <div class="logo-icon"><i class="fa-solid fa-hotel"></i></div>
            <div class="brand-text">
              Hanuman <span>Estates</span>
              <span class="brand-sub">Luxury Real Estate</span>
            </div>
          </a>

          <nav>
            <ul class="nav-links ${appState.mobileMenuOpen ? "open" : ""}" id="nav-links">
              <li><a href="#home" class="nav-link" onclick="closeMobileMenu()">Home</a></li>
              <li><a href="#about" class="nav-link" onclick="closeMobileMenu()">About Us</a></li>
              <li><a href="#properties" class="nav-link" onclick="closeMobileMenu()">Properties</a></li>
              <li><a href="#services" class="nav-link" onclick="closeMobileMenu()">Services</a></li>
              <li><a href="#gallery" class="nav-link" onclick="closeMobileMenu()">Gallery</a></li>
              <li><a href="#testimonials" class="nav-link" onclick="closeMobileMenu()">Testimonials</a></li>
              <li><a href="#contact" class="nav-link" onclick="closeMobileMenu()">Contact</a></li>
            </ul>
          </nav>

          <div class="nav-cta-group">
            <a href="#enquiry" class="btn-primary"><i class="fa-solid fa-calendar-check"></i> Enquire Now</a>
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Toggle navigation menu">
              <i class="fa-solid ${appState.mobileMenuOpen ? "fa-xmark" : "fa-bars"}"></i>
            </button>
          </div>
        </div>
      </header>

      <!-- HERO SECTION -->
      <section id="home" class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-pill"><i class="fa-solid fa-crown"></i> Prime Luxury Real Estate Boutique</div>
            <h1 class="hero-title">Find Your Dream Property with <span>Hanuman Estates</span></h1>
            <p class="hero-desc">Explore residential and commercial properties with a simple, reliable, and personalized property-search experience.</p>

            <div class="hero-actions">
              <a href="#properties" class="btn-primary"><i class="fa-solid fa-compass"></i> Explore Properties</a>
              <a href="#enquiry" class="btn-secondary"><i class="fa-solid fa-envelope"></i> Enquire Now</a>
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
              <span class="section-badge">About Hanuman Estates</span>
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

              <a href="#services" class="btn-primary">
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
            <a href="#properties" class="btn-primary"><i class="fa-solid fa-compass"></i> Explore Properties</a>
            <a href="#enquiry" class="btn-secondary"><i class="fa-solid fa-paper-plane"></i> Send an Enquiry</a>
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
                <h3 style="margin-bottom: 1.5rem; fontSize: 1.5rem;">Head Office & Advisory Desk</h3>

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

      <!-- FOOTER -->
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="#home" class="brand-logo" style="color: #ffffff;">
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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Hanuman Estates</a></li>
                <li><a href="#properties">Featured Properties</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#gallery">Property Gallery</a></li>
                <li><a href="#testimonials">Client Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Property Categories</h4>
              <ul class="footer-nav">
                <li><a href="#properties">Luxury Villas</a></li>
                <li><a href="#properties">Skyline Penthouses</a></li>
                <li><a href="#properties">Gated Apartments</a></li>
                <li><a href="#properties">Commercial Tech Parks</a></li>
                <li><a href="#properties">Prime Residential Plots</a></li>
                <li><a href="#properties">Waterfront Estates</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Contact Info</h4>
              <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
                <i class="fa-solid fa-location-dot" style="color: var(--primary-gold); margin-right: 8px;"></i>
                Indiranagar 100ft Rd, Bangalore
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
            <button class="quick-reply-btn" onclick="sendChatPrompt('What services do you provide?')">Services</button>
            <button class="quick-reply-btn" onclick="sendChatPrompt('How do I contact your team?')">Contact Details</button>
          </div>
        </div>

        <form onsubmit="handleSendChat(event)" class="chatbot-input-area">
          <input type="text" id="chat-input-text" placeholder="Ask about properties, pricing, locations..." class="chatbot-input" />
          <button type="submit" class="chatbot-send-btn" aria-label="Send Message">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>

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

// Navigation helpers
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

// Filter helpers
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

// Modal & Lightbox
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

// Enquiry Form helpers
function prefillServiceEnquiry(serviceTitle) {
  const msgInput = document.getElementById("message");
  if (msgInput) {
    msgInput.value = `I would like to inquire about: ${serviceTitle}. Please provide further details.`;
  }
  const el = document.getElementById("enquiry");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function prefillPropertyEnquiry(propId) {
  const prop = PROPERTIES_DATA.find((p) => p.id === propId);
  if (!prop) return;
  const propTypeInput = document.getElementById("propertyType");
  const locInput = document.getElementById("location");
  const msgInput = document.getElementById("message");

  if (propTypeInput) propTypeInput.value = prop.type === "Villa" ? "Luxury Villa" : prop.type === "Penthouse" ? "Penthouse" : prop.type === "Apartment" ? "Modern Apartment" : prop.type === "Commercial" ? "Commercial Space" : "Residential Plot";
  if (locInput) locInput.value = prop.location.split(",").pop().trim();
  if (msgInput) msgInput.value = `I am interested in exploring '${prop.title}' (${prop.price}) located at ${prop.location}. Please schedule a site visit.`;

  const el = document.getElementById("enquiry");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let hasError = false;

  // Validation
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
    document.getElementById("enquiry-form").reset();
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

// Chatbot helpers
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

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});
if (document.readyState === "complete" || document.readyState === "interactive") {
  renderApp();
}
