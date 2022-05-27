import { useState } from 'react';

type Props = {
    onEnter: (taskName: string) => void
}



export const AddForm = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('');
    
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('')
        }
        
    }

    return (
        <>
          <div className="my-4 py-4 px-6 shadow-lg flex items-center justify-start rounded-lg bg-red-500 min-w-full">
              <div className="flex-0">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="Lütfen birşeyler giriniz" 
                    className="w-full bg-white border border-current border-solid border-white outline-0 shadow-none rounded-lg p-3 leading-md font-medium text-lg md:w-96" />
              </div>
          </div>
        </>
      )
}