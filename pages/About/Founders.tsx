"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import '../../app/globals.css';
import Image from "next/image";


export default function Founders() {



    return (
          <Grid>
            <Navigation/>
              <Container>

                <h1 className="col-span-full text-center sm:col-start-1 sm:col-span-5 p-2 sm:p-8 font-semibold text-2xl">Meet The Founders</h1>


                <div className="col-start-2 col-span-4 sm:col-start-3 lg:col-start-5">
                  <Image 
                              src="/headshots/founder1.png"
                              className="w-full rounded-full p-1 grayscale-100"
                              alt="Logo" 
                              width={ 1000} 
                              height={ 1000} 
                          />
                </div>

                <h1 className="col-span-full p-4 text-center font-semibold">Joseph Stephen, Executive Director/ Co-Founder</h1>

                <div className="col-start-1 col-end-7 sm:col-start-3 lg:col-start-4 lg:col-span-6 p-8 sm:p-0 text-left flex flex-col gap-8">
                  <p>Joseph Stephen is an ACSM Certified CPT, Crossfit Level 1, USAW Level 1 Sports Performance Coach and USAPL Club Coach. Joseph graduated from Berklee College of Music with a B.A. in Music Education and Performance. He has spent the past decade traveling between the worlds of music, education, and health and wellness.</p>
                  <p>In 2012 he decided to stop the balancing act and devote his time to helping others achieve their health and wellness goals full time as a trainer at Fitness Together Newtonville and then a manager at Fitness Together Dedham, followed by a Business Manager position at a prominent CrossFit box. Most recently he held the position of Director of Membership at the Thomas Menino YMCA, located in Hyde Park, MA. He is currently the Senior Director of Membership & Fitness for the Hockomock YMCA. </p>
                  <p>Joseph has coached several athletes to the national level within their first year of competition. He's looking forward to providing more opportunities for individuals within the Boston community to experience what it's like to be a strength athlete.</p>
                </div>

                <div className="col-start-2 col-span-4 sm:col-start-3 lg:col-start-5 my-8">
                  <Image 
                              src="/headshots/founder2.png"
                              className="w-full rounded-full p-1 grayscale-100"
                              alt="Logo" 
                              width={ 1000} 
                              height={ 1000} 
                          />
                </div>

                <h1 className="col-span-full p-4 text-center font-semibold">Laurie Maranian, VP of Development/Co-Founder</h1>

                <div className="col-start-1 col-end-7 sm:col-start-3 lg:col-start-4 lg:col-span-6 p-8 sm:p-0 text-left flex flex-col gap-8">
                  <p>Laurie Maranian is a USAPL Club Coach and a Road Runners Club of America distance running coach.</p>
                  <p>Laurie has competed with USA Powerlifting for two years now at both the local and national level and is committed to putting a barbell in as many people's hands as possible to give them the opportunity to experience the power of strength sports.  </p>
                  <p>Laurie is currently the Director of Development for the Cardinal Cushing Centers, a $35 million non-profit organization that supports individuals with intellectual disabilities. Prior to starting her career in development in 2010, Laurie helped to found and subsequently coordinate social and recreation programming for Teens and Young Adults with Down syndrome. Laurie, who currently resides in Boston, MA, graduated from Harvard College with a BA in Sociology.</p>

                </div>
              </Container>
            <Footer />
          </Grid>

    );
}
