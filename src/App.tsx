import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import TransferPage from './pages/TransferPage';
import SignUpPage from './pages/SignUpPage';
import LaunchPage from './pages/LaunchPage';
import WalletDetailsPage from './pages/WalletDetailsPage';
import TransactionDetailsPage from './pages/TransactionDetailsPage';
import TransactionListPage from './pages/TransactionListPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <BrowserRouter basename="/site">
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage/> } />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/wallets/:id" element={<WalletDetailsPage />} />
        <Route path="/transactions" element={<TransactionListPage />} />
        <Route path="/transactions/:id" element={<TransactionDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/404" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
