import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Transactions from './pages/Transactions';
import Transaction from './pages/Transaction';
import EditTransaction from './pages/EditTransaction';
import New from './pages/New';
import FourOFour from './pages/FourOFour';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/transactions/:id" element={<Transaction />} />
        <Route path="/transactions/:id/edit" element={<EditTransaction />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
