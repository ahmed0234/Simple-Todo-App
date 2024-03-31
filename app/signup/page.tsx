import { SignUp } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="flex items-center justify-center pt-12">
      <SignUp />
    </div>
  )
}

export default page
