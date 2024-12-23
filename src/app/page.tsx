// 'use client'
// import { useRouter } from "next/navigation";
// import Navbar from "./Components/Navbar";
// import React from "react";

// export default function Home() {
//   const route = useRouter()
//   return (
//     <>
//     <Navbar />
//     <div className="flex flex-col h-screen bg-blue-500 text-green font-bold text-5xl  justify-center items-center">
//       Welcome to the Home Page!
//       <button className="flex justify-center items-center n-5 p-5 text-xl bg-blue-500 rounded-xl"
//       onClick={()=>route.push("/thankyou")}> 
//         Click Here!

//       </button>
//     </div>
    
//     </>
//   )
// }




'use client'
import { useRouter } from "next/navigation";
import Navbar from "./Components/Navbar";
import React from "react";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-blue-200 text-green-700 font-bold text-5xl">
        Welcome to the Home Page!
        <button 
          className="mt-5 px-6 py-3 text-lg bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-400"
          onClick={() => router.push("/thankyou")}
        >
          Click Here!
        </button>
      </div>
    </>
  );
}






