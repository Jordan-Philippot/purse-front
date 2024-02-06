interface isMobileProps {
    setIsMobile: (bool: boolean) => void;
}

export const isMobileDevice = ({ setIsMobile }: isMobileProps) => {
  if (window.innerWidth < 768 || document.documentElement.clientWidth < 768) {
    setIsMobile(true);
  } else {
    setIsMobile(false);
  }
};
