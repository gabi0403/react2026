// componente para renderização do formulário de novas tarefas

import { useState } from "react"

const TodoForm = ({addTarefa}) => {

    // "const" garante que o valor não mude o valor da variavel de estado 
    // toda alteração de valor deve acontecer pelo "set"
    // A cada Nova renderização o valor novo é atribuido a variavel de estado 1º elemento do vetor
    const [textoTarefa, setTextoTarefa] = useState(""); //uma variável de estado no REACT

    //evento para o botão enviar do formulário
    const handleSubmit = (e) =>{
        e.preventDefault(); // evita o recarregamento da página
        if(!textoTarefa.trim()) return; // se o textoTArefa dor vazio , interrompe o envio , evitar enviar tarefas vazias

        addTarefa(textoTarefa.trim()); //executa o método addTarefa do elemento PAI (Props)
        setTextoTarefa("") //limpa o campo da tarefa após adicionar a tarefa
    };

    //virtual DOM
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite uma nova tarefa"
                value={textoTarefa}
                onChange={(e)=>setTextoTarefa(e.target.value)}    
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}
export default TodoForm;