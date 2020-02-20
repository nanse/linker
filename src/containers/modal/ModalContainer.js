import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AskModal from '../../components/Modal/AskModal';
import { closeModal } from '../../modules/base';

const ModalContainer = () => {
  const dispatch = useDispatch();

  const {
    sw,
    title,
    description,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    showCancelbutton,
  } = useSelector(({ base }) => ({
    sw: base.modals.askModal,
    title: base.modalData.title,
    description: base.modalData.description,
    onConfirm: base.modalData.onConfirm,
    onCancel: base.modalData.onCancel,
    confirmText: base.modalData.confirmText,
    cancelText: base.modalData.cancelText,
    showCancelbutton: base.modalData.showCancelbutton,
  }));

  const handleConfirm = e => {
    console.log('> handleConfirm:');
    onConfirm && onConfirm(e);
    dispatch(closeModal());
  };

  const handleCancel = e => {
    console.log('> handleCancel: ');
    onCancel && onCancel(e);
    dispatch(closeModal());
  };

  return (
    <AskModal
      sw={sw}
      title={title}
      description={description}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      confirmText={confirmText}
      cancelText={cancelText}
      showCancelbutton={showCancelbutton}
    ></AskModal>
  );
};

export default ModalContainer;
