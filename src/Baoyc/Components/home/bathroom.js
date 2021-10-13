import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";
import Toilet from "../../assets/images/toilet.png";
export default function Bathroom() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container>
          <Grid item lg={9} md={8} sm={12} xs={12}>
            <Box
              fontSize="27px"
              lineHeight="33px"
              color="#ffffff"
              fontFamily="Montserrat-ExtraBoldItalic"
              mt={5}
            >
              THE BATHROOM
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
            >
              The BAYC Bathroom will become operational once the presale period
              is over. It contains a canvas accessible only to wallets
              containing at least one ape. Like any good dive bar bathroom, this
              is the place to draw, scrawl, or write expletives.
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
            >
              Each ape-holder will be able to paint a pixel on the bathroom wall
              every fifteen minutes. Think of it as a collaborative art
              experiment for the cryptosphere. A members-only canvas for the
              discerning minds of crypto twitter.
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
            >
              We're pretty sure it's going to be full of dicks.
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12}>
            <Box textAlign="center">
              <img src={Toilet} width="54%" className={classes.tilotimg} />
            </Box>
          </Grid>
        </Grid>

        <Divider className={classes.dividersetting} />
      </Container>
    </>
  );
}
