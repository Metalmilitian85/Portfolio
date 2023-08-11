import React, { useState} from 'react'
import { Link } from 'react-scroll';

export default function About() {
  const [isVisible, setVisible] = useState(false);

  const onClick = () => setVisible(!isVisible);

const Text = () => 
    <div className="pb-3">
            <p>Growing up in the times of Geocities and Maxpages (dating myself I know!) 
              tampering with websites was definitely a hobby of mine. My friends and I would edit and add everything we could to see who would climb the rankings on Maxpages and be the most visited/liked! 
              That really seems like a lifetime ago, and boy do I wish I would have stuck with that route in life!</p>
            <p>Since then I have gotten my BA in Education, owned and ran my own company with a handful of employees, gotten married, and had an amazing son! All in a days work right?! Well not quite, 
              but I've definitely learned stuff along the way!</p>
            <br></br>
            <p>Web development has always been something that never fully left me. Regardless of what I was doing in life I was usually "inspecting" pages, and sometimes manipulating little things just for the 
              fun of it. I never really gave development a full chance until I decided that I needed a real career change. My current job of 17 years wasn't going to cut it once my son came along.</p>
            <br></br>
            <p>So with that in mind I buckled down and pursued something I should have gone after almost 20 years ago, and it sure has been fun getting to this point! Once the old keystrokes started up 
              everything started to feel familiar again. Not quite the same of course, but those little "Oh yeahs!" from memories resparked. Two years later and here I am getting a little better every day!</p>
            <br></br>
            <p>My Front-End journey has been exciting so far, and I'm even MORE excited to keep building upon the knowledge that I've gained so far! After I get more settled in the FE area my next goal is to go 
              Full-Stack. Keep your goals centered and your eyes on the prize. A little bit of coding every day can go a long way in the grand aspect of it all. Thanks for reading!</p>
    </div>;

  return (
  <div className="pt-24">
    <div id="About" className="pt-7 text-black border-8 rounded-lg border-sky-600 mx-auto bg-sky-300 md:max-w-[90%]" >
        <h1 className="w-full text-2xl font-bold text-center hover:scale-105 duration-300">ABOUT</h1>
          <div  className="pt-7 text-center font-bold md:text-lg mx-24">
            <p>My name is Tim Ward and I'm from the Kansas City area. Aspiring to become a Front-End Developer has been my main goal for a bit now, and I can't wait to see where this road takes me!
            </p>
            <br></br>
            <div className="transition-all ease-in-out duration-500">
              {isVisible? <Text /> : null}
              <Link to="About" spy={true} smooth={true} offset={-80} duration={600}>
                <button className="italic underline pb-7" onClick={onClick}>{isVisible? 'Read Less!' : 'Read More!'}</button>
              </Link>
            </div>
          </div>
    </div>
  </div>
  )
}