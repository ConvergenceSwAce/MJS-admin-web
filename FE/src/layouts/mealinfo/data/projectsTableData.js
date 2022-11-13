/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import axios from "axios";
import { useEffect, useState } from "react";

// @mui material components

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";

// Images

export default function data() {
  async function getMealInfo() {
    await axios.get("/info").then((res) => {
      console.log(res.data);
      return res.data;
    });
  }

  const [meal, setMeal] = useState([
    { date: "2021-10-01", day: "월", lunchA: "밥", lunchB: "밥", dinner: "밥" },
  ]);

  // useEffect(() => {
  //   setMeal(getMealInfo());
  //   console.log(meal);
  // }, []);

  return {
    columns: [
      { Header: "날짜", accessor: "date", width: "30%", align: "center" },
      { Header: "요일", accessor: "day", align: "center" },
      { Header: "중식A", accessor: "lunchA", align: "center" },
      { Header: "중식B", accessor: "lunchB", align: "center" },
      { Header: "석식", accessor: "dinner", align: "center" },
    ],

    rows: meal,
  };
}
