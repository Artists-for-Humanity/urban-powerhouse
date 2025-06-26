"use client";
import React, { useEffect, useState } from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';
import FAQDropdown from "../components/FAQBlock";
import { client } from "../lib/sanity";


interface FAQItem {
  question: string;
  answer: string;
  
}

export default function FAQ() {

    const [faqs, setFaqs] = useState<FAQItem[]>([]);
     const [title, setTitle] = useState<string>("FAQ");

   useEffect(() => {
    client
      .fetch(
        `*[_type == "faq"][0]{title, questions[]{question, answer}}`
      )
      .then((data) => {
        setFaqs(data?.questions || []);
        setTitle(data?.title || "FAQ");
      });
  }, []);
 

    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container className="min-h-[60vh]">
              <FAQDropdown title={title} faqs={faqs} />
              </Container>
            <Footer />
          </Grid>

    );
}
