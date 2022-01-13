import { StylesProvider } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import SideBarProfile from "../SideBarProfile";
import Header from "../Header";
import Portfolio from "../../views/Portfolio";
import Resume from "../../views/Resume";
import { Skills } from "../../views/Skills";
import Footer from "../Footer";
// import Contact from "../../views/Contact";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <Container className="top_60">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <SideBarProfile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main_content container_shadow">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/skills">
                    <Skills />
                  </Route>
                  {/* <Route path="/contact">
                    <Contact />
                  </Route> */}
                  <Route path="/">
                    <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  );
};

export default App;