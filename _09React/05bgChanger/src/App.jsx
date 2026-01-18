import {useState} from "react";

function App() {
    const [color, setColor] = useState("blueviolet");
    return (
        <>
            <div className="w-full h-screen duration-100 " style={{backgroundColor: color}}>
                <div className="fixed w-165 bottom-10 inset-x-160 bg-amber-100 flex flex-wrap justify-center rounded-full px-1">
                    <div className="flex flex-wrap">
                        <button className=" w-23 rounded-full bg-white shadow-lg px-5 py-2 m-2"
                                onClick={() => {setColor("red")}} style={{backgroundColor: "red"}}>Red</button>
                        <button className=" w-23 rounded-full bg-white shadow-lg px-3 py-2 m-2"
                                onClick={() => {setColor("magenta")}} style={{backgroundColor: "magenta"}}>magenta</button>
                        <button className=" w-23 rounded-full bg-white shadow-lg px-5 py-2 m-2"
                                onClick={() => {setColor("yellow")}} style={{backgroundColor: "yellow"}}>yellow</button>
                        <button className=" w-23 rounded-full bg-white shadow-lg px-5 py-2 m-2"
                                onClick={() => {setColor("green")}} style={{backgroundColor: "green"}}>green</button>
                        <button className=" w-23 rounded-full bg-white shadow-lg px-5 py-2 m-2"
                                onClick={() => {setColor("purple")}} style={{backgroundColor: "purple"}}>purple</button>
                        <button className=" w-23 rounded-full bg-white shadow-lg px-5 py-2 m-2"
                                onClick={() => {setColor("orange")}} style={{backgroundColor: "orange"}}>orange</button>
                    </div>
                </div>
            </div>
        </>
   )
}

export default App
