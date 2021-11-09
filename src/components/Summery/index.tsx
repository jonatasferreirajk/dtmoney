import React, { useContext } from 'react';

import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary(){

  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
    <div>
      <header>
        <p>Cash in</p>
        <img src={incomeImg} alt="Cash in" />
      </header>
      <strong>US$ 1000,00</strong>
    </div>

    <div>
      <header>
        <p>Cash Out</p>
        <img src={outcomeImg} alt="Cash Out" />
      </header>
      <strong>- US$ 500,00</strong>
    </div>

    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={totalImg} alt="Total" />
      </header>
      <strong>US$ 500,00</strong>
    </div>

    </Container>
  );
}