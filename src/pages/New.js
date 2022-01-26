import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './New.css';

const New = () => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: '',
    name: '',
    amount: '',
    from: '',
    source: '',
    location: '',
  });

  const addTransaction = (evt) => {
    evt.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/transactions/`, transaction);
    navigate('/');
  };

  return (
    <div>
      <h1>Add A New Transaction</h1>
      <form onSubmit={addTransaction}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          onChange={(e) =>
            setTransaction({
              ...transaction,
              [e.target.id]: Number(e.target.value),
            })
          }
        />
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="source">Source</label>
        <input
          type="text"
          id="source"
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <input type="Submit" defaultValue="CREATE NEW ITEM" />
      </form>
    </div>
  );
};

export default New;
