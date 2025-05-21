"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';
import Button from "../components/Button";

export default function News() {
    return (
        <Grid className="grid grid-rows-auto gap-y-8">
            <Navigation />
            <Container className="min-h-[60vh] grid gap-y-8">
                <div className="col-start-3 col-span-3 text-[28px] ">News & Events</div> 
                <div className="col-start-2 col-span-4 grid">
                    <div className="text-[28px] font-bold text-left border-l-[10px] border-blue-800">
                    2024 City of Boston SucessLink Program
                    </div>
                    <p>
                        Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.
                    </p>
                    <br />
                    <p>
                        The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.
                    </p>
                    <br />
                    <p>
                        We are looking forward to employing 11 youth workers and 1 young adult worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.
                    </p>
                </div>
                <div className=" col-start-2 col-span-4 gap-y-8">
                    <img  className='' src="/Group-55.png" alt="Quote Icon" />
                    <div className="text-[24px] font-bold ">Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.</div>
                </div>
                <div className="text-[16px] col-start-2 col-span-4">Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. Faucibus eget quis pharetra quis metus enim imperdiet scelerisque sagittis..</div>
                <div className=" col-start-2 col-span-4"><img src="/gymshots/Championship2025.jpg" alt="" /></div>
                <div className=" col-start-2 col-span-4">Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. Faucibus eget quis pharetra quis metus enim imperdiet scelerisque sagittis..</div>
                <div className=" col-start-2 col-span-4">In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id.</div>
                <div className=" col-start-2 col-span-4 text-center" ><img src="/Youth Fest 2024.png" alt="" />look at this fun image</div>
                <div className=" col-start-2 col-span-4"> Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. </div>
                <div className=" col-start-2 col-span-4">In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. </div>
                <Button label="Go Back"className="mt-4 col-start-3 col-span-2 ">Click Me</Button>            
            </Container>
            <Footer />
        </Grid>
    );
}
