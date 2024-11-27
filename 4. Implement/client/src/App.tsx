import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Users/HomePage/HomePage"
import Admin from './pages/Admin/Dashboard';
import LogIn from './pages/SignIn';

function App() { 
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LogIn/>} />
                <Route path="/admin" element={<Admin/> }/>
            </Routes>
        </Router>
        
    )
}

export default App;