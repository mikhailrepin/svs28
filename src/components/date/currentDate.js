import React from "react";

const CurrentDate = () => {
  const current = new Date();
  const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;

  return (
    <>{date}</>
  )
}

export default CurrentDate
