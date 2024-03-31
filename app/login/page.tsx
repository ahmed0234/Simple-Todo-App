import { SignIn } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="flex items-center justify-center pt-12">
        <SignIn afterSignUpUrl={`/`} afterSignInUrl={`/`} signUpUrl="/signup" />
    </div>
  )
}

export default page
