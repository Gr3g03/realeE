// Soft UI Dashboard React helper functions
import rgba from '../functions/rgba';
import pxToRem from '../functions/pxToRem';

function boxShadow(offset: any = [], radius: any = [], color: any, opacity: any, inset: any = '') {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(color, opacity)}`;
}

export default boxShadow;
