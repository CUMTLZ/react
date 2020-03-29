import React,{Component} from 'react';

class Add extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            value:e.target.value,
            
        })
    }
    handleClick(){
        if(!this.state.value)return;
        this.props.todo.add(this.state.value)
        this.setState({
            value:'',
        })
       
    }
    render(){
        return (
            <div className="add">
                <h1 className="logo">TodoList</h1>
                <div className="addBox">
                    <input type="text" placeholder="添加任务" value={this.state.value} onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>添加</button>
                </div>
            </div>
        )
    }
}
export default Add;