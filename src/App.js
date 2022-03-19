import "./App.css";
import React from "react";
import HomeMainPage from "./Components/SideBarPage/SideBarPage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import NewsDetails from "./Components/NewsDetails/NewsDetails";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Router>
        <Switch>
          

          <Route exact path="/">
            <HomeMainPage />
          </Route>

          <Route path="/Home">
            <HomeMainPage />
          </Route>

          <Route path="/:id">
            <NewsDetails />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
