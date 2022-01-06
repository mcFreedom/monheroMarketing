import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";

const mdComponents = {
  h1: (props) => (
    <h1 className="block text-2xl font-extrabold my-3" {...props} />
  ),
  p: (props) => <p className="block text-justify mb-2" {...props} />,
  li: (props) => <li className="dash mb-2" {...props} />,
  ul: (props) => <ul className="mb-4" {...props} />,
};

const MdxLayout = ({ children }) => {
  return (
    <MDXProvider components={mdComponents}>
      <div className="min-h-screen container px-3 mx-auto flex flex-wrap flex-col items-center bg-white text-gray-900 lg:max-w-xl xl:max-w-2xl pt-24 mt-12">
        {children}
      </div>
    </MDXProvider>
  );
};

MdxLayout.propTypes = {};

export default MdxLayout;
