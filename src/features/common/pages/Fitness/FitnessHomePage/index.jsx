import { Button,  CircularProgress, } from "@nextui-org/react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";

import { MdOutlineAutoGraph } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import SliderImg from '../../../../../assets/slider.png'

const FitnessHomePage = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <div className="flex flex-col flex-1 ml-[11%]">
        <Header />
        <div className="flex flex-row gap-4 p-2">
          <div className="flex  p-4 border w-fit border-grey-100 shadow-md rounded">
            <div className="flex flex-col flex-1">
              <div>
                <span>Hello </span>
                <span className="font-semibold">Fida Firoz</span>
              </div>
              <h1 className="text-sm mb-3">
                Good morning, Today is the best to start Exercise
              </h1>
              <div className="flex   gap-3">
                <div className="flex flex-col shadow-sm border rounded-md  border-grey-100 gap-2  p-3">
                  <div className="flex flex-row  ">
                    <div className="flex flex-col ">
                      <div className="bg-gradient-to-t w-fit rounded p-1 mb-1 from-blue-700 to-blue-600">
                        <MdOutlineAutoGraph className="text-white" />
                      </div>
                      <p className="text-sm ">Progress</p>
                      <h1 className="text-lg font-bold">Upper Body</h1>

                      <div className="flex items-center gap-2">
                        <div className=" bg-blue-200 w-fit rounded-full p-1">
                          <p className="text-sm text-blue-600 ">Biceps</p>
                        </div>
                        <FaClock className="text-slate-600" />
                        <p className="text-sm text-slate-600  mr-3">2 hours</p>
                      </div>
                    </div>

                    <div className="w-[200px]  border-t-2 border-l-2 p-2 border-grey-200 rounded-2xl ">
                      <div className="w-[180px]  border-t-2 border-l-2 p-2 rounded-xl">
                        <div className="w-[100px]  border-t-1 border-l-1 p-2 rounded-lg">
                          <div className="w-[100px]  border-t-1 border-l-1 p-2 rounded-md">
                            <div className=" w-[80px] h-[80px]  bg-gradient-to-tr rounded-md from-indigo-100 to-indigo-300">
                              <div className="flex items-center justify-center w-full h-full">
                                <CircularProgress
                                  size="lg"
                                  classNames={{
                                    svg: "w-11 h-11 drop-shadow-md",
                                    indicator: "stroke-blue-600",
                                    track: "stroke-white/30",
                                    value: "text-sm font-semibold text-white",
                                  }}
                                  value={86}
                                  strokeWidth={3}
                                  showValueLabel={true}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-indigo-100 text-md mt-2 hover:bg-indigo-200">
                    Continue the exercise
                    <div className=" flex  items-center  gap-3">
                      <FaArrowRightLong className="text-indigo-700" />
                    </div>
                  </Button>
                </div>

                <div className="flex w-fit flex-col shadow-sm rounded-md border border-grey-100 gap-2  p-3 ">
                  <div className="flex flex-row">
                    <div className="flex flex-col ">
                      <div className="bg-gradient-to-t w-fit rounded p-1 mb-1 from-violet-700 to-violet-600">
                        <MdOutlineAutoGraph className="text-white" />
                      </div>
                      <p className="text-sm ">Progress</p>
                      <h1 className="text-lg font-bold">Lower Body</h1>

                      <div className="flex items-center gap-2">
                        <div className=" bg-blue-200 w-fit rounded-full p-1">
                          <p className="text-sm text-blue-600 ">Cardio</p>
                        </div>
                        <FaClock className="text-slate-600" />
                        <p className="text-sm text-slate-600 mr-3 ">15 hours</p>
                      </div>
                    </div>
                    <div className="w-[200px]  border-t-2 border-l-2 p-2 border-grey-200 rounded-2xl ">
                      <div className="w-[180px]  border-t-2 border-l-2 p-2 rounded-xl">
                        <div className="w-[100px]  border-t-1 border-l-1 p-2 rounded-lg">
                          <div className="w-[100px]  border-t-1 border-l-1 p-2 rounded-md">
                            <div className=" w-[80px] h-[80px]  bg-gradient-to-tr rounded-md from-purple-100 to-purple-300">
                              <div className="flex items-center justify-center w-full h-full">
                                <CircularProgress
                                  size="lg"
                                  classNames={{
                                    svg: "w-11 h-11 drop-shadow-md",
                                    indicator: "stroke-purple-600",
                                    track: "stroke-white/30",
                                    value: "text-sm font-semibold text-white",
                                  }}
                                  value={60}
                                  strokeWidth={3}
                                  showValueLabel={true}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-indigo-100 text-md mt-2 hover:bg-indigo-200">
                    Continue the exercise
                    <div className=" flex  items-center  gap-3">
                      <FaArrowRightLong className="text-indigo-700" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-end gap-2">
              <Button>This week</Button>
              <Button>Add Exercise</Button>
            </div> */}
          </div>
          <div className="flex flex-col flex-1  p-2 shadow-md border rounded">
            <div className="text-center mb-2 ">
              <span className="text-md ">Set your </span>
              <span className="font-bold  text-lg">Fitness Goals</span>
              <p className="text-md ">For the quality your health</p>
            </div>
            <div className="flex flex-col w- justify-center border rounded-lg shadow-sm items-center">
              <h1 className="text-sm font-bold">Daily Goals</h1>
              <CircularProgress
                classNames={{
                
                  svg: "w-32 h-32 drop-shadow-md",
                  indicator: "stroke-purple-600",
                  track: "stroke-slate-100",
                  value: "text-sm font-semibold text-black",

                }}
                value={78}
                strokeWidth={3}
                showValueLabel={true}
                
              />
              <p className="font-bold"> 100/140KCAL</p>
              <h1>You have reached 78% of your goal this month</h1>
            </div>
            <Button className="bg-indigo-100 text-md mt-2 hover:bg-indigo-200">
              Set Fitness Goals{" "}
              <FaArrowRightLong className="text-indigo-700 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessHomePage;
