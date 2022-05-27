import {Item} from './../types/Item'

type Props = { 
    item: Item,
    onChange: (id: number, done: boolean) => void;
    handleRemove: (id: number) => void;
}

const deleteTasks = (id: number) => {
    console.log(id);
    return null;
}

export const TodoItem = ({item, onChange,handleRemove} : Props ) => {
    let isDone  = item.done ? "bg-blue-300 border-blue-400" : "bg-white border-slate-200";
    return (
        <div className={`flex items-center justify-start p-3 shadow-md border border-solid rounded-md font-medium my-3 ${isDone}`}>
            <input 
                type="checkbox" 
                className='w-6 h-6'
                checked={item.done}
                onChange = {e => onChange(item.id, e.target.checked)}
            />
            <label className='mx-3'>{item.name}</label>
            <div className='ml-auto'>
                <span 
                onClick={() => handleRemove(item.id)}
                className='cursor-pointer inline-block px-3 py-2 leading-none bg-red-600 text-white rounded-md'
                >x</span>
            </div>
        </div>
    )
}
