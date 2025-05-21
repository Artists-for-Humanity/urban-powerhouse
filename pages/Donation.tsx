"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";



import '../app/globals.css';


export default function Donation() {

    return (
          <Grid className="gap-y-4 ">
            <Navigation/>
              <Container>
          
              <div className="col-span-6 text-center sm:col-start-4 text-3xl">Why Give to UPH?</div>
             <div className="col-span-7 col-start-1 border-l-[13px] border-red-500 pt-12 pb-12 pl-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>
            <div className="col-span-7 col-start-1 border-l-[13px] border-red-500 pt-12 pb-12 pl-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>              
            <div></div>
              
              </Container>
            <Footer />
          </Grid>

    );
}
