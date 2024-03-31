import { deleteTodo } from "@/actions/Actions"
import { User } from "@/lib/models"
import EditTodo from "./EditTodo"


export async function fetchUserTodos(user: any) {

    const findUser = await User.findOne({
        Id: user.id,
        email: user.emailAddresses[0].emailAddress
    })


    if(!findUser) return null
    return findUser.Todos

}   







const Todos = async ({user}: any) => {

    
    const userTodos = await fetchUserTodos(user)

  return (
    <div>
        <h1 className="text-4xl font-bold text-white p-4 dark:text-black dark:bg-white">Todos</h1>
<div className="flex flex-col gap-8">


            {userTodos?.map((todo: any, index: any) => (
                <div key={index} className="flex items-center justify-center gap-4">
                    <h1 className="text-lg text-purple-500 dark:text-purple-300 font-bold">{index+1}. {` `} {todo}</h1>
                    <form action={deleteTodo}>
                        <input type="text" value={index} name='valueofdeletedtodo'  className="hidden" />
                        <button type="submit" className="flex items-center justify-center w-22 px-4 py-2 border border-black rounded-full cursor-pointer bg-white text-black transition-all duration-200 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black">Delete X</button>
                    </form>
                    <EditTodo index={index}/>

                </div>
            ))}


</div>
        



      
    </div>
  )
}

export default Todos
