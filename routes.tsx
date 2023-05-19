import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from "./src/components/login/login";
import Cadastro from "./src/components/cadastro/cadastro"

export default function AppRoutes(){
    return(

  <Router>
    <Route  path="/login" element={<Login/>} />
    <Route path="/cadastro" element={<Cadastro/>} />
  </Router>
    )

    }



