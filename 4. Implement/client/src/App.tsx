import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import LogIn from './pages/LogInPage';

function App() { 
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LogIn/>} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path='/admin/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
        
    )
}

export default App;