import React from 'react'
import './Todos.css'
var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm

const Todos = ({todos, deleteTodo,todoUp,todoDown}) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item blue lighten-4" key={todo.id}>
                    <span>{todo.icerik}</span>
                    <i class="small material-icons" onClick={()=>{todoUp(todo.id)}}>expand_less</i>
                    <i class="small material-icons" onClick={()=>{todoDown(todo.id)}}>expand_more</i>
                    <i id="sil" class="small material-icons green-text" onClick={()=>{deleteTodo(todo.id)}}>check</i>
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

export default Todos;