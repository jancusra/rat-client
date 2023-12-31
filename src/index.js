import React from 'react';
import ReactDOM from "react-dom/client";
import RatApp from './RatApp';
import 'ratStyles/index';
import 'ratStyles/styles';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RatApp />
  </React.StrictMode>
);
