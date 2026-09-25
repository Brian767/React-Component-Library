import classNames from "classnames";

export default function Banner({
  children,
  status = "success",
  className = "banner",
}) {
  let statusClass = status && `banner-${status}`;
  const allClasses = classNames(className, statusClass);

  const statusMessages = {
    success: "Congratulations!",
    warning: "Attention",
    error: "There is a problem with your application",
    neutral: "Update available",
  };

  const statusSvg = {
    success: "src/assets/Checkcircle.svg",
    warning: "src/assets/Exclamation.svg",
    error: "src/assets/Xcircle.svg",
    neutral: "src/assets/icon.svg",
  };

  return (
    <div className={allClasses}>
      <img src={statusSvg[status]} alt={`${status} svg`} />
      <div className="banner-text">
        <span>{statusMessages[status]}</span>
        {children? <p>{children}</p>:null}
      </div>
    </div>
  );
}
