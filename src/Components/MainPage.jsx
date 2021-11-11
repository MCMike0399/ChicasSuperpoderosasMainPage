import React from "react";
import Grid from "@material-ui/core/Grid";
import { CssBaseline, Tabs, Tab, AppBar } from "@material-ui/core";
import ParticlesBg from "particles-bg";
import NuestraMision from "./NuestraMision";
import NuestroEquipo from "./NuestroEquipo";
import Encuesta from "./Encuesta";
import Fade from "react-reveal/Fade";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Grid>
        <CssBaseline>
          <AppBar
            position="static"
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Tabs
              value={selectedTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleTabChange}
              aria-label="disabled tabs example"
              variant="fullWidth"
            >
              <Tab label="Nuestra Misión" />
              <Tab label="Nuestro Equipo" />
              <Tab label="Encuesta" />
            </Tabs>
          </AppBar>
          {selectedTab === 0 && (
            <Fade left>
              <NuestraMision />
            </Fade>
          )}
          {selectedTab === 1 && (
            <Fade bottom>
              <NuestroEquipo />
            </Fade>
          )}
          {selectedTab === 2 && (
            <Fade top>
              <Encuesta />
            </Fade>
          )}
          <ParticlesBg bg={true} type="circle" />
        </CssBaseline>
      </Grid>
    </div>
  );
};

export default MainPage;
