import React, { useState, useEffect } from "react";
import Logo_Img from "../assets/logo.jpeg";
import { Button } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import "../App.css";

function navBar() {
  const styles={
    width:"57.46px",
    height:"57.46px"
  }
  const [data] = useState([
    "الصفحة الرئيسية",
    "مميزاتنا ",
    "خدماتنا",
    "شركائنا",
    "آراء العملاء",
    "تواصل معنا",
  ]);
  const [iconData] = useState([
    <FaXTwitter className="w-t-color" />,
    <FaFacebookF className="w-t-color" />,
    <FaInstagram className="w-t-color" />,
    <FaSnapchat className="w-t-color" />,

  ]);
  //   setData(navData);
  return (
    <>
        {/* contract top navbar section  */}

      <div className="w-100 h-1 p-color d-flex justify-content-between px-2">
        <div className="contractSection d-flex list-unstyled gap-3  mx-3 align-items-center justify-content-between">
          <li className="w-t-color px-1">mail@gmail.com</li>
          <li className="w-t-color">+00000000000</li>
          <li className="w-t-color">+00000000000</li>
        </div>
{/* END */}

{/* sec-navBar section */}
        <div className="liWithSomeText  d-flex align-items-center w-t-color  list-unstyled gap-5 px-4">
        <div className="socialSection d-flex list-unstyled gap-3 justify-content-evenly">
          {iconData.map((e) => {
            return (
              <>
                {/* // <div className="topContractleft"> */}
              <li key={e.length} className="hover-border-p-color p-t-color p-1">
                {e}
              </li>
                {/* // </div> */}
                </>
            );
          })}
        </div>
          <li className="">تواصل معنا</li>
          </div>
      </div>
    {/*sec-navBar in btn */}
      <div className=" d-flex gap-40 justify-content-between w-100 border align-items-center m">
        <div className="px-4">
          <Button className="p-color px-2"> سجل الآن</Button>
        </div>
        {/*  */}
        <div className="ulList d-flex list-unstyled  gap-4  align-items-center">
          {data.map((e) => {
            return (
              <li key={e.length} className="hover-border-p-color p-t-color" {hover?t-under-line:none }>
                {e}
              </li>
            );
          })}
        </div>
        {/* logo */}
        <div className=" d-flex justify-content-end px-2 gap-1">
          <div className="logName">
            Lowdan
            <br />
            Logo
          </div>
          <img src={Logo_Img} alt="logoimg" className="col-sm-3" />
        </div>
      </div>
      {/* second navbar */}
    </>
  );
}

export default navBar;
