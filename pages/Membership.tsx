"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";



import '../app/globals.css';

function MembershipOptions(){
    return (
        <div className=" LOOKHERE bg-(--urban-grey)  w-64 h-64"></div>
    )
}

function Test(){
  return(
    <div className="testText">test TEST TEST</div>
  )
}



export default function Membership() {

    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container>
                <MembershipOptions/>
        

              </Container>
            <Footer />
          </Grid>

    );
}
