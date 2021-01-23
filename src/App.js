import React , {Component} from 'react'

class App extends Component{
  state={
    count:'0'
  }

  Tecla=(digit)=>{
    const {count}=this.state
    this.setState({
      count:count==='0'?String(digit):count+digit
    })
  }

  Punto=()=>{
    const {count}=this.state
    if(count.indexOf('.')===-1){
      this.setState({
        count:count+'.'
      })
    }
  }

  reset=()=>{
    const {count}=this.state
    this.setState({
      count:'0'
    })
  }

  Calcular=()=>{
    const {count}=this.state
    this.setState({
      count:eval(count)
    })
  }

  render(){
    return(
      <div>
        <input value={this.state.count}/>
        <br />
        <button onClick={()=>this.Tecla(1)}>1</button>
        <button onClick={()=>this.Tecla(2)}>2</button>
        <button onClick={()=>this.Tecla(3)}>3</button>
        <br />
        <button onClick={()=>this.Tecla(4)}>4</button>
        <button onClick={()=>this.Tecla(5)}>5</button>
        <button onClick={()=>this.Tecla(6)}>6</button>
        <br />
        <button onClick={()=>this.Tecla(7)}>7</button>
        <button onClick={()=>this.Tecla(8)}>8</button>
        <button onClick={()=>this.Tecla(9)}>9</button>
        <br />
        <button onClick={()=>this.Tecla('+')}>+</button>
        <button onClick={()=>this.Tecla('-')}>-</button>
        <button onClick={()=>this.Tecla('*')}>*</button>
        <br />
        <button onClick={()=>this.Tecla('/')}>/</button>
        <button onClick={()=>this.reset()}>C</button>
        <button onClick={()=>this.Punto()}>.</button>
        <br />
        <button onClick={()=>this.Calcular()} >=</button>
      </div>
    )
  }
}

export default App;