import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./gridPage.css";


//* the functions and values needed from App.js were pulled into the GridPage page as destructuring props
const GridPage = ({
  mycolor,
  chanceColor,
  text,
  text2,
  text3,
  text4,
  setText,
  setText2,
  setText3,
  setText4,
  handleChange,
  handleChange2,
  handleChange3,
  handleChange4,
  handleReset,
}) => {

  const navigate = useNavigate();

  //* when Submit Button click in form
  const handleSubmit = (e) => {
    e.preventDefault();
    // for form basic validation
    if ((text4.includes("@") == false) ) { // some email rules
      alert("Please enter valid email address");
    } else if (
      text4.split("")[text4.length - 3] != "." &&
      text4.split("")[text4.length - 4] != "."
    ) {
      alert("Please enter valid email address");
    } else if (text.length == 0 || text2.length == 0 || text3.length == 0 ){ // do not allow empty input
      alert('Please enter a valid value in the empty boxes')
    } else { // If each input is full and the email is valid, redirect to the FlexPage page after submitting and empty the input values.
      navigate("/");
      setText("");
      setText2("");
      setText3("");
      setText4("");
    }
  };



  return (
    <div className="wrapper2">
      <div className="body2">
        <div className="menuItems2" onClick={chanceColor}>

        {
          mycolor.map((eachColor,index)=>{
            return (
              <div className="menuItem2" key={index} style={{ backgroundColor: eachColor }}>
              MENU ITEM
            </div>
            )
          })
        }
        </div>

        <form className="form2" action="">
          <div className="title2">
            <h3>TITLE = TWO</h3>
          </div>
          <div className="input2">
            <input
              type="text"
              value={text}
              placeholder="First Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input2">
            <input
              type="text"
              value={text2}
              placeholder="Last Name"
              required
              onChange={handleChange2}
            />
          </div>
          <div className="input2">
            <input
              type="text"
              value={text3}
              placeholder="Country Name"
              required
              onChange={handleChange3}
            />
          </div>
          <div className="input2">
            <input
              type="email"
              value={text4}
              placeholder="Email"
              required
              onChange={handleChange4}
            />
          </div>

          <div className="buttons2">
            <button // The Reset Button resets the colors of the MenuItems default value and clears the input areas.
              type="reset" className="reset2"
              disabled={!text && !text2 && !text3 && !text4} // if there is no value in any input, disable the reset button
              onClick={handleReset}
            >
              Reset Button
            </button>
            <button className="submit2" type="submit" onClick={handleSubmit} disabled={!true}>
              Submit Button
            </button>
          </div>
        </form>
      </div>

      <div className="sideBar2">Side Bar</div>
    </div>
  );
};

export default GridPage;
