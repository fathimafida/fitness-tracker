import { Button } from "@nextui-org/react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";

const FitnessHomePage = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <div className="flex flex-col  flex-1 ml-[11%]">
        <Header />
        <div className="flex flex-row gap-4  p-4 flex-1">
          <div className="flex flex-1   p-4 bg-yellow-300">
            <div className="flex flex-row ">
              <div className="flex flex-col">
                <h1>Hello Fida Firoz</h1>
                <h1>Hello Fida Firoz</h1>
              </div>

              <div className="justify-end">
                <Button>This week</Button>
                <Button>Add Exersice</Button>
              </div>
            </div>
          </div>
          <div className="flex w-[350px]  p-4 bg-green-300 ">
            <h1>Content</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessHomePage;
