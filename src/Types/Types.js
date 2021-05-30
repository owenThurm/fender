import PropTypes from 'prop-types';
import Point from '../Models/Point';
import Dimension from '../Models/Dimension';

export const componentPropTypes = {
  className: PropTypes.string,
  position: PropTypes.instanceOf(Point).isRequired,
  size: PropTypes.instanceOf(Dimension).isRequired,
  setShowStyleMenu: PropTypes.func.isRequired,
  setShowMoveable: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
};

export const componentDefaultProps = {
  className: '',
  style: {},
};
