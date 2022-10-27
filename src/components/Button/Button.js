import s from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onNextPage }) => {
  return (
    <button className={s.button} type="button" onClick={onNextPage}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};

export default Button;
