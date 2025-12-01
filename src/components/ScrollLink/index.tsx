import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface ScrollLinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  onLinkClick?: () => void;
}

export const ScrollLink = ({ href, children, onLinkClick, ...props }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (href === '#' || !href) return;

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // Encontrar o header fixo e obter sua altura
      const header = document.querySelector('[role="banner"]') as HTMLElement;
      const headerHeight = header?.offsetHeight || 100;

      // Calcular o offset considerando a altura do header
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const elementHeight = element.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = elementTop - headerHeight - (windowHeight - elementHeight - headerHeight) / 2;

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth',
      });

      if (onLinkClick) {
        onLinkClick();
      }
    }
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      sx={props.sx}
    >
      {children}
    </Button>
  );
};
