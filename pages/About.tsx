"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';
import Leadership from "../components/Leadership";



export default function News() {



    return (
          <Grid>
            <Navigation/>
              <Container>
              <h1 className="text-[32px] font-semibold col-span-full ">Meet the Founders</h1>
              <Leadership
                imageSrc="/headshots/founder1.png"
                name="Joseph Stephen, Executive Director/Co-Founder"
                description={[
                    "Joseph Stephen is an ACSM Certified CPT, Crossfit Level 1, USAW Level 1 Sports Performance Coach and USAPL Club Coach. Joseph graduated from Berklee College of Music with a B.A. in Music Education and Performance. He has spent the past decade traveling between the worlds of music, education, and health and wellness.",
                    "In 2012 he decided to stop the balancing act and devote his time to helping others achieve their health and wellness goals full time as a trainer at Fitness Together Newtonville and then a manager at Fitness Together Dedham, followed by a Business Manager position at a prominent CrossFit box. Most recently he held the position of Director of Membership at the Thomas Menino YMCA, located in Hyde Park, MA. He is currently the Senior Director of Membership & Fitness for the Hockomock YMCA. ",
                    "Joseph has coached several athletes to the national level within their first year of competition. He's looking forward to providing more opportunities for individuals within the Boston community to experience what it's like to be a strength athlete."
                ]}
                />
                <Leadership
                    imageSrc="/headshots/founder2.png"
                    name="Laurie Maranian, VP of Development/Co-Founder"
                    description={[
                        "Laurie Maranian is a USAPL Club Coach and a Road Runners Club of America distance running coach.",
                        "Laurie has competed with USA Powerlifting for two years now at both the local and national level and is committed to putting a barbell in as many people's hands as possible to give them the opportunity to experience the power of strength sports. ",
                        "Laurie is currently the Director of Development for the Cardinal Cushing Centers, a $35 million non-profit organization that supports individuals with intellectual disabilities. Prior to starting her career in development in 2010, Laurie helped to found and subsequently coordinate social and recreation programming for Teens and Young Adults with Down syndrome. Laurie, who currently resides in Boston, MA, graduated from Harvard College with a BA in Sociology."
                    ]}
                />
              </Container>
            <Footer />
          </Grid>

    );
}
