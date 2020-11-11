import React, { Component } from 'react';
import Todos from './Todos'
import Ekle from './Ekle'
import './App.css'
import { db } from './firebase'
import {Helmet} from "react-helmet";


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
    var id2 = (id < 10) ? '0' + id.toString() : id.toString();
    db.collection("stuff").doc("stuff"+id2).delete()
    .then(function() {
      console.log("Veriler başarıyla silindi!");
  })
  .catch(function(error) {
      console.error("Veri güncellenirken hata oluştu : ", error);
  });
  }
  moveUp=(id)=>{
    if(id>1)
    {
      let data = [...this.state.todos];
      let temp = data[id-2].id;
      console.log(temp);
      data[id-2].id = data[id-1].id;
      data[id-1].id = temp;
      data.sort((a, b) => a.id > b.id ? 1 : -1)
      this.setState(
        {
          todos: data
    })
    }
    else
      console.log('ztn en üsttesin cnm..');
  }
  getData = () =>{
    db.collection("stuff")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    this.setState({
      todos:data
    })
  });
  }

  moveDown=(id)=>{
    if(id<this.state.todos.length)
    {
      let data = [...this.state.todos];
      let temp = data[id].id;
      data[id].id = data[id-1].id;
      data[id-1].id = temp;
      data.sort((a, b) => a.id > b.id ? 1 : -1)
      this.setState(
        {
          todos: data
    })
    }
    else
      console.log('ztn en üsttesin cnm..');
  }
  ekleIslem =(todo) =>{
    if(!(todo.icerik === null || todo.icerik.match(/\S/))){
      window.alert("This stuff is empty!");
      return;
  }
    if(this.state.todos.length===0)
    todo.id = 1;
    else
    todo.id = (this.state.todos[this.state.todos.length-1].id)+1;
    let isler = [...this.state.todos, todo];
    this.setState({
      todos: isler
    })
    var id = (todo.id < 10) ? '0' + todo.id.toString() : todo.id.toString();
    db.collection("stuff").doc("stuff"+id).set({
      id: todo.id,
      icerik: todo.icerik
  })
  .then(function() {
      console.log("Veriler başarıyla yüklendi!");
  })
  .catch(function(error) {
      console.error("Veri yüklenirken hata oluştu : ", error);
  });
    console.log(isler)
}
componentDidMount() {
  db.collection("stuff")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    this.setState({
      todos:data
    })
  });
  }

  render(){
    return (
      <div>
      <div className="area">
            <ul className="circles">
            <div className="todo-app container">
        <h1 className="center white-text">To-Do List!</h1>
        <Todos todos={this.state.todos}
               todoUp={this.moveUp}
               todoDown={this.moveDown}
               deleteTodo={this.deleteTodo} />
        <Ekle ekleIslem={this.ekleIslem} />
      </div>
      <div id="but"></div>
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
