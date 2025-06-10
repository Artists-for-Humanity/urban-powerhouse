"use client";
import React, { useEffect, useState } from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';
// import Leadership from "../components/Leadership";
import FAQDropdown from "../components/FAQBlock";
import { client } from "../lib/sanity";


interface FAQItem {
  question: string;
  answer: string;
  
}

export default function FAQ() {

    const [faqs, setFaqs] = useState<FAQItem[]>([]);
     const [title, setTitle] = useState<string>("FAQ");

   useEffect(() => {
    client
      .fetch(
        `*[_type == "faq"][0]{title, questions[]{question, answer}}`
      )
      .then((data) => {
        setFaqs(data?.questions || []);
        setTitle(data?.title || "FAQ");
      });
  }, []);
    // const faqs = [
    //         { 
    //           question: 'About Urban PowerHouse',
    //           answer: `Urban PowerHouse aims to empower those in Boston’s urban centers through strength & power sports. Our mission is to get a barbell into the hands of individuals of color living in and around Boston, reduce risk factors for chronic metabolic diseases through data-driven movement, and create an inclusive community representative of those we seek to serve.

    //           Urban PowerHouse is a 501c3 nonprofit organization. We choose this structure so that we can ensure that our programs and services remain accessible and attainable for individuals living in and around Boston’s urban neighborhoods.`},
    //         { 
    //           question: 'Individualized Coaching', 
    //           answer: 'If you are interested in our individualized coaching for powerlifting, weightlifting, other health, wellness or sport goals, or nutrition coaching, please contact us to set up an initial meeting and you can determine if UPH is a good fit for you. ' 
    //         },
    //         { 
    //           question: 'Facility & Access', 
    //           answer: `We purposely do not list our address to protect our community space. Please contact us for directions and parking information.

    //           Gym hours are Monday through Friday, 5am to 11pm, Saturday 8am to 8pm, and Sunday 8am to 6pm. During unstaffed hours members gain access to the facility via an app.

    //           We sell day passes for $15 and week passes for $35. Contact us at least 24 hours in advance via Instagram or email, teamurbanpowerhouse@gmail.com. Passes can then be purchased on our website.

    //           If you are coming in with a UPH member, we still need to know at least 24 hours in advance.

    //           If you are interested in learning more about our student membership, please reach out. We meet parents or guardians for those under the age of 18 in person or via video call.`
    //         },
    //         { 
    //           question: 'Equipment', 
    //           answer: `Our facility has high quality equipment for Powerlifting, Weightlifting, and General Strength Training including: 
            
    //                   - 3 Deadlift Platforms
    //                   - 1 Eleiko IPF Competition Platform
    //                   - 1 Eleiko Weightlifting Platform
    //                   - 3 Combo Racks
    //                   - 3 Power Racks
    //                   - Calibrated Kilo Plates
    //                   - Kilo Bumper Plates
    //                   - Metal Pound Plates
    //                   - Urethane Pound Plates
    //                   - 10 Power Bars (20 kg)
    //                   - 2 Olympic Weightlifting Bars (20 kg)
    //                   - 1 Women’s Weightlifting Bar (15 kg)
    //                   - Specialty Bars (Closed and Open Trap Bars, Squat Bar, Deadlift Bars, Safety Squat Bars, Multi Grip Bars)
    //                   - 1 Chest Press Machine
    //                   - 1 Hamstring Curl/Leg Extension Machine
    //                   - 1 Lat Pulldown/Row Machine
    //                   - 1 Belt Squat Machine
    //                   - 1 Plate Loaded Pulley Tower
    //                   - 1 Reverse Hyper GHD Combo
    //                   - 1 Back Hyper Extension
    //                   - 1 ISO Leg Press/Hack Squat
    //                   - 4 Adjustable Benches 
    //                   - 1 Flat Bench
    //                   - Dumbbells (5–100 lbs, increments of 5 lbs)
    //                   - 2 Loadable Dumbbell Handles
    //                   - 4 Kettlebells
    //                   - 1 Stationary Bike 
    //                   - 1 Ski/Row Machine` 
    //         }
            
          
    //   ];

    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container className="min-h-[60vh]">
              <FAQDropdown title={title} faqs={faqs} />
              </Container>
            <Footer />
          </Grid>

    );
}
