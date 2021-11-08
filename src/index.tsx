import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({ 
      transactions: [
        {
          id: 1,
          title: 'Freelance for website',
          type: 'deposit',
          category: 'Development',
          amount: 6000,
          created_at: new Date(),
        },
        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'Home',
          amount: 1500,
          created_at: new Date(),
        },
      ],
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
