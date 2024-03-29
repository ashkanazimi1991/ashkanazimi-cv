import Head from 'next/head'
import Link from 'next/link';

import Image from 'next/image'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import {BiWorld } from 'react-icons/bi';

import { HiOutlineLibrary, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiPlayCircle } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

export default function Home() {
  return (
    <div className='max-w-[1400px] container bg-[#fff]   '>
      <Head>
        <title>ashkan azimi</title>
        <meta name="description" content="ashkan azimi" />
        <meta name="description" content="اشکان عظیمی" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

        <div className=' bg-[#fff] flex flex-row h-70 '>
 
          <img  src="./images/me.jpg"  alt="ashkan azimi"
              className="w-1/4 max-h-80 rounded-[10] object-center  object-contain "/>
            <div className='w-3/4 flex flex-col justify-center'>
              <h2 className="text-black tracking-widest text-6xl font-bold md:text-3xl sm:text-2xl text-center">
                Ashkan Azimi  </h2>
              <h2 className='text-[#000] text-3xl py-5 tracking-wider font-semibold text-center 
              sm:text-xl md:text-2xl '>
                Full-Stack Developer</h2>
            </div>

        </div>
            <div className='bg-gray-600   py-10 flex flex-row sm:flex-col  items-center '>
                <h2 className='w-1/4 sm:w-screen py-2 tracking-widest text-right sm:text-center 
                text-2xl font-bold text-black border-b-4 min-w-300 whitespace-nowrap md:text-xl'>
                  ABOUT ME</h2>
                <h2 className='w-3/4 sm:w-screen sm:py-10 px-20 sm:px-10  text-
                 text-[#fff] text-justify'>
                  I was born in 1991 & started the OnlineCEO developer company in 2015, we built many
                   platforms & startups in different fields, such as large-scale platforms, Web apps, 
                   Native apps, Robotic & IoT automation, crypto exchange and, blockchain development. 
                  <br></br> right now we are continuously
                    building more and improving the built ones.</h2>
            </div>
           
           
           
           
            {/* main body */}
            <div className='flex flex-row  sm:flex-col-reverse  '>
              
              
              {/* left col */}
                <div className='bg-gray-800  sm:w-full justify-start min-w-300  ' >
                  
                  


                  {/* Skils */}

                  <h2 className=' pl-6 pt-5 font-bold text-white text-left tracking-widest'>SKILLS</h2>
                  <div className='border-b-4  reletive items-end my-2'></div>

                      {/* Programming Skill */}
                        <div className='flex flex-col  justify-center w-[100%] pb-20   '>
                          <div className='flex flex-row py-2  justify-between items-center'>
                        
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'
                              aria-label='Instagram'>
                              <h2 className='text-white px-6 w-28 text-sm '>Development</h2>
                            </Link>
                          <div className='border-l-2 pr-10'>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32 '>"Java Script"</h2>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"Type Script"</h2>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"Python"</h2>
                            <h2 className='text-white text-left px-2 w-40 sm:w-32 text-sm '>"C++"</h2>
                            <h2 className='text-white text-left px-2 w-40 sm:w-32 text-sm '>"Solidity"</h2>
                            <h2 className='text-white text-left px-2 w-40 sm:w-32 text-sm '>"Tailwindcss"</h2>
                            <h2 className='text-white text-left px-2 w-40 sm:w-32 text-sm '>"SQL / MySQL"</h2>
                            <h2 className='text-white text-left px-2 w-40 sm:w-32 text-sm '>"Html / CSS"</h2>
                          </div>
                        </div>

                    {/* FrameWork */}

                        <div className='flex flex-row py-2  justify-between items-center'>
                       
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'
                              aria-label='Instagram'>
                              <h2 className='text-white text-sm   px-6 w-28 '>FrameWork</h2>
                            </Link>
                          <div className='border-l-2 pr-10'>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"React"</h2>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"React Native"</h2>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"Expo"</h2>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"Nextjs"</h2>
                            <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"Django"</h2>
                          </div>
                        </div>



                  
                  {/* Automation IDE */}

                        <div className='flex flex-row py-2  justify-between items-center'>
                            {/* <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  
                              aria-label='Instagram'>
                              <FaRegDotCircle className=' w-10 text-sm  text-[#fff] '/> 
                            </Link>   */}
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h2 className='text-white px-6 text-sm  w-28'>Automation</h2>
                            </Link>
                        <div className='border-l-2 pr-10 '>
                          <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"Raspberry Pi"</h2>
                          <h2 className='text-white text-left px-2 w-40 text-sm  sm:w-32'>"Arduino"</h2>
                          
                        </div>
                        </div>





                  {/* Other */}

                      <div className='flex flex-row py-2  justify-between items-center'>
                            {/* <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  
                              aria-label='Instagram'>
                              <FaRegDotCircle className=' w-10 text-sm  text-[#fff] '/> 
                            </Link>   */}
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h2 className='text-white px-6 w-28 text-sm  whitespace-nowrap'>Other Skill</h2>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        <h2 className='text-white text-left px-2 text-sm  w-40 sm:w-32'>"Project Management"</h2>
                        <h2 className='text-white text-left px-2 text-sm  w-40 sm:w-32'>"Ui,Ux "</h2>
                        <h2 className='text-white text-left px-2 text-sm  w-40 sm:w-32'>"Figma"</h2>
                        <h2 className='text-white text-left px-2 text-sm  w-40 sm:w-32'>"Git"</h2>
                       </div>
                      </div>

{/* ........................................................................................... */}
                  {/* language */}
                  <h2 className=' pl-6 pt-16 font-bold text-white text-left tracking-widest'>LANGUAGE</h2>
                  <div className='border-b-4  reletive r-0 my-2'></div>


                  <div className='flex flex-row py-2  justify-between items-center'>
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h2 className='text-white px-6 text-sm  w-28'>Native</h2>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        <h2 className='text-white text-left text-sm  px-2 w-40 sm:w-32'>"Turkish"</h2>
                        <h2 className='text-white text-left text-sm  px-2 w-40 sm:w-32'>"Persian"</h2>
                       </div>
                      </div>


                      <div className='flex flex-row py-2  justify-between items-center'>
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h2 className='text-white px-6 text-sm  w-28'>Other  </h2>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        <h2 className='text-white text-left px-2 text-sm  w-40 sm:w-32'>"English"</h2>
                      
                       </div>
                      </div>


{/* .....contact........................................................................ */}



                      <h2 className=' pl-6 pt-16 font-bold text-white text-left tracking-widest '>
                        CONTACTS</h2>
                  <div className='border-b-4  reletive r-0 my-2'></div>

                  <div className='flex flex-col   '>

                      {/* office */}
                      <div className='flex flex-row  px-6 py-2'>
                        <Link href='tel:+984433384232' >
                          <HiOutlineLibrary className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='tel:+905528258841'>
                          <h2 className='text-white'>+90 552 825 8841</h2>
                        </Link>
                      </div>
                    {/* Phone */}
                      <div className='flex flex-row py-2 px-6'>
                        <Link href='tel:+989141472686'>
                          <HiOutlineLibrary className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='tel:+989141472686'>
                          <h2 className='text-white'>+98 914 147 2686</h2>
                        </Link>
                      </div>
                                {/* Phone */}
                       <div className='flex flex-row py-2 px-6'>
                        <Link href='tel:+989141472686'>
                          <HiOutlineLibrary className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='tel:+447418354868'>
                          <h2 className='text-white'>+44 7418 354868</h2>
                        </Link>
                      </div>


                      {/* instagram */}
                      <div className='flex flex-row px-6 py-2'>
                        <Link href='https://www.instagram.com/ashkanazimi.info' target='_blank'  aria-label='Instagram'>
                          <FaInstagram className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='https://www.instagram.com/ashkanazimi.info' target='_blank'  aria-label='Instagram'>
                          <h2 className='text-white px-1'>ashkanazimi.info</h2>
                        </Link>
                      </div>

                      {/* telegram */}
                      <div className='flex flex-row px-6 py-2'>
                        <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telgram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telgram'>
                          <h2 className='text-white px-2'>ashkanazimiii</h2>
                        </Link>
                      </div>
                            {/* mail */}
                      <div className='flex flex-row px-6 py-2'>
                        <Link href="mailto:ashkan1991azimi@gmail.com" target='_blank'  aria-label='mail'>
                          <HiOutlineMail className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href="mailto:ashkan1991azimi@gmail.com" target='_blank'  aria-label='mail'>
                          <h2 className='text-white px-2'>mail@ashkanazimi.info</h2>
                        </Link>
                      </div>

                                 {/* location */}
                  

                      <div className='flex flex-row px-6  py-2'>
                        <BiWorld className=' w-10 text-2xl text-[#fff] '/> 
                        <Link href="https://onlineceo.org/" target='_blank'  aria-label='website'>
                          <h2 className='text-white px-2'> Company: onlineceo.org</h2>
                        </Link>
                      </div>



                  </div>
              
                  </div>
                </div>




              <div className='flex flex-row bg-white w-3/4 sm:w-screen p-10 pl-10'>

                {/* line */}
                
                


                  <div className='flex flex-col'>
                      <div >
                        <h2 className='font-bold tracking-widest text-lg'>WORK EXPERIENCE</h2>
                          <div className='border-l-2 ml-2 mt-4 pr-2' >
                            <h2 className='font-bold pl-2'>CEO & Owner [ 2015 - 2023 ] </h2>
                            <p className='ml-10'>ONLINE CEO Company <br></br>Design & develop Software, 
                            web Apps, Android, IOS & Windows Apps. build startup ideas and Robotic Automation
                             to the industrial bases.
                            
                            <br></br> Address : IRAN - Urmia</p>
                          </div>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>UI & Ux Designer [ 2016 - 2023 ]</h2>
                            <p className='ml-10'> Design platform and software based on user experience & 
                            Design rules such as Golden ratio & natuer base, Friendly & easy to use. </p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Front End Developer [ 2019 - 2023 ]</h2>
                            <p className='ml-10'>Develop front End over the world for different countries 
                            with JavaScript & top style methods & languages on high ranking frameworks such as React,
                             Next, React Native</p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Back End Developer [ 2020 - 2023 ]</h2>
                            <p className='ml-10'>My company has developed a backend with python programming Language
                             on Django Framework with SQL databases since the beginning, but to be a full stack
                              developer I start to do it on my own</p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Project Manager [ 2015 - 2023 ]</h2>
                            <p className='ml-10'>I have a team that includes experienced developers to handle the
                             large-scale project  & I manage them by myself from start to end.</p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Digital marketing [ 2018 - 2023 ]</h2>
                            <p className='ml-10'>Most of our developed Software & platform are released in production
                             mode with powerful SEO, color Psychology, theme, and typography rules, even we can
                              support product ads & market requirements for our customers</p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Robotic automation [ 2018 - 2023 ]</h2>
                            <p className='ml-10'>build platforms for Robotic & IoT automation,
                             to control & monitor farms, factories, &, etc, Online from the web
                              with high-definition of details with machine Learning and artificial
                               intelligence support.</p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Blockchain Development [ 2020 - 2023 ]</h2>
                            <p className='ml-10'>build platforms for crypto exchange company, token on ethereum and bitcoin blockchain.</p>
                      </div>



                      {/* EDUCATION or project*/}
                      <div>
                        <h2 className='font-bold border-b-4 pb-2 border-black tracking-widest text-lg
                         pt-10'>PROJECTS</h2>
                        <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>CEO App</h2>
                            <p className='ml-10'>Web app for the ONLINE CEO developer community Support 3D View, Virtual Reality, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>


                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>VetNow App</h2>
                            <p className='ml-10'>Web app & Native App for the VetNow veterinary clinic. Support Shops, Live News, video call , live Chat, ..., 
                            with professional admin dashboard <br></br>FrameWorks: React, NextJs, ReactNative, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>


                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>ODA App</h2>
                            <p className='ml-10'>Web app for ODA architect company that Support 3D View, Virtual Reality, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>



                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Ideal Makoo App</h2>
                            <p className='ml-10'>Web app for the IdealMakoo company Support, shops, Education & news, 3D View, Virtual Reality, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>



                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Robotic Arms</h2>
                            <p className='ml-10'>Web app for control robotic arms on team or single, with
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django, Arduino, raspberry pi <br></br>
                             programming language: JavaScript, Python, C++, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>


                            

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Self Drive Robot platform</h2>
                            <p className='ml-10'>Web app for control and planning self drive robots with support of multiple sensors, mapping, GPS ,...
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django, Arduino, raspberry pi  <br></br>
                             programming language: JavaScript, Python, tailwindcss, c++  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>



                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>CarNet Platform</h2>
                            <p className='ml-10'>Web app and native app for the Carnet large scale startup, Support Live map and GPS, Professional check list, 
                            professional admin dashboard <br></br>FrameWorks: React,ReactNative NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>

                      

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Follow Social app</h2>
                            <p className='ml-10'>Web app and native app for the ONLINE CEO developer community, interest explorer engine, live chat, public post and stories, Support 3D View, shops,  Virtual Reality, 
                            professional admin dashboard, professional user dashboard, professional business account <br></br>FrameWorks: React, ReactNative, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss, ...  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Pasteur Health Care platform </h2>
                            <p className='ml-10'>Web app and native app, to be terminal between patient and doctor with online visit and patients care requirements with visual diagrams,... &
                            professional admin app <br></br>FrameWorks: React,ReactNative, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>

                      
                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>MyPet app</h2>
                            <p className='ml-10'>Web app and native app for the pet shops, with online visit, live pet shop and product shop, Health Care checklist and
                            professional admin dashboard <br></br>FrameWorks: React, ReactNative, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>


                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Fibex crypto exchange platform</h2>
                            <p className='ml-10'>Web app for the fibexchange crypto community Support blockchains, market for hold, sell, trade crypto and NFT, 
                            professional admin and user dashboard <br></br>FrameWorks: React, ReactNative, NextJs, Django <br></br>
                             programming language: JavaScript, solidity, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>



                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Poultry IoT platform</h2>
                            <p className='ml-10'>Web app for the Vira company to control and monitor the poultry farms by IoT, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django, Arduino, raspberry pi  <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>


                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>GreenHouse IoT platform</h2>
                            <p className='ml-10'>Web app for the ONLINE CEO developer community Support 3D View, Virtual Reality, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django, Arduino, raspberry pi  <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>





                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Fast School platforms</h2>
                            <p className='ml-10'>Web app and native app for the FastSchool startup, Its educational base supports virtual reality, 
                            3D view, Online whiteboard, live chat, conference video room, to-do app, auto exam, and practice, copyright watermark 
                            professional dashboard for admin, students, parents  <br></br>FrameWorks: React, Reactnative, NextJs, Django <br></br>
                             programming language: JavaScript, Python,C++, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>











                    </div>

                </div>
              </div>
            </div>


      </div>
  )
}
