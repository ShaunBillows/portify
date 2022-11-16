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
        outline: "none",
        caretColor: "white",
        color: "white",
        boxShadow: "none",
        "&:hover": {},
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: color,
      };
    },

    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "#212121",
        "&:hover": {},
      };
    },
  };

  const getOptions = (options) => {
    return options.map((x) => ({ label: x, value: x }));
  };

  return (
    <Select
      placeholder={text}
      onChange={func}
      options={getOptions(options)}
      styles={dropdownStyles}
      isSearchable={false}
    />
  );
};

export default Dropdown;
