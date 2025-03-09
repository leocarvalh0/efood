import { ModalContainer, ModalContent, ModalInfos } from './styles'
import pizza from '../../assets/images/pizza.png'

type Props = {
    isVisible: boolean
    closeModal: () => void
}

const Modal = ({ isVisible, closeModal }: Props) => {
    if (!isVisible) return null

    return (
        <ModalContainer className="visible" onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <img src={pizza} alt="Pizaa Marguerita" />
                <ModalInfos>
                    <h3>teste</h3>
                    <p>teste</p>
                    <p>teste</p>
                    <button>Fechar</button>
                </ModalInfos>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
