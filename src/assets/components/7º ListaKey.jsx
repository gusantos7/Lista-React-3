import React, { useState } from "react";

function Itens({ deveres, onRemove }) {
    return <li>{deveres}
        <button id="remover" onClick={onRemove}>Remover</button>
    </li>
}

function Lista() {
    const [tarefas, setTarefas] = useState([
        { id: 0, tarefa: "Estudar" },
        { id: 1, tarefa: "Lição" },
        { id: 2, tarefa: "Programar" },
        { id: 3, tarefa: "Comer" },
    ]);

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    };

    return (
        <div className="exercicio">
            <h3>7º exercício</h3>
            <ul id="tarefas">
                {tarefas.map((x) => <Itens key={x.id} deveres={x.tarefa} onRemove={() => removerTarefa(x.id)} />)}
            </ul>

        </div>
    );
}
export default Lista;