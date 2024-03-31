import { SignUp } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="flex items-center justify-center pt-12">
      <SignUp afterSignUpUrl={`/`} afterSignInUrl={`/`} signInUrl="/login" />
    </div>
  )
}

export default page
