import image from "../../../../assets/image 9.png";
import profileimage from "../../../../assets/Frame 133742.png";
import { Link } from "react-router-dom";

const Card = ({ isNew, name, location, skills }) => {
  return (
    <div className="card">
      <div className="card-slide">
        <img src={image} alt="" />
      </div>
      <div className="card-info">
        <div className="card-info-freelancer-info">
          <div className="card-info-avatar">
            <img src={profileimage} alt="" />
          </div>
          <div className="card-info-details">
            {isNew && <span className="new">New</span>}
            <p>{name}</p>
            <span>{location}</span>
          </div>
        </div>

        <div className="card-info-skills">
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <div>
          <Link className="link" to="/contact-profile">
            {" "}
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
