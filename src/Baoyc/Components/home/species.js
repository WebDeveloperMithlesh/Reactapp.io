import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";
import Gifcarton from "../../assets/images/mystery-ape.gif";

export default function Species() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Box
          fontSize="27px"
          lineHeight="33px"
          color="#ffffff"
          fontFamily="Montserrat-ExtraBoldItalic"
          className={classes.programmatically}
        >
          THE SPECS
        </Box>
        <Grid container>
          <Grid item lg={7} md={7} xs={12}>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
              className={classes.programmatically}
            >
              Each Bored Ape is unique and programmatically generated from over
              170 possible traits, including expression, headwear, clothing, and
              more. All apes are dope, but some are rarer than others.
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
              className={classes.programmatically}
            >
              The apes are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS. (
              <a
                className={classes.record}
                href="https://boredapeyachtclub.com/#/provenance"
              >
                {" "}
                See Record and Proof.
              </a>
              ) Purchasing an ape costs 0.08 ETH.
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={3}
              fontFamily="Montserrat-Regular"
              className={classes.programmatically}
            >
              To access members-only areas such as{" "}
              <a
                className={classes.record}
                href="https://boredapeyachtclub.com/#/login-bathroom"
              >
                {" "}
                THE BATHROOM,{" "}
              </a>{" "}
              Apeholders will need to be signed into their Metamask Wallet.
            </Box>
          </Grid>
          <Grid item lg={1} md={1}></Grid>
          <Grid item lg={4} md={4} xs={12}>
            <div className={classes.programmatically}>
              <img src={Gifcarton} width="80%" className={classes.Speciesgif} />
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.dividersetting} />
      </Container>
    </>
  );
}
