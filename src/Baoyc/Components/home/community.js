import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";

export default function Community() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box
              fontSize="27px"
              lineHeight="33px"
              color="#ffffff"
              fontFamily="Montserrat-ExtraBoldItalic"
              mt={5}
            >
              COMMUNITY TOOLS
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
            >
              Here are some helpful tools created by the Bored Ape Yacht Club
              community. Please note that these are unofficial in nature. Every
              assignment of an ape's overall value or rarity is inherently
              subjective.
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box textAlign="center" mt={6} className={classes.Communitybtn}>
              <Button
                variant="contained"
                color="primary"
                className={classes.nftxpbtn}
              >
                NFTEXP.IO{" "}
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.nftxpbtn}
              >
                RARITY.TOOLS{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider className={classes.dividersetting} />
      </Container>
    </>
  );
}
