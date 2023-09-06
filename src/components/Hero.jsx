import imageGrid from "../assets/Group 77.png"

export default function Hero() {
  return (
    <section className="hero-container">
        <img className="img-grid" src={imageGrid} alt="imgage grid"></img>
        <div className="intro">
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-content">
                Join unique interactive activities led by one-of-a-kind hosts—all
                without leaving home.
            </p>
        </div>
    </section>
  );
}
