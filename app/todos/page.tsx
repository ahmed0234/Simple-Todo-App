import TodoPage from '@/components/TodoPageBuilder/TodoPage'
import { auth } from '@clerk/nextjs/server'



const page = () => {
  auth().protect()
  return (
    <div>
       <TodoPage />
    </div>
  )
}

export default page
