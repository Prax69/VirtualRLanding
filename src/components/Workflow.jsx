import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import codeImg from "../assets/code.jpg";
import { checklistItems } from '../constants';

const Workflow = () => {
  return (
    <div lassName="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          coding worflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code" className="rounded-lg shadow-lg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-neutral-900 mx-6 h-10 w-10 text-green-400 rounded-full">
                  <CheckCircle2 />
                </div>
                <div className="ml-4">
                  <h5 className="mt-1 mb-2 text-xl font-semibold">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
