"use client";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

import Image from "next/image";
import Link from "next/link";
import Slider from "./Components/Slider";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useRef, useState } from "react";

import SmoothScroll from "@/app/Components/SmoothScroll";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

import PageLoader from "./Components/Preloader";
import { useCountUpOnView } from "./hooks/useCountUpOnView";

export default function Home() {
  /* ---------------- LOADER ---------------- */
  const [loaderDone, setLoaderDone] = useState(false);

  /* ---------------- COUNT REF ---------------- */

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const countRef = useRef<HTMLDivElement>(null);

  const projects = useCountUpOnView(countRef, 150, 1500, loaderDone);
  const experience = useCountUpOnView(countRef, 25, 1000, loaderDone);
  const funding = useCountUpOnView(countRef, 20, 1000, loaderDone);

  const ourservies = [
    {
      img: "/Services-1.jpeg",
      title: "PRINT ON PRODUCT",
      des: "CUSTOMIZED PRINT",
      href: "/services/Printing-Product",
    },
    {
      img: "/Services-2.jpeg",
      title: "DIRECT MAILING",
      des: "MARKETING",
      href: "/services/Direct-MaIilintg",
    },
    {
      img: "/Services-3.jpeg",
      title: "SIGNAGE PRINTING",
      des: "ViSIBLE YOUR BUSINESS",
      href: "/services/Signage",
    },
    {
      img: "/Services-4.jpeg",
      title: "WEBSITE DESIGN",
      des: "GROW ONLINE",
      href: "/services/Web-Design",
    },
    {
      img: "/Services-5.jpeg",
      title: "SEO SERVICES",
      des: "OPTIMIZE YOUR BUSINESS ONLINE",
      href: "/services/SEO",
    },
  ];

  return (
    <>
      {!loaderDone && <PageLoader onFinish={() => setLoaderDone(true)} />}
      <Navbar />
      <SmoothScroll>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container">
            <div className="mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* LEFT CONTENT – FIXED */}
                <div
                  data-aos="fade-right"
                  className="flex flex-col justify-center text-center lg:text-left space-y-5"
                >
                  {/* Badge */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="inline-flex items-center gap-3 bg-pink-50 text-pink-500 px-5 py-2 rounded-full shadow-lg">
                      <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">
                        Printing & Branding Experts
                      </span>
                    </div>
                  </div>

                  {/* Heading */}
                  <h1
                    className="font-semibold text-gray-950 leading-tight tracking-tight
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  >
                    Price Guarantee <br />
                    <span className="text-pink-700">
                      For All Of Our Services
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                    From business cards to large-format branding, we deliver
                    high-quality printing solutions that elevate your brand
                    identity and leave a lasting impression.
                  </p>

                  {/* CTA BUTTON */}
                  <div className="flex justify-center lg:justify-start pt-4">
                    <Link href="/contact">
                      <button className="group inline-flex items-center gap-3 bg-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300">
                        Contact Us
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right Content - Image Grid */}
                <div className="relative">
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
                  <div className="absolute bottom-20 -left-10 w-60 h-60 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
                  <div className="absolute top-32 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>

                  {/* Image grid */}
                  <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {/* Column 1 */}
                    <div className="col-span-1 space-y-4 sm:space-y-6 sm:mt-16">
                      <div className="rounded-2xl aspect-square overflow-hidden relative float-1">
                        <Image
                          src="/Section-1-About-2.jpg"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Hide on mobile */}
                      <div className="rounded-2xl aspect-square overflow-hidden relative float-2 ">
                        <Image
                          src="/Services-3.jpeg"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Column 2 (Center) */}
                    <div className="col-span-1 space-y-4 sm:space-y-6">
                      <div className="rounded-2xl aspect-square sm:aspect-[3/4] overflow-hidden relative float-2">
                        <Image
                          src="/Home-Hero.jpg"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="rounded-2xl aspect-square overflow-hidden relative float-1">
                        <Image
                          src="/Web Design-hero.png"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Column 3 – hidden on mobile */}
                    <div className="col-span-1 space-y-6 sm:mt-16 hidden sm:block">
                      <div className="rounded-2xl aspect-square overflow-hidden relative float-1">
                        <Image
                          src="/Services-1.jpeg"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="rounded-2xl aspect-square overflow-hidden relative float-2">
                        <Image
                          src="/Services-2.jpeg"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section-2 */}
        <section className="container section-padding mx-auto">
          <div className="px-4">
            <h1
              data-aos="fade-up"
              className="uppercase p-5 text-5xl text-center text-pink-700 font-bold"
            >
              Look{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                At Our
              </span>{" "}
              Service
            </h1>
          </div>

          <div className="pt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7">
              {ourservies.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-3 rounded-2xl relative w-full shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[200px] sm:h-[300px] md:h-[320px] object-cover rounded-xl"
                  />

                  {/* CONTENT */}
                  <div className="mt-5 pb-3">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-md text-gray-600">
                      {item.des}
                    </p>
                  </div>

                  {/* ARROW BUTTON */}
                  <Link href={item.href}>
                    <div
                      className="absolute bg-white rounded-full flex justify-center items-center
          origin-bottom-right -rotate-45
          w-14 h-14 bottom-4 -right-3
          md:w-12 md:h-12 cursor-pointer"
                    >
                      <div
                        className="bg-pink-700 text-white rounded-full text-xl flex justify-center items-center
            shadow-md hover:scale-110 transition-transform
            w-11 h-11 md:w-9 md:h-9"
                      >
                        →
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section-3 */}
        <section className="container section-padding overflow-x-hidden">
          <div className="relative group overflow-hidden shadow-lg rounded-2xl">
            <Image
              src="/AdobeStock.png"
              alt="Printing Service"
              width={800}
              height={500}
              className="w-full h-96 md:h-[500px] object-cover"
            />

            <video
              src="/fbs.mp4"
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          </div>
        </section>

        {/* Section - 4 */}
        <section
          ref={countRef}
          className=" containersection-padding overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
            {/* LEFT CONTENT */}
            <div data-aos="fade-right" className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-pink-700 leading-tight">
                Our Work
              </h1>

              <div className="pt-5 flex justify-center lg:justify-start">
                <div className="w-16 h-[3px] bg-pink-700 rounded-full"></div>
              </div>

              <div className="space-y-5 mt-6">
                <p className="text-gray-600 text-base sm:text-xl font-semibold">
                  Over the years, we&apos;ve turned countless ideas into
                  high-quality prints that leave a lasting impression. From
                  small personal projects to large corporate campaigns, our team
                  blends creativity with precision to deliver outstanding
                  results every time.
                </p>

                <p className="text-gray-600 text-base sm:text-xl font-semibold max-w-4xl mx-auto lg:mx-0">
                  With decades of experience and a passion for excellence,
                  we&apos;ve completed over 150 projects for clients across
                  industries. Every design, every print, and every detail
                  reflects our commitment to quality, innovation, and customer
                  satisfaction.
                </p>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div
              data-aos="fade-left"
              className="relative flex justify-center mt-10 lg:mt-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* LEFT CARD */}
                <div className="flex justify-center items-center">
                  <div className="bg-white w-52 h-52 sm:w-60 sm:h-60 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                    <FaRocket className="text-pink-700 text-4xl mb-4" />
                    <h2 className="text-4xl font-bold text-gray-900">
                      {projects}+
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm sm:text-base">
                      Projects Done
                    </p>
                  </div>
                </div>

                {/* RIGHT STACK */}
                <div className="flex flex-col gap-6 items-center lg:items-start">
                  {/* TOP CARD */}
                  <div className="bg-white w-52 h-52 sm:w-60 sm:h-60 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                    <FaRegCalendarAlt className="text-pink-700 text-4xl mb-4" />
                    <h2 className="text-4xl font-bold text-gray-900">
                      {experience}
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm sm:text-base">
                      Years of experience
                    </p>
                  </div>

                  {/* BOTTOM CARD */}
                  <div className="bg-white w-52 h-52 sm:w-60 sm:h-60 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                    <FaWallet className="text-pink-700 text-4xl mb-4" />
                    <h2 className="text-4xl font-bold text-gray-900">
                      {funding}M
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm sm:text-base">
                      Total Funding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 5 */}
        <section className="container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* TEXT CONTENT */}
            <div data-aos="fade-right" className="text-center md:text-left">
              <h1 className="uppercase text-lg sm:text-xl md:text-3xl font-semibold">
                Customized Printing to
              </h1>

              <h2
                className="
          uppercase font-bold text-pink-700 text-3xl
          sm:text-4xl md:text-6xl lg:text-7xl
          pt-3 leading-tight
        "
              >
                achieve{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Your
                </span>{" "}
                Business goals
              </h2>

              <p className="text-sm sm:text-base md:text-lg pt-4 text-gray-700">
                We create tailored printing solutions designed to make your
                brand stand out and your message clear. From eye-catching
                designs to premium materials, every print is crafted to support
                your marketing goals, engage your audience, and drive real
                results for your business.
              </p>

              <div className="pt-6 flex justify-center md:justify-start">
                <div className="w-16 h-[3px] bg-pink-700 rounded-full"></div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative" data-aos="fade-left">
              <Image
                src="/Printing Gols.png"
                alt="Printing Service"
                width={800}
                height={500}
                className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl shadow-pink-20"
              />
            </div>
          </div>
        </section>

        {/* Section - 6 */}
        <section className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 rounded-3xl shadow-xl overflow-hidden">
            {/* LEFT CONTACT INFO */}
            <div className="relative text-white flex flex-col justify-center gap-14 p-10">
              <Image
                src="/home-contact.jpeg"
                alt="background"
                fill
                className="object-cover -z-10 opocity-50 blur-sm"
              />
              <div className="absolute inset-0 bg-black/5"></div>

              <div className="flex flex-col items-center text-center gap-3">
                <FaMapMarkerAlt className="text-pink-600 text-3xl" />
                <p className="text-xl font-medium">Illinois, USA</p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <FaPhoneAlt className="text-pink-600 text-3xl" />
                <p className="text-lg font-medium">+1-855-222-1133</p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <FaEnvelope className="text-pink-600 text-3xl" />
                <p className="text-lg font-medium">info@fbsprints.com</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-2 bg-white p-5">
              {/* Heading */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-pink-700">
                  Contact Us If You Need A Custom
                  <span className="block text-pink-600">
                    Design{" "}
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Without
                    </span>{" "}
                    Delay!
                  </span>
                </h2>
                <p className="mt-4 text-gray-600">
                  To make an appointment, please call us. We’d love to pamper
                  you!
                </p>
              </div>

              {/* Form */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="mt-2 w-full rounded-xl border px-4 py-3 border-gray-300 outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="mt-2 w-full rounded-xl border px-4 py-3 border-gray-300 outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email Id
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    className="mt-2 w-full rounded-xl border px-4 py-3 border-gray-300 outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="mt-2 w-full rounded-xl border px-4 py-3 border-gray-300 outline-none focus:ring-0"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Comments / Questions
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Enter your message here..."
                    className="mt-2 w-full rounded-xl border px-4 py-3 border-gray-300 outline-none focus:ring-0"
                  ></textarea>
                </div>

                <div className="md:col-span-2 text-sm text-gray-500">
                  By filling this form, you agree to our
                  <span className="text-pink-600 font-medium">
                    {" "}
                    Terms & Conditions{" "}
                  </span>
                  and
                  <span className="text-pink-600 font-medium">
                    {" "}
                    Privacy Policy
                  </span>
                </div>

                <div className="md:col-span-2 flex justify-center lg:justify-end">
                  <button
                    type="submit"
                    className="rounded-full px-8 py-3 text-white font-semibold bg-pink-700 hover:scale-105 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Section - 7 */}
        <section
          data-aos="fade-up"
          className="container section-padding pt-10 px-4"
        >
          <div className=" rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Chicago,USA&output=embed"
              className="w-full h-[300px] md:h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <Slider />
        <Footer />
      </SmoothScroll>
    </>
  );
}
