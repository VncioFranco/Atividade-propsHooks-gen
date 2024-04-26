import { useEffect, useState } from 'react'
import './Task.css'

function Task() {
  const [completada, setCompletada] = useState(false);
  const [tarefa , setTarefa] = useState("")

  useEffect(() => {
    if(completada==true){
      setTarefa("Parabens você concluiu a tarefa ")
    }
    
  } , [completada]);

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { tarefa }</h3>
        <button onClick={() => setCompletada(true)}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task