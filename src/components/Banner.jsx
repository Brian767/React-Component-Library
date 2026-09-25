import classNames from "classnames";
import checkCircle from "../assets/Checkcircle.svg";
import exclamation from "../assets/Exclamation.svg";
import xCircle from "../assets/Xcircle.svg";
import infoIcon from "../assets/Icon.svg";


const statusConfig = {
  success: {
    message: "Congratulations!",
    icon: checkCircle,
  },
  warning: {
    message: "Attention",
    icon: exclamation,
  },
  error: {
    message: "There is a problem with your application",
    icon: xCircle,
  },
  neutral: {
    message: "Update available",
    icon: infoIcon,
  },
};


export default function Banner({
  children,
  status = "nuetral",
  
}) {
  let statusClass = status && `banner-${status}`;
  const allClasses = classNames("banner", statusClass);

  const {message, icon} = statusConfig[status]

  return (
    <div className={allClasses}>
      <img src={icon} alt={`${status} svg`} />
      <div className="banner-text">
        <span>{message}</span>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}
