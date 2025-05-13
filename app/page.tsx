"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero/Hero";


export default function Home() {


  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          />
          <Container className=" mt-[20vh] min-h-[100vh]">

        <div className=" justify-center relative items-center ml-3 text-left mb-4 col-span-full font-semibold">
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
          <h3 className="text-[16px] grid leading-[24px] w-full h-[312px]">____ <br />____ <br /> <br />We are an non-profit organization in Boston working to increase the  exposure and participation of underserved youth and adults in strength  sports through training, information access, and financial support. We  want to make powerlifting and weightlifting attainable for everyone,  thereby keeping the sports diverse and inclusive for years to come. Want to help? Curious? Join our movement below!</h3>
          </div>
          <h3 className="text-[16px] w-full grid">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis  </h3>
        </div>
           
            </Container>

          <Footer />
       
        </Grid>

  );
}
