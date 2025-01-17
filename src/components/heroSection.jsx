import React from "react";
import Doller from "../img/doller.png";
import "../App.css";

function HeroSection() {
  const style = {
    width: "100%",
    height: "28rem",
  };

  return (
    <>
      <div style={style} className=" p-4">
        <div className="row align-items-center">
          {/* First Column */}
          <div className="col-md-6 firSection">
            <img src={Doller} alt="Dollar illustration" className="w-75" />
          </div>

          {/* Second Column */}
          <div className="col-md-6 secSection">
            <p className="fs-1 text-end">
              مبيعات سهلة للعديد من البائعين وفواتـــــــــير إلكترونية آمنة
            </p>
            <p className="fs-5 text-end">
              نتيح للبائعين عرض منتجاتهم بسهولة وللمشترين إدارة مشترياتهم
              وفواتيرهم عبر الإنترنت بسهولة.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
