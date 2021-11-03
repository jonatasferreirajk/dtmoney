import { Container } from "./styles";

export function TransactionsTable(){
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

          <tr>
            <td>Development of Website</td>
            <td className="deposit">US$ 12.000</td>
            <td>Development</td>
            <td>10/10/2021</td>
          </tr>

          <tr>
            <td>House Rent</td>
            <td className="withdraw">- US$ 1.100</td>
            <td>Rent</td>
            <td>10/10/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
}