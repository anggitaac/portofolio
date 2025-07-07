'use client';
import FluidBackground from '../components/FluidBackground';
import { motion } from 'framer-motion';
import ScrollProgressBar from "@/components/Scrollprogressbar";
import { publications } from "@/components/Data";
import ChevronTicker from "@/components/Ticker";
import Nav from "@/components/Nav";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <FluidBackground />
      <ScrollProgressBar/>
      <div className="relative z-10 text-black pointer-events-none">
        <Nav/>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="9.5" x2="24" y2="9.5" stroke="#FFFFFF"/>
          <line y1="14.5" x2="15" y2="14.5" stroke="#FFFFFF"/>
        </svg>
        <div className="grid place-items-start grid-cols-1 md:grid-cols-2 gap-4 w-full px-6 md:px-20">
          <div className="col-span-1 mt-24">
            <h1 className="text-4xl">Hello, I am </h1>
            <h2 className="text-shadow font-bold animate-pulse py-5 text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Anggieta Tri Cahyani</h2>
            <h3>As a Marine Information Systems student with full-stack development experience across several website projects, I have a strong passion for Website Development, particularly frontend and backend development. I find immense satisfaction in building interactive and engaging user interfaces. I&#39;m also continuously deepening my backend capabilities and remain open to contributing in various roles as per team needs.</h3>
            <button className="rounded-lg mt-10 border-2 border-gray-700 hover:border-pink-400 pointer-events-auto">
              <a href="#" className="py-2 px-2"> Curiculum Vitae</a>
            </button>
            <p className="mt-10 border-b-1"></p>

            <div className="mt-10 flex gap-8">
              <a href="https://github.com/anggitaac" className="pointer-events-auto">
                <svg className="size-8 fill-black hover:fill-pink-400 transition" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 25 2 C 12.354545 2 2 12.354545 2 25 C 2 37.645455 12.354545 48 25 48 C 37.645455 48 48 37.645455 48 25 C 48 12.354545 37.645455 2 25 2 z M 25 4 C 36.554545 4 46 13.445455 46 25 C 46 25.093716 45.993426 25.185862 45.992188 25.279297 C 45.355643 25.213574 44.619449 25.151947 43.683594 25.113281 C 42.349262 25.058153 40.667887 25.070474 38.767578 25.169922 C 38.842322 24.665304 38.893164 24.152982 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.101066 10.946801 24.590099 11.013672 25.072266 C 7.8894658 24.970983 5.518755 25.05331 4.0039062 25.191406 C 4.0033241 25.127325 4 25.064213 4 25 C 4 13.445455 13.445455 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8867188 26.019531 C 9.5909207 26.024035 10.397743 26.051943 11.203125 26.080078 C 11.281506 26.399647 11.374577 26.712873 11.484375 27.019531 C 8.1709433 27.091537 5.704398 27.434455 4.1835938 27.728516 C 4.1171404 27.221899 4.0664333 26.710385 4.0371094 26.193359 C 5.1545506 26.089867 6.7502168 26.005867 8.8867188 26.019531 z M 41.113281 26.076172 C 43.242845 26.051402 44.834805 26.164134 45.957031 26.283203 C 45.927668 26.764345 45.879919 27.240812 45.818359 27.712891 C 44.245568 27.413519 41.71721 27.071329 38.314453 27.015625 C 38.411856 26.742348 38.491935 26.461309 38.564453 26.177734 C 39.462674 26.126533 40.338362 26.085185 41.113281 26.076172 z M 37.892578 28.007812 C 41.465652 28.03978 44.085317 28.396925 45.666016 28.699219 C 44.325335 36.167288 39.008358 42.292747 32 44.789062 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.44296 30.280162 37.297012 29.208854 37.892578 28.007812 z M 11.908203 28.013672 C 12.505054 29.212023 13.359546 30.281496 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.789062 C 10.997174 42.294717 5.68379 36.176856 4.3378906 28.716797 C 5.863528 28.419405 8.4148311 28.06385 11.908203 28.013672 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.390625 C 28.396051 45.785878 26.721908 46 25 46 C 23.278092 46 21.603949 45.785878 20 45.390625 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path></svg>
              </a>
              <a href="https://www.instagram.com/anggiieta_/" className="pointer-events-auto">
                <svg className="size-8 fill-black hover:fill-pink-400 transition" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/anggietatricahyani" className="pointer-events-auto">
                <svg className="size-8 fill-black hover:fill-pink-400 transition" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path></svg>
              </a>
            </div>
          </div>
          <div className="col-span-1 -mt-10">
            <Image className="md:w-full"  width={500} height={500} src="/img/anggita.png" alt="Anggieta Tri Cahyani"/>
          </div>
        </div>

        <main className="relative pt-20">
          <section id="about" className="min-h-screen grid py-20 px-10 grid-cols-1 md:grid-cols-2 gap-4">
            <div  className="col-span-1 order-2 md:order-1">
              <motion.div className="drop-shadow-[0_0_15px_rgba(255,0,255,0.5)] w-full h-auto max-h-[500px] object-contain" initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              >
              <Image src="/img/anggita2.png" width={500} height={500} alt='Anggieta Tri Cahyani'/>
              </motion.div>
            </div>
            <div className="col-span-1 order-1 md:order-2">
              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 0.5,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}>
              <h1 className="text-2xl mb-5">Get to know <a className="ml-2 text-shadow font-bold animate-pulse py-5 text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">About me</a></h1>
              </motion.div>
              <div>
                {[
                  "I'm Anggieta Tri Cahyani, a 7th-semester Marine Information Systems student at Universitas Pendidikan Indonesia. My interest in web development steadily grew throughout my academic journey. Initially, I wasn't sure if web development was the right path for me, given its demands for strong logic and continuous learning. However, every challenge to build a website actually ignited my curiosity about how system logic functions, pushing me to delve deeper and expand my skills.",
                  "Over the past three years, I've completed four full-stack web projects. Each project, despite its imperfections, has been an invaluable learning experience that continuously refined my abilities. I actively explore and apply modern frameworks like Laravel, Next.js, and React.js, especially in my most recent work.",
                  "I thoroughly enjoy the process of building interactive and user-friendly frontend interfaces, where I can apply my creativity to the fullest. While I have a solid understanding of backend system logic, I am continuously working to deepen and optimize my proficiency in that area.",
                  "For me, the world of web development is a never-ending learning process. I embrace every challenge within it and am committed to continually enhancing my skills, particularly in frontend development, while simultaneously broadening my understanding of backend technologies."
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="py-2"
                    initial={{ opacity: 0, scale: 0.8 }} // dari sedikit kecil & transparan
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
          </section>
          <section id="experience" className="min-h-screen py-20 px-6">
            <div className="mx-auto max-w-screen-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                    My work experience
                  </h2>
                  <p className="w-full md:flex-1 border-t-2 border-black mt-4 md:mt-0 md:ml-6"></p>
                </div>

                <div className="px-2 md:px-10">
                  <ol className="relative border-s border-blue-500 dark:border-gray-700">
                    <li className="ms-4">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-blue-600 dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                        Januari - Mei 2025
                      </time>
                      <h3 className="text-xl mb-1 font-semibold text-gray-900 :text-white">
                        Operational Division Staff at PT Alfatih Pilar Peradaban
                      </h3>
                      <p className="text-ml font-normal text-gray-500">
                        During my internship program at PT Alfatih Pilar Peradaban, I served as an Operational Staff in the Port Services Division. Throughout this role, I was involved in a variety of projects that supported the company&#39;s efforts in service innovation and regulatory compliance. One of my main responsibilities was designing and developing the company&#39;s profile website, where I handled both the front-end and back-end using Laravel, contributing directly to the digital transformation of port-related services. Additionally, I was responsible for drafting and organizing important licensing documents related to the construction of a TERSUS (Terminal Khusus), ensuring that all documentation was accurate, well-structured, and compliant with regulatory standards. 
                      </p>
                    </li>
                  </ol>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="project" className="min-h-screen" data-bgcolor="#ffd700" data-textcolor="#ffffff">
            <div className="md:container md:mx-auto px-2 md:px-10">
              <motion.div initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}>
                <div className="flex grid-cols-4">
                  <h2 className="text-4xl font-bold text-start col-span-3 bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Things I&#39;ve Worked on, Some of Them</h2>
                  <p className="w-full md:flex-1 border-t-2 border-black mt-4 md:mt-0 md:ml-6"></p>
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
                <div className="py-10 pointer-events-auto">
                  <div className="container mt-10 flex flex-col md:flex-row md:relative">
                    <a href="https://kabl.sik-upi.com/" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Featured project
                      </p>
                      <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                        Konservasi Alam Bawah Laut Sukarame
                      </h5>
                    </a>
                    <div className="z-20 md:mt-30 mt-10 flex flex-col-reverse md:flex-row w-fullplace-items-center md:w-[500px] md:h-[200px] p-6 bg-gray-400 shadow-xl rounded-md"> 
                      <p className="font-normal text-sm text-white">
                        This website is a collaboration between Universitas Pendidikan Indonesia and the Konservasi Alam Bawah Laut Sukarame Foundation. Its purpose is to promote coastal tourism managed by the foundation. It features booking functionalities, a section for reading articles, and a unique detection feature for coral fish species and coral reef health as a form of education for visitors..
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/CI4.png" alt="CodeIgniter" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/tailwind.png" alt="Tailwind" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/mysql.png" alt="MySQL" />
                        </button>
                      </div>
                    </div>
                    <a href="https://kabl.sik-upi.com/" className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project1.png" className="md:h-100 w-full rounded-lg" alt="kabl" />
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
                <div className="py-10 pointer-events-auto">
                  <div className="container mt-10 flex flex-col md:flex-row md:relative">
                    <a href="https://fishzonemapper.sik-upi.com/" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Featured project
                      </p>
                      <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                        FishZone Mapper
                      </h5>
                    </a>
                    <div className="z-20 md:mt-30 mt-10 flex flex-col-reverse md:flex-row w-fullplace-items-center md:w-[500px] md:h-[200px] p-6 bg-gray-400 shadow-xl rounded-md"> 
                      <p className="font-normal text-sm text-white">
                        This website is dedicated to fishermen around Banten Bay, aiming to streamline fishing activities. Its core feature is displaying fishing zone (ZPPI) locations according to seasonal patterns. The platform integrates oceanographic and fisheries data to provide accurate, real-time spatial information on potential fishing grounds. This enables fishermen to optimize their routes, save fuel, and improve both efficiency and catch yields.
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/html.png" alt="Html" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/bootstrap.png" alt="Bootstrap" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/mysql.png" alt="MySQL" />
                        </button>
                      </div>
                    </div>
                    <a href="https://fishzonemapper.sik-upi.com/" className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project2.png" className="md:h-100 w-full rounded-lg" alt="fishzonemapper" />
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
                <div className="py-10 pointer-events-auto">
                  <div className="container mt-10 flex flex-col md:flex-row md:relative">
                    <a href="#" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Featured project
                      </p>
                      <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                        PT Alfatih Pilar Peradaban
                      </h5>
                    </a>
                    <div className="z-20 md:mt-20 mt-5 w-full block md:w-[500px] h-[250px] p-6 bg-gray-400 shadow-xl rounded-md">
                      <p className="text-sm font-normal text-white">
                        This is the official company profile website of PT Alfatih Pilar Peradaban, created to introduce the services and expertise offered to clients and partners on a broader scale. Through this platform, visitors can explore the company&#39;s core services, including planning, design, engineering, and port services. The website is designed to be informative and professional, offering a user-friendly experience that reflects the company&#39;s identity and commitment to building a sustainable and excellent civilization.
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/laravel.png" alt="Laravel"/>
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/tailwind.png" alt="Tailwind"/>
                        </button>
                      </div>
                    </div>
                    <div className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project3.png" className="md:h-100 w-full rounded-lg" alt="APP" />
                    </div>
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
                <div className="py-10 pointer-events-auto">
                  <div className="container mt-10 flex flex-col md:flex-row md:relative">
                    <a href="https://fishzonemapper.sik-upi.com/" className="place-items-center z-30 md:absolute w-full md:place-items-start md:w-[400px] md:h-[100px]">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Featured project
                      </p>
                      <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                        CEKIN
                      </h5>
                    </a>
                    <div className="z-20 md:mt-30 mt-10 flex flex-col-reverse md:flex-row w-fullplace-items-center md:w-[500px] md:h-[200px] p-6 bg-gray-400 shadow-xl rounded-md"> 
                      <p className="font-normal text-sm text-white">
                        CEKIN (Cek Ikan) is an educational website I developed to help the public and local fishermen identify the freshness of fish. It provides informative articles that users can read and contribute to. One of its key features is a real-time fish freshness detection system using YOLO (You Only Look Once) and Convolutional Neural Networks (CNN). This allows users to upload fish images and receive immediate freshness predictions. The website is still under active development, and some features are being refined for better performance and usability.
                      </p>
                    </div>
                    <div className="z-10 md:absolute md:bottom-0 md:left-0 flex flex-wrap gap-4 mt-5 order-2 md:order-1">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/laravel.png" alt="Laravel" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/tailwind.png" alt="Tailwind" />
                        </button>
                      </div>
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block">
                        <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-3 py-1">
                          <Image width={20} height={20} src="/img/sqlite.png" alt="Sqlite" />
                        </button>
                      </div>
                    </div>
                    <a href="https://fishzonemapper.sik-upi.com/" className="z-10 md:ml-[-100px] order-1 md:order-2">
                      <Image width={500} height={500} src="/img/project4.png" className="md:h-100 w-full rounded-lg" alt="cekin" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          <section id="publications" className="py-20 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:ml-10 flex">
              <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                >
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Publications</h2>
              </motion.div>
              <p className="hidden md:block flex-1 mr-10 border-r border-black"></p>
            </div>
            <div className="col-span-1 flex">
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
                      className="text-xl text-gray-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.title}
                    </a>
                    <p className="text-sm text-gray-500">{pub.journal}</p>
                    <div className="border-t border-black md:h-px mt-5" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>
          <ChevronTicker/>
          <section className="bg-pink-300 h-screen pointer-events-auto">
            <div className="md:py-40 py-20 md:px-80 items-center text-center">
              <h1 className="text-2xl text-amber-50 font-bold">Get in touch</h1>
              <h1 className="mt-10 text-5xl text-white font-serif font-bold">Let&#39;s Work Together</h1>
              <p className="mt-10 text-lg text-white">
                I&#39;m open to new opportunities — especially exciting and challenging projects. Feel free to reach out if you have any questions or just want to say hi. I&#39;ll do my best to get back to you!
              </p>
              <div className="mt-12 flex justify-center">
                <button className="text-white bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                  <a href="mailto:anggitaac33@gmail.com" className="text-white">Say HI!</a>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
