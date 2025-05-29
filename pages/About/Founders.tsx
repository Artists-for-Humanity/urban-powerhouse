"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import "../../app/globals.css";
import Image from "next/image";

export default function Founders() {
  return (
    <Grid>
      <Navigation />
      <Container>
        <div
          className=" text-center col-start-1 col-span-6 sm:col-start-1 sm:col-end-6 lg:col-start-1 lg:col-end-6
         text-4xl font-semibold "
        >
          <h1>Meet The Founders</h1>
        </div>
        <div className="col-start-2 col-span-4 pt-8 pb-8 8 sm:col-start-3 sm:col-end-7 lg:col-start-5 lg:col-end-9">
          <Image
            src="/headshots/founder1.png"
            className="w-full rounded-full grayscale-100"
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>

        <div
          className=" text-center col-start-2 col-span-4 sm:col-start-3 sm:col-end-7 lg:col-start-5 lg:col-end-9 
        font-semibold"
        >
          <h1>Joseph Stephen, Executive Director/Co-Founder</h1>
        </div>

        <div className=" col-start-2 col-span-4 mt-10 8 sm:col-start-2 sm:col-end-8 lg:col-start-4 lg:col-end-10">
          <p>
            Joseph Stephen is an ACSM Certified CPT, Crossfit Level 1, USAW
            Level 1 Sports Performance Coach and USAPL Club Coach. Joseph
            graduated from Berklee College of Music with a B.A. in Music
            Education and Performance. He has spent the past decade traveling
            between the worlds of music, education, and health and wellness.
          </p>
          <p className="mt-5">
            In 2012 he decided to stop the balancing act and devote his time to
            helping others achieve their health and wellness goals full time as
            a trainer at Fitness Together Newtonville and then a manager at
            Fitness Together Dedham, followed by a Business Manager position at
            a prominent CrossFit box. Most recently he held the position of
            Director of Membership at the Thomas Menino YMCA, located in Hyde
            Park, MA. He is currently the Senior Director of Membership &
            Fitness for the Hockomock YMCA.
            <br></br>
            <br></br>
            Joseph has coached several athletes to the national level within
            their first year of competition. He's looking forward to providing
            more opportunities for individuals within the Boston community to
            experience what it's like to be a strength athlete.
          </p>
        </div>

        <div className="col-start-2 col-span-4 pt-8 pb-8 8 sm:col-start-3 sm:col-end-7 lg:col-start-5 lg:col-end-9 ">
          <Image
            src="/headshots/founder2.png"
            className="rounded-full"
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>

        <div
          className=" text-center col-start-2 col-span-4 sm:col-start-3 sm:col-end-7 lg:col-start-5 lg:col-end-9 text-base
            font-semibold"
        >
          <h1>Laurie Maranian, VP of Development/Co-Founder</h1>
        </div>

        <div className=" col-start-2 col-span-4 mt-10 8 sm:col-start-2 sm:col-end-8 lg:col-start-4 lg:col-end-10">
          <p>
            Laurie Maranian is a USAPL Club Coach and a Road Runners Club of
            America distance running coach.<br></br>Laurie has competed with USA
            Powerlifting for two years now at both the local and national level
            and is committed to putting a barbell in as many people's hands as
            possible to give them the opportunity to experience the power of
            strength sports. <br></br>
            <br></br>
            Laurie is currently the Director of Development for the Cardinal
            Cushing Centers, a $35 million non-profit organization that supports
            individuals with intellectual disabilities. Prior to starting her
            career in development in 2010, Laurie helped to found and
            subsequently coordinate social and recreation programming for Teens
            and Young Adults with Down syndrome. Laurie, who currently resides
            in Boston, MA, graduated from Harvard College with a BA in
            Sociology.
          </p>
        </div>
      </Container>
      <Footer />
    </Grid>
  );
}
