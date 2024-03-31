"use client";

import { editTodo } from "@/actions/Actions";
import { useState } from "react";

const EditTodo = ({value, index}: any) => {

  const [inputvalue, setInputValue] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setloading]=useState(false)

  const handleSubmit = async (e: any) => {
         e.preventDefault()
         setloading(true)
         setShow(!show)
         setInputValue('')
         await editTodo(inputvalue, index )
         setloading(false)

  };

  console.log(show)

  return (
    <div className="flex gap-8">
      <button
        className="text-white bg-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none 
        focus:ring-2 focus:ring-offset-2  focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        onClick={() => setShow(!show)}
      >
        Edit
      </button>


            {show &&  

                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="flex ">
                    <input
                        className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        type="text"
                        value={inputvalue}
                        onChange={(e) => setInputValue(e.target.value)}
                        minLength={1}
                    />
                <button 
                type="submit" 
                className="w-24 px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:outline-none 
                focus:ring-2 focus:ring-offset-2  focus:ring-offset-white text-white 
                rounded-lg shadow-md dark:bg-blue-700 dark:text-gray-200"
                >Submit</button>
                </form>
                }

                {loading && 
                <div className="text-white bg-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none 
                focus:ring-2 focus:ring-offset-2  focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                Loading...
                </div>
                }

                
    </div>
  );
};

export default EditTodo;
