import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';

export function Summary(){

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits = acc.deposits + transaction.amount;
      acc.total = acc.total + transaction.amount;
    }else{
      acc.withdraws = acc.withdraws - transaction.amount;
      acc.total = acc.total - transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Cash in</p>
          <img src={incomeImg} alt="Cash in" />
        </header>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Cash Out</p>
          <img src={outcomeImg} alt="Cash Out" />
        </header>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}