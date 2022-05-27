import React, {useState} from 'react';
import './App.css';

import { Item } from './types/Item';
import {AddForm} from './component/Form';
import {TodoItem} from './component/TodoItem';


function App() {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Örnek bir todo listesidir.', done: false },

  ]);

  const handleAddtask = (taskName: string) => {
    let newList = [...list]; 
    newList.push({
      id: list.length + 1, 
      name: taskName, 
      done: false,
    });
    setList(newList);
  
  }
  
  const handleTaskChange = (id: number, done: boolean) => {
    let newList =[...list]; 
    for(let i in newList){    
      if(newList[i].id === id ){
        newList[i].done = done;
      }
    }
    setList(newList)
  }

  const handleRemoveTask = (id:number) => {
    let newList = [...list];
    newList = newList.filter(function (x) { return x.id !== id });
    setList(newList)
  }

  return (
    <div className="App">
      <div className='flex justify-center min-h-screen w-full py-8'>
          <div className=' container-md'>
            <AddForm onEnter={handleAddtask} />

            {list.map((item,index) =>(
              <TodoItem 
                key={index} 
                item={item} 
                onChange = {handleTaskChange}  
                handleRemove={handleRemoveTask} 
              />
            ))} 
          </div>
      </div>
    </div>
  );
}

export default App;
