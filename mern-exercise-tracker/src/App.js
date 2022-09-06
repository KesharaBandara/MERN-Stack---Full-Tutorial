import React from 'react';
import { render } from 'react-dom';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list-component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Routes>
      {/* <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} /> */}
      <Route exact path="/" element={<ExercisesList/>}/>
      <Route path="/edit/:id" element={<EditExercise/>}/>
      <Route path="/create" element={<CreateExercise/>}/>
      <Route path="/user" element={<CreateUser/>}/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;