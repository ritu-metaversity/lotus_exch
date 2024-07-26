import type React from "react";
import './style.scss'


interface Props{
    name:string
}

const MenuHeading:React.FC<Props> = ({name}) => {
  return (
    <h1  className="Heading_menu">
      {name}
    </h1>
  );
};

export default MenuHeading;
