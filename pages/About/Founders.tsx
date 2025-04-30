"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import '../../app/globals.css';
import Leadership from "../../components/Leadership";



export default function Founders() {



    return (
          <Grid>
            <Navigation/>
              <Container>
              <h1 className="text-[32px] font-semibold col-span-full ">Meet the Founders</h1>
              <Leadership
                imageSrc="/headshots/founder1.png"
                name="Joseph Stephen, Executive Director/Co-Founder"
                description={[
                    "Joseph Stephen is an ACSM Certified CPT, Crossfit Level 1, USAW Level 1 Sports Performance Coach and USAPL Club Coach.",
                    "Joseph earned his B.S. in Exercise Science from UMass Boston, is a certified strength coach, and has been working with athletes to improve their health, wellness, and performance for over 15 years. He has been coaching and competing in the sport of powerlifting in USA Powerlifting since 2018 at the local and national level.",
                    "Prior to opening Urban PowerHouse in 2019 and coaching athletes in powerlifting, Joseph spent the previous 10 years working as a head strength coach and personal trainer in CrossFit and other training modalities. There he helped athletes and clients focus on functional strength and improving and maintaining movement for prolonged health and independence as they age.",
                    "Joseph has coached several athletes to the national level within their first year of competition. He's looking forward to providing more opportunities for individuals within the Boston community to experience what it's like to be a strength athlete."
                  ]}
                />
                <Leadership
                    imageSrc="/headshots/founder2.png"
                    name="Laurie Maranian, Co-Founder/VP of Development"
                    description={[
                        "Laurie Maranian is a USAPL Club Coach, a Road Runners Club of America distance running coach, and a Precision Nutrition Level One Coach.",
                        "Laurie has competed with USA Powerlifting since 2018 at both the local and national level and is committed to putting a barbell in as many people's hands as possible to give them the opportunity to experience the power of strength sports.",
                        "Laurie is currently the Director of Development for the Cardinal Cushing Centers, a $40 million non-profit organization that supports individuals with intellectual disabilities. Prior to starting her career in development in 2010, Laurie helped to found and subsequently coordinate social and recreation programming for Teens and Young Adults with Down syndrome. Laurie, who currently resides in Boston, MA, graduated from Harvard College with a BA in Sociology."
                      ]}
                />
              </Container>
            <Footer />
          </Grid>

    );
}
