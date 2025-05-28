"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import '../app/globals.css';

export default function News() {
  return (
    <Grid>
   <Navigation />

   <Container className=" bg-black px-2 py-10">
   <div className="pb-[35] text-leftcol-start-2 col-span-6 font-style: Poppinsl text-[32px] pb-10;">News & Events</div>

    <div className="col-start-2 col-span-8 text-white p-8 mb-10 text-sm font-bold mb-4 text-[20px] lg:mb-0
 pl-[0px] lg:pl-0 lg:text-[32px] lg:col-start-2 lg:col-span-10"> 2024 City of Boston SuccessLink Program
      </div>
      <p className="col-start-2 col-span-8 text-sm mb-3"> 
      Urban Powerhouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.
      </p>
      <p className="col-start-2 col-span-8 text-sm mb-3" > 
        The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing  funding for employment opportunities to youth participants between the  ages of 14-18, and young adults between the ages of 19-24.
      </p>
      <p className="col-start-2 col-span-8 text-sm mb-3"> 
        We are looking forward to employing 11 youth workers and 1 young adult  worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.
      </p>


      
      
     <div className="col-start-2 col-span-8 text-white p-8 mb-10 text-sm font-bold mb-4 text-[20px] lg:mb-0
 pl-[0px] lg:pl-0 lg:text-[32px] lg:col-start-2 lg:col-span-10">   
     2024 Lorem ipsum dolor sit amet consectetur. Gravida.
      </div>
      <p className="col-start-2 col-span-9 text-sm mb-6 text-[16px]"> 
        Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. Faucibus eget quis pharetra quis metus enim imperdiet scelerisque sagittis..
      </p>
      <p className="col-start-2 col-span-9 text-sm mb-2 text-[16px]" > 
      In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id.
      </p>


      <div className="col-start-2 col-span-8 text-white p-8 mb-10 text-sm font-bold mb-4 text-[20px] lg:mb-0
 pl-[0px] lg:pl-0 lg:text-[32px] lg:col-start-2 lg:col-span-10">
        2023 Lmet consectetur. Gravida.   
      </div>
      <p className="col-start-2 col-span-10 text-sm mb-3 text-[16px]">
        Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi..  
      </p>
      <p className="col-start-2 col-span-9 text-sm mb-3 text-[16px]" >
        In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra..  
      </p>
      <Button label="Show More"className="lg:col-start-6 col-span-2 mb-6 pl-[8px]"></Button>




     
     {/* <p className="text-sm mb-3">
     <a
    href="https://www.boston.gov/departments/youth-employment-and-opportunity"
     >
     </a>{" "}
     </p> */}

      {/* <p className="text-sm">
       </p> */}

      </Container>
       <Footer />
    </Grid>
  );
}
