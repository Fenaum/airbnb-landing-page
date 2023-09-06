import starIcon from "../assets/star.png"
// import cardPhoto1 from "../assets/reviews/card-photo-swimmer.png"
// import cardPhoto2 from "../assets/reviews/card-photo-wedding.png"
// import cardPhoto3 from "../assets/reviews/card-photo-bike.png"


export default function Card(prop) {
    let badgeText;
    if (prop.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (prop.location === "Online") {
      badgeText = "ONLINE"
    };

    return (
      <section className="card--container">
        <div className="badge">{badgeText}</div>
        <img className="card-photo" alt="card-photo" src={`./src/assets/reviews/${prop.coverImg}`}></img>
        <div className="rating">
          <img className="raiting-star" alt="rating-star" src={starIcon}></img>
          <span className="gray">{prop.stats.rating}</span>
          <span className="gray">({prop.stats.reviewCount}) •</span>
          <span className="gray"> {prop.location}</span>
        </div>
        <h4 className="card-description">{prop.title}</h4>
        <p className="card-price">
          <span className="price">From ${prop.price}</span>/ person
        </p>
      </section>
    );
};