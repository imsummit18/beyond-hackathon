import React from "react";
import  Form  from "./components/form";
import Dotsbar from "./components/dots";
import Editbox from "./components/editbox";


const registerFormAdmin = () => {
  return (
    <>
      <div className="bg-white">
        <Form />
        <Dotsbar />
        <Editbox />
      </div>
    </>
  );
};

export default registerFormAdmin;
