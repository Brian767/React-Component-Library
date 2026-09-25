import classNames from "classnames";

export default function Badge({
  children,
  color = "gray",
  shape = "square",
  className = "badge",
}) {
  let colorClass = color && `badge-${color}`;
  let shapeClass = shape && `badge-${shape}`;
  const allClasses = classNames(className, colorClass, shapeClass);

  return <span className={allClasses}>{children}</span>;
}
