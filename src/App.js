import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Reviews from "./Components/Reviews";
import IndividualReview from "./Components/IndividualReview";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<IndividualReview />} />
        <Route path="/account" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
