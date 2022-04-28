import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlexPage from "./pages/flex/FlexPage";
import GridPage from "./pages/grid/GridPage";
import { useState } from "react";

function App() {

  // Initially, unique color values are defined for Menu Items.
  const [mycolor, setMycolor] = useState([
    "#F60C86",
    "#4AB8B8",
    "#F2D1A8",
    "#EFA35C",
    "#853E3E",
    "#0CECDD",
    "#0B8457",
    "#A9C52F",
    "#7D0000",
    "#FFBE00",
    "#fff",
  ]);

  // Function that changes values in mycolor according to a certain order
  const chanceColor = () => {
    let newMyColorArr = [...mycolor];
    newMyColorArr.unshift(newMyColorArr.pop());
    setMycolor(newMyColorArr);
    // console.log("mycolor-->", mycolor);
    // console.log("newMyColorArr-->", newMyColorArr);
  };

  // to manipulate inputs in the form
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  // to capture the value on every change in input values within pages
  const handleChange = (event) => { // first name 
    setText(event.target.value);
  };
  const handleChange2 = (event) => { // last name
    setText2(event.target.value);
  };
  const handleChange3 = (event) => {  // country
    setText3(event.target.value);
  };
  const handleChange4 = (event) => { // email
    setText4(event.target.value);
  };

  // function to remove input values after REset button is clicked
  const handleReset = () => {
    setText("");
    setText2("");
    setText3("");
    setText4("");

    const defaultColor = [
      "#F60C86",
      "#4AB8B8",
      "#F2D1A8",
      "#EFA35C",
      "#853E3E",
      "#0CECDD",
      "#0B8457",
      "#A9C52F",
      "#7D0000",
      "#FFBE00",
      "#fff",
    ];

    setMycolor(defaultColor);
  };

  
  // The values and functions that I have defined in App.js are sent to the relevant page as props.
  // Header.jsx and Footer.jsx components are defined outside the BrowserRouter so that they appear on every page.
  return (
    <BrowserRouter>
      <Header chanceColor={chanceColor} />
      <Routes>
        <Route
          path="/"
          element={
            <FlexPage
              mycolor={mycolor}
              setMycolor={setMycolor}
              chanceColor={chanceColor}
              handleChange={handleChange}
              handleChange2={handleChange2}
              handleChange3={handleChange3}
              handleChange4={handleChange4}
              handleReset={handleReset}
              text={text}
              text2={text2}
              text3={text3}
              text4={text4}
              setText={setText}
              setText2={setText2}
              setText3={setText3}
              setText4={setText4}
            />
          }
        />
        <Route
          path="/grid"
          element={
            <GridPage
              mycolor={mycolor}
              setMycolor={setMycolor}
              chanceColor={chanceColor}
              handleChange={handleChange}
              handleChange2={handleChange2}
              handleChange3={handleChange3}
              handleChange4={handleChange4}
              handleReset={handleReset}
              text={text}
              text2={text2}
              text3={text3}
              text4={text4}
              setText={setText}
              setText2={setText2}
              setText3={setText3}
              setText4={setText4}
            />
          }
        />
      </Routes>
      <Footer chanceColor={chanceColor} />
    </BrowserRouter>
  );
}

export default App;
