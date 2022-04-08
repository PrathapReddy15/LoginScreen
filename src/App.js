import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SignUpLogin from "./components/SignUpLogin/index";
import AuthorizedRoute from "./components/AuthorizedRoute";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpLogin />} />
          <Route exact path="/fetch_normal" element={<Home />} />
          <Route
            exact
            path="/fetch_auth"
            element={
              <AuthorizedRoute>
                <>
                  <NavBar />
                  <Home />
                </>
              </AuthorizedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
