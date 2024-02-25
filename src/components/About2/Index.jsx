import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../app/styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "../../constants";
import { Progress } from "@/components/ui/progress"


const About = () => {
  return (
<>
<section className="py-10" id="abouts">
<div className="container m-auto px-4">
  <h2 className="text-2xl font-semibold">Technologies</h2>
  <div className="mt-14">
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">HTML,CSS, Sass & Tailwind</h2>
        <p className="text-gray-500">Advanced</p>
      </div>
      <Progress value={33} />

      {/* <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" /> */}
    </div>
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">JavaScrit, Typescript, React</h2>
        <p className="text-gray-500">Advanced</p>
      </div>
      <Progress value={33} />
      {/* <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" /> */}
    </div>
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">
          Python
        </h2>
        <p className="text-gray-500">Advanced</p>
      </div>
      <Progress value={33} />
      {/* <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" /> */}
    </div>
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Pytorch, Tensorflow</h2>
        <p className="text-gray-500">Advanced</p>
      </div>
      <Progress value={33} />
      {/* <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" /> */}
    </div>
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Numpy, Matplotlib, Pandas,SciPy </h2>
        <p className="text-gray-500">Advanced</p>
      </div>
      <Progress value={33} />
      {/* <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" /> */}
    </div>
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">MongoDB, MySQL</h2>
        <p className="text-gray-500">Advanced</p>
      </div>
      <Progress value={33} />
      {/* <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" /> */}
    </div>
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Android Studio</h2>
        <p className="text-gray-500">Advanced</p>
      </div>
      <Progress value={33} />
      {/* <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" /> */}
    </div>
  </div>
</div>
</section>
{/* <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git & github
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Unreal Engine5
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Three.js
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  React-three-fiber
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  3d tools- Blender, Maya, Houdini
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Docker
                </p>
              </div>
            </div>
          </div>
        </section> */}
        </>
  );
};

export default SectionWrapper(About, "about");
