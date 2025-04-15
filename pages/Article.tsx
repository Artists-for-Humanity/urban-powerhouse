"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import ArticleBlock from "../components/News/ArticleBlock";
import '../app/globals.css';



export default function News() {



    return (
          <Grid>
            <Navigation/>
              <Container className="">
              <h1 className="text-[32px] font-semibold col-span-full mb-[40px] ">News & Events</h1>
               <ArticleBlock 
               variant="title" 
               title="Article Title" 
               />
                <ArticleBlock 
                variant="paragraph" 
                paragraphs={["Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.",
                            "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.",
                            "We are looking forward to employing 11 youth workers and 1 young adult worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview."]} 
                />
                <ArticleBlock 
                variant="quote" 
                quote="Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate." 
                cite="FIRST LASTNAME, TITLE HERE
"
                />
                 <ArticleBlock 
                variant="center-image" 
                imageSrc="/gymshots/Championship2025.jpg" 
  
                />
                     <ArticleBlock 
                variant="paragraph" 
                paragraphs={["Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.",
                  "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.",]} 
                />
                <ArticleBlock 
                variant="paragraph" 
                paragraphs={["Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.",
                            "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.",
                            "In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id."]} />
                <ArticleBlock 
                variant="center-image" 
                imageSrc="/gymshots/DejenaeMachinePress.jpg"   
                />
                      <ArticleBlock 
                variant="paragraph" 
                paragraphs={["Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.",
                            "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.",
                            "In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id."]} />
                <ArticleBlock 
                variant="go-back" 
                href="/News"
                onBackClick={() => console.log('Go back clicked')} 
                />
              </Container>
            <Footer />
          </Grid>

    );
}
