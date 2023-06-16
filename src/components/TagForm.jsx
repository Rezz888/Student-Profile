import React from "react";
import { useState } from "react";
import Tags from "./Tags";

function TagForm() {
  const [tagName, setTagName] = useState("");
  const [tagState, setTagState] = useState([]);

  const handleTag = (e) => {
    setTagName(e.target.value);
  };

  const resetState = () => {
    setTagName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tagName) {
      setTagState([...tagState, { tagName }]);
      resetState();
    }
  };

  return (
    <div className="tags">
      <Tags tagState={tagState} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="tag-input"
          placeholder="Add a tag"
          value={tagName}
          onChange={handleTag}
        />
      </form>
    </div>
  );
}

export default TagForm;
