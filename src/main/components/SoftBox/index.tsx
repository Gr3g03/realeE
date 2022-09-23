import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SoftBoxRoot from './SoftBoxRoot';
import React from 'react';
const SoftBox = forwardRef(({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }: any, ref) => (
  <SoftBoxRoot {...rest} ref={ref} ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }} />
));
SoftBox.defaultProps = {
  variant: 'contained',
  bgColor: 'transparent',
  color: 'dark',
  opacity: 1,
  borderRadius: 'none',
  shadow: 'none',
};
SoftBox.propTypes = {
  variant: PropTypes.oneOf(['contained', 'gradient']),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};

export default SoftBox;
