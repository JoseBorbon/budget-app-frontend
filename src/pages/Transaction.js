import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Transaction = () => {
  const [transaction, setTransaction] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = `${process.env.REACT_APP_API_URL}/transactions/${id}`;

  useEffect(() => {
    (async () => {
      let response = await axios.get(URL);
      setTransaction(response.data);
    })();
    return () => {
      setTransaction({});
    };
  }, []);

  const goBack = () => {
    navigate('/');
  };

  const removeTransaction = () => {
    axios.delete(URL);
    setTimeout(goBack, 500);
  };

  return (
    <div>
      <h3>Date: {transaction.date}</h3>
      <h3>Name: {transaction.name}</h3>
      <h3>Source: {transaction.source}</h3>
      <h3>Location: {transaction.location}</h3>
      <h3>Amount: {transaction.amount}</h3>
      <button onClick={removeTransaction}>Delete</button>
      <button onClick={() => navigate(`/transactions/${id}/edit`)}>Edit</button>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default Transaction;
