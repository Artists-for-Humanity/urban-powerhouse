"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Questions from "../components/questiondropdown";
import '../app/globals.css';


export default function FAQ() {

 

    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container className="min-h-[60vh]">

<h1 className=" text-[30px] font-bold sm:col-start-2 sm:col-end-8 lg:col-start-1" >FAQ</h1>

<Questions question = "Lorem Ipsum 1" answer = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />



<Questions question = "Lorem Ipsum 2" answer = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />

<Questions question = "Lorem Ipsum 3" answer = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
<Questions question = "Lorem Ipsum 4" answer = "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio." />
<Questions question = "Lorem Ipsum 5" answer = "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris." />
<Questions question = "Lorem Ipsum 6" answer = "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula." />
<Questions question = "Lorem Ipsum 7" answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
<Questions question = "Lorem Ipsum 8" answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
<Questions question = "Lorem Ipsum 9" answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
<Questions question = "Lorem Ipsum 10" answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
<Questions question = "Lorem Ipsum 11" answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
<Questions question = "Lorem Ipsum 12" answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />




              </Container>
            <Footer />
          </Grid>

    );
}
