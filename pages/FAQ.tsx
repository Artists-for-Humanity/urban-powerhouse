"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';
// import Leadership from "../components/Leadership";
import FAQDropdown from "../components/FAQBlock";


export default function FAQ() {

    const faqs = [
            { 
              question: 'What is your return policy?', 
              answer: 'We want you to be fully satisfied with your gear. If something’s not working out, you can return unused items within 30 days of purchase. Just make sure the original tags are intact and bring your receipt or order confirmation.' 
            },
            { 
              question: 'How do I track my order?', 
              answer: 'After your order ships, you’ll receive an email with a tracking link. You can also check your account dashboard under "My Orders" to see real-time updates.' 
            },
            { 
              question: 'Do you ship internationally?', 
              answer: 'Yes! We currently ship to over 40 countries. International shipping rates and delivery times vary by location and are calculated at checkout.' 
            },
            { 
              question: 'Can I return supplements or nutrition products?', 
              answer: 'For safety reasons, we can’t accept returns on opened supplement or nutrition items. If the product is sealed and unused, you may return it within 30 days.' 
            },
            { 
              question: 'How long does delivery take?', 
              answer: 'Standard shipping within the U.S. typically takes 3–7 business days. Express options are available at checkout if you need your gear faster.' 
            },
            { 
              question: 'Do you offer student or military discounts?', 
              answer: 'Yes! We’re proud to support students and military members with exclusive discounts. Just verify your status during checkout to unlock your special rate.' 
            },
            { 
              question: 'What should I do if my order is missing an item?', 
              answer: 'If you’re missing part of your order, contact our support team right away. We’ll either ship out the missing item or issue a refund, depending on availability.' 
            },
            { 
              question: 'Can I cancel or change my order after placing it?', 
              answer: 'We process orders quickly, but if you contact us within an hour of placing your order, we’ll do our best to update or cancel it before it ships.' 
            },
            { 
              question: 'Do you sell gift cards?', 
              answer: 'Absolutely! Digital gift cards are available in various amounts and can be sent instantly or scheduled for a special day. Great for fitness lovers!' 
            },
            { 
              question: 'Are your products eco-friendly?', 
              answer: 'We’re committed to sustainability. Many of our workout apparel lines use recycled fabrics and eco-conscious manufacturing processes. Look for the green leaf icon on eligible items.' 
            },
            { 
              question: 'Do you offer gym memberships?', 
              answer: 'Not directly—but we partner with local gyms and studios in select cities. Check our community page to see if there’s a partner facility near you offering exclusive member perks.' 
            },
            { 
              question: 'How do I join your rewards program?', 
              answer: 'Sign up is free and easy! Create an account, and you’ll start earning points right away on purchases, reviews, and more. Points can be redeemed for discounts and freebies.' 
            }
          
      ];

    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container className="">
              <FAQDropdown faqs={faqs} />
              </Container>
            <Footer />
          </Grid>

    );
}
