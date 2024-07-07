import { BiSolidDashboard } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { IoMdFitness } from "react-icons/io";
import { RiRunLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";


const LeftSideBar = () => {
  return (
    <div
      className=" fixed left-0 w-[13%] left-section"
      style={{ borderRight: "1px solid #E4E4E4", minHeight: "100vh" }}
    >
      <div className="flex flex-col p-4">
        <div className="flex flex-row gap-2">
          <h1 className="text-xl font-bold">FitPower</h1>
        </div>
        <div className="py-6 font-semibold">
          <div className="flex flex-row  py-3 items-center gap-2">
            <BiSolidDashboard />

            <h1>Dashboard</h1>
          </div>
          <div className="flex flex-row py-3 items-center gap-2 ">
            {/* <GiWeightLiftingUp /> */}
            <IoMdFitness />
            <h1>Excercise</h1>
          </div>
          <div className="flex flex-row  py-3 items-center gap-2">
            <RiRunLine />
            <h1>Run Tracker</h1>
          </div>
          <div className="flex flex-row py-3 items-center gap-2">
            <SlCalender />
            <h1>Calender</h1>
          </div>
          <div className="flex flex-row py-3 items-center gap-2">
            <ImPower />
            <h1>Fitness Goals</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar