"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button";

export default function Home() {


  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          />
          <Container className=" mt-[20vh] min-h-[100vh]">

        <div className="justify-center relative items-center  font-[Poppins]  text-left mb-4 col-span-full font-semibold">
          <div className="section-1 mt-[40] px-[4] h-[788]">
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
            <h3 className="text-[16px] grid relaative items-start justify-start leading-[24px] w-full h-[312px]">____ <br />____ <br /> <br />We are an non-profit organization in Boston working to increase the  exposure and participation of underserved youth and adults in strength  sports through training, information access, and financial support. We  want to make powerlifting and weightlifting attainable for everyone,  thereby keeping the sports diverse and inclusive for years to come. Want to help? Curious? Join our movement below!</h3>
            </div>
            <div className="Read-more w-full justify-end flex">
              <Button className=" w-[100] h-[40] absolute flex justify-center items-center" label="Read more" onClick={() => console.log('Sign In clicked')} variant="default" />
            </div>
          </div>
          <div className="section-2 mt-[40] px-[4]">
            <img src="quote.svg" alt="Your devide does not support this picture" className="mb-[40] relative w-[140.33] h-[111]" />
            <h3 className="text-[16px] w-full grid">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis  </h3>
            <br />
            <h3>FIRST LASTNAME, TITLE HERE</h3>
            <div className="headershot-1 w-full mt-[40] relative grid justify-center">
              <img src="/headshots/founder1.png" alt="our devide does not support this picture" className="h-auto w-[240] mb-[40] rounded-full grayscale "/>
            </div>
          </div>
          <div className="section-3 mt-[40] px-[4]">
            <div className="title w-full justify-center flex relative">
              <div className="relative text-[32px] ">Our GYM</div>
            </div>
          </div>
          <div className="min-w-full mb-[40]"></div>
            <img src="/gymshots/Championship2025.jpg" alt="" className="min-w-[100vw] object-cover" />
        </div>
           
            </Container>

          <Footer />
       
        </Grid>

  );
}
