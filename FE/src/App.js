import MCC from "pages/00/MCC";
import Staff from "pages/10/Staff";
import Student from "pages/11/Student";
import Life from "pages/12/Life";
import { useState } from "react";

export default function App() {
  const [rest, setRest] = useState("00");

  switch (rest) {
    case "00":
      return <MCC />;
    case "10":
      return <Staff />;
    case "11":
      return <Student />;
    case "12":
      return <Life />;
    default:
      return <div>404</div>;
  }
}
