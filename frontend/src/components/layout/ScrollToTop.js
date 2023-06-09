import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import PropTypes from 'prop-types';

function ScrollToTop(props) {
  const { children, scrollTarget } = props;

  const trigger = useScrollTrigger({
    target: window,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 24, }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollToTop;
