"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import "../../app/globals.css";
import { dot } from "node:test/reporters";
import { BiLeftArrow } from "react-icons/bi";

export default function Founders() {
	return (
		<Grid>
			<Navigation />
			{/* <Container> */}
			<div className=" col-start-1 col-span-4 font-black sm:text-2xl ">
				<h1>Meet Our Founders</h1>
			</div>
			<div className="mt-10 mb-10 flex flex-col items-center col-start-2 col-span-4 sm:col-start-3  lg:col-start-5 sm:scale-125 lg:mt-30">
				<img
					src="/headshots/founder1.png"
					style={{
						width: "250px",
						height: "250px",
						borderRadius: "50%",
						objectFit: "cover",
						border: "4px solid #444",
						marginBottom: "5px",
					}}
				/>
			</div>
			<div className="ml-5 mr-5 text-sm text-sm col-start-1 item-center col-span-6 mt-10 sm:col-start-2 sm:text-base lg:col-start-4 lg:text-xl">
				<h4>Joseph Stephen, Executive Director/Co-Founder</h4>
			</div>
			<div className="ml-4 col-start-1 col-span-6 text-xs font-light font-thin mt-8 items-center sm:col-start-2 lg:col-start-2 lg:text-base lg:col-span-10">
				<h6>
					Joseph Stephen is an ACSM Certified CPT, Crossfit Level 1, USAW Level
					1 Sports Performance Coach and USAPL Club Coach.
				</h6>
			</div>
			<div className="ml-4 col-start-1 col-span-6 text-xs font-light font-thin items-center sm:col-start-2 lg:col-start-2 lg:text-base lg:col-span-10">
				<h6>
					Joseph graduated from Berklee College of Music with a B.A. in Music
					Education and Performance. He has spent the past decade traveling
					between the worlds of music, education, and health and wellness. ​
				</h6>
			</div>
			<div className="ml-4 col-start-1 col-span-6 text-xs font-light font-thin mt-8 items-center sm:col-start-2 lg:col-start-2 lg:text-base lg:col-span-10">
				<h6>
					In 2012 he decided to stop the balancing act and devote his time to
					helping others achieve their health and wellness goals full time as a
					trainer at Fitness Together Newtonville and then a manager at Fitness
					Together Dedham, followed by a Business Manager position at a
					prominent CrossFit box. Most recently he held the position of Director
					of Membership at the Thomas Menino YMCA, located in Hyde Park, MA. He
					is currently the Senior Director of Membership & Fitness for the
					Hockomock YMCA. 
				</h6>
			</div>
			<div className="ml-4 col-start-1 col-span-6 text-xs font-light font-thin mt-8 items-center sm:col-start-2 lg:col-start-2 lg:text-base lg:col-span-10">
				<h6>
					Joseph has coached several athletes to the national level within their
					first year of competition. He's looking forward to providing more
					opportunities for individuals within the Boston community to
					experience what it's like to be a strength athlete.
				</h6>
			</div>
			<div className="mt-10 mb-10 flex flex-col items-center col-start-2 col-span-4 sm:col-start-3  lg:col-start-5 sm:scale-125 lg:mt-30">
				<img
					src="/headshots/founder2.png"
					style={{
						width: "250px",
						height: "250px",
						borderRadius: "50%",
						objectFit: "cover",
						border: "4px solid #444",
						marginBottom: "5px",
					}}
				/>
			</div>
			<div className="ml-5 mr-5 text-sm text-sm col-start-1 item-center col-span-6 mt-10 sm:col-start-2 lg:col-start-4 lg:text-xl">
				<h4>Laurie Maranian, VP of Development/Co-Founder</h4>
			</div>
			<div className="ml-4 col-start-1 col-span-6 text-xs font-light font-thin mt-8 items-center sm:col-start-2 lg:col-start-2 lg:text-base lg:col-span-10">
				<h6>
					Laurie Maranian is a USAPL Club Coach and a Road Runners Club of
					America distance running coach.
				</h6>
			</div>
			<div className="ml-4 col-start-1 col-span-6 text-xs font-light font-thin items-center sm:col-start-2 lg:col-start-2 lg:text-base lg:col-span-10">
				<h6>
					Laurie has competed with USA Powerlifting for two years now at both
					the local and national level and is committed to putting a barbell in
					as many people's hands as possible to give them the opportunity to
					experience the power of strength sports.  
				</h6>
			</div>
			<div className="ml-4 col-start-1 col-span-6 text-xs font-light font-thin mt-2 items-center mb-20 sm:col-start-2 lg:col-start-2 lg:text-base lg:col-span-10">
				<h6>
					Laurie is currently the Director of Development for the Cardinal
					Cushing Centers, a $35 million non-profit organization that supports
					individuals with intellectual disabilities. Prior to starting her
					career in development in 2010, Laurie helped to found and subsequently
					coordinate social and recreation programming for Teens and Young
					Adults with Down syndrome. Laurie, who currently resides in Boston,
					MA, graduated from Harvard College with a BA in Sociology.
				</h6>
			</div>
			<Footer />
		</Grid>
	);
}
