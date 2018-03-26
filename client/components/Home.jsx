import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import "../styles/style.css";

const Home = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column
          width={12}
          style={{
            textAlign: "center",
            fontWeight: "normal",
            letterSpacing: "2px",
            fontFamily: "Open Sans"
          }}
        >
          This is the Home Page
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
  );
};
export default Home;
