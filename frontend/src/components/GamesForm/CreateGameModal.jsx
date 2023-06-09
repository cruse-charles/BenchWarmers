import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import GamesForm from './GamesForm';

function CreateGameModal() {
    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        setShowModal(false)
    }

    return(
        <>
            <div onClick={() => setShowModal(true)}>Create Game</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <GamesForm formCallback={closeModal} />
                </Modal>
            )}
        </>
    )
}

export default CreateGameModal;