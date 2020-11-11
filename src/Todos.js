import React from 'react'
import './Todos.css'
import 'hover.css'

const Todos = ({todos, deleteTodo,todoUp,todoDown}) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item blue lighten-4" key={todo.id}>
                    <span>{todo.icerik}</span>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <i className="small material-icons hvr-bob" onClick={()=>{todoUp(todo.id)}}>expand_less</i>
                    <i className="small material-icons hvr-sink" onClick={()=>{todoDown(todo.id)}}>expand_more</i>
                    <i id="sil" className="small material-icons green-text hvr-pop" onClick={()=>{deleteTodo(todo.id)}}>check</i>
                </div>
            )
        })
    ): (
        <p className="center white">You finished all your stuff, congrats!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

export default Todos;



