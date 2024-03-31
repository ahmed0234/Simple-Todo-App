import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"
import {  UserButton } from "@clerk/nextjs"

const Navbar =  async () => {

    const user: any = await currentUser()
   

  return (

    <nav
    className="  z-30 mx-auto w-full max-w-screen-md border rounded-full mb-12 border-gray-100 bg-white/80 py-3 shadow-2xl backdrop-blur-lg md:top-6 md:rounded-3xl md:my-6 lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <Link aria-current="page" className="flex items-center" href="/">
                    <h1 className="text-xl text-black ">Ahmed Hassan</h1>
                </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <Link aria-current="page"
                    className="inline-block  rounded-lg px-2 py-1 text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:rounded-xl"
                    href={`/todos`}>Todos</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:rounded-xl"
                    href="#">Pricing</Link>
            </div>

            {user? (  
                <UserButton />
                
        )
            :
              (

               <div className="flex items-center justify-end gap-3">
               <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                   href="/signup">Sign up</Link>
               <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                   href="/login">Login</Link>
           </div>
           
            )}
            

          

        </div>
    </div>
</nav>
  )
}

export default Navbar
