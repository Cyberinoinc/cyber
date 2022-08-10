import React, { useState } from "react";
import "./cards.css";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { TiDeviceLaptop } from "react-icons/ti";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text-hide">
      {isReadMore ? text.slice(0, 150) : text}
      <p onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "read more" : "show less"}
      </p>
    </div>
  );
};

const Cards = () => (
  <div className="row">
    <div className="col-lg-4 col-md-6 mb-3">
      <Parallax speed={10}>
      <motion.div
        whileHover={{ rotate: -2, scale: 1.01 }}
        transition={{ duration: 0.5 }}
      >
        <div className="feature-box f-boxed style-3">
        <TiDeviceLaptop className="bg-color-2 i-boxed"/>
          <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>

          <div className="text">
            <h4 className="">Confidentiality</h4>

            <div className="break-text">
              <ReadMore>
                  ensures that sensitive information are accessed only 
                  by an authorized person and kept away from those not 
                  authorized to possess them. It is implemented using 
                  security mechanisms such as usernames, passwords, 
                  access control lists (ACLs), and encryption.
              </ReadMore>
            </div>
          </div>
          <i className="wm icon_cloud-upload_alt"></i>
        </div>
      </motion.div>
      </Parallax>
    </div>{" "}
    <div className="col-lg-4 col-md-6 mb-3">
    <Parallax speed={10}>
      <motion.div
          whileHover={{ rotate: -2, scale: 1.01 }}
          transition={{ duration: 0.5 }}
      >
        <div className="feature-box f-boxed style-3">
          <i className=" bg-color-2 i-boxed icon_tags_alt"></i>

          <div className="text">
            <h4 className="">Availability</h4>

            <div className="break-text">
              <ReadMore>
                  Availability – ensures that information and 
                  resources are available to those who need them. 
                  It is implemented using methods such as 
                  hardware maintenance, software patching 
                  and network optimization
              </ReadMore>
            </div>
          </div>
          <i className="wm icon_tags_alt"></i>
        </div>
      </motion.div>
      </Parallax>
    </div>{" "}
    <div className="col-lg-4 col-md-6 mb-3">
    <Parallax speed={10}>
      <motion.div
         whileHover={{ rotate: -2, scale: 1.01 }}
         transition={{ duration: 0.5 }}
      >
        <div className="feature-box f-boxed style-3">
          <i className=" bg-color-2 i-boxed icon_wallet"></i>

          <div className="text">
            <h4 className="">Integrity</h4>

            <div className="break-text">
              <ReadMore>
                  ensures that information are in a format 
                  that is true and correct to its original purposes. 
                  The receiver of the information must have the 
                  information the creator intended him to have.
              </ReadMore>
            </div>
          </div>
          <i className="wm icon_wallet"></i>
        </div>
      </motion.div>
      </Parallax>
    </div>
  </div>
);
export default Cards;
