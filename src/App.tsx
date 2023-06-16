// let name:string;
// let age:number | string;
// let isStudent:boolean;
// let hobbies:string[];
// let role:[number,string];

// type Person = {
//   name:string;
//   age?:number; //o ? serve para dizer que a idade e opcional
// };

// let person:Person = {
//   name:"Rian",
//   age:12
// };
// // caso eu quiser uma matriz do objeton Person posso fazer assim
// let lotOfPeoples:Person[];
import * as C from "./App.styles";
import { useState } from "react";
import { item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
const App = () => {
  const [list, setList] = useState<item[]>([
    { id: 1, name: "Comprar um pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: true },

  ]);

  const handleAddTask = (taskName : string) =>{
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name:taskName,
      done:false
      
    });
    setList(newList);
  }

  const handleTaskChange = (id:number, done:boolean) =>{
    let newList = [...list];
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
        <C.GlobalStyle />
        <C.Section>
          <C.Header>Lista de Tarefas</C.Header>
          <AddArea onEnter={handleAddTask}/>
          {/* {area de adicionar nova tarefa} */}

          {/* {Lista de tarefas} */}
          {list.map((item,index)=>(
            <ListItem 
            key={index}
            item={item}
            onChange={handleTaskChange}
            />
          ))}
        </C.Section>
      </C.Container>
  );
};

export default App;
