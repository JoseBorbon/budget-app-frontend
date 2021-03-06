import axios from 'axios';
import { useState, useEffect } from 'react';

import Transaction from './Transaction';
import './AllTransactions.css';

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/transactions`
      );
      let data = response.data;
      setTransactions(data);
    })();
  }, []);

  const display = transactions.map(({ name, date, amount }, idx) => {
    return (
      <Transaction key={idx} id={idx} name={name} date={date} amount={amount} />
    );
  });

  const total = transactions.reduce((acc, { amount }) => acc + amount, 0);
  let color;

  switch (true) {
    case total > 1000:
      color = { color: 'green' };
      break;
    case total < 0:
      color = { color: 'red' };
      break;
    default:
      color = { color: 'black' };
      break;
  }

  return (
    <div>
      <h1 className="AllTransactions-total" style={color}>
        Bank Account Total: {total}
      </h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </table>
    </div>
  );
};

export default AllTransactions;
