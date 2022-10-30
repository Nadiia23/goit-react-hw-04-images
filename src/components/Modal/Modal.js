import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './modal.module.css';

const Modal = ({ src, tags, onModalClose }) => {
  useEffect(() => {
    const handleCloseKey = event => {
      if (event.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleCloseKey);

    return () => {
      window.removeEventListener('keydown', handleCloseKey);
    };
  }, [onModalClose]);

  const handleModalClose = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleModalClose}>
      <div className={s.modal}>
        <img src={src} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

export default Modal;
