
import Link from "next/link";
import "@/styles/landing-page.css";

const capabilities = [
  {
    title: "QR ordering",
    description:
      "Give guests an easier way to explore your menu and order from their tables.",
    image: "/images/QR Table Ordering at LOBII Restaurant.png",
    alt: "Customer browsing a restaurant menu on a phone",
  },
  {
    title: "Restaurant POS",
    description:
      "Manage orders, tables and customer payments from your restaurant workspace.",
    image: "/images/LOBII Restaurant POS Counter.png",
    alt: "Restaurant employee using a point of sale system",
  },
  {

    title: "Kitchen & bar",
    description:
      "Connect your service team with the people preparing every order.",
    image: "/images/download.jpg",
    alt: "Chef preparing a restaurant order",
  },
];

const platformFeatures = [
  {
    title: "Table management",
    description: "Organise tables and dining sessions.",
    image: "/images/LOBII Table Management in a Cozy Restaurant.png",
    alt: "Restaurant table reservation sign",
  },
  {
    
    title: "Menu management",
    description: "Manage menu categories, items and availability.",
    image: "/images/Gourmet Dining Meets Smart Menu Management.png",
    alt: "Freshly prepared restaurant burger",
  },
  {
    
    title: "Inventory",
    description: "Keep track of restaurant stock and ingredients.",
    image: "/images/Chef Inspecting Organized Kitchen Inventory.png",
    alt: "Fresh vegetables and ingredients",
  },
  {
    
    title: "Payments",
    description: "Manage payment records and restaurant billing.",
    image: "/images/LOBII POS Checkout at Table 07.png",
    alt: "Restaurant payment terminal",
  },
  {
    
    title: "Staff management",
    description: "Organise restaurant teams and responsibilities.",
    image: "/images/LOBII Team Staff Management Briefing.png",
    alt: "Restaurant staff apron",
  },
  {
    
    title: "Analytics",
    description: "Understand restaurant performance using available records.",
    image: "/images/Restaurant Manager Reviewing Sales Dashboard.png",
    alt: "Restaurant food presentation",
  },
];

