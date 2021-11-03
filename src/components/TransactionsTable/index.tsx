import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, []);


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