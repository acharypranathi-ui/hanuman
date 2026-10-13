const { useState, useEffect, useRef } = React;

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

// AI Knowledge Base & Intelligent Response Helper
const AI_KNOWLEDGE = {
  greetings: [
    "Hello! Welcome to Hanuman Estates. How may I assist you with your luxury property search today?",
    "Namaste! I am your Hanuman Estates AI Property Concierge. Are you looking to buy, rent, or invest in real estate?"
  ],
  properties: "We feature an exclusive collection of luxury villas, penthouses, modern apartments, Grade-A commercial offices, and approved plots across Bangalore, Mumbai, Gurgaon, and Hyderabad.",
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
    return `We currently have premier properties available including The Grand Regal Villa in Bangalore, Skyline Panorama Penthouse in Mumbai, and Cyber Tower Suites in Hyderabad. You can filter properties directly on our website or let me know your preferred city!`;
  }
  if (q.includes("price") || q.includes("budget") || q.includes("cost") || q.includes("rate")) {
    return AI_KNOWLEDGE.pricing + " Would you like to set an appointment or submit a budget preference?";
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
// MAIN REACT COMPONENT
// ============================================================================
function App() {
  // Navigation State
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Property Filters State
  const [filterType, setFilterType] = useState("All");
  const [filterPurpose, setFilterPurpose] = useState("All"); // All, Buy, Rent
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterBudget, setFilterBudget] = useState("All");

  // Hero Search Inputs State
  const [heroLocation, setHeroLocation] = useState("");
  const [heroType, setHeroType] = useState("All");
  const [heroPurpose, setHeroPurpose] = useState("Buy");
  const [heroBudget, setHeroBudget] = useState("All");

  // Lightbox State
  const [lightboxImg, setLightboxImg] = useState(null);

  // Modal State for Property Details
  const [activePropertyModal, setActivePropertyModal] = useState(null);

  // Enquiry Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyType: "Luxury Villa",
    location: "Bangalore",
    budget: "₹ 2 Cr - ₹ 5 Cr",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // AI Chatbot State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Namaste! Welcome to Hanuman Estates. I am your AI Property Concierge. How can I help you find your dream property today?"
    }
  ]);
  const chatMessagesEndRef = useRef(null);

  // Scroll listener for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chat scroll auto bottom
  useEffect(() => {
    if (chatOpen && chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, chatOpen]);

  // Handle Hero Search Trigger
  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (heroType !== "All") setFilterType(heroType);
    if (heroPurpose) setFilterPurpose(heroPurpose);
    
    // Scroll to properties section
    const elem = document.getElementById("properties");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter properties logic
  const filteredProperties = PROPERTIES_DATA.filter((item) => {
    if (filterType !== "All" && item.type.toLowerCase() !== filterType.toLowerCase()) {
      return false;
    }
    if (filterPurpose !== "All" && item.purpose.toLowerCase() !== filterPurpose.toLowerCase()) {
      return false;
    }
    if (filterLocation !== "All" && !item.location.toLowerCase().includes(filterLocation.toLowerCase())) {
      return false;
    }
    if (filterBudget === "under2cr" && item.numericPrice > 20000000) return false;
    if (filterBudget === "2to5cr" && (item.numericPrice < 20000000 || item.numericPrice > 50000000)) return false;
    if (filterBudget === "above5cr" && item.numericPrice < 50000000) return false;

    return true;
  });

  // Handle Form Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate Form
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your contact phone number.";
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number (min 8 digits).";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please describe your requirement or question.";
    }
    return errors;
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormSubmitting(true);
    // Simulate real submission handling with timeout
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        propertyType: "Luxury Villa",
        location: "Bangalore",
        budget: "₹ 2 Cr - ₹ 5 Cr",
        message: ""
      });
      setTimeout(() => setFormSuccess(false), 7000);
    }, 1200);
  };

  // Quick enquiry fill from property card
  const handleCardEnquiry = (property) => {
    setFormData((prev) => ({
      ...prev,
      propertyType: property.type,
      location: property.location.split(",").pop().trim(),
      message: `I am interested in exploring '${property.title}' (${property.price}) located at ${property.location}. Please schedule a site visit.`
    }));
    const elem = document.getElementById("enquiry");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  // Chat message send
  const handleSendChat = (e) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setChatInput("");

    // Simulate AI thinking and reply
    setTimeout(() => {
      const botReply = getAiBotResponse(userMsg);
      setChatMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  const handleQuickQuestion = (qText) => {
    setChatMessages((prev) => [...prev, { sender: "user", text: qText }]);
    setTimeout(() => {
      const botReply = getAiBotResponse(qText);
      setChatMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <div className="site-wrapper">
      {/* ======================================================================
          HEADER & NAVIGATION
          ====================================================================== */}
      <header className={`header-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="#home" className="brand-logo" aria-label="Hanuman Estates Home">
            <div className="logo-icon">
              <i className="fa-solid fa-hotel"></i>
            </div>
            <div className="brand-text">
              Hanuman <span>Estates</span>
              <span className="brand-sub">Luxury Real Estate</span>
            </div>
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#properties" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Properties
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-cta-group">
            <a href="#enquiry" className="btn-primary">
              <i className="fa-solid fa-calendar-check"></i> Enquire Now
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================================
          HERO SECTION
          ====================================================================== */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-pill">
              <i className="fa-solid fa-crown"></i> Prime Luxury Real Estate Boutique
            </div>
            <h1 className="hero-title">
              Find Your Dream Property with <span>Hanuman Estates</span>
            </h1>
            <p className="hero-desc">
              Explore residential and commercial properties with a simple, reliable, and personalized property-search experience.
            </p>

            <div className="hero-actions">
              <a href="#properties" className="btn-primary">
                <i className="fa-solid fa-compass"></i> Explore Properties
              </a>
              <a href="#enquiry" className="btn-secondary">
                <i className="fa-solid fa-envelope"></i> Enquire Now
              </a>
            </div>

            {/* Property Search Interface with Filters */}
            <div className="search-filter-card">
              <div className="search-tabs">
                <button
                  className={`search-tab ${heroPurpose === "Buy" ? "active" : ""}`}
                  onClick={() => setHeroPurpose("Buy")}
                >
                  <i className="fa-solid fa-house"></i> Buy Property
                </button>
                <button
                  className={`search-tab ${heroPurpose === "Rent" ? "active" : ""}`}
                  onClick={() => setHeroPurpose("Rent")}
                >
                  <i className="fa-solid fa-key"></i> Rent Property
                </button>
              </div>

              <form onSubmit={handleHeroSearch} className="search-grid">
                <div className="filter-group">
                  <label className="filter-label">
                    <i className="fa-solid fa-location-dot"></i> Preferred Location
                  </label>
                  <select
                    className="filter-select"
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                  >
                    <option value="All">All Major Cities</option>
                    <option value="Bangalore">Bangalore (Whitefield/Devanahalli)</option>
                    <option value="Mumbai">Mumbai (Marine Drive/Bandra)</option>
                    <option value="Gurgaon">Gurgaon (Golf Course Rd)</option>
                    <option value="Hyderabad">Hyderabad (HITEC City)</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">
                    <i className="fa-solid fa-building"></i> Property Type
                  </label>
                  <select
                    className="filter-select"
                    value={heroType}
                    onChange={(e) => setHeroType(e.target.value)}
                  >
                    <option value="All">All Property Types</option>
                    <option value="Villa">Luxury Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Apartment">Modern Apartment</option>
                    <option value="Commercial">Commercial Office</option>
                    <option value="Plot">Gated Plot / Land</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">
                    <i className="fa-solid fa-indian-rupee-sign"></i> Budget Range
                  </label>
                  <select
                    className="filter-select"
                    value={filterBudget}
                    onChange={(e) => setFilterBudget(e.target.value)}
                  >
                    <option value="All">Any Budget</option>
                    <option value="under2cr">Under ₹ 2 Cr</option>
                    <option value="2to5cr">₹ 2 Cr - ₹ 5 Cr</option>
                    <option value="above5cr">₹ 5 Cr & Above</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">
                    <i className="fa-solid fa-tag"></i> Transaction
                  </label>
                  <select
                    className="filter-select"
                    value={heroPurpose}
                    onChange={(e) => setHeroPurpose(e.target.value)}
                  >
                    <option value="Buy">For Sale (Buy)</option>
                    <option value="Rent">For Lease (Rent)</option>
                  </select>
                </div>

                <button type="submit" className="btn-search">
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          ABOUT US SECTION
          ====================================================================== */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="Hanuman Estates Luxury Real Estate Architecture"
                className="about-main-img"
              />
              <div className="about-floating-card">
                <div className="floating-num">15+</div>
                <div className="floating-text">Years of Trusted Excellence in Real Estate Advisory</div>
              </div>
            </div>

            <div className="about-content">
              <span className="section-badge">About Hanuman Estates</span>
              <h2>Dedicated to Fulfilling Your Property Aspirations</h2>
              <p className="about-text">
                At <strong>Hanuman Estates</strong>, we believe that discovering the right real estate is more than just a transaction — it is about finding a space where dreams flourish and generational wealth is built. Inspired by boutique real estate standards, we combine deep market knowledge, absolute transparency, and bespoke advisory to assist homebuyers, corporates, and discerning investors.
              </p>
              <p className="about-text">
                Our customer-first philosophy ensures that every property recommended undergoes rigorous legal documentation, clear-title verification, and fair valuation, giving you complete peace of mind.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div className="highlight-text">
                    <h4>100% Verified Titles</h4>
                    <p>Transparent legal verification</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-user-tie"></i>
                  </div>
                  <div className="highlight-text">
                    <h4>Tailored Advisory</h4>
                    <p>Dedicated relationship managers</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div className="highlight-text">
                    <h4>Curated Portfolio</h4>
                    <p>Only prime, top-tier developments</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-comments"></i>
                  </div>
                  <div className="highlight-text">
                    <h4>Prompt Assistance</h4>
                    <p>24/7 client care & AI support</p>
                  </div>
                </div>
              </div>

              <a href="#services" className="btn-primary">
                Learn More About Our Approach <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          OUR SERVICES SECTION
          ====================================================================== */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Comprehensive Solutions</span>
            <h2 className="section-title">Specialised Real Estate Services</h2>
            <p className="section-subtitle">
              Whether you are buying your first luxury home, leasing Grade-A corporate towers, or expanding your investment portfolio, our bespoke services are tailored to your needs.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.id} className="service-card">
                <div>
                  <div className="service-icon-box">
                    <i className={s.icon}></i>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div>
                  <a
                    href="#enquiry"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        message: `I would like to inquire about: ${s.title}. Please provide more details.`
                      }));
                    }}
                    className="service-btn"
                  >
                    Know More & Enquire <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          FEATURED PROPERTIES SECTION
          ====================================================================== */}
      <section id="properties" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Exclusive Listings</span>
            <h2 className="section-title">Featured Properties</h2>
            <p className="section-subtitle">
              Explore our handpicked collection of prime residential villas, apartments, penthouses, commercial suites, and gated plots.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="properties-filter-bar">
            {["All", "Villa", "Penthouse", "Apartment", "Commercial", "Plot"].map((type) => (
              <button
                key={type}
                className={`pill-filter-btn ${filterType === type ? "active" : ""}`}
                onClick={() => setFilterType(type)}
              >
                {type === "All" ? "All Properties" : type}
              </button>
            ))}
            <button
              className={`pill-filter-btn ${filterPurpose === "Buy" ? "active" : ""}`}
              onClick={() => setFilterPurpose(filterPurpose === "Buy" ? "All" : "Buy")}
            >
              <i className="fa-solid fa-tag"></i> For Sale
            </button>
            <button
              className={`pill-filter-btn ${filterPurpose === "Rent" ? "active" : ""}`}
              onClick={() => setFilterPurpose(filterPurpose === "Rent" ? "All" : "Rent")}
            >
              <i className="fa-solid fa-key"></i> For Rent
            </button>
          </div>

          {/* Properties Grid */}
          <div className="properties-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((prop) => (
                <div key={prop.id} className="property-card">
                  <div className="property-media">
                    <img src={prop.image} alt={prop.title} className="property-img" />
                    <span className="property-badge-type">{prop.type}</span>
                    <span className="property-badge-status">{prop.purpose}</span>
                    <div className="property-price-tag">{prop.price}</div>
                  </div>

                  <div className="property-content">
                    <h3 className="property-title">{prop.title}</h3>
                    <div className="property-location">
                      <i className="fa-solid fa-location-dot"></i> {prop.location}
                    </div>

                    <div className="property-features">
                      <span>
                        <i className="fa-solid fa-vector-square"></i> {prop.area}
                      </span>
                      <span>
                        <i className="fa-solid fa-bed"></i> {prop.beds} Beds
                      </span>
                      <span>
                        <i className="fa-solid fa-bath"></i> {prop.baths} Baths
                      </span>
                    </div>

                    <p style={{ fontSize: "0.88rem", color: "#6b7280", marginBottom: "1.25rem" }}>
                      {prop.description}
                    </p>

                    <div className="property-actions">
                      <button
                        className="btn-card-details"
                        onClick={() => setActivePropertyModal(prop)}
                      >
                        <i className="fa-solid fa-circle-info"></i> View Details
                      </button>
                      <button
                        className="btn-card-enquire"
                        onClick={() => handleCardEnquiry(prop)}
                      >
                        <i className="fa-solid fa-envelope"></i> Enquire
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "3rem" }}>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: "2.5rem", color: "#d1d5db" }}></i>
                <h3 style={{ marginTop: "1rem" }}>No properties match the selected criteria</h3>
                <p style={{ color: "#6b7280" }}>Try clearing your filters to view all available listings.</p>
                <button
                  onClick={() => {
                    setFilterType("All");
                    setFilterPurpose("All");
                    setFilterLocation("All");
                    setFilterBudget("All");
                  }}
                  className="btn-primary"
                  style={{ marginTop: "1rem" }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ======================================================================
          PROPERTY GALLERY SECTION
          ====================================================================== */}
      <section id="gallery" className="section-padding gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Visual Showcase</span>
            <h2 className="section-title">Property Gallery</h2>
            <p className="section-subtitle" style={{ color: "#9ca3af" }}>
              Immerse yourself in breathtaking architectural designs, opulent interiors, and picturesque community landscapes. Click any image to view in high definition.
            </p>
          </div>

          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`gallery-item ${item.span}`}
                onClick={() => setLightboxImg(item)}
              >
                <img src={item.image} alt={item.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="gallery-caption">{item.title}</div>
                  <div className="gallery-sub">
                    <i className="fa-solid fa-expand"></i> {item.category} • Click to enlarge
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-modal" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxImg(null)}
              aria-label="Close Lightbox"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={lightboxImg.image} alt={lightboxImg.title} className="lightbox-img" />
            <div className="lightbox-info">
              <h3>{lightboxImg.title}</h3>
              <p style={{ color: "var(--primary-gold)" }}>{lightboxImg.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          WHY CHOOSE HANUMAN ESTATES
          ====================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">The Hanuman Advantage</span>
            <h2 className="section-title">Why Choose Hanuman Estates?</h2>
            <p className="section-subtitle">
              We stand apart through uncompromising integrity, bespoke consultation, and a transparent discovery workflow.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h3>Transparent Pricing</h3>
              <p>Direct developer rates and honest pricing with zero hidden commissions or misleading terms.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <i className="fa-solid fa-file-contract"></i>
              </div>
              <h3>Legal Verification</h3>
              <p>Every title deed, encumbrance certificate, and municipal approval is vetted by legal specialists.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <i className="fa-solid fa-route"></i>
              </div>
              <h3>Personalized Tours</h3>
              <p>Private chauffeur-driven site inspections and tailored property recommendations according to your timeline.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>Responsive Support</h3>
              <p>Dedicated relationship advisors and 24/7 AI-assisted assistance throughout your property journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          TESTIMONIALS SECTION
          ====================================================================== */}
      <section id="testimonials" className="section-padding testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Client Experiences</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Read authentic feedback from families and business leaders who found their ideal properties through Hanuman Estates.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div>
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-quote">"{t.comment}"</p>
                </div>

                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} className="author-avatar" />
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          CALL TO ACTION BANNER
          ====================================================================== */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Find Your Next Property?</h2>
          <p>Tell us what you are looking for, and let Hanuman Estates help you explore suitable options.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#properties" className="btn-primary">
              <i className="fa-solid fa-compass"></i> Explore Properties
            </a>
            <a href="#enquiry" className="btn-secondary">
              <i className="fa-solid fa-paper-plane"></i> Send an Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          ENQUIRY FORM & CONTACT SECTION
          ====================================================================== */}
      <section id="enquiry" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">Schedule a Consultation or Site Visit</h2>
            <p className="section-subtitle">
              Leave your details below. Our senior property advisor will reach out within 2 hours with curated options and detailed floor plans.
            </p>
          </div>

          <div className="enquiry-container">
            {/* Form Wrapper */}
            <div className="form-wrapper">
              {formSuccess && (
                <div className="alert-success">
                  <i className="fa-solid fa-circle-check" style={{ fontSize: "1.4rem" }}></i>
                  <div>
                    <strong>Enquiry Submitted Successfully!</strong>
                    <p style={{ fontSize: "0.85rem", marginTop: "2px" }}>
                      Thank you. Your request has been assigned to our senior property specialist. We will contact you shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="form-input"
                    />
                    {formErrors.fullName && <div className="form-error"><i className="fa-solid fa-triangle-exclamation"></i> {formErrors.fullName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="form-input"
                    />
                    {formErrors.phone && <div className="form-error"><i className="fa-solid fa-triangle-exclamation"></i> {formErrors.phone}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rahul.sharma@example.com"
                    className="form-input"
                  />
                  {formErrors.email && <div className="form-error"><i className="fa-solid fa-triangle-exclamation"></i> {formErrors.email}</div>}
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="propertyType">Interested Property Type</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="form-select-full"
                    >
                      <option value="Luxury Villa">Luxury Villa</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Apartment">Modern Apartment</option>
                      <option value="Commercial Space">Commercial Space / Office</option>
                      <option value="Residential Plot">Residential Plot / Land</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-select-full"
                    >
                      <option value="₹ 1 Cr - ₹ 2 Cr">₹ 1 Cr - ₹ 2 Cr</option>
                      <option value="₹ 2 Cr - ₹ 5 Cr">₹ 2 Cr - ₹ 5 Cr</option>
                      <option value="₹ 5 Cr - ₹ 10 Cr">₹ 5 Cr - ₹ 10 Cr</option>
                      <option value="₹ 10 Cr+">₹ 10 Cr + (Ultra Luxury)</option>
                      <option value="Rental">Rental / Lease Requirement</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="location">Preferred Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Bangalore, Mumbai, Gurgaon"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message or Specific Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe specific preferences (e.g. east facing, ready to move, possession timeline, amenities desired)..."
                    className="form-textarea"
                  ></textarea>
                  {formErrors.message && <div className="form-error"><i className="fa-solid fa-triangle-exclamation"></i> {formErrors.message}</div>}
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="btn-primary"
                  style={{ width: "100%", padding: "1rem" }}
                >
                  {formSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i> Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Details Card */}
            <div className="contact-sidebar" id="contact">
              <div className="contact-card">
                <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>Head Office & Advisory Desk</h3>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Corporate Address</h4>
                    <p>Hanuman Estates Tower, 45 Luxury Boulevard, Indiranagar 100ft Road, Bangalore – 560038, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Direct Phone Line</h4>
                    <p>+91 (080) 4123 8899<br />+91 98765 43210 (VIP Desk)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Email Inquiries</h4>
                    <p>contact@hanumanestates.com<br />vip@hanumanestates.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Business Hours</h4>
                    <p>Monday – Saturday: 9:30 AM – 7:30 PM<br />Sunday: Prior Appointment Only</p>
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, textAlign: "center" }}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: "#25D366" }}></i> WhatsApp
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, textAlign: "center" }}
                  >
                    <i className="fa-solid fa-map-location-dot"></i> Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          FOOTER
          ====================================================================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="brand-logo" style={{ color: "#ffffff" }}>
                <div className="logo-icon">
                  <i className="fa-solid fa-hotel"></i>
                </div>
                <div className="brand-text">
                  Hanuman <span style={{ color: "var(--primary-gold)" }}>Estates</span>
                </div>
              </a>
              <p className="footer-about">
                Hanuman Estates is a premier real estate advisory boutique dedicated to presenting the finest residential villas, penthouses, commercial workspaces, and investment land parcels across India's top metropolitan locations.
              </p>
              <div className="social-links">
                <a href="#home" className="social-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#home" className="social-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#home" className="social-btn" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#home" className="social-btn" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Hanuman Estates</a></li>
                <li><a href="#properties">Featured Properties</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#gallery">Property Gallery</a></li>
                <li><a href="#testimonials">Client Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Property Categories</h4>
              <ul className="footer-nav">
                <li><a href="#properties">Luxury Villas</a></li>
                <li><a href="#properties">Skyline Penthouses</a></li>
                <li><a href="#properties">Gated Apartments</a></li>
                <li><a href="#properties">Commercial Tech Parks</a></li>
                <li><a href="#properties">Prime Residential Plots</a></li>
                <li><a href="#properties">Waterfront Estates</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Info</h4>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                <i className="fa-solid fa-location-dot" style={{ color: "var(--primary-gold)", marginRight: "8px" }}></i>
                Indiranagar 100ft Rd, Bangalore
              </p>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                <i className="fa-solid fa-phone" style={{ color: "var(--primary-gold)", marginRight: "8px" }}></i>
                +91 98765 43210
              </p>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                <i className="fa-solid fa-envelope" style={{ color: "var(--primary-gold)", marginRight: "8px" }}></i>
                contact@hanumanestates.com
              </p>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "1rem" }}>
                RERA Registered Real Estate Consultant & Brokerage Agency.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} Hanuman Estates. All Rights Reserved. Designed for Mobile, Tablet, Laptop & Desktop.
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="#home" style={{ color: "#9ca3af" }}>Privacy Policy</a>
              <a href="#home" style={{ color: "#9ca3af" }}>Terms of Service</a>
              <a href="#home" style={{ color: "#9ca3af" }}>RERA Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ======================================================================
          AI CHATBOT WIDGET
          ====================================================================== */}
      {/* Floating Trigger Button */}
      <button
        className="chatbot-trigger"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Toggle Hanuman AI Property Concierge"
      >
        <span className="chatbot-badge"></span>
        <i className={`fa-solid ${chatOpen ? "fa-xmark" : "fa-robot"}`}></i>
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="chatbot-avatar">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <div className="chatbot-name">Hanuman AI Concierge</div>
                <div className="chatbot-status">
                  <span style={{ width: 8, height: 8, background: "#10b981", borderRadius: "50%", display: "inline-block" }}></span>
                  Online • Instant Real Estate Help
                </div>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setChatOpen(false)} aria-label="Close Chat">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="chatbot-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatMessagesEndRef} />
          </div>

          {/* Quick Questions Helper */}
          <div style={{ padding: "0.5rem 1rem", background: "#f8f9fa", borderTop: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.35rem", fontWeight: 600 }}>Suggested Questions:</div>
            <div className="chat-quick-replies">
              <button
                className="quick-reply-btn"
                onClick={() => handleQuickQuestion("What luxury villas are available?")}
              >
                Available Villas
              </button>
              <button
                className="quick-reply-btn"
                onClick={() => handleQuickQuestion("What is the price range?")}
              >
                Price Range
              </button>
              <button
                className="quick-reply-btn"
                onClick={() => handleQuickQuestion("What services do you provide?")}
              >
                Services
              </button>
              <button
                className="quick-reply-btn"
                onClick={() => handleQuickQuestion("How do I contact your team?")}
              >
                Contact Details
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendChat} className="chatbot-input-area">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about properties, pricing, locations..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Send Message">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      {/* Property Details Modal */}
      {activePropertyModal && (
        <div className="modal-overlay" onClick={() => setActivePropertyModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActivePropertyModal(null)}
              aria-label="Close Modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={activePropertyModal.image}
              alt={activePropertyModal.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span className="section-badge">{activePropertyModal.type} • {activePropertyModal.purpose}</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-gold)" }}>{activePropertyModal.price}</span>
              </div>
              <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{activePropertyModal.title}</h2>
              <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
                <i className="fa-solid fa-location-dot" style={{ color: "var(--primary-gold)" }}></i> {activePropertyModal.location}
              </p>
              <div className="property-features" style={{ margin: "1rem 0" }}>
                <span><i className="fa-solid fa-vector-square"></i> Area: {activePropertyModal.area}</span>
                <span><i className="fa-solid fa-bed"></i> Bedrooms: {activePropertyModal.beds}</span>
                <span><i className="fa-solid fa-bath"></i> Bathrooms: {activePropertyModal.baths}</span>
              </div>
              <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {activePropertyModal.description} Complete with premium Italian fixtures, high security gated community, 100% power backup, club facilities, and landscaped gardens.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  className="btn-primary"
                  style={{ flex: 1 }}
                  onClick={() => {
                    handleCardEnquiry(activePropertyModal);
                    setActivePropertyModal(null);
                  }}
                >
                  <i className="fa-solid fa-calendar-check"></i> Schedule Site Visit
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setActivePropertyModal(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Mount React Root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
