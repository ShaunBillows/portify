import { faBlackboard } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const Dropdown = ({ options, func, text, color }) => {

    const dropdownStyles = {
      singleValue: (styles) => {
        return {
          ...styles,
          color: "#6d6d6e",
          
        };
      },
  
      placeholder: (styles) => {
        return {
          ...styles,
          color: "#6d6d6e",
          // paddingTop: "0.7rem",
        };
      },
  
      input: (styles) => {
        return {
          ...styles,
          caretColor: "white",
          color: "white",
          
  
        };
      },
  
      control: (styles) => {
        return {
          ...styles,
          backgroundColor: color,
          border: "none",
          borderRadius: "5px",
          // fontSize: "larger",
          outline: "none",
          caretColor: "white",
          color: "white",
          boxShadow: 'none',
          "&:hover": {
          //   border: "solid #5e5df0 1px",
          },
          
        };
      },
      menu: (styles) => {
        return {
          ...styles,
          // border: "solid #5e5df0 1px",
          backgroundColor: color,
        };
      },
  
      option: (styles) => {
        return {
          ...styles,
          backgroundColor: "#212121",
          "&:hover": {
          //   backgroundColor: "#5e5df0",
          
          },
        };
      },
    };

    const getOptions = (options) => {
        return options.map( x => ({label: x, value: x}))
    }
  
      return (
          <Select
              placeholder={text}
              onChange={func}
              options={getOptions(options)}
              styles={dropdownStyles}
              isSearchable={false}
          />
      )
  }
  
  export default Dropdown