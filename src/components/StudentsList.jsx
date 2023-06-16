import React, { useContext } from "react";
import {
  searchResultsContext,
  searchTermContext,
  studentsContext,
} from "../App";
import StudentProfile from "./StudentProfile";
import TagForm from "./TagForm";

function StudentsList() {
  const students = useContext(studentsContext);
  const searchTerm = useContext(searchTermContext);
  const searchResults = useContext(searchResultsContext);

  const logic = searchTerm.length < 1 ? students : searchResults;

  return (
    <>
      <div className="students-List">
        {logic.map((item, i) => (
          <div key={i}>
            <StudentProfile key={item.id} item={item} i={i} />
            <TagForm />
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentsList;
