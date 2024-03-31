import { currentUser } from "@clerk/nextjs/server"
import TodoForm from "./TodoForm"
import Todos from "./Todos"


const TodoPage = async () => {
    const user = await currentUser()
  return (

    <div className=" text-center  mt-20 ">
        <h1 className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent text-4xl">Welcome {user?.firstName + ' '+ user?.lastName} !</h1>

        <TodoForm />
        <Todos user={user}/>
    </div>
  )
}

export default TodoPage
