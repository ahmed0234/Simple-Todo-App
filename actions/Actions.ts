"use server"

import { connectDB } from "@/lib/utils"
import { currentUser } from "@clerk/nextjs/server"
import {User} from '@/lib/models'
import { revalidatePath } from "next/cache"


export async function addTodo(e: FormData) {

    const todoValue = e.get('todoValue')?.toString()

    
    connectDB()
    const user = await currentUser()

    const findUser = await User.findOne({
        Id: user?.id,
        email: user?.emailAddresses[0].emailAddress
    })  


    if(!findUser) return null

    const pushTodo = await User.findOneAndUpdate({
        Id: user?.id,
        email: user?.emailAddresses[0].emailAddress
    }, {
        $push: {
            Todos: todoValue
        }
    })

    revalidatePath('/todos')



   
}



export async function deleteTodo(e: FormData) {



    const value = Number(e.get('valueofdeletedtodo'))



   

    
    connectDB()
    const user = await currentUser()

    const findUser = await User.findOne({
        Id: user?.id,
        email: user?.emailAddresses[0].emailAddress
    })      
    
 


    if(!findUser) return null

    findUser.Todos.splice(value, 1);

    await findUser.save()

    revalidatePath('/todos')

   

}


export async function editTodo(value: any, index: any) {

    connectDB()
    const user = await currentUser()

    const findUser = await User.findOne({
        Id: user?.id,
        email: user?.emailAddresses[0].emailAddress
    })      
    
 
    if(!findUser) return null

    
    findUser.Todos[index] = value;
    
    await findUser.save()

    revalidatePath('/todos')

}