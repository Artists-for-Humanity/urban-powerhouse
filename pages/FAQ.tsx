"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';


export default function FAQ() {


    return (                     
          <Grid className="gap-y-4 overflow-hidden break-all">
            <Navigation/>
              <Container className="min-h-[60vh] ">
                <h1 style={{fontSize: 30, gridColumn: "span 11"}} className="title">FAQ</h1>
                <div style={{gridRow: "2", gridColumn: "span 11"}} className="FAQ">Lorem Ipsum 1</div>
                <button style={{gridRow: "2", gridColumn: "foo-end"}} className="Click">\/</button>
                <div style={{gridRow: "3", gridColumn: "span 11"}} className="FAQ">Lorem Ipsum 2</div>
                <button style={{gridRow: "3", gridColumn: "foo-end"}} className="Click">\/</button>
                <div style={{gridRow: "4", gridColumn: "span 11"}} className="FAQ">Lorem Ipsum 3</div>
                <button style={{gridRow: "4", gridColumn: "foo-end"}} className="Click">\/</button>
                <div style={{gridRow: "5", gridColumn: "span 11"}} className="FAQ">Lorem Ipsum 4</div>
                <button style={{gridRow: "5", gridColumn: "foo-end"}} className="Click">\/</button>
                <div style={{gridRow: "6", gridColumn: "span 11"}} className="FAQ">Lorem Ipsum 5</div>
                <button style={{gridRow: "6", gridColumn: "foo-end"}} className="Click">\/</button>
                <div style={{gridRow: "7", gridColumn: "span 11"}} className="FAQ">Lorem Ipsum 6</div>
                <button style={{gridRow: "7", gridColumn: "foo-end"}} className="Click">\/</button>
                <div style={{gridRow: "8", gridColumn: "span 11"}} className="FAQ">Lorem Ipsum 7</div>
                <button style={{gridRow: "8", gridColumn: "foo-end"}} className="Click">\/</button>

                  
              </Container>
            <Footer />
          </Grid>

    );
}
