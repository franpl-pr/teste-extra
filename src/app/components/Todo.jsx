"use client"

import { useState } from "react"


function Todo() {

    const [toDo, setTodo] = useState([])

    const adicionaValorSubmit = (event) => {

        const tarefa = JSON.stringify(event)
        setTodo(toDo, tarefa)
        localStorage.setItem("item", JSON.stringify([toDo, tarefa]))

    }

    const removeItem = (event) => {
        const tarefa = JSON.stringify(event)
        localStorage.removeItem([toDo, tarefa])

    }

    const zerarLista = (event) => {
        localStorage.clear([toDo, tarefa])
    }





    return (
        <div >

            {toDo.map((item) => {
                return <div>{item}</div>
            })}

            <form className="Estilo-botao " onSubmit={adicionaValorSubmit}>
                <input type="text" id="item" />
                <input className="botao-azul" type="submit" />
            </form>

            <input onSubmit={removeItem} type="submit" value="Remover" />

            <div>
                <input className="botao-verde" onSubmit={zerarLista} type="submit" value="Zerar" />


            </div>


        </div>
    )
}

export default Todo

