import { ChangeEvent, useState } from "react"
import "./form-login.css"

export default function FormularioLogin(){

const [email,setEmail] = useState<string>("")
const [password, setPassword] = useState<string>("")

const handleEmailChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value)
}

const handlePasswordChange = ( ev: ChangeEvent<HTMLInputElement>) => {
setPassword(ev.target.value)
}
    return(
        <>

        <form className="form-login" action="">

            <h1 className="titulo-login">Login</h1>

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