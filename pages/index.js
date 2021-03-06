// import Carousel from "@/components/Carousel";
import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Service from "@/components/Service";
import FeatureTitle from "@/components/FeatureTitle";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Post from "@/components/Post";
import Stats from "@/components/Stats";
import Swiper from "@/components/Swiper";

const Home = ({ service, post }) => {
  const [serviceData, setServiceData] = useState(null);
  const [postData, setPost] = useState(null);
  console.log(serviceData);
  console.log(postData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'service' && featured == true][0..2]{
        title,
        slug,
        tagline,
        id,
        mainImage {
          asset-> {
              _id,
              url,
          },
          alt,
      },
      


        description,
        tags,

    }`
      )
      .then((data) => setServiceData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post'][0..1]{
        title,
        slug,
        body,
        tag,
        author-> {
          title, 
        },
       
        mainImage {
            asset-> {
                _id,
                url
            },
            alt
        }
        

    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <div className="font-body ">
        <Hero />

        <FeatureTitle />
        <Swiper />
        {/* <Carousel /> */}
        <Team />
        <About />
        <div className=" p-4 container mx-auto font-body ">
          <div className="mt-4  container mx-auto ">
            <h1 className="flex  my-4 justify-center text-3xl  text-coolgray-800 font-bold  sm:text-4xl ">
              What we do...
            </h1>
            <hr className="" />
            <div className=" my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {serviceData &&
                serviceData.map((service, index) => (
                  <div>
                    <Service key={service.id} service={service} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Stats />

      <div className="container mx-auto">
        <div>
          <div className=" mt-10 ">
            <h1 className="flex font-body my-4 justify-center text-3xl font-bold text-coolgray-800 sm:text-4xl">
              Latest News
            </h1>
            <hr className="" />
          </div>

          <div className="mt-10 my-6 p-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
            {postData &&
              postData.map((post, index) => (
                <div>
                  <Post key={post.id} post={post} />
                </div>
              ))}
          </div>
        </div>
      </div>

      <Partners />
      <Info />
      {/* <NewsLetter /> */}
    </Layout>
  );
};

export default Home;
