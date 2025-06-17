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
          
              <div className="col-span-6 text-center sm:col-start-4 lg:col-start-1 lg:col-span-4 text-3xl">Why Give to UPH?</div>
              <div className="max-h-26 lg:col-start-3 lg:mt-5 lg:col-span-8 sm:max-h-full col-span-7 col-start-1 border-l-[13px] border-red-500 mt-12 mb-65 ml-10 sm:mt-0 sm:mb-0 sm:ml-0 sm:col-start-2 sm:col-span-6 sm:mb-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>
              <div className="max-h-26 lg:col-start-3 lg:mt-5 lg:col-span-8 sm:max-h-full col-span-7 col-start-1 border-l-[13px] border-red-500 mt-12 mb-65 ml-10  sm:mt-0 sm:mb-0 sm:ml-0 sm:col-start-2 sm:col-span-6 sm:mb-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>              
              <div className="col-span-4 col-start-2 sm:col-span-2 sm:col-start-2 text-center flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center">$30</div>
                <div className="max-h-26 mt-5">Become a Friend of UPH</div>
              </div>

                
              <div className="col-span-4 col-start-2 lg:gap-y-4 gap-x-8 sm:col-span-2 sm:row-start-4 sm:col-start-4 text-center flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-sky-600">$65</div>
                <div className="max-h-26 mt-5">Supports a 12 month federation membership for one athlete</div>
              </div>

              <div className="col-span-4 col-start-2 sm:col-span-2 sm:row-start-4 sm:col-start-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-sky-600"> $100 </div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Covers one competition entry fee for one athlete </div>
              </div>
                 
              <div className="col-span-4 col-start-2 lg:col-start-8 lg:row-start-4 sm:col-span-2 sm:row-start-5 sm:col-start-2 text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-sky-600">$250</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Covers approved competition gear for one athlete</div>
              </div>

              <div className="col-span-4 col-start-2 lg:col-start-2 lg:row-start-5 sm:col-span-2 sm:row-start-5 sm:col-start-4 text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-sky-600">$600</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Purchases a new barbell for athletes to use during training</div>
              </div>

              

                <div className="col-span-4 col-start-2 lg:col-start-4 sm:col-span-2 sm:row-start-5 sm:col-start-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-sky-600">$1000</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Helps cover travel cost associated with larger scale competitions </div>
                </div>

                <div className="col-span-4 col-start-2 lg:row-start-5 lg:col-start-6 sm:col-span-2 sm:row-start-6 sm:col-start-5 text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-sky-600">$2500</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Helps us open the doors to our first brick and mortar facility </div>
                </div>


                <div className="col-span-4 col-start-2 lg:row-start-5 lg:col-start-8 sm:col-span-2 sm:row-start-6 sm:col-start-3 text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-sky-600">$__</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Make a gift. Every donation, no matter the size, will help us make Boston strong  together</div>
                </div>
              

              </Container>
            <Footer />
          </Grid>

    );
}
