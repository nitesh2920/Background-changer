import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")
    return (
    <>
      
     <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      

     <button className="
     outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-98 active:scale-98 transition ease-in" onClick={()=>setColor("red")} style={{backgroundColor:"Red"}}>Red</button>

<button className="
     outline-none px-4 py-2 rounded-full text-white shadow-lg" onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>

<button className="
     outline-none px-4 py-2 rounded-full text-white shadow-lg" onClick={()=>setColor("blue")} style={{backgroundColor:"Blue"}}>Blue</button>

<button className="
     outline-none px-4 py-2 rounded-full text-white shadow-lg"  onClick={()=>setColor("orange")} style={{backgroundColor:"Orange"}}>Orange</button>

<button className="
     outline-none px-4 py-2 rounded-full text-white shadow-lg" onClick={()=>setColor("purple")} style={{backgroundColor:"Purple"}}>Purple</button>

<button className="
     outline-none px-4 py-2 rounded-full text-white  shadow-lg"  onClick={()=>setColor("lavender")} style={{backgroundColor:"Lavender"}}>Lavender</button>

<button className="
     outline-none px-4 py-2 rounded-full text-white  shadow-lg"  onClick={()=>setColor("slategray")} style={{backgroundColor:"SlateGray"}}>SlateGray</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
