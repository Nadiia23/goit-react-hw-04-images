import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './modal.module.css'

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseKey)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseKey)
    }

    handleModaleClose = event => {
        const { onModalClose } = this.props;
        if (event.target === event.currentTarget) {
            onModalClose()
        }
    }

    handleCloseKey = event => {
        const { onModalClose } = this.props;

        if (event.code === 'Escape') {
            onModalClose();
        }
    }
    
    render() {
         return (
            <div className={s.overlay} onClick={this.handleModaleClose}>
                <div className={s.modal}>
                    <img src={this.props.src} alt={this.props.alt} />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onModalClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Modal;