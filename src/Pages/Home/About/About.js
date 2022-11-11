import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/my-bg.png";
import useTitle from "../../../hooks/useTitle";

const About = () => {
  useTitle('About')
  return (
    <div id="about">
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on facebook"
            href="https://www.facebook.com/asifullahsikder"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            />
          </a>
        </div>
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asif_sikder23"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="md:w-1/2">
            <img src={image} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">Md. Asif <span className="text-orange-600">Ullah Sikder</span></h1>
            <p className="py-6">
              This is my site for travel enthusiasts. As the group slowly grows
              as they travel together, family bonds become stronger.
              <br /> <br />
              From this site, every week we travel to different parts of the country.
              There you too can be a part of our journey. Events are created
              from this site for each trip. </p>
              <div className="text-xl font-bold my-5">You can also connect with me.</div>

              <div className=" text-4xl">
              <a href="https://www.facebook.com/asifullahsikder">
              <i className="fa-brands fa-facebook mr-4"></i>
              </a>
              <a href="https://twitter.com/asifsikder23">
              <i className="fa-brands fa-twitter mr-4"></i>
              </a>
              <a href="https://www.instagram.com/asifullahsikder/">
              <i className="fa-brands fa-instagram mb-10"></i>
              </a>

              </div>
            
            <Link to={'/about'} className="btn btn-primary bg-orange-500 border-none">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
