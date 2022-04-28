import React from "react";
import { useNavigate } from "react-router-dom";
import "./flexPage.css";

//* the functions and values needed from App.js were pulled into the FlexPage page as destructuring props
const FlexPage = ({
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
    if (text4.includes("@") === false) { // some email rules
      alert("Please enter valid email address");
    } else if (
      text4.split("")[text4.length - 3] !== "." &&
      text4.split("")[text4.length - 4] !== "."
    ) {
      alert("Please enter valid email address");
    } else if (text.length === 0 || text2.length === 0 || text3.length === 0) {   // do not allow empty input
      alert("Please enter a valid value in the empty boxes");
    } else {    // If each input is full and the email is valid, redirect to the GridPage page after submitting and empty the input values.
      navigate("/grid");
      setText("");
      setText2("");
      setText3("");
      setText4("");
    }
  };

  
  return (
    <div className="wrapper">
      <div className="body">
        <div className="menuItems" >

          {
            mycolor.map((eachColor,index)=>{
              return(
                <div className="menuItem" onClick={chanceColor} key={index} style={{ backgroundColor: eachColor }}
                >
                  MENU ITEM
                </div>
              )
            })
          }
        </div>

        <form className="form1" action="">
          <div className="title">
            <h3>TITLE = ONE</h3>
          </div>
          <div className="input1">
            <input
              type="text"
              value={text}
              placeholder="First Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input1">
            <input
              type="text"
              value={text2}
              placeholder="Last Name"
              required
              onChange={handleChange2}
            />
          </div>
          <div className="input1">
            <input
              type="text"
              value={text3}
              placeholder="Country Name"
              required
              onChange={handleChange3}
            />
          </div>
          <div className="input1">
            <input
              type="email"
              value={text4}
              placeholder="Email"
              required
              onChange={handleChange4}
            />
          </div>

          <div className="buttons">
            <button // The Reset Button resets the colors of the MenuItems default value and clears the input areas.
              className="reset1"
              type="reset"
              disabled={!text && !text2 && !text3 && !text4}  // if there is no value in any input, disable the reset button
              onClick={handleReset}
            >
              Reset Button
            </button>

            <button className="submit1" type="submit" onClick={handleSubmit}>
              Submit Button
            </button>
          </div>
        </form>
      </div>

      <div className="sideBar">Side Bar</div>
    </div>
  );
};

export default FlexPage;
