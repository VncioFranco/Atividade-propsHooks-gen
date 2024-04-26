import { useState } from 'react';
import './Contador.css'

function Contador() {
const [valor, setValor] = useState(0); //variavel de estado
//  let valor : number = 0;

 function somarMaisUm(){
  // valor = valor++;
  setValor(valor +1); // Método de Acesse set
 }

  return (
    <div className="container">
        <p>O valor é: { valor }</p>
        <button onClick={() => setValor(valor+1) }>Adicionar +1</button>
    </div>
  )
}

export default Contador