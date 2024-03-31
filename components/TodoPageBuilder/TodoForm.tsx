import { addTodo } from "@/actions/Actions"

const TodoForm = () => {


  return (
    <div>
      <form action={addTodo} className="flex flex-col items-center justify-center w-full max-w-md mx-auto my-10 bg-white p-6 rounded-lg shadow-md md:my-24">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Add a Todo</h1>
        <div className="mt-6">
          <input name="todoValue" minLength={2} className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" type="text" placeholder="Enter your Todo"></input>
        </div>
        <button  className="w-full mt-4 bg-gray-800 hover:bg-gray-700 rounded-lg py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" type="submit">Add Todo</button>
      </form>
    </div>  
  )
}

export default TodoForm