export default function HomePage() {
  return (
    <main className="lobii-site">

      {/* NAVIGATION */}
      <header className="lobii-header">
        <Link href="/" className="lobii-logo" aria-label="LOBII home">
          <img src="/images/lobii-logo.png" alt="LOBII" />
        </Link>

        <nav className="lobii-navigation" aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#platform">Platform</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="lobii-header-actions">
          <Link href="/login" className="lobii-login">
            Sign in
          </Link>

          <Link href="/register" className="lobii-header-cta">
            Get started
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="lobii-hero">
        <div className="hero-text">
          <p className="lobii-eyebrow">
            A NEW WAY TO RUN YOUR RESTAURANT
          </p>

          <h1>
            Good food.
            <br />
            Great people.
            <br />
            <span>Better service.</span>
          </h1>

          <p className="hero-description">
            Running a restaurant takes a team. LOBII brings your
            ordering, tables, kitchen, inventory and payments
            together in one connected platform.
          </p>

          <div className="hero-actions">
            <Link href="/register" className="lobii-button coral-button">
              Get started <span aria-hidden="true"></span>
            </Link>

            <a href="#experience" className="hero-discover">
              Discover LOBII
            </a>
          </div>

          <p className="hero-footnote">
            BUILT FOR THE PEOPLE BEHIND GREAT HOSPITALITY.
          </p>
        </div>

        <div className="hero-image hero-food-scene">
          <img
            src="/images/Twin Steak Dinners with Sides.png"
            alt="Restaurant-quality steak dinner with beautifully presented sides"
            className="hero-main-food"
          />

          <img
            src="/images/food/floating-burger.png"
            alt=""
            aria-hidden="true"
            className="floating-food food-burger"
          />

          <img
            src="/images/food/pasta-dish.png"
            alt=""
            aria-hidden="true"
            className="floating-food food-pasta"
          />

          <img
            src="/images/food/chocolate-dessert.png"
            alt=""
            aria-hidden="true"
            className="floating-food food-dessert"
          />
        </div>

        <div className="hero-bottom-label">
          <span>RESTAURANT MANAGEMENT, REIMAGINED.</span>
          <span className="hero-label-line" />
          <span>MADE FOR MODERN HOSPITALITY.</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="lobii-introduction" id="experience">
        <div className="introduction-image">
          <img
            src="/images/Creamy Seared Shrimp Pasta.png"
            alt="Freshly prepared shrimp pasta with herbs"
            loading="lazy"
          />
        </div>

        <div className="introduction-content">
          <p className="section-index">
              THE LOBII EXPERIENCE
          </p>

          <p className="introduction-small">
            GREAT RESTAURANTS ARE BUILT ON GREAT EXPERIENCES.
          </p>

          <h2>
            From the first hello
            <br />
            to the last <span>thank you.</span>
          </h2>

          <p className="introduction-description">
            Every order matters. Every table matters. Every member
            of your team matters. LOBII helps bring the moving parts
            of your restaurant together so service can flow better.
          </p>
        </div>
      </section>

      {/* RESTAURANT PHOTOGRAPHY */}
      <section className="lobii-photo-section">
        <div className="photo-section-image">
          <img
            src="/images/Cozy Dinner Spot ✨🍽️.jpg"
            alt="Restaurant team providing a welcoming dining experience"
            loading="lazy"
          />
        </div>

        <div className="photo-section-copy">
          <p className="lobii-eyebrow">
            MADE FOR THE RESTAURANT FLOOR
          </p>

          <h2>
            Less chaos.
            <br />
            More hospitality.
          </h2>

          <p>
            Keep restaurant operations connected, from the
            customer placing an order to the team preparing it.
          </p>

          <a href="#capabilities" className="light-link">
            Explore the experience <span aria-hidden="true"></span>
          </a>
        </div>

      </section>

      {/* CAPABILITIES */}
      <section className="lobii-capabilities" id="capabilities">
        <div className="capabilities-heading">
          <p className="lobii-eyebrow">
             ONE CONNECTED PLATFORM
          </p>

          <h2>
            Everything has
            <br />
            its place.
          </h2>

          <p>
            Bring the everyday work of your restaurant into one
            organised workspace.
          </p>

          <img
            src="/images/food/bread-olives.png"
            alt=""
            aria-hidden="true"
            className="capabilities-decoration"
            loading="lazy"
          />
        </div>

        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability-item" >
              <div className="capability-photo">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>

              <div className="capability-copy">
                <span className="capability-number">
                  
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              
            </article>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="lobii-platform" id="platform">
        <div className="platform-heading">
          <p className="lobii-eyebrow">
            YOUR RESTAURANT WORKSPACE
          </p>

          <h2>
            The details that
            <br />
            keep service moving.
          </h2>

          <p>
            LOBII brings the essential parts of restaurant management
            into one platform.
          </p>
        </div>

        <div className="platform-grid">
          {platformFeatures.map((feature) => (
            <article
              className="platform-card"
              
            >
              <span className="platform-number">
                
              </span>

              <div className="platform-card-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <img
                src={feature.image}
                alt={feature.alt}
                className="platform-card-image"
                loading="lazy"
              />
            </article>
          ))}
        </div>

        <img
          src="/images/food/bread-olives.png"
          alt=""
          aria-hidden="true"
          className="platform-decoration"
          loading="lazy"
        />
      </section>

      {/* CLOSING CTA */}
      <section className="lobii-closing" id="contact">
        <div className="closing-content">
          <p className="lobii-eyebrow">
            YOUR RESTAURANT. YOUR NEXT CHAPTER.
          </p>

          <h2>
            Make room for
            <br />
            <span>better service.</span>
          </h2>

          <p>
            Bring your restaurant operations together with LOBII.
          </p>

        </div>

        <div className="closing-image">
          <img
            src="/images/Decadent Chocolate Cake and Citrus Cocktail.png"
            alt="Chocolate dessert and refreshing cocktail"
            loading="lazy"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lobii-footer">
        <div className="footer-main">
          <div className="footer-about">
            <Link href="/" aria-label="LOBII home">
              <img src="/images/lobii-logo.png" alt="LOBII" />
            </Link>

            <h3>About LOBII</h3>

            <p>
              A connected restaurant management platform designed
              to bring orders, tables, kitchen operations and
              payments together.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#experience">About us</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#platform">Platform</a>
            <a href="#contact">Contact us</a>
          </div>

          <div className="footer-column">
            <h3>Platform</h3>
            <a href="#capabilities">QR ordering</a>
            <a href="#capabilities">Restaurant POS</a>
            <a href="#capabilities">Kitchen & bar</a>
            <a href="#platform">Inventory</a>
          </div>

          <div className="footer-column">
            <h3>My Account</h3>
            <Link href="/login">Sign in</Link>
            <Link href="/register">Get started</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} LOBII. All rights reserved.
          </span>

          <span>
            Restaurant management, brought together.
          </span>
        </div>
      </footer>
    </main>
  );
}
