import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './EditTransaction.css';

const EditTransaction = () => {
  const [transaction, setTransaction] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  const URL = `${process.env.REACT_APP_API_URL}/transactions/${id}`;

  useEffect(() => {
    let isApiSubscribed = true;
    axios.get(URL).then((response) => {
      if (isApiSubscribed) {
        setTransaction(response.data);
      }
    });
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const goBack = () => {
    navigate('/');
  };

  const editTransaction = (evt) => {
    evt.preventDefault();
    axios.put(URL, transaction);
    setTimeout(goBack, 500);
  };

  return (
    <div>
      <h1>Edit Transaction</h1>
      <form onSubmit={editTransaction}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={transaction.date}
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={transaction.name}
          onChange={(e) => {
            setTransaction({ ...transaction, [e.target.id]: e.target.value });
          }}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={transaction.amount}
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
          value={transaction.from}
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="source">Source</label>
        <input
          type="text"
          id="source"
          value={transaction.source}
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={transaction.location}
          onChange={(e) =>
            setTransaction({ ...transaction, [e.target.id]: e.target.value })
          }
        />
        <input type="Submit" defaultValue="Update Transaction" />
      </form>
    </div>
  );
};

export default EditTransaction;
