
import localFont from 'next/font/local'
import Link from 'next/link';

const myFont = localFont({
    src: '/Dank_Mono_Italic.ttf',
    display: 'swap',
  })


const Description = () => {
  return (
    <div className="Description flex flex-col gap-8 px-2">
      <h1
        className=" bg-gradient-to-r from-orange-600 to-orange-400 
        bg-clip-text text-transparent font-bold text-3xl text-center lg:text-4xl xl:text-5xl xl:mb-2"
      >
        Technologies i used in this project!
      </h1>

      <div className="">
        <ul className="flex flex-col gap-4 text-lg md:text-xl ">
          <li>
          <Link href={`https://nextjs.org/`} target='_blank' className='inline-block'>
            <h1 className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent font-bold ">
              
             
              <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent font-bold text-xl">
                1.
              </span>
              Nextjs 14!
            </h1>
            </Link>
          
            
          </li>
          <li>
          <Link href={`https://react.dev/`} target='_blank' className='inline-block'>
            <h2 className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent font-bold ">
              <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent font-bold text-xl">
                2.
              </span>
              React Js
            </h2>
            </Link>
          </li>
          <li>
          <Link href={`https://www.mongodb.com/`} target='_blank' className='inline-block'>
            <h1 className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent font-bold ">
              <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent font-bold text-xl">
                3.
              </span>
              MongoDB
            </h1>
            </Link>
          </li>
          <li>
          <Link href={`https://beta.clerk.com/docs`} target='_blank' className='inline-block'>
            <h1 className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent font-bold ">
              <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent font-bold text-xl">
                4.
              </span>
              Clerk Core 2 (for authentication)
            </h1>
            </Link>
          </li>
          <li>
          <Link href={`https://www.typescriptlang.org/`} target='_blank' className='inline-block'>
            <h1 className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent font-bold ">
              <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent font-bold text-xl">
                5.
              </span>
              Typescript
            </h1>
            </Link>
          </li>
        </ul>
      </div>
   <hr />
    <div className='flex items-center '>
        <span className='text-3xl'>👀</span>
   <h1 className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-bold text-2xl'>Project Description!</h1>
    </div>
 
      <p className={` ${myFont.className} text-left bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-bold text-xl`}>
        "Step into the future of task management with our cutting-edge Todo App
        powered by Next.js 14. Embrace the seamless integration of server
        actions, React, MongoDB, and TypeScript, combining to deliver a robust
        and efficient solution for your productivity needs. Experience the ease
        of CRUD operations as you effortlessly create, read, update, and delete
        tasks, all while leveraging the power and flexibility of MongoDB to
        store your data securely. Enhance your app's security with Clerk, our
        trusted partner for user authentication and management. With Clerk, your
        users can enjoy a seamless login experience while ensuring their data
        remains safe and accessible only to them. Join the ranks of
        forward-thinking developers who are revolutionizing task management.
        Elevate your productivity game today with our feature-rich Todo App!"
      </p>
    </div>
  );
};

export default Description;
