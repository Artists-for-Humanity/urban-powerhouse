"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import '../../app/globals.css';
import { dot } from "node:test/reporters";
import { BiLeftArrow } from "react-icons/bi";



export default function Founders() {



  return (
    <Grid>
      <Navigation />
      <Container>

        <div className="text-center col-start-2 col-span-4 flex">
          <h1>Meet Our Founders</h1>
        </div>
        {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}> */}
        <div className="flex flex-col items-center mt-5 col-start-2 col-span-4">

          <img
            src="/headshots/founder1.png"
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #444',
              marginBottom: '5px'
            }}
          />
        </div>
        <div className="text-center text-xs col-start-2 col-span-6">
          <h4>Joseph Stephen, Executive Director/Co-Founder</h4>
        </div>
        <div className="col-start-1 col-span-6 text-xs">
          <h6>Joseph Stephen is an ACSM Certified CPT, Crossfit Level 1, USAW Level 1 Sports Performance Coach and USAPL Club Coach.
            Joseph graduated from Berklee College of Music with a B.A. in Music Education and Performance. He has spent the past decade traveling between the worlds of music, education, and health and wellness.

            In 2012 he decided to stop the balancing act and devote his time to helping others achieve their health and wellness goals full time as a trainer at Fitness Together Newtonville and then a manager at Fitness Together Dedham, followed by a Business Manager position at a prominent CrossFit box. Most recently he held the position of Director of Membership at the Thomas Menino YMCA, located in Hyde Park, MA. He is currently the Senior Director of Membership & Fitness for the Hockomock YMCA.

            Joseph has coached several athletes to the national level within their first year of competition. He's looking forward to providing more opportunities for individuals within the Boston community to experience what it's like to be a strength athlete.</h6>
        </div>
      </Container>
      <Footer />
    </Grid>

  );
}
