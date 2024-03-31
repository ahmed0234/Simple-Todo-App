"use server"

import {User} from '@/lib/models'
import {connectDB} from '@/lib/utils'



export const createUser = async (e: FormData) => {

    const username = e.get('username')?.toString()
    const email = e.get('email')?.toString()
    const password = e.get('password')?.toString()

    // console.log(username, email, password)
    connectDB()

try {
    const user = await User.create({
        username,
        email,
         password,
    })

    return {success: `Successfully Created User`}

} catch (error) {
    console.log(`Something went wrong creating User`, error)
    return {error: `Something went wrong creating User`}
}

    return null;
}








