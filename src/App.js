import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentsList from "./components/StudentsList";
import SearchName from "./components/SearchName";

export const studentsContext = React.createContext();
export const searchTermContext = React.createContext();
export const searchResultsContext = React.createContext();
export const searchHandlerContext = React.createContext();

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newStudentList = students.filter((student) => {
        return Object.values(`${student.firstName} ${student.lastName}`)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newStudentList);
    } else {
      setSearchResults(students);
    }
  };

  useEffect(() => {
    axios
      .get(`https://api.hatchways.io/assessment/students`)
      .then((res) => {
        // console.log(res.data.students)
        setStudents(res.data.students);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <studentsContext.Provider value={students}>
        <searchTermContext.Provider value={searchTerm}>
          <searchResultsContext.Provider value={searchResults}>
            <searchHandlerContext.Provider value={searchHandler}>
              <SearchName />
            </searchHandlerContext.Provider>

            <StudentsList />
          </searchResultsContext.Provider>
        </searchTermContext.Provider>
      </studentsContext.Provider>
    </div>
  );
}

export default App;
