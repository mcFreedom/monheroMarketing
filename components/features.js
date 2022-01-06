import React from "react";
import PropTypes from "prop-types";

const Features = (props) => {
  return (
    <section className="bg-gray-100 border-b-none py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Other Features
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="flex flex-wrap no-underline hover:no-underline h-full">
              <div className="w-full font-bold text-xl text-gray-800 px-6 mt-10">
                A
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 dash">1</p>
              <p className="text-gray-800 text-base px-6 mb-5 dash">2</p>
              <p className="text-gray-800 text-base px-6 mb-5 dash">3</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="flex flex-wrap no-underline hover:no-underline h-full">
              <div className="w-full font-bold text-xl text-gray-800 px-6 mt-10">
                B
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 dash">1</p>
              <p className="text-gray-800 text-base px-6 mb-5 dash">2</p>
              <p className="text-gray-800 text-base px-6 mb-5 dash">3</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="flex flex-wrap no-underline hover:no-underline h-full">
              <div className="w-full font-bold text-xl text-gray-800 px-6 mt-10">
                C
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 dash">1</p>
              <p className="text-gray-800 text-base px-6 mb-5 dash">2</p>
              <p className="text-gray-800 text-base px-6 mb-5 dash">3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {};

export default Features;
