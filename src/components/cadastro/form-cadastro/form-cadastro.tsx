import {useState, ChangeEvent} from "react"
import "./form-cadastro.css"

export default function FormularioCadastro(){

    const [nome,setNome] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    const handleNomeChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setNome(ev.target.value)
    }
    const handleEmailChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setEmail(ev.target.value)
    }
    
    const handlePasswordChange = ( ev: ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value)
    }
        return(
            <>
    
            <form className="form-login" action="">
    
                <h1 className="titulo-login">Cadastrar-se</h1>
    
            <div className="input-group">
                <label htmlFor="user">Nome</label>
                <input className="inputs" type="nome" value={nome} onChange={handleNomeChange} required/>
                </div>
            <div className="input-group">
                <label htmlFor="user">Email</label>
                <input className="inputs" type="email" value={email} onChange={handleEmailChange} required/>
                </div>
    
                <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input className="inputs" type="password" value={password} onChange={handlePasswordChange} required/>
              </div>
    
            <div className="botoes">
              <button className="botao">Login</button>
              <button className="botao">Cadastrar-se</button>
              </div>
            </form>
            </>
        )
    }