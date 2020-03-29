import React,{Component} from 'react';
class Todo extends Component{
    constructor(props){
        super(props);
        this.handleDoneClick=this.handleDoneClick.bind(this)
    }
    handleDoneClick(index){
        // console.log(this.props)
        // console.log(this.props.todo.list[index])
        if(this.props.todo.list[index].status===false&&this.props.todo.list[index].id){
            this.props.todo.finish(this.props.todo.list[index].id)   
        }
        
    }
    render(){
        return (
            <div className="todo">
                <h2>待完成事项</h2>
                <ul>
                    {
                        this.props.todo.list.map((item,index)=>{
                            return (
                                !item.status&&<li key={index}>
                                    <span>{item.text}</span>
                                    <button onClick={this.handleDoneClick.bind(null,index)}>Done</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Todo;