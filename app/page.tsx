"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button";
import Partner from "../components/Partner";
import IntroduceVideo from "../components/Video-home";

export default function Home() {


  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          />
          <Container className=" mt-[20vh] min-h-[100vh] word-break">
        <div className="justify-center relative items-center font-[Poppins] text-left mb-4 col-span-full font-semibold grid grid-cols-subgrid">
          <IntroduceVideo></IntroduceVideo>
          
          <div id="section-1" className=" grid sm:px-0 sm:grid-cols-subgrid px-4 col-start-1 col-span-5 mb-10 sm:col-start-2 sm:col-span-7 lg:col-span-7 ">
              <div className="UrbanPowerHouse sm:col-start-1 sm:col-span-6">
              <div className="text-[32px] grid leading-[36px]">About Urban Powerhouse</div>
            <h3 className="text-[16px] sm:col-start-2 sm:col-span-5 grid mb-[40px] mt-5"> We are an non-profit organization in Boston working to increase the  exposure and participation of underserved youth and adults in strength  sports through training, information access, and financial support. We  want to make powerlifting and weightlifting attainable for everyone,  thereby keeping the sports diverse and inclusive for years to come. Want to help? Curious? Join our movement below!</h3>
            </div>
            <div className="grid sm:col-start-6 sm:col-span-1 Read-more w-full justify-end flex">
              <Button className=" w-[100] h-[40] absolute flex justify-center items-center" label="Read more" onClick={() => console.log('Sign In clicked')} variant="default" />
            </div>
          </div>
          <div id="section-2" className="px-4 sm:px-0 section-2 col-start-1 col-span-7 sm:col-start-2 sm:col-span-7 lg:col-span-11">
            <img src="quote.svg" alt="Your devide does not support this picture" className="mb-[40] relative w-[140.33] h-[111]" />
            <h3 className="text-[20px] w-full grid">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis  </h3>
            <br />
            <h3>FIRST LASTNAME, TITLE HERE</h3>
            <div className="headershot-1  w-full mt-[40] relative grid justify-center">
              <img src="/headshots/founder1.png" alt="our devide does not support this picture" className="h-auto w-[240] mb-[40] rounded-full justify-center grayscale "/>
            </div>
          </div>
          <div id="section-3" className=" grid col-start-1 col-span-7 sm:col-span-7 lg:col-span-11">
            <div className="title w-full justify-center flex relative">
              <div className="relative md:hidden none text-[32px] ">Our GYM</div>
            </div>
          </div>
          <div className="col-start-1 col-span-5 sm:col-start-1 sm:col-span-7 lg:col-span-11">
            <img src="/gymshots/Championship2025.jpg" alt="" className="min-w-[100vw] my-20 object-cover" />
          </div>
          <div id="section-4" className="col-start-1 col-span-7 sm:col-start-2 sm:col-span-7 lg:col-span-11 ">
            <div className="title w-full md:justify-start md:px-10 justify-center flex relative">
              <div className="grid text-[32px] ">Our Partners</div>
            </div>
    
          <div id="box-container" className="my-18 sm:mt-10 w-full justify-center grid sm:justify-end sm:col-start-1 sm:col-span-3 sm:grid-cols-2 relative">
        
          <Partner></Partner>
          <Partner></Partner>
          <Partner></Partner>
          <Partner></Partner>
          <Partner></Partner>
          <Partner></Partner>
          <Partner></Partner>
          <Partner></Partner>

          </div>
          </div>
          <div id="section-5" className="col-start-2 col-span-7 sm:col-start-2 sm:col-span-7 lg:col-span-11">
            <div className="title w-full  grid relative">
              <div className="grid text-[32px] mb-6 ">Our Stats</div>
            </div>

            <div id="Stats" className=" grid flex flex-col md:flex-row sm:grid-cols-subgrid relative">
              <p className="text-[32px]  sm:col-start-1 sm:col-span-2 ">500</p> <br />
              <p className="text-[20px]  sm:col-start-1 sm:col-span-2">Member</p> <br />
              <p className="text-[32px] sm:col-start-1 sm:col-span-2">5</p> <br /> 
              <p className="text-[20px]  sm:col-start-1 sm:col-span-2">Championships</p> <br />
              <p className="text-[32px] sm:col-start-5 sm:col-span-5">200</p> <br />
              <p className="text-[20px] sm:col-start-5 sm:col-span-5">Equipments</p> <br />
              <p className="text-[32px] sm:col-start-5 sm:col-span-5">20000$</p> <br />
              <p className="text-[20px] sm:col-start-5 sm:col-span-5">Donated</p> 
            </div>
          </div>
          <div id="section-6" className="col-start-2 col-span-7 sm:col-start-2 sm:col-span-7 lg:col-span-11 ">
             <div className="title w-full grid relative">
              <div className="grid text-[32px] mb-6 ">Contact Us
              <br />
             <div className="text-[16px] font-normal mt-6">Phone 123-888-3434</div> 
             <div className="text-[16px] font-normal mt-2">Email</div> 
             <div className="text-[16px] font-normal mt-2">Contact@UrbanPowerhouse.com</div> 
              </div>
             </div>
          </div>
          <div id="section-7" className="col-start-2 col-span-7 sm:col-start-2 sm:col-span-7 lg:col-span-11 ">
             <div className="title w-full flex relative">
              <div className="grid text-[32px] mb-6 ">Our Hours</div>
            </div>
            <div id="hour_info" className="flex">
             <div className="text-[16px] flex font-normal mt-0">Business hrs</div> 
             <div className="text-[16px] flex font-normal ml-6">Mon-Fri 5am-10pm<br />Sat- 8am-5pm <br /> Sun 8am-3pm</div> 
            </div>
          </div>
        </div>

      
           
            </Container>

          <Footer />
       
        </Grid>

  );
}
