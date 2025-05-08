"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Pass  from "../components/Pass";
// import { Pass } from "../components/Pass";
import Button from "../components/Button";
import '../app/globals.css';
import '../app/mindbody.css';

export default function Passes() {

    // const [selected, setSelected] = useState<'DAY' | 'WEEK' | 'MONTH'>('WEEK');
    const pricingOptions = [
        {
          label: 'DAY',
          price: '$15',
          description:
            'Day Pass: In town for a day or just want to check us out? Drop in for one day of training with our day pass option, $15.',
        },
        {
          label: 'WEEK',
          price: '$35',
          description:
            "Week Pass: If you're going to be in the Boston area for more than just a day trip, we offer a week pass. Unlimited access for seven days for $35.",
        },
        {
          label: 'MONTH',
          price: '$50',
          description:
            'Monthly Facility Membership: Join our community and access our facility 7 days/week for $50/month.',
        },
      ];
      const customOption = [
        {
          label: 'Custom',
          price: '$15',
          description:
            'YAHTA YAHTA YAHTA MINECRAFT IS DOPPEEEE YAHTA YAHTA DOCUEMTNS Yeda once she give us that it will give us the neccesary direct to do the necxt thing. Th ephase that we',
        },
      
      ];
      
  return (
    <Grid>
      <Navigation />
      <Container>
        <h1 className="text-[32px] font-semibold col-span-full">Membership Pricing Options</h1><br /><br />
        <h3 className="font-semibold text-xl col-span-full lg:col-start-2 lg:col-span-10 sm:mt-10">
        <span className="text-[var(--urban-orange)] ">Thank you</span> for registering with Urban PowerHouse! We have a variety of membership options available
        </h3><br />


        <Pass variant='default' options={pricingOptions}/>
     
        <div className="col-start-3 col-span-2 mt-10 sm:col-start-4 lg:col-start-6 ">
            <Button label="Buy Pass"  iconSrc="/icons/card.svg" href="/" variant="default" className="text-right"/>
        </div>
        <Pass variant='custom' options={customOption}/>
        <div></div>


      </Container>
      <Footer />
    </Grid>
  );
}
