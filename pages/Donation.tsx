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
              <div className="max-h-25 lg:col-start-3 lg:mt-5 lg:col-span-8 pl-4 lg:max-h-20 lg:mb-30 sm:max-h-20 col-span-7 col-start-1 border-l-[13px] border-orange-500 mt-12 sm:mb-30 ml-10 mb-65  sm:mt-0 sm:mb-0 sm:ml-0 sm:col-start-2 sm:col-span-6 sm:mb-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>
              <div className="max-h-25  lg:col-start-3 lg:mt-5 lg:col-span-8 pl-4 lg:max-h-20 lg:mb-30 sm:max-h-20 col-span-7 col-start-1 border-l-[13px] border-orange-500 mt-12 sm:mb-35 mb-80 ml-10  sm:mt-0 sm:mb-0 sm:ml-0 sm:col-start-2 sm:col-span-6 sm:mb-10">Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim.</div>              
             
             
                          <div className="col-start-2 col-span-4  sm:col-start-3 sm:col-span-4 lg:col-start-2 lg:col-span-10 ">
                            
                            <div className="sm:flex sm:flex-col sm:justify-center sm:items-center  lg:flex lg:flex-row lg:justify-evenly">

                              <div className="lg:w-1/4 flex flex-col items-center">
                                <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600">$30</div>
                                <div className="max-h-26 text-center mt-5 mb-10">Become a Friend of UPH </div>
                              </div>
                              <div className="lg:w-1/4 flex flex-col items-center">
                              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600">$65</div>
                              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Supports a 12 month federation membership for one athlete</div>
                              </div>
                              <div className="lg:w-1/4 flex flex-col items-center">
                              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600"> $100 </div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Covers one competition entry fee for one athlete </div>
                              </div>
                              <div className="lg:w-1/4 flex flex-col items-center">
                              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600">$250</div>
                              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Covers approved competition gear for one athlete</div>
                              </div>

                            </div>

             

                            <div className="sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row lg:flex lg:justify-evenly">

             
                            <div className="lg:w-1/4 flex flex-col items-center ">
              <div className="text-center flex flex-col sm:pb-6 items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600">$600</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Purchases a new barbell for athletes to use during training</div>
              </div>
              </div>
              

              <div className="lg:w-1/4 flex flex-col items-center">
                <div className="text-center flex flex-col sm:pb-6 items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600">$1000</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Helps cover travel cost associated with larger scale competitions </div>
                </div>
              </div>


              <div className="lg:w-1/4 flex flex-col items-center">
                <div className="text-center flex flex-col sm:pb-6 items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600">$2500</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Helps us open the doors to our first brick and mortar facility </div>
                </div>
              </div>


              <div className="lg:w-1/4 flex flex-col items-center">
                <div className="text-center flex flex-col sm:pb-6  items-center">
              <div className="w-32 h-32 bg-gray-600 text-[30px] rounded-full flex items-center justify-center bg-gray-600">$__</div>
              <div className="max-h-26 text-center col-span-4 col-start-2  mt-5 mb-10">Make a gift. Every donation, no matter the size, will help us make Boston strong  together</div>
                </div>

              </div>
                            </div>
              

                </div>
              </Container>
            <Footer />
          </Grid>

    );
}
