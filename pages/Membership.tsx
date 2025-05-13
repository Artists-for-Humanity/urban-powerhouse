"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Button from "../components/Button";



import '../app/globals.css';

function MembershipOptions({bgColor, dColor, type, price, description, onButtonClick}) {
    return (
        <div className=" LOOKHERE col-span-6 rounded-3xl flex table-column border-25 mb-10 p-8" 
        style={{ backgroundColor: `var(${bgColor})`, border: `2px solid var(${bgColor})` }}>
            <div className="memTotCon h-full w-full">
              <div className="MemTextCon flex flex-row pb-3">
              <div className="memSelCon justify-center items-center">
                <button className="memSel size-px border-10 rounded-xl mr-4 " onClick = {onButtonClick}
                style={{ backgroundColor: `var(${dColor})` }}
                ></button>
              </div>
              <div className="type pr-4 text-xl">
                {type}
              </div>
              <div className="price text-xl">
                {price}
                </div>
            </div>
            <div className="description text-sm">
              {description}
            </div>
            </div>
        </div>
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

function setselectedOption(selectedOption) {

}

function handleClick(selectedOption) {
    console.log("Button clicked for option:", selectedOption);
    // You can also update the state or perform any other actions as needed
    // setSelectedOption(selectedOption);
  
}


export default function Membership() {
    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container>
                <div className="membershipTitle col-start-2 col-end-6  text-2xl pb-8"> Membership Pricing Options</div>
                <div className="membershipThanks col-start-2 col-end-6  text-lg pb-8"> <span className="text-(--urban-orange)">Thank you </span>for registering with Urban PowerHouse! We have a variety of membership options available</div>
                <MembershipOptions bgColor = {"--urban-grey"} dColor = {"--urban-white"} type = {"DAY"} price = {"$15"} description = {"Day Pass: In town for a day or just want to check us out? Drop in for one day of training with our day pass option, $15."} onButtonClick={ () => handleClick("Day")}/>
                <MembershipOptions bgColor = {"--urban-grey"} dColor = {"--urban-white"} type = {"WEEK"} price = {"$35"} description = {"Week Pass: If you’re going to be in the Boston area for more than just a day trip, we offer a week pass. Unlimited access for seven days for $35."}  onButtonClick={ () => handleClick("Week")}/>
                <MembershipOptions bgColor = {"--urban-grey"} dColor = {"--urban-white"} type = {"MONTH"} price = {"$50"} description = {"Monthly Facility Membership: Join our community and access our facility 7 days/week for $50/month."}  onButtonClick={ () => handleClick("Month")}/>
                {/* <Button></Button> */}
                <br/>
                <div className="CUSTOM bg-(--urban-grey) py-8 col-span-full mx-[-20px]">
        <div className="CustomTextCon mx-15 text-xl">
              <div className="memSelCon flex flex-row">
                <button className="memSel size-px border-10 rounded-xl bg-(--urban-white) mr-4 "  onClick={() => handleClick("Custom")}  ></button>
              <div className="type pb-4">
                  Custom
              </div>
            </div>

            <div className="description text-base text-sm">
                Coaching & Individualized Programming: Inquire for pricing. Financial Assistance available. Leave your information and we will get back to you ASAP!
            </div>
        </div>
    </div>
    <div className="memInputSec flex flex-col col-start-1 col-end-7 pt-8">
        <div className="memInputText text-lg pb-4">Personal Information</div>
            <MemInput Info = {" First Name"}/>
            <MemInput Info = {" Last Name"}/>
            <MemInput Info = {" Mobile Phone"}/>
            <MemInput Info = {" Email"}/>
        {/* <Button>Submit</Button> */}
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
