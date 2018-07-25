import Helmet from "react-helmet"
import React from 'react';
import axios from "axios";

let Helpers = {
  axios: axios,
  baseUrl: 'http://192.168.1.23/Pangea-Pod/backend/api/'
};

export default Helpers;
