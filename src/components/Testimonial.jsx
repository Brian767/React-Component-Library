import classNames from "classnames";

export default function Testimonials({
  children,
  name = "Name",
  role = "role",
  image,
}) {
  const testimonialClasses = classNames("testimonial");

  return (
    <div className={testimonialClasses}>
      <div className="testimonial-image-wrapper">
        <img src={image} alt="headshot of person" />
      </div>

      <div className="testimonial-card">
        <div className="testimonial-text">
          {children && <p className="testimonial-quote">{children}</p>}
          {name && <p className="testimonial-name">{name}</p>}
          {role && <p className="testimonial-role">{role}</p>}
        </div>
      </div>
    </div>
  );
}
