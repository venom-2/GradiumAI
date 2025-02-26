import './App.css'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './admin_dashboard/AdminDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/admin-panel' element={<AdminDashboard/>}/>
        <Route path='/admin-panel/create-user' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
