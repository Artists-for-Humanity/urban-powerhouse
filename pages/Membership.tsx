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
        <button className=" LOOKHERE col-span-6 rounded-3xl flex table-column border-25 mb-10 p-8"  onClick = {onButtonClick}
        style={{ backgroundColor: `var(${bgColor})`, border: `2px solid var(${bgColor})` }}>
            <div className="memTotCon h-full w-full">
              <div className="MemTextCon flex flex-row pb-3">
              <div className="memSelCon justify-center items-center">
                <div className="memSel size-px border-10 rounded-xl mr-4 "
                style={{ backgroundColor: `var(${dColor})`, border: `10px solid var(${dColor})` }}
                ></div>
              </div>
              <div className="type pr-4 text-xl">
                {type}
              </div>
              <div className="price text-xl">
                {price}
                </div>
            </div>
            <div className="description text-sm text-left">
              {description}
            </div>
            </div>
        </button>
    )
}

function MemInput({ Info }) {
  return (
    <div className="memInputWrapper flex flex-row justify-between items-center col-start-2 col-end-6 pb-4">
      <div className="Input text-lg">
        {Info} <span className="text-(--urban-orange)">*</span>
      </div>
      <input type="text" className="border-b-2 text-right" />
    </div>
  );
}




export default function Membership() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // Add this line

  function handleClick(option) {
    console.log("Selected option:", option);
    setSelectedOption(option);
  }

  function checkout(option) {
    console.log("Checkout for option:", option);
    setShowPopup(true); // Show popup when Buy Pass is clicked
  }


    return (
    <Grid className="gap-y-4">
      <Navigation />
      <Container>
        <div className="membershipTitle col-start-2 col-end-6 text-2xl pb-8">
          Membership Pricing Options
        </div>
        <div className="membershipThanks col-start-2 col-end-6 text-lg pb-8">
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
          <div className="buttonLoco w-full h-full flex flex-row justify-center items-center col-start-2 col-end-6 pb-8">
              <Button
                className="text-xl w-50"
                label=" Buy Pass"
                onClick={() => checkout(selectedOption)}
                variant="default"
              />
            </div>
            <div
              className="popupLoco w-full h-full absolute pt-200 pl-30 mx-[-20px]"
              style={{ display: showPopup ? "block" : "none" }} 
            >
              <div className="popup bg-[#F47321] w-60 h-40 flex flex-col justify-center items-center border-5 border-black-100 rounded-3xl">
                <div className="popupText decoration-black rounded-xl">
                  Membership Selected: {selectedOption}
                </div>
              </div>
            </div>
          <br />
          <button
            className={`CUSTOM py-8 col-span-full mx-[-20px] ${
              selectedOption === "Custom" ? "bg-[#1D42E1]" : "bg-[#404040]"
            }`}
            onClick={() => handleClick("Custom")}
          >
            <div className="CustomTextCon mx-15 text-xl">
              <div className="memSelCon flex flex-row">
                <div
                  className={`memSel size-px border-10 rounded-xl mr-4 ${
                    selectedOption === "Custom" ? "border-[#F47321]" : "bg-[#ffffff]"
                  }`}
                ></div>
                <div className="type pb-4">Custom</div>
              </div>

              <div className="description text-base text-sm">
                Coaching & Individualized Programming: Inquire for pricing. Financial Assistance available. Leave your information and we will get back to you ASAP!
              </div>
            </div>
          </button>

    <div className="memInputSec flex flex-col col-start-1 col-end-7 pt-8">
        <div className="memInputText text-lg pb-4">Personal Information</div>
            <MemInput Info = {" First Name"}/>
            <MemInput Info = {" Last Name"}/>
            <MemInput Info = {" Mobile Phone"}/>
            <MemInput Info = {" Email"}/>
        <div className="Message text-lg">Message</div>
          <textarea
            placeholder="Optional"
            className="border-2 border-gray-400 border-opacity-25 h-50 w-full p-2 text-left align-top"
            />
            </div>
      </Container>
      <Footer />
    </Grid>
  );
}
