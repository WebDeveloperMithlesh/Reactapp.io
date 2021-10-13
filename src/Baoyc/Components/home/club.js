import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";
import Icon4 from "../../assets/images/icon4.png";
import Icon5 from "../../assets/images/icon5.png";

export default function Club() {
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
          mt={5}
        >
          WELCOME TO THE CLUB
        </Box>
        <Grid container>
          <Grid item lg={8}>
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
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Card
              sx={{
                maxWidth: 187,
                textAlign: "center",
                background: "black",
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                className={classes.clubcard}
                image={Icon1}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  fontSize="13px"
                  lineHeight="19px"
                  color="#ffffff"
                  fontFamily="Montserrat-Regular"
                >
                  {" "}
                  10,000 Provably-rare Bored Ape tokens{" "}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Card
              sx={{
                maxWidth: 187,
                textAlign: "center",
                background: "black",
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                className={classes.clubcard}
                image={Icon2}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  fontSize="13px"
                  lineHeight="19px"
                  color="#ffffff"
                  fontFamily="Montserrat-Regular"
                >
                  {" "}
                  Fair Launch, fair distribution: All apes cost 0.08 ETH{" "}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Card
              sx={{
                maxWidth: 187,
                textAlign: "center",
                background: "black",
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                className={classes.clubcard}
                image={Icon3}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  fontSize="13px"
                  lineHeight="19px"
                  color="#ffffff"
                  fontFamily="Montserrat-Regular"
                >
                  {" "}
                  Ownership and commercial usage rights given to the consumer
                  over their NFT
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Card
              sx={{
                maxWidth: 187,
                textAlign: "center",
                background: "black",
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                className={classes.clubcard}
                image={Icon4}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  fontSize="13px"
                  lineHeight="19px"
                  color="#ffffff"
                  fontFamily="Montserrat-Regular"
                >
                  The Bathroom: A member's-only graffiti board
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Card
              sx={{
                maxWidth: 187,
                textAlign: "center",
                background: "black",
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                className={classes.clubcard}
                image={Icon5}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  fontSize="13px"
                  lineHeight="19px"
                  color="#ffffff"
                  fontFamily="Montserrat-Regular"
                >
                  Gain additional benefits through roadmap activations
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Divider className={classes.dividersetting} />
      </Container>
    </>
  );
}
