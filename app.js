import React, { Component } from 'react';
import Add from './add.jsx';
import Todo from './Todo.jsx';
import Done from './Done.jsx';

class App extends Component {
  constructor(props){
    super(props);
    //数据放在父组件中统一管理
    this.state={
      todo:{
        //事件列表初始化
        list:[],
        //添加事件函数
        add:(item)=>{
          this.setState(preState=>{
            let newTodo=preState.todo;
            let list=Object.assign([],newTodo.list);
            list.push({
              text:item,
              id:new Date().getTime(),
              status:false  //status:false表示事件为待完成
            })
            newTodo.list=list;
            //console.log(list)
            return {
              todo:newTodo
            }
          })
        },
        //Done按钮完成事件函数
        finish:(id)=>{
          this.setState(preState=>{
            let newTodo=preState.todo;
            let list=newTodo.list.map(item=>{
              if(item.id===id){
                item.status=true; //修改status为true表示事件完成
              }
              return item;
            })
            newTodo.list=list;
            return {
              todo:newTodo
            }
          })
        }

      }
    }
  }
  render() {
    return (
      <div>
        <Add todo={this.state.todo} />
        <Todo todo={this.state.todo} status={false}/>
        <Done todo={this.state.todo} status={true}/>  
        
      </div>
    );
  }
}

export default App;