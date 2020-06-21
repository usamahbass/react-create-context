import React, { useEffect } from "react";

const Helmet = ({ title }) => {
  useEffect(() => {
    document.title = `${title}`;
  });
  return <div></div>;
};

export default Helmet;
