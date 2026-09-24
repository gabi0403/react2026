import { useState } from "react"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  //inicializar as informações usando o useState
  const [tarefas, setTarefas] = useState([]);// vetor inical vazio ( sem Tarefas)

  //criar métodos
  //addTarefa
  const addTarefa = (texto) =>{
    const novaTarefa = {
      id:crypto.randomUUID(),//gera uma chave aleatória criptografada()
      texto,
      completed: false
    };
    setTarefas((atualTarefas) => [...atualTarefas, novaTarefa]);//recriar um novo vetor de tarefas com a nova tarefa
  };

  //modificarTarefa
  const modificarTarefa = (id) =>{
    setTarefas(
      (atualTarefas)=>atualTarefas.map(
      (tarefa) => tarefa.id === id ? {...tarefa, completed : !tarefa.completed} : tarefa));
  }
  
  //removerTarefa
  const removerTarefa = (id) => {
    setTarefas((atualTarefas) => atualTarefas.filter((tarefa)=> tarefa.id !== id));
  }

  //virtual DOM
  return(
    <main>
      <h1>Lista de Tarefas Todo-Pro</h1>
      <TodoForm addTarefa={addTarefa}/>
      <TodoList tarefas={tarefas} modificarTarefa={modificarTarefa} removerTarefa={removerTarefa} />
    </main>
  );
}

export default App;