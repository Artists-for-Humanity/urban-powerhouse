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
             <div className="max-h-26 col-span-7 col-start-1 border-l-[13px] border-red-500 mt-12 mb-65 ml-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>
            <div className="max-h-26 col-span-7 col-start-1 border-l-[13px] border-red-500 mt-12 mb-65 ml-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>              
            <div className="p-11 rounded-full bg-gray-600 col-start-3 text-center col-span-2 text-[20px]">$30</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Become a Friend of UPH </div>
            <div className="p-11 rounded-full bg-gray-600 col-start-3 col-span-2 text-center text-[20px]">$65</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Supports a 12 month federation membership for one athlete</div>
            <div className="p-11 rounded-full bg-gray-600 col-start-3 col-span-2 text-[20px]">$100</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Covers one competition entry fee for one athlete </div>
            <div className="p-11 rounded-full bg-gray-600 col-start-3 col-span-2 text-[20px]">$250</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Covers approved competition gear for one athlete</div>
            <div className="p-11 rounded-full bg-gray-600 col-start-3 col-span-2 text-[20px]">$600</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Purchases a new barbell for athletes to use during training</div>
            <div className="p-11 rounded-full bg-gray-600 col-start-3 col-span-2 text-[20px]">$1000</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Helps cover travel cost associated with larger scale competitions </div>
            <div className="p-11 rounded-full bg-gray-600 col-start-2 mx-14 col-span-4 text-[20px]">$2500</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Helps us open the doors to our first brick and mortar facility </div>
            <div className="p-11 rounded-full bg-gray-600 col-start-3 col-span-2 text-[20px]">$__</div>
            <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Make a gift. Every donation, no matter the size, will help us make Boston strong  together</div>
              
              </Container>
            <Footer />
          </Grid>

    );
}
