//Components
import Nav from "./components/Nav";

//Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Global styles
import GlobalStyles from "./components/GlobalStyles";

//Styles
import styled from "styled-components";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Header>
        <Nav />
      </Header>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>

          <Route path="/work/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 4;
`;

export default App;
