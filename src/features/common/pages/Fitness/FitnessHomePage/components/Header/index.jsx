

import { Button } from '@nextui-org/react';
import { IoNotifications } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  return (
    <div
      className=" flex  items-center   py-4 sticky  bg-white top-0"
      style={{ borderBottom: "1px solid #E4E4E4" }}
    >
      <div className="flex flex-row items-center justify-between">
        <div className='px-6'>
        
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>

        <div className="flex flex-row gap-2 ">
          <Button isIconOnly>
            <MdEmail />
          </Button>
          <Button isIconOnly>
            <IoNotifications />
          </Button>
          <div className="flex gap-2">
            <img
              className="h-10 w-9 object-cover rounded-md"
              src="https://t4.ftcdn.net/jpg/01/85/04/83/360_F_185048377_F8giSZbUurG1Rpgn9rs4aIzhG17bkKCp.jpg"
              alt="profile"
            />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Fida Firoz</h1>
              <h6 className="text-sm text-slate-500">fidafiroz@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header