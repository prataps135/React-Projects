import "./styles/Hero.css";

function HeroSection() {
  return (
    <main className="hero">
      <section className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button id="primary-btn">Shop Now</button>
            <button id="secondary-btn">Category</button>
        </div>

        <div className="shopping-brand">
            <p>Also Available On</p>
            <div className="shopping-btn">
                <img src="public/flipkart.png" alt="flipkart" />
                <img src="public/amazon.png" alt="amazon" />
            </div>
        </div>
      </section>
      <section className="hero-image">
        <img src="public/shoe_image.png" alt="nike shoe" />
      </section>
    </main>
  );
}

export default HeroSection;
