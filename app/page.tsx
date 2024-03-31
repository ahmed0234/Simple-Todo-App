import Description from "@/components/design/Description";
import LottieAnimation from "@/components/lottie/animationlottie";




const page = async () => {
 
  
  return (
    <>

    <div className="w-full h-auto flex flex-col items-center px-2 lg:flex-row mb-10">
      <div className="text-center lg:text-left  flex flex-col gap-3">
        <h1
          className="bg-gradient-to-r from-teal-300 to-emerald-900 bg-clip-text text-transparent
        font-bold text-[12vw] leading-none text-center lg:text-left sm:text-6xl 2xl:text-7xl"
        >
          A Project by <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent" >Ahmed</span >
        </h1>

        <p className="bg-gradient-to-r from-green-400 to-emerald-700 bg-clip-text text-transparent text-lg leading-tight font-semibold sm:text-xl md:text-2xl lg:py-4">
          "Welcome to my
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Todo Project!
          </span>
          🚀 Dive into a seamless experience of managing your tasks with ease.
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            
            Our application offers full CRUD (Create, Read, Update, Delete)
          </span>
          operations, ensuring you have complete control over your todo list"
        </p>
      </div>

      <div>
        <LottieAnimation />
      </div>
    </div>

      <Description /> 
    </>
  );
};

export default page;
