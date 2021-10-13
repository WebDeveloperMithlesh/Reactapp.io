import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";
import Ape1 from "../../assets/images/garga.png";
import Ape2 from "../../assets/images/gordy.png";
import Ape3 from "../../assets/images/tomato.png";
import Ape4 from "../../assets/images/sass.png";

export default function Team() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box
              fontSize="27px"
              lineHeight="33px"
              color="#ffffff"
              fontFamily="Montserrat-ExtraBoldItalic"
              mt={5}
            >
              THE TEAM
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
            >
              BAYC was created by four friends who set out to make some dope
              apes, test our skills, and try to build something (ridiculous).
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#bfc500"
              mt={3}
              fontFamily="Montserrat-Medium"
            >
              GARGAMEL.{" "}
              <span className={classes.teamtext}>
                {" "}
                STARCRAFT OBSESSED. EATS SMURFS.
              </span>
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#bfc500"
              mt={1.5}
              fontFamily="Montserrat-Medium"
            >
              GORDON GONER.{" "}
              <span className={classes.teamtext}>
                {" "}
                REFORMED LEVERAGE ADDICT.
              </span>
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#bfc500"
              mt={1.5}
              fontFamily="Montserrat-Medium"
            >
              EMPEROR TOMATO KETCHUP.{" "}
              <span className={classes.teamtext}>
                {" "}
                SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
              </span>
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#bfc500"
              mt={1.5}
              fontFamily="Montserrat-Medium"
            >
              NO SASS.{" "}
              <span className={classes.teamtext}>
                {" "}
                HERE FOR THE APES. NOT FOR THE SASS.
              </span>
            </Box>
          </Grid>

          <Grid item lg={1} md={1}>
            {" "}
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box textAlign="center" mt={6}>
                  <img
                    src={Ape1}
                    width="100%"
                    height="auto"
                    className={clsx(classes.apeimg, classes.apimrgn)}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box textAlign="center" mt={6}>
                  <img
                    src={Ape2}
                    width="100%"
                    height="auto"
                    className={clsx(classes.apeimg, classes.apimrgn)}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box textAlign="center">
                  <img
                    src={Ape3}
                    width="100%"
                    height="auto"
                    className={classes.apeimg}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box textAlign="center">
                  <img
                    src={Ape4}
                    width="100%"
                    height="auto"
                    className={classes.apeimg}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={5}
              fontFamily="Montserrat-Medium"
              textAlign="center"
              className={classes.smarttext}
            >
              VERIFIED SMART CONTRACT ADDRESS:{" "}
              <a
                className={classes.VERIFIED}
                href="https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
              >
                {" "}
                0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
              </a>
            </Box>
          </Grid>
        </Grid>

        <Divider className={classes.dividersetting} />
      </Container>
    </>
  );
}
