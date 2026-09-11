'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollProgressBar from "@/components/Scrollprogressbar";
import { publications } from "@/components/Data";
import Nav from "@/components/Nav";
import Image from 'next/image';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FaGraduationCap } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";


export default function Home() {
  const [activeTab, setActiveTab] = useState<'internship' | 'organizational'>('internship');
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFF9F2]">
      <ScrollProgressBar/>
      <div className="relative z-10 text-black pointer-events-none">
        <Nav/>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="9.5" x2="24" y2="9.5" stroke="#FFFFFF"/>
          <line y1="14.5" x2="15" y2="14.5" stroke="#FFFFFF"/>
        </svg>
        <main className="md:py-10 relative z-10 flex flex-col items-center justify-center min-h-screen bg-transparent">
          <section id="about" className="flex flex-col items-center justify-center w-full h-full py-10"> 
            <div className="grid place-items-center grid-cols-1 md:grid-cols-12 gap-8 w-full px-6 md:px-20">
              <div className="col-span-1 md:col-span-7 mt-20">
                <h1 className="text-4xl">Hello, I am </h1>
                <h2 className="text-shadow font-bold animate-pulse py-5 text-5xl md:text-7xl bg-gradient-to-r from-[#F29191] via-[#D45060] to-[#800020] text-transparent bg-clip-text">Anggieta Tri Cahyani</h2>
                <h3 className="mt-5 md:mt-5 text-l md:text-2xl font-light font-stretch-condensed">I am a fresh graduate in Marine Information Systems with hands-on experience in web development, data analysis, machine learning, and applied AI. I enjoy building practical digital solutions, exploring data to uncover insights, and developing intelligent systems to solve real-world problems. With a background that combines software development and data-driven projects, I am always eager to learn, adapt, and contribute to meaningful projects.</h3>
                <button className="rounded-full mt-10 bg-[#D45060] border-2 border-[#D45060] hover:bg-[#800020] pointer-events-auto">
                  <a href="/img/CV Anggieta Tri Cahyani.pdf" className="px-2 md:px-5 py-2 md:py-5 text-sm text-[#FFF9F2] md:text-2xl flex items-center gap-2"> Curriculum Vitae <FaAngleDown /></a>
                </button>
                <button className="ml-5 md:ml-10 rounded-full mt-10 border-2 hover:border-[#800020] pointer-events-auto">
                  <a href="#contactme" className="px-2 md:px-5 py-2 md:py-5 text-sm md:text-2xl flex items-center gap-2"> Get in touch </a>
                </button>
                <p className="mt-10 border-b-1"></p>

                <div className="mt-10 flex gap-8">
                  <a href="https://github.com/anggitaac" className="pointer-events-auto">
                    <svg className="size-8 md:size-13 fill-black hover:fill-[#800020] transition" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 25 2 C 12.354545 2 2 12.354545 2 25 C 2 37.645455 12.354545 48 25 48 C 37.645455 48 48 37.645455 48 25 C 48 12.354545 37.645455 2 25 2 z M 25 4 C 36.554545 4 46 13.445455 46 25 C 46 25.093716 45.993426 25.185862 45.992188 25.279297 C 45.355643 25.213574 44.619449 25.151947 43.683594 25.113281 C 42.349262 25.058153 40.667887 25.070474 38.767578 25.169922 C 38.842322 24.665304 38.893164 24.152982 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.101066 10.946801 24.590099 11.013672 25.072266 C 7.8894658 24.970983 5.518755 25.05331 4.0039062 25.191406 C 4.0033241 25.127325 4 25.064213 4 25 C 4 13.445455 13.445455 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8867188 26.019531 C 9.5909207 26.024035 10.397743 26.051943 11.203125 26.080078 C 11.281506 26.399647 11.374577 26.712873 11.484375 27.019531 C 8.1709433 27.091537 5.704398 27.434455 4.1835938 27.728516 C 4.1171404 27.221899 4.0664333 26.710385 4.0371094 26.193359 C 5.1545506 26.089867 6.7502168 26.005867 8.8867188 26.019531 z M 41.113281 26.076172 C 43.242845 26.051402 44.834805 26.164134 45.957031 26.283203 C 45.927668 26.764345 45.879919 27.240812 45.818359 27.712891 C 44.245568 27.413519 41.71721 27.071329 38.314453 27.015625 C 38.411856 26.742348 38.491935 26.461309 38.564453 26.177734 C 39.462674 26.126533 40.338362 26.085185 41.113281 26.076172 z M 37.892578 28.007812 C 41.465652 28.03978 44.085317 28.396925 45.666016 28.699219 C 44.325335 36.167288 39.008358 42.292747 32 44.789062 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.44296 30.280162 37.297012 29.208854 37.892578 28.007812 z M 11.908203 28.013672 C 12.505054 29.212023 13.359546 30.281496 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.789062 C 10.997174 42.294717 5.68379 36.176856 4.3378906 28.716797 C 5.863528 28.419405 8.4148311 28.06385 11.908203 28.013672 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.390625 C 28.396051 45.785878 26.721908 46 25 46 C 23.278092 46 21.603949 45.785878 20 45.390625 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/anggiieta_/" className="pointer-events-auto">
                    <svg className="size-8 md:size-13 fill-black hover:fill-[#800020] transition" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/anggietatricahyani" className="pointer-events-auto">
                    <svg className="size-8 md:size-14 fill-black hover:fill-[#800020] transition" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path></svg>
                  </a>
                </div>
              </div>
              <div className="col-span-1 md:col-span-5 -mt-10 md:ml-15 justify-end">
                <Image className="w-full" width={600} height={600} src="/img/anggita.png" alt="Anggieta Tri Cahyani"/>
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                >
                  <div className="w-full max-w-2xl mx-auto border-2 border-[#800020] bg-[#FFF9F2] rounded-3xl p-5 md:p-6 shadow-md">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="p-1 md:p-3 rounded-2xl bg-[#D45060] text-amber-50 shrink-0 self-center sm:self-auto">
                        <FaGraduationCap className="w-5 h-5 md:h-10 md:w-10 " />
                      </div>
                      <div className="flex-1 w-full">
                        <h3 className="text-sm md:text-xl font-bold text-gray-900 leading-snug">
                          Bachelor of Science, Marine Information System
                        </h3>
                        <p className="text-sm md:text-md font-semibold text-gray-700 mt-1">
                          Universitas Pendidikan Indonesia
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-2">
                          <span className="flex items-center gap-1.5">
                            <FaRegCalendarAlt /> 2022–2026
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaRegStar className="text-amber-500" /> GPA 3.90/4.00
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          

          <section id="experience" className="py-20 bg-[#F3E6D5]">
            <div className="px-10 md:px-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="mb-10 text-left">
                  <h2 className="text-4xl mb-2 md:text-6xl mr-4 font-bold text-[#800020]">
                    Experience
                  </h2>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setActiveTab('internship')} 
                      className={`rounded-full mt-5 px-4 py-2 border-1 pointer-events-auto transition ${activeTab === 'internship' ? 'bg-[#800020] text-white border-[#800020]' : 'border-[#D45060] hover:border-[#800020]'}`}
                    >
                      Internship
                    </button> 
                    <button 
                      onClick={() => setActiveTab('organizational')} 
                      className={`rounded-full mt-5 px-4 py-2 border-1 pointer-events-auto transition ${activeTab === 'organizational' ? 'bg-[#800020] text-white border-[#800020]' : 'border-[#D45060] hover:border-[#800020]'}`}
                    >
                      Organizational
                    </button> 
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(activeTab === 'internship') && (
                  <><div className="col-span-1 bg-[#FFF9F2] rounded-2xl p-8 flex flex-col md:flex-row md:items-start gap-6 relative">
                    <span className="text-5xl font-bold text-[#800020] leading-none">01</span>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                          <h3 className="text-2xl font-bold">
                            PT Alfatih Pilar Peradaban
                          </h3>
                          <span className="text-sm uppercase tracking-wide text-gray-600">
                            Operational Staff
                          </span>
                        </div>
                        <time className="text-sm text-gray-600 whitespace-nowrap">
                          Januari — Mei 2025
                        </time>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-5">
                        During my internship program at PT Alfatih Pilar Peradaban, I served as an Operational Staff in the Port Services Division. Throughout this role, I was involved in a variety of projects that supported the company&#39;s efforts in service innovation and regulatory compliance. One of my main responsibilities was designing and developing the company&#39;s profile website, where I handled both the front-end using Laravel, contributing directly to the digital transformation of port-related services. Additionally, I was responsible for drafting and organizing important licensing documents related to the construction of a TERSUS (Terminal Khusus), ensuring that all documentation was accurate, well-structured, and compliant with regulatory standards.
                      </p>

                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Web Development
                        </span>
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Laravel
                        </span>
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Documentation
                        </span>
                      </div>
                      <img src="/img/PT Alfatih Pilar Peradaban.jpg" alt="PT Alfatih Pilar Peradaban" className="rounded-lg shadow-lg w-full sm:w-72" />
                    </div>
                  </div><div className="col-span-1 bg-[#FFF9F2] rounded-2xl p-8 flex flex-col md:flex-row md:items-start gap-6 relative">
                      <span className="text-5xl font-bold text-[#800020] leading-none">02</span>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                          <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                            <h3 className="text-2xl font-bold">
                              BPJS Ketenagakerjaan
                            </h3>
                            <span className="text-sm uppercase tracking-wide text-gray-600">
                              Junior Programmer
                            </span>
                          </div>
                          <time className="text-sm text-gray-600 whitespace-nowrap">
                            Agustus — Desember 2025
                          </time>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-5">
                          During my internship program at BPJS Ketenagakerjaan, I served as a Junior Programmer in the Worked under Deputi Arsitektur dan Pengembangan TI with Squad PTK dan PMK, contributing to AI, automation, and strategic IT projects. Developed and optimized OCR models for document extraction, built face verification systems using DeepFace framework, and created automation workflows using N8N. Contributed to IT Master Plan (ITMP) strategic planning by developing monitoring dashboards with Looker Studio.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-5">
                          <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                            AI
                          </span>
                          <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                            Data Analysis
                          </span>
                          <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                            ITMP
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-6 mt-4">
                          <img src="/img/BPJS Ketenagakerjaan.jpg" alt="BPJS Ketenagakerjaan" className="rounded-lg shadow-lg w-full sm:w-72" />
                          <img src="/img/Sertifikat Apre Magang Berdampak 2025.jpg" alt="Sertifikat Apresiasi Magang Berdampak 2025" className="rounded-lg shadow-lg w-full sm:w-72" />
                        </div>
                      </div>
                    </div></>
                  )}
                  {(activeTab === 'organizational') && (
                  <>
                  <div className="col-span-1 bg-[#FFF9F2] rounded-2xl p-8 flex flex-col md:flex-row md:items-start gap-6 relative">
                    <span className="text-5xl font-bold text-[#800020] leading-none">01</span>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                          <h3 className="text-2xl font-bold">
                            Himpunan Mahasiswa Sistem Informasi Kelautan (HIMATASKA)
                          </h3>
                          <span className="text-sm uppercase tracking-wide text-gray-600">
                            General Treasurer Student Representative Council
                          </span>
                        </div>
                        <time className="text-sm text-gray-600 whitespace-nowrap">
                          Jun — Dec 2024
                        </time>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-5">
                        As a General Treasurer of HIMATASKA Representative Council, I managed the organization's annual budget and ensured transparent financial reporting, prepared financial reports for the Student Representative Council, supervised the financial reports of the HIMATASKA Executive Board, and was responsible for overseeing work programs in the Economics and Business division of HIMATASKA.
                      </p>

                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Finance
                        </span>
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Budgeting
                        </span>
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Reporting
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-6 mt-4">
                        <img src="/img/SERTIFIKAT HIMPUNAN MAHASISWA DEWAN PERWAKILAN HIMATASKA 2024-2025 copy_page-0004.jpg" alt="HIMATASKA" className="rounded-lg shadow-lg w-full sm:w-72" />
                        <img src="/img/DP.jpeg" alt="HIMATASKA" className="rounded-lg shadow-lg w-full sm:w-72" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 bg-[#FFF9F2] rounded-2xl p-8 flex flex-col md:flex-row md:items-start gap-6 relative">
                    <span className="text-5xl font-bold text-[#800020] leading-none">02</span>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                          <h3 className="text-2xl font-bold">
                            Himpunan Mahasiswa Sistem Informasi Kelautan (HIMATASKA)
                          </h3>
                          <span className="text-sm uppercase tracking-wide text-gray-600">
                            Staff of Economics and Business Division
                          </span>
                        </div>
                        <time className="text-sm text-gray-600 whitespace-nowrap">
                          Nov 2023 — May 2024
                        </time>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-5">
                        As a Staff of the Economics and Business Division of HIMATASKA, I was responsible for  for designing and implementing work programs in the Economics and Business division to support the organization's income. Contributed to the organization's independent business activities, such as merchandise sales and bazaars.
                      </p>

                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Financial Management
                        </span>
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Budgeting
                        </span>
                        <span className="text-xs uppercase tracking-wide text-[#800020] border border-[#800020] rounded px-3 py-1.5">
                          Event Planning
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-6 mt-4">
                        <img src="/img/Sertifikat Anggota HIMATASKA EKOBIS.jpg" alt="HIMATASKA EKOBIS" className="rounded-lg shadow-lg w-full sm:w-72" />
                        <img src="/img/EKOBIS.jpeg" alt="HIMATASKA EKOBIS" className="rounded-lg shadow-lg w-full sm:w-72" />
                      </div>
                    </div>
                  </div>
                  </>
                  )}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="project" className="py-20 w-full">
            <div className="w-full px-6 md:px-20">
              <motion.div initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}>
                <div className="mb-10 md:py-10 text-center animate-pulse">
                  <h1 className="text-xl  font-bold text-gray-500/40 font-serif mb-2 md:text-3xl tracking-wide mr-4">
                    A FEW THINGS
                  </h1>
                  <h2 className="text-3xl mt-[-25] mb-2 md:text-7xl font-serif  tracking-wide mr-4 font-bold text-[#800020]/80">
                    I&#39;VE BUILT
                  </h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                >
                <div className="md:py-10 pointer-events-auto duration-300 ease-in-out max-w-full md:ml-10">
                  <div className="container flex flex-col md:flex-row md:relative mr-10">
                    <a href="https://kabl.sik-upi.com/" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                        Featured project
                      </p>
                      <h5 className="mt-2 md:mt-5 text-xl md:text-3xl font-bold tracking-tight text-gray-900">
                        Konservasi Alam Bawah Laut Sukarame
                      </h5>
                    </a>
                    <div className="z-20 md:mt-40 mt-10 flex flex-col-reverse md:flex-row w-fullplace-items-center md:w-[700px] md:h-[300px] p-6 bg-gray-400 shadow-xl rounded-md"> 
                      <p className="font-normal text-sm md:text-xl text-white">
                        This website is a collaboration between Universitas Pendidikan Indonesia and the Konservasi Alam Bawah Laut Sukarame Foundation. Its purpose is to promote coastal tourism managed by the foundation. It features booking functionalities, a section for reading articles, and a unique detection feature for coral fish species and coral reef health as a form of education for visitors..
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/CI4.png" alt="CodeIgniter" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/tailwind.png" alt="Tailwind" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/mysql.png" alt="MySQL" />
                        </button>
                      </div>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1ifhBce4fnHjUmnlAsfOHOO_oaTamCp93?usp=sharing" className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project1.png" className="md:h-150 md:w-300 w-full rounded-lg" alt="kabl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}>
                <div className="md:py-10 pointer-events-auto max-w-full md:ml-10">
                  <div className="container mt-10 flex flex-col md:flex-row md:relative">
                    <a href="https://fishzonemapper.sik-upi.com/" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                        Featured project
                      </p>
                      <h5 className="mt-2 md:mt-5 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                        FishZone Mapper
                      </h5>
                    </a>
                    <div className="z-20 md:mt-40 mt-10 flex flex-col-reverse md:flex-row w-fullplace-items-center md:w-[700px] md:h-[300px] p-6 bg-gray-400 shadow-xl rounded-md"> 
                      <p className="font-normal text-sm md:text-xl text-white">
                        This website is dedicated to fishermen around Banten Bay, aiming to streamline fishing activities. Its core feature is displaying fishing zone (ZPPI) locations according to seasonal patterns. The platform integrates oceanographic and fisheries data to provide accurate, real-time spatial information on potential fishing grounds. This enables fishermen to optimize their routes, save fuel, and improve both efficiency and catch yields.
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/html.png" alt="Html" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/bootstrap.png" alt="Bootstrap" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/mysql.png" alt="MySQL" />
                        </button>
                      </div>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1SAe8Qr5lHiCMK4769KMKovpdqEFKHQNE?usp=sharing" className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project2.png" className="md:h-150 md:w-300 w-full rounded-lg" alt="fishzonemapper" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                >
                <div className="md:py-10 pointer-events-auto max-w-full md:ml-10">
                  <div className="container mt-10 flex flex-col md:flex-row md:relative">
                    <a href="https://drive.google.com/file/d/1RG0xdgEj8nyN8h6c0irPX9RofiJXVa_e/view?usp=sharing" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                        Internship Project - Not deployed
                      </p>
                      <h5 className="mt-2 md:mt-5 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                        PT Alfatih Pilar Peradaban
                      </h5>
                    </a>
                    <div className="z-20 md:mt-40 mt-5 w-full block md:w-[700px] md:h-[300px] p-6 bg-gray-400 shadow-xl rounded-md">
                      <p className="text-sm md:text-xl font-normal text-white">
                        This is the official company profile website of PT Alfatih Pilar Peradaban, created to introduce the services and expertise offered to clients and partners on a broader scale. Through this platform, visitors can explore the company&#39;s core services, including planning, design, engineering, and port services. The website is designed to be informative and professional, offering a user-friendly experience that reflects the company&#39;s identity and commitment to building a sustainable and excellent civilization.
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/laravel.png" alt="Laravel"/>
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/tailwind.png" alt="Tailwind"/>
                        </button>
                      </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1RG0xdgEj8nyN8h6c0irPX9RofiJXVa_e/view?usp=sharing" className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project3.png" className="md:h-150 md:w-300 w-full rounded-lg" alt="APP" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                >
                <div className="md:py-10 pointer-events-auto max-w-full md:ml-10">
                  <div className="container mt-10 flex flex-col md:flex-row md:relative">
                    <a href="#" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                        On-going Project
                      </p>
                      <h5 className="mt-2 md:mt-5 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                        CEKIN
                      </h5>
                    </a>
                    <div className="z-20 md:mt-40 mt-10 flex flex-col-reverse md:flex-row w-fullplace-items-center md:w-[700px] md:h-[350px] p-6 bg-gray-400 shadow-xl rounded-md"> 
                      <p className="font-normal text-sm md:text-xl text-white">
                        CEKIN (Cek Ikan) is an educational website I developed to help the public and local fishermen identify the freshness of fish. It provides informative articles that users can read and contribute to. One of its key features is a real-time fish freshness detection system using YOLO (You Only Look Once) and Convolutional Neural Networks (CNN). This allows users to upload fish images and receive immediate freshness predictions. The website is still under active development, and some features are being refined for better performance and usability.
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/laravel.png" alt="Laravel" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/tailwind.png" alt="Tailwind" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={30} height={30} src="/img/sqlite.png" alt="Sqlite" />
                        </button>
                      </div>
                    </div>
                    <a href="#" className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project4.png" className="md:h-150 md:w-300 w-full rounded-lg" alt="cekin" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          <section id="publications" className="py-20 px-4 md:py-40 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="col-span-1 md:ml-10 flex place-items-center md:place-items-start">
              <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                >
              <h2 className="text-xl md:text-3xl mb-2">Scientific</h2>
              <h2 className="text-3xl md:text-6xl font-bold mb-8 text-[#D45060]">Publications</h2>
              </motion.div>
              <p className="hidden md:block flex-1 mr-10 border-r border-black"></p>
            </div>
            <div className="col-span-2">
              <ul className="space-y-6 ms:ml-10 md:mr-5 pointer-events-auto">
                {publications.map((pub, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                  >
                    <a
                      href={pub.url}
                      className="text-xl md:text-3xl text-gray-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.title}
                    </a>
                    <p className="text-xl md:text-2xl text-gray-500">{pub.journal}</p>
                    <div className="border-t border-black md:h-px mt-5" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                >
          <section id="contactme" className="bg-[#800020] md:h-screen pointer-events-auto rounded-t-full">
            <div className="md:py-40 py-20 px-20 md:px-80 items-center text-center">
              <h1 className="text-2xl md:text-4xl text-amber-50 font-bold">Get in touch</h1>
              <h1 className="mt-10 text-5xl md:mt-20 md:text-7xl text-white font-serif font-bold">Let&#39;s Work Together</h1>
              <p className="mt-10 text-lg md:text-2xl text-white">
                I&#39;m open to new opportunities — especially exciting and challenging projects. Feel free to reach out if you have any questions or just want to say hi. I&#39;ll do my best to get back to you!
              </p>
              <div className="mt-12 md:mt-20 flex justify-center">
                <button className="text-white bg-gradient-to-r from-red-300 via-red-400 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                  <a href="mailto:anggitaac33@gmail.com" className="text-white md:text-2xl">Say HI!</a>
                </button>
              </div>
            </div>
          </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
