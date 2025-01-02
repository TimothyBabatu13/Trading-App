import { Analysis } from "./components/Analysis"
import { Portfolio } from "./components/Portfolio"


const page = () => {
  return (
    <div className="flex px-[50px] py-10 bg-[#000000]">
      <Portfolio />
      <Analysis />
    </div>
  )
}

export default page