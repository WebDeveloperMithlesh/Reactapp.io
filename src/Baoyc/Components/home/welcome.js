import React from "react";
import Welcomeimg from "../../assets/images/bayc-mutant-hero.jpg";
import Ape1 from "../../assets/images/ape1.png";
import Ape2 from "../../assets/images/ape2.png";
import Ape3 from "../../assets/images/ape3.png";
import Ape4 from "../../assets/images/ape4.png";
import { Box, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";
import Appmain from '../../../Appmain';
export default function Welcome() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <img src={Welcomeimg} width="100%" height="auto" />
        <Box py={5}>
          <Grid container>
            <Grid item lg={7} md={7} sm={12}>
              <Box
                fontSize="29px"
                lineHeight="35px"
                color="#ffffff"
                className={classes.welcomemrgn}
                mt={2}
                fontFamily="Montserrat-ExtraBoldItalic"
              >
                WELCOME TO THE
              </Box>
              <Box
                fontSize="29px"
                lineHeight="35px"
                color="#ffffff"
                fontFamily="Montserrat-ExtraBoldItalic"
              >
                BORED APE YACHT CLUB
              </Box>
              <Box
                fontSize="16px"
                lineHeight="27px"
                color="#ffffff"
                className={classes.welcomemrgn}
                mt={4}
                fontFamily="Montserrat-Regular"
              >
                BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                collectibles living on the Ethereum blockchain. Your Bored Ape
                doubles as your Yacht Club membership card, and grants access to
                members-only benefits, the first of which is access to THE
                BATHROOM, a collaborative graffiti board. Future areas and perks
                can be unlocked by the community through roadmap activation.
              </Box>
            </Grid>
            <Grid item lg={1} md={1}></Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box textAlign="center">
                    <img
                      src={Ape1}
                      width="100%"
                      height="auto"
                      className={clsx(classes.apeimg, classes.apimrgn)}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box textAlign="center">
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

          <Box
            fontSize="26px"
            lineHeight="31px"
            color="#bfc500"
            fontFamily="Montserrat-MediumItalic"
            className={classes.fairmrgn}
          >
            FAIR DISTRIBUTION
          </Box>
          <Box
            fontSize="17px"
            lineHeight="20px"
            color="#ffffff"
            py={1}
            fontFamily="Montserrat-MediumItalic"
          >
            (BONDING CURVES ARE A PONZI)
          </Box>
          <Grid container>
            <Grid item lg={7} md={12} sm={12} xs={12}>
              <Box
                fontSize="16px"
                lineHeight="27px"
                color="#ffffff"
                mt={3}
                fontFamily="Montserrat-Regular"
                className={classes.bonding}
              >
                There are no bonding curves here. Buying a Bored Ape costs 0.08
                ETH. There are no price tiers; BAYC membership costs the same
                for everyone.
              </Box>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Box
                fontSize="13px"
                lineHeight="19px"
                color="#ffffff"
                mt={3}
                fontFamily="Montserrat-LightItalic"
                className={classes.bonding}
              >
                Note: Thirty apes are being withheld from the sale. These will
                be used for giveaways, puzzle rewards—and for the creators' BAYC
                memberships.
              </Box>
            </Grid>
          </Grid>

          <Box bgcolor="#bfc500" py={3} my={3}>
            <Grid container justifyContent="center">
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box
                  fontSize="24px"
                  mt={2}
                  lineHeight="29px"
                  color="#000000"
                  fontFamily="Montserrat-ExtraBoldItalic"
                  textAlign="center"
                >
                  BUY AN APE
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={10} xs={10}>
                <Box
                  fontSize="17px"
                  lineHeight="24px"
                  color="#000000"
                  fontFamily="Montserrat-Regular"
                  className={classes.bonding}
                >
                  The initial sale has sold out. To get your Bored Ape, check
                  out the collection on OpenSea.
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={10}>
                <Box textAlign="center">
                  
                  <Appmain/>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider className={classes.dividersetting} />
        </Box>
      </Container>
    </>
  );
}
