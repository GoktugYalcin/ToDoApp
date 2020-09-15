import React, { Component } from 'react';
import Todos from './Todos'
import Ekle from './Ekle'
import './App.css'

class App extends Component{
  state={
    todos: [

    ]
  }
  swap={
    swap_todo:[
    {swap_id: 9999, swap_icerik:''}
    ]
  }
  deleteTodo=(id)=> {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState(
      {todos}
    )
  }
  moveUp=(id)=>{
    if(id>1)
    {
      let data = [...this.state.todos];
      let temp = data[id-2].id;
      data[id-2].id = data[id-1].id;
      data[id-1].id = temp;
      data.sort((a, b) => a.id > b.id ? 1 : -1)
      console.log(data.sort((a, b) => a.id > b.id ? 1 : -1));
      this.setState(
        {
          todos: data
    })
    }
    else
      console.log('ztn en üsttesin cnm..');
  }
  moveDown=(id)=>{
    if(id<this.state.todos.length)
    {
      let data = [...this.state.todos];
      let temp = data[id].id;
      data[id].id = data[id-1].id;
      data[id-1].id = temp;
      data.sort((a, b) => a.id > b.id ? 1 : -1)
      console.log(data.sort((a, b) => a.id > b.id ? 1 : -1));
      this.setState(
        {
          todos: data
    })
    }
    else
      console.log('ztn en üsttesin cnm..');
  }
  ekleIslem =(todo) =>{
    if(this.state.todos.length===0)
    todo.id = 1;
    else
    todo.id = (this.state.todos[this.state.todos.length-1].id)+1;
    let isler = [...this.state.todos, todo];
    this.setState({
      todos: isler
    })
    console.log(isler)
}
  render(){
    return (
      <div>
      <div class="area">
            <ul class="circles">
            <div className="todo-app container">
        <h1 className="center white-text">Yapılacaklar Listesi</h1>
        <Todos todos={this.state.todos}
               todoUp={this.moveUp}
               todoDown={this.moveDown}
               deleteTodo={this.deleteTodo} />

        <Ekle ekleIslem={this.ekleIslem} />
      </div>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div>

      </div>


    );
  }
}

export default App;
