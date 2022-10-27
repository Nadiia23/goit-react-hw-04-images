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

    handleModalClose = event => {
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
            <div className={s.overlay} onClick={this.handleModalClose}>
                <div className={s.modal}>
                    <img src={this.props.src} alt={this.props.tags} />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onModalClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    tags: PropTypes.string,
}

export default Modal;