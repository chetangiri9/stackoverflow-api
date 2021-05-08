/**
 *
 * CustomModal
 *
 */
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('*');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface Props {
  visible: boolean;
  handleCancel: Function;
  data: {
    [key: string]: any;
  };
}

export const CustomModal: React.FC<Props> = props => {
  const { visible, data, handleCancel } = props;
  return (
    <Modal
      visible={visible}
      style={customStyles}
      contentLabel={data.title}
      onRequestClose={() => handleCancel()}
      shouldCloseOnOverlayClick={true}
    >
      <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
      <a href={data.link} target="_blank" rel="noreferrer">
        {data.link}
      </a>
    </Modal>
  );
};
