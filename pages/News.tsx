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

   <Container className=" px-2 py-10">
   <div className="pb-[35] text-leftcol-start-2 col-span-6 font-style: Poppinslff text-[32px] lg:text-[32px] pb-10;">News & Events</div>

      <div className="col-start-2 col-span-5 sm:col-start-2 sm:col-span-7 pl-2 lg:col-start-2 lg:col-span-10 mb-3 ml-0 text-2xl font-bold border-l-[6px] border-blue-700">2024 City of Boston SucessLink Program</div>

      <div className="col-start-2 col-span-5 sm:col-start-2 sm:col-span-7 lg:col-start-2 lg:col-span-10 ">
          <div className="mb-6">
          Urban Powerhouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.
          </div>
          <div className="mb-6">
          The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing  funding for employment opportunities to youth participants between the  ages of 14-18, and young adults between the ages of 19-24.
          </div>
          <div className="mb-2">
          We are looking forward to employing 11 youth workers and 1 young adult  worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.          </div>
  
      </div>

      <Button label="Read More"className="col-start-5 col-span-2  sm:col-start-7 sm:col-span-2 lg:col-start-10 lg:col-span-2 mb-5 pl-[8px]"></Button>

      <div className="col-start-2 col-span-5 sm:col-start-2 sm:col-span-7 pl-2 lg:col-start-2 lg:col-span-10 mb-3 ml-0 text-2xl font-bold border-l-[6px] border-blue-700">2024 Lorem ipsum dolor sit amet consectetur. Gravida.</div>

       <div className="col-start-2 col-span-5 sm:col-start-2 sm:col-span-7 lg:col-start-2 lg:col-span-10 ">
        <div className="mb-6">
        Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. Faucibus eget quis pharetra quis metus enim imperdiet scelerisque sagittis..          </div>
       <div className="mb-6">
       In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id.          </div>
  
      </div>

      <Button label="Read More"className="col-start-5 col-span-2  sm:col-start-7 sm:col-span-2 lg:col-start-10 lg:col-span-2 mb-5 pl-[8px]"></Button>

        <div className="col-start-2 col-span-5 sm:col-start-2 sm:col-span-7 pl-2 lg:col-start-2 lg:col-span-10 mb-3 ml-0 text-2xl font-bold border-l-[6px] border-blue-700">2023 Lmet consectetur. Gravida.</div>

      <div className="col-start-2 col-span-5 sm:col-start-2 sm:col-span-7 lg:col-start-2 lg:col-span-10 ">
      <div className="mb-6">
      Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi..           </div>
      <div className="mb-6">
      In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra..           </div>
  
      </div>

      <Button label="Read More"className="col-start-5 col-span-2  sm:col-start-7 sm:col-span-2 lg:col-start-10 lg:col-span-2 mb-5 pl-[8px]"></Button>


      <Button label="Show More"className="col-start-3 col-span-2 lg:col-start-6 lg:col-span-2 sm:col-start-4 sm:col-span-2 mb-6 pl-[8px]"></Button>




     
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
