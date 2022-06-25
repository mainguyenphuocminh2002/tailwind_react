import { useEffect, useState } from "react";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
import Slogan from "./Components/Slogan/Slogan";

export default function App() {
  const [windowSize,setWindowSize] = useState({
    width:undefined,
    height:undefined,
  })
  const [isMobile,setIsMobile] = useState(false);

  useEffect(()=>{
    const handleSize = ()=>{
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight,
      });
    };
    window.addEventListener("resize",handleSize);
    handleSize();
    return ()=>window.removeEventListener('resize',handleSize);
  },[])

  useEffect(()=>{
    if(windowSize.width < 500){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
  },[windowSize])

    return (
      <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 dark:text-white text-black md:px-20">
        <Navbar isMobile={isMobile} />
        <Slogan />
        <Content />
      </div>
    )
  }