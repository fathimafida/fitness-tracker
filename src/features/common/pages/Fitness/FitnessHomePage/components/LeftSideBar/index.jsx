

const LeftSideBar = () => {
  return (
    <div
      className=" fixed left-0 w-[9%] left-section"
      style={{ borderRight: "1px solid #E4E4E4", minHeight: "100vh" }}
    >
      <div className="flex flex-col p-4">
        <div className="flex flex-row gap-2">
          <h1 className="text-xl font-bold">FitPower</h1>
        </div>
        <div className="flex flex-col items-center ">
          <h1>Dashboard</h1>
        </div>
        <div className="flex flex-col items-center ">
          <h1>Excercise</h1>
        </div>
        <div className="flex flex-col items-center ">
          <h1>Run Tracker</h1>
        </div>
        <div className="flex flex-col items-center ">
          <h1>Calender</h1>
        </div>
        <div className="flex flex-col items-center ">
          <h1>Fitness Goals</h1>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar