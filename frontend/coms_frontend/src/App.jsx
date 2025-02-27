import './App.css'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './admin_dashboard/AdminDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/admin-panel' element={<AdminDashboard />} />
        <Route path='/admin-panel/create-user' element={<AdminDashboard />} />
        <Route path='/admin-panel/view-users' element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
