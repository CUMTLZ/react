import React,{Component} from 'react';
class Done extends Component{
    render(){
        return (
            <div className="done">
                <h2>已完成</h2>
                <ul>
                {
                  this.props.todo.list.map((item,index)=>{
                    return (
                        item.status&&<li key={index}><span>{item.text}</span></li>
                    )   
                  }                     
                  )      
                }
            </ul>
            </div>
            
        )
    }
}
export default Done;