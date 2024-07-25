import React from "react";
import Image from "next/image";
import fImage from "../../public/images/footer-image.png";

function Footer() {
  return (
    <div className="footer pt-[20px] pb-[20px] bg-grey-light text-white">
      <div className="container">
        <div className="text-center">
          <Image className="inline"
            src={fImage}
            alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <p className="uppercase text-[8px] tracking-[0.2em] mb-0 mt-[15px]">All rights reserved. Film Commission ©2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
