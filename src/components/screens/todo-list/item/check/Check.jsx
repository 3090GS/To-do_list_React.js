import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './Check.css'


const Check = ({ isCompleted }) => {
  return (
    <div className="checkWrapper">
      {isCompleted ? <CheckBoxIcon size={24}/> : <CheckBoxOutlineBlankIcon/>}
    </div>
  );
};

export default Check;
