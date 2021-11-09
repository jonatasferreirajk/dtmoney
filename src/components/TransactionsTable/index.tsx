import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function TransactionsTable(){

  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Valor</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
             <tr key={transaction.id}>
             <td>{transaction.title}</td>
             <td className={transaction.type}>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  currencyDisplay: 'narrowSymbol'
                }).format(transaction.amount)}
             </td>
             <td>{transaction.category}</td>
             <td>
             {new Intl.DateTimeFormat('en-US').format(
                 new Date(transaction.created_at)
               )}
             </td>
           </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}