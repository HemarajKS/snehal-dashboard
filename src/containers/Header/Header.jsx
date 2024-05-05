import React from "react";
import Select from "../../components/Select/Select";

const Header = () => {
  const items = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const onChange = (name, value) => {
    console.log(name, value);
  };

  return (
    <div>
      <Select items={items} onChange={onChange} name={"Hello"} />
    </div>
  );
};

export default Header;
