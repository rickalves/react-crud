import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import Users from "../client/Users";
export default props =>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path="*" element={<Home  />} />
    </Routes>
