import React, { Component } from 'react'
import Todos from './Todos'

class Ekle extends Component{
    state={
        icerik: ''
    }
    handleChange=(e)=>{
        this.setState({
            icerik:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.ekleIslem(this.state);
        this.setState({
            icerik:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="" type="text" onChange={this.handleChange}
                        placeholder="Yapılacak bir iş ekleyin..."
                        value={this.state.icerik}
                    />
                </form>
            </div>
        )
    }
}

export default Ekle;