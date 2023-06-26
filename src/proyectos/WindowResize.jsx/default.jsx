import useWindowSize from '../../hooks/useWindowSize';

const WindowResize = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  // Utiliza los valores isMobile, isTablet, isDesktop según tus necesidades
  
  return (
    <div>
      {isMobile && <p>Es un dispositivo móvil</p>}
      {isTablet && <p>Es un dispositivo tablet</p>}
      {isDesktop && <p>Es un dispositivo de escritorio</p>}
    </div>
  );
};

export default WindowResize;

