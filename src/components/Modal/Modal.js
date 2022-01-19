import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={this.props.image} alt="" />
        </ModalWindow>
      </Overlay>,
      modalRoot,
    );
  }
}

// const Modal = () => (
//   <Overlay>
//     <ModalWindow>
//       <img src="" alt="" />
//     </ModalWindow>
//   </Overlay>
// );

// export default Modal;
