import { Link } from 'react-router-dom';
import './Transaction.css';

const Transaction = ({ name, date, amount, id }) => {
  return (
    <tr>
      <td>{date}</td>
      <td className="Transaction-name">
        <Link to={{ pathname: `/transactions/${id}` }}>{name}</Link>
      </td>
      <td className="Transaction-amount">{amount}</td>
    </tr>
  );
};

export default Transaction;
