import AppRoutes from '../routes';
import './App.css'
import Navegacao from './components/navegacao/navegacao'
import { BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {


  return (
    <>
   <Router>
    <AppRoutes/>
   </Router>
    </>
  )
}

export default App
