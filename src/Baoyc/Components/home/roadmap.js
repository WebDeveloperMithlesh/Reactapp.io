import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";
import Shirt from "../../assets/images/BAYC.png";

export default function Roadmap() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container>
          <Grid item lg={9} md={9} sm={10} xs={11}>
            <Box
              fontSize="27px"
              lineHeight="33px"
              color="#ffffff"
              fontFamily="Montserrat-ExtraBoldItalic"
              mt={5}
            >
              ROADMAP ACTIVATIONS
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={1}
              fontFamily="Montserrat-Regular"
            >
              We’re in this for the long haul.
            </Box>
            <Box
              fontSize="16px"
              lineHeight="27px"
              color="#ffffff"
              mt={1}
              fontFamily="Montserrat-Regular"
            >
              We’ve set up some goalposts for ourselves. Once we hit a target
              sell through percentage, we will begin to work on realizing the
              stated goa
            </Box>
          </Grid>
        </Grid>
        <Box my={3}>
          <Grid container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              {/* .............. */}

              <Grid container>
                <Grid item lg={1} md={2} sm={2} xs={2}>
                  <Box
                    fontSize="16px"
                    lineHeight="27px"
                    color="#bfc500"
                    fontFamily="Montserrat-MediumItalic"
                  >
                    10%{" "}
                  </Box>
                </Grid>
                <Grid item lg={9} md={9} sm={10} xs={10}>
                  <Box
                    fontSize="13px"
                    lineHeight="19px"
                    color="#ffffff"
                    mt={0.5}
                    fontFamily="Montserrat-Regular"
                    className={classes.roadmaptext}
                  >
                    We pay back our moms.
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Grid container>
                  <Grid item lg={1} md={2} sm={2} xs={2}>
                    <Box
                      fontSize="16px"
                      lineHeight="27px"
                      color="#bfc500"
                      fontFamily="Montserrat-MediumItalic"
                    >
                      20%{" "}
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} sm={10} xs={10}>
                    <Box
                      fontSize="13px"
                      lineHeight="19px"
                      color="#ffffff"
                      mt={0.5}
                      fontFamily="Montserrat-Regular"
                      className={classes.roadmaptext}
                    >
                      We release the Caged Apes. 5 Caged Apes (tokens held back
                      from the sale) are airdropped to random Apeholders.
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item lg={1} md={2} sm={2} xs={2}>
                    <Box
                      fontSize="16px"
                      lineHeight="27px"
                      color="#bfc500"
                      fontFamily="Montserrat-MediumItalic"
                    >
                      40%{" "}
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} sm={10} xs={10}>
                    <Box
                      fontSize="13px"
                      lineHeight="19px"
                      color="#ffffff"
                      mt={0.5}
                      fontFamily="Montserrat-Regular"
                      className={classes.roadmaptext}
                    >
                      BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats
                      to Ape into Shitcoins To.
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item lg={1} md={2} sm={2} xs={2}>
                    <Box
                      fontSize="16px"
                      lineHeight="27px"
                      color="#bfc500"
                      fontFamily="Montserrat-MediumItalic"
                    >
                      60%{" "}
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} sm={10} xs={10}>
                    <Box
                      fontSize="13px"
                      lineHeight="19px"
                      color="#ffffff"
                      mt={0.5}
                      fontFamily="Montserrat-Regular"
                      className={classes.roadmaptext}
                    >
                      Member-Exclusive BAYC Merch Store gets unlocked, featuring
                      Limited Edition tees, hoodies, and other goodies.
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item lg={1} md={2} sm={2} xs={2}>
                    <Box
                      fontSize="16px"
                      lineHeight="27px"
                      color="#bfc500"
                      fontFamily="Montserrat-MediumItalic"
                    >
                      80%{" "}
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} sm={10} xs={10}>
                    <Box
                      fontSize="13px"
                      lineHeight="19px"
                      color="#ffffff"
                      mt={0.5}
                      fontFamily="Montserrat-Regular"
                    >
                      The clubhouse image becomes interactive and the Mysterious
                      Note becomes legible, beginning a treasure hunt. The first
                      to solve the mystery will be rewarded 5 ETH and a Bored
                      Ape.
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item lg={1} md={2} sm={2} xs={2}>
                    <Box
                      fontSize="16px"
                      lineHeight="27px"
                      color="#bfc500"
                      fontFamily="Montserrat-MediumItalic"
                    >
                      90%{" "}
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} sm={10} xs={10}>
                    <Box
                      fontSize="13px"
                      lineHeight="19px"
                      color="#ffffff"
                      mt={0.5}
                      fontFamily="Montserrat-Regular"
                      className={classes.roadmaptext}
                    >
                      The Bored Ape liquidity pool is initiated.
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item lg={1} md={2} sm={2} xs={2}>
                    <Box
                      fontSize="16px"
                      lineHeight="27px"
                      color="#bfc500"
                      fontFamily="Montserrat-MediumItalic"
                    >
                      100%{" "}
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} sm={10} xs={10}>
                    <Box
                      fontSize="13px"
                      lineHeight="19px"
                      color="#ffffff"
                      mt={0.5}
                      fontFamily="Montserrat-Regular"
                      className={classes.roadmaptext}
                    >
                      The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed.
                      And we cook up new ways to ape with our friends.
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* ............... */}
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box mt={4}>
                <img src={Shirt} className={classes.shirtwidth} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider className={classes.dividersetting} />
      </Container>
    </>
  );
}
