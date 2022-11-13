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

async function getMealInfo() {
  await axios.get("/info").then((res) => {
    console.log(res.data);
    return res.data;
  });
}

export default function data() {
  const [meal, setMeal] = useState([
    {
      date: "11.07",
      day: "월",
      lunchA: ["돈육김치찌개", "쌀밥", "해물까스&타르소스", "어묵잡채", "김구이", "배추김치"],
      lunchB: ["카레라이스", "미니우동", "치킨가라아게", "단무지무침", "배추김치"],
      dinner: ["함박스테이크&투움바소스", "김치두부국", "햄야채볶음밥", "단무지무침", "배추김치"],
    },
    {
      date: "11.08",
      day: "화",
      lunchA: ["황태무국", "쌀밥", "납작군만두&초간장", "햄감자조림", "부추콩나물무침", "배추김치"],
      lunchB: ["순살돈가츠&일식소스", "미소국", "추가밥", "스위트콘&그린샐러드", "김치볶음"],
      dinner: ["지코바치밥", "콩나물국", "춘권&사모사튀김", "무초절이", "배추김치"],
    },
    {
      date: "11.09",
      day: "수",
      lunchA: [
        "얼큰 꼬치어묵우동",
        "추가밥",
        "닭다리튀김&허니머스터드",
        "마즐종지락교무침",
        "배추김치",
      ],
      lunchB: ["매운 돈사태덮밥", "미역국", "야채튀김&초간장", "미역초무침", "배추김치"],
      dinner: ["사골우거지국", "쌀밥", "떡갈비가래떡조림", "오징어젓무침", "깻잎지", "배추김치"],
    },
    {
      date: "11.10",
      day: "목",
      lunchA: ["닭개장", "쌀밥", "갈비만두찜&초간장", "알어묵조림", "쫄면야채무침", "배추김치"],
      lunchB: [
        "모짜렐라 치즈돈가츠&데미소스",
        "크림스프",
        "추가밥",
        "스위트콘&그린샐러드",
        "오이피클",
        "배추김치",
      ],
      dinner: ["자장덮밥", "짬뽕국", "탕수육", "단무지", "배추김치"],
    },
    {
      date: "11.11",
      day: "금",
      lunchA: [
        "왕만두떡국",
        "쌀밥",
        "멘치까스&케첩",
        "미역줄기팽이버섯볶음",
        "무말랭이무침",
        "배추김치",
      ],
      lunchB: ["베이컨김치볶음밥", "달걀파국", "마늘닭강정", "콘샐러드", "배추김치"],
      dinner: ["순살돈가츠&데미소스", "쌀밥", "크림스프", "추가밥", "그린샐러드", "배추김치"],
    },
  ]);

  useEffect(() => {
    setMeal(getMealInfo());
    console.log(meal);
  }, [meal]);

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
