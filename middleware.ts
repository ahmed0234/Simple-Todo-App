import { clerkMiddleware } from '@clerk/nextjs/server';



 
export default clerkMiddleware( async (auth, req) => {

 

 




  
});
 
export const config = {

  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],

};