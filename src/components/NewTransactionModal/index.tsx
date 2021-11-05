import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg'
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { Container, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:
  NewTransactionModalProps){
  return(
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay" 
        className="react-modal-content"
        >
          <button type="button" onClick={onRequestClose} 
            className="react-modal-close">
            <img src={closeImg} alt="Close Modal"/>
          </button>

          <Container>
          <h2>Register Transaction</h2>

          <input placeholder="Title"/>
          <input type="number" placeholder="Valor"/>

          <TransactionTypeContainer>
            <button type="button">
              <img src={incomeImg} alt="Entry"/>
              <span>Entry</span>
            </button>

            <button type="button">
              <img src={outcomeImg} alt="Output"/>
              <span>Output</span>
            </button>
          </TransactionTypeContainer>

          <input placeholder="Category"/>
          <button type="submit">
            Register
          </button>
          </Container>
    </Modal>

  );
}