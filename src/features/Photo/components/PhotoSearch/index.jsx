import React from "react";
import { Button } from "reactstrap";

function PhotoSearch(props) {
  const { category, handleClick } = props;

  return (
    <>
      <Button
        value={category.value}
        onClick={handleClick}
        className="ml-3 mb-3 btn-warning"
      >
        {category.label}
      </Button>
    </>
  );
}

export default PhotoSearch;
