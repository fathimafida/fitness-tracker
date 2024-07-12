import { Button, Divider } from "@nextui-org/react";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { ImPower } from "react-icons/im";
import { IoIosInformationCircleOutline, IoMdFitness } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiRunLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";


const LeftSideBar = () => {

  return (
    <div
      className=" fixed left-0 w-[14 %] left-section"
      style={{ borderRight: "1px solid #E4E4E4", minHeight: "100vh" }}
    >
      <div className="flex flex-col p-3">
        <div className="flex flex-row gap-2 items-center">
          <h1 className="text-xl font-bold mb-6">FitPower</h1>
        </div>

        <div className="font-semibold  ">
          <h1 className="mb-3">Main Menu</h1>
          <Button className="flex flex-row  bg-blue-200 text-blue-800 mb-3 items-center gap-2">
            <BiSolidDashboard />
            <h1>Dashboard</h1>
          </Button>

          <Button className="flex flex-row bg-transparent mb-3  items-center gap-2">
            <IoMdFitness />
            <h1>Excercise</h1>
          </Button>
          <Button className="flex flex-row mb-3 bg-transparent items-center gap-2">
            <RiRunLine />
            <h1>Run Tracker</h1>
          </Button>
          <Button className="flex flex-row mb-3 bg-transparent items-center gap-2">
            <SlCalender />
            <h1>Calender</h1>
          </Button>
          <Button className="flex flex-row  mb-5 bg-transparent items-center gap-2">
            <ImPower />
            <h1>Fitness Goals</h1>
          </Button>
          <Divider className="mb-3" />
          <h1 className="mb-3">Account</h1>
          <Button className="flex flex-row  mb-3 bg-transparent items-center gap-2">
            <IoIosInformationCircleOutline />
            <h1>Information</h1>
          </Button>
          <Button className="flex flex-row  mb-3 bg-transparent items-center gap-2">
            <IoSettingsOutline />
            <h1>Settings</h1>
          </Button>
          <Button className="flex flex-row  mb-3 bg-transparent items-center gap-2">
            <BiLogOut />
            <h1>Logout</h1>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar