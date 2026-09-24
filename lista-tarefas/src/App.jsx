import Header from "./components/Header";
import TarefaForm from "./components/TarefaForm";
import TarefaItem from "./components/TarefaItem";
import TarefaList from "./components/TarefaList";
import { tarefaInicial } from "./data/tarefaMock";

function App(){

  const [tarefas, setTarefas] = useState(tarefaInicial);

  function handleMudar(id){
    console.log("Alterar Status da Tarefa", id);
  }

  function handleRemover(id){
    console.log("Remover Tarefa", id);
  }

  function handleAdicionar(titulo){
    console.log("Adicionar nova tarefa",titulo);
  }


  return(
    <main className="app-container">
      <Header/>
      <section className="app-content">
        <TarefaForm aoAddTarefa={handleAdicionar}/>
        <TarefaList
          tarefas={tarefaInicial}
          aoMudarTarefa={handleMudar}
          aoRemoverTarefa={handleRemover}
        />
      </section>
    </main>
  );
}

export default App;