"use client";
import React, { useState } from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Button from "../components/Button";



import '../app/globals.css';

function MembershipOptions({bgColor, dColor, type, price, description, onButtonClick}) {
    return (
        <button className=" LOOKHERE col-span-6 rounded-3xl flex table-column border-25 mb-10 p-8
          sm:col-start-2 sm:col-end-8 sm:rounded-[0px]
          lg:col-start-3 lg:col-end-11 lg:rounded-[0px]"  onClick = {onButtonClick}
        style={{ backgroundColor: `var(${bgColor})`, border: `3px solid var(${bgColor})` }}>
            <div className="memTotCon h-full w-full 
            lg:flex lg:justify-between lg:items-center">
              <div className="MemTextCon flex flex-row pb-3 lg:pb-0">
              <div className="memSelCon flex justify-center items-center">
                <div className="memSel size-px border-10 rounded-xl mr-4 h-auto w-auto"
                style={{ backgroundColor: `var(${dColor})`, border: `10px solid var(${dColor})` }}
                ></div>
              </div>
              <div className="type pr-3 text-xl sm:text-2xl lg:text-3xl">
                {type}
              </div>
              <div className="price text-xl sm:text-2xl lg:text-3xl">
                {price}
                </div>
            </div>
            <div className="description text-sm text-left sm:text-base lg:text-lg lg:w-[40vw]
            ">
              {description}
            </div>
            </div>
        </button>
    )
}

function MemInput({ Info }) {
  return (
    <div className="memInputWrapper flex flex-row justify-between items-center col-start-2 col-end-8 pb-4
      lg:col-start-1 lg:col-end-7 lg:w-[30vw]">
      <div className="Input text-lg sm:text-2xl">
        {Info} <span className="text-(--urban-orange)">*</span>
      </div>
      <input type="text" className="border-b-2 text-right" />
    </div>
  );
}


 

export default function Membership() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPopup, setShowPopup] = useState(false); 

  function handleClick(option) {
    console.log("Selected option:", option);
    setSelectedOption(option);
  }

  function checkout(option) {
    console.log("Checkout for option:", option);
    if(option !== null) {
      setShowPopup(true); 
    }
    if (option === "Custom") {
    
    }
  }


    return (
    <Grid className="gap-y-4">
      <Navigation />
      <Container>
        <div className="membershipTitle col-start-2 col-end-8 text-2xl pb-8 
        sm:text-4xl
        lg:col-start-4 lg:col-end-11">
          Membership Pricing Options
        </div>
        <div className="membershipThanks col-start-2 col-end-8 text-lg pb-8 
        sm:text-2xl lg:col-start-4 lg:col-end-11">
          <span className="text-(--urban-orange)">Thank you </span>for
          registering with Urban PowerHouse! We have a variety of membership
          options available
        </div>
        <MembershipOptions
            bgColor={selectedOption === "DAY" ? "--urban-blue" : "--urban-grey"} // Change color dynamically
            dColor={selectedOption === "DAY" ? "--urban-orange" : "--urban-white"}
            type={"DAY"}
            price={"$15"}
            description={
              "Day Pass: In town for a day or just want to check us out? Drop in for one day of training with our day pass option, $15."
            }
            onButtonClick={() => handleClick("DAY")}
          />
          <MembershipOptions
            bgColor={selectedOption === "WEEK" ? "--urban-blue" : "--urban-grey"} // Change color dynamically
            dColor={selectedOption === "WEEK" ? "--urban-orange" : "--urban-white"}
            type={"WEEK"}
            price={"$35"}
            description={
              "Week Pass: If you’re going to be in the Boston area for more than just a day trip, we offer a week pass. Unlimited access for seven days for $35."
            }
            onButtonClick={() => handleClick("WEEK")}
          />
          <MembershipOptions
            bgColor={selectedOption === "MONTH" ? "--urban-blue" : "--urban-grey"} // Change color dynamically
            dColor={selectedOption === "MONTH" ? "--urban-orange" : "--urban-white"}
            type={"MONTH"}
            price={"$50"}
            description={
              "Monthly Facility Membership: Join our community and access our facility 7 days/week for $50/month."
            }
            onButtonClick={() => handleClick("MONTH")}
          />
          <div className="buttonLoco w-full h-full flex flex-row justify-center items-center col-start-3 col-end-5 sm:col-start-2 sm:col-end-8 lg:col-start-5 lg:col-end-9 pb-8">
              <Button
                className="text-xl w-50 sm:text-2xl"
                label=" Buy Pass"
                onClick={() => checkout(selectedOption)}
                variant="default"
              />
            </div>
            <div
              className="popupLoco fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
              style={{ display: selectedOption != "Custom" && showPopup ?  "flex" : "none" }}
            >
              <div className="popup bg-[#F47321] w-60 h-40 flex flex-col justify-center items-center border-5 border-black-100 rounded-3xl">
                <div className="popupText decoration-black rounded-xl">
                  Membership Selected: {selectedOption}
                </div>
              </div>
            </div>
          <br />
          <button
            className={`CUSTOM py-8 col-span-full mx-[-20px]
              sm:col-start-2 sm:col-end-8 sm:mx-[0px]
              lg:col-start-3 lg:col-end-11 lg:rounded-[0px] lg:mx-[0px] ${
              selectedOption === "Custom" ? "bg-[#1D42E1]" : "bg-[#404040]"
            }`}
            onClick={() => handleClick("Custom")}
          >
            <div className="cusTotCon h-full w-full px-10 lg:flex lg:justify-between lg:items-center ">
              <div className="CustomTextCon text-xl flex items-center">
                <div className="memSelCon flex flex-row lg:items-center">
                  <div
                    className={`memSel size-px border-10 rounded-xl mr-4 ${
                      selectedOption === "Custom" ? "border-[#F47321]" : "bg-[#ffffff]"
                    }`}
                  ></div>
                  <div className="type pb-4 sm:text-2xl lg:text-3xl lg:pb-0">Custom</div>
                </div>
              </div>
              <div className="description text-left text-base text-sm sm:text-base lg:justify-end lg:text-lg lg:text-left lg:w-[40vw]">
                Coaching & Individualized Programming: Inquire for pricing. Financial Assistance available. Leave your information and we will get back to you ASAP!
              </div>
            </div>
          </button>

          {selectedOption === "Custom" && showPopup && (
        <div className="memInputSec flex flex-col lg:flex-row lg:justify-between col-start-1 col-end-9 lg:col-span-full pt-8
            lg:col-start-3 lg:col-end-11
            " >
          <div className="memInCon lg:flex lg:flex-col">
            <div className="memInputText text-lg sm:text-2xl pb-4">Personal Information</div>
            <MemInput Info = {" First Name"}/>
            <MemInput Info = {" Last Name"}/>
            <MemInput Info = {" Mobile Phone"}/>
            <MemInput Info = {" Email"}/>
          </div>
          <div className="messageCon">
            <div className="Message text-l sm:placeholder:text-2xl">Message</div>
            <textarea
              placeholder="Optional"
              className="border-2 border-gray-400 border-opacity-25 h-50 w-full lg:w-[30vw] p-2 text-left align-top"
            />
          </div>
        </div>
      )}
      </Container>
      <Footer />
    </Grid>
  );
}
