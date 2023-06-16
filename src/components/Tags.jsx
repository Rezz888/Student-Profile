import React from "react";

function Tags({ tagState }) {
  return (
    <div className="tag-div">
      {tagState.map((tagPiece, i) => (
        <div className="tagPiece" key={i}>
          <p>{tagPiece.tagName}</p>
        </div>
      ))}
    </div>
  );
}

export default Tags;
