"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button";
import Partner from "../components/Partner";

export default function Home() {


  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          />
          <Container className=" mt-[20vh] min-h-[100vh]">

        <div className="justify-center relative items-center  font-[Poppins]  text-left mb-4 col-span-full font-semibold">
          <div id="section-1" className="pl-4 mt-18 px-[4]">
            <div className="video_Thanks w-full grid justify-center items-center">
            <div className="text-[4rem] absolute text-white w-full justify-center font-extrabold uppercase leading-none z-10 text-transparent bg-clip-text bg-center bg-cover bg-no-repeat">
              Giving <br /> Thanks
            </div>
              <button className="absolute z-20 w-[100px] h-[100px] flex items-center justify-center rounded-full bg-black/60 text-white text-4xl cursor-pointer">▶</button>
              <video width="700px" height="700px" controls className=" flex flex-rows w-full items-center justify-center">
              <source src="/logos/file.mp4"/> Your browser does not support this video
              </video>
            </div>
              <div className="UrbanPowerHouse">
              <div className="text-[32px] leading-[36px]">About Urban Powerhouse</div>
            <h3 className="text-[16px] grid relative items-start justify-start leading-[24px] w-[90vw]">____ <br />____ <br /> <br />We are an non-profit organization in Boston working to increase the  exposure and participation of underserved youth and adults in strength  sports through training, information access, and financial support. We  want to make powerlifting and weightlifting attainable for everyone,  thereby keeping the sports diverse and inclusive for years to come. Want to help? Curious? Join our movement below!</h3>
            </div>
            <div className="Read-more w-full justify-end flex">
              <Button className=" w-[100] h-[40] absolute flex justify-center items-center" label="Read more" onClick={() => console.log('Sign In clicked')} variant="default" />
            </div>
          </div>
          <div id="section-2" className="section-2 pl-4 mt-18 px-[4]">
            <img src="quote.svg" alt="Your devide does not support this picture" className="mb-[40] relative w-[140.33] h-[111]" />
            <h3 className="text-[16px] w-full grid">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis  </h3>
            <br />
            <h3>FIRST LASTNAME, TITLE HERE</h3>
            <div className="headershot-1 w-full mt-[40] relative grid justify-center">
              <img src="/headshots/founder1.png" alt="our devide does not support this picture" className="h-auto w-[240] mb-[40] rounded-full grayscale "/>
            </div>
          </div>
          <div id="section-3" className=" pl-4 mt-18 px-[4]">
            <div className="title w-full justify-center flex relative">
              <div className="relative text-[32px] ">Our GYM</div>
            </div>
          </div>
          <div className="min-w-full mt-18">
            <img src="/gymshots/Championship2025.jpg" alt="" className="min-w-[100vw] object-cover" />
          </div>
          <div id="section-4" className="mt-18">
            <div className="title w-full justify-center flex relative">
              <div className="grid text-[32px] ">Our Partners</div>
            </div>
    
          <div id="box-container" className="mt-18 w-full justify-center grid sm:col-start-3 sm:col-span-5 sm:grid-cols-2 relative">
        
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
          <div id="section-5" className="pl-15 mt-18">
            <div className="title w-full flex relative">
              <div className="grid text-[32px] mb-6 ">Our Stats</div>
            </div>
            <div id="Stats" className="relative">
              <p className="text-[32px] ">500</p> <br />
              <p className="text-[20px]">Member</p> <br />
              <p className="text-[32px]">5</p> <br /> 
              <p className="text-[20px]">Championships</p> <br />
              <p className="text-[32px]">200</p> <br />
              <p className="text-[20px]">Equipments</p> <br />
              <p className="text-[32px]">20000$</p> <br />
              <p className="text-[20px]">Donated</p> 
            </div>
          </div>
          <div id="section-6" className="pl-15 mt-18 ">
             <div className="title w-full flex relative">
              <div className="grid text-[32px] mb-6 ">Contact Us
              <br />
             <div className="text-[16px] font-normal mt-6">Phone 123-888-3434</div> 
             <div className="text-[16px] font-normal mt-2">Email</div> 
             <div className="text-[16px] font-normal mt-2">Contact@UrbanPowerhouse.com</div> 
              </div>
             </div>
          </div>
          <div id="section-7" className="pl-15 mt-18 ">
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
