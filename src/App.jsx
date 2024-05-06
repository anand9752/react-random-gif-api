import Random
 from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
     <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className= "  text-center w-11/12 bg-white rounded-sm mt-[40px] ml-[25px] px-10  py-2 text-4xl font-bold mr-[25px] mx-auto " >RANDOM GIFS</h1>
      <div className=" flex flex-col items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
     </div>
  );
}
