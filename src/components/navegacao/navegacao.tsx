import Cadastro from "../cadastro/cadastro"
import Login from "../login/login"
import "./navegacao.css"

export default function Navegacao(){
    return(
        <>
        <div className="navegacao">
            <h1 className="titulo-navegacao">Sistema de Chamados</h1>
            <Cadastro/>
        </div>
        </>
    )
}