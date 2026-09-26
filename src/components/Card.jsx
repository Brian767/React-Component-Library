import classNames from "classnames";
import CloudUpload from "../assets/CloudUpload.svg";

export default function Card({ children, color = "blue" ,icon = CloudUpload, title = "Title goes here"}) {

let colorClass = color && `card-icon-${color}`
  const cardClasses = classNames("card");
  const cardIconClasses = classNames("card-icon", colorClass)

  return (
    <div className={cardClasses}>
      <div className="card-text">
        <h3>{title}</h3>
        {children && <p>{children}</p>}

      </div>
      <div className={cardIconClasses}>
        <img src={icon} alt="card icon" />
      </div>
    </div>
  );
}
