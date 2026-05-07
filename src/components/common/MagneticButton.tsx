import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
  cursor?: "magnet" | "view" | "link";
  target?: string;
  rel?: string;
};

const MagneticButton = (
  { href, className, children, cursor = "magnet", target, rel }: MagneticButtonProps
) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = linkRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const strength = 0.3;

    element.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const handleMouseLeave = () => {
    const element = linkRef.current;
    if (!element) return;
    element.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <a
      ref={linkRef}
      href={href}
      className={`magnetic ${className ?? ""}`}
      data-cursor={cursor}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};

export default MagneticButton;
