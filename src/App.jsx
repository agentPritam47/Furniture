import React, { useState } from "react";
import Scene from "./components/Scene";

const App = () => {
  const [click, setclick] = useState("chair1")
  return (
    <div className="h-screen w-full">
      <Scene click={click} />
      <div className="h-full w-full absolute top-0 left-0 pointer-events-none">
        <div className=" flex gap-5 absolute left-1/2 -translate-x-1/2 bottom-14">
          <button onClick={()=>setclick("chair1")} className=" pointer-events-auto text-white bg-yellow-900 px-6 py-2 rounded-full text-xs sm:text-xl">Chair1</button>
          <button onClick={()=>setclick("chair2")} className=" pointer-events-auto text-white bg-yellow-900 px-6 py-2 rounded-full text-xs sm:text-xl">Chair2</button>
          <button onClick={()=>setclick("chair3")} className=" pointer-events-auto text-white bg-yellow-900 px-6 py-2 rounded-full text-xs sm:text-xl">Chair3</button>
          <button onClick={()=>setclick("chair4")} className=" pointer-events-auto text-white bg-yellow-900 px-6 py-2 rounded-full text-xs sm:text-xl">Chair4</button>
        </div>
      </div>
    </div>
  );
};

export default App;
