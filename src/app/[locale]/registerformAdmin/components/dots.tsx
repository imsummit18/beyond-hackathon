import React from 'react'

const dots = () => {
  return (
    <div className="dots mb-2">
      <div className="container">
        <div className="p-[5px] bg-primary-ultralight/40 h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
          <span className="block bg-primary-normal h-[4px] w-[4px] mt-[1px] mb-[1px] rounded-[50%]"></span>
          <span className="block bg-primary-normal h-[4px] w-[4px] mt-[1px] mb-[1px] rounded-[50%]"></span>
          <span className="block bg-primary-normal h-[4px] w-[4px] mt-[1px] mb-[1px] rounded-[50%]"></span>
        </div>
      </div>
    </div>
  );
}

export default dots
