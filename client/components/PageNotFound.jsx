import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../styles/style.css";

const PageNotFound = () => {
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
            fontFamily: "Open Sans",
            color: "grey"
          }}
        >
          <h3 style={{ textTransform: "capitalize" }}>Page not found</h3>
          <p>You may have mistyped the address or the page may have moved</p>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column
          width={12}
          style={{
            textAlign: "center",
            fontWeight: "normal",
            textTransform: "capitalize",
            letterSpacing: "2px",
            fontFamily: "Open Sans"
          }}
        >
          <Link to="/">Go to Home</Link>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
  );
};
export default PageNotFound;
