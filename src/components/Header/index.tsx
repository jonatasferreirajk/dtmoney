import logImg from '../../assets/Logo.svg';

import { Container, Content } from './styles';

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

  return(
    <Container>
      <Content>
        <img src={logImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New Transaction
        </button>

        
      </Content>
    </Container>
  )
}