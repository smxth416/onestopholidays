import { LinkProps, useNavigate } from "react-router-dom";

export const SmoothLink = ({ onClick, to, children, ...props }: LinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);

    const targetUrl = typeof to === 'string' ? to : to.pathname || '/';

    // If already on the same page, just scroll to top smoothly
    if (window.location.pathname === targetUrl) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Trigger the navigation to the new page first
    navigate(targetUrl);
  };

  return (
    <a href={typeof to === 'string' ? to : '#'} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
