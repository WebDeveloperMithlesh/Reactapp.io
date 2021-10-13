import React from "react";
import { Box, Container, Grid, Button, IconButton } from "@mui/material";
import { useStyles } from "./style";
import clsx from "clsx";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footericon from "../../assets/images/bayc-footer.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import AndroidIcon from "@mui/icons-material/Android";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Hidden } from "@mui/material";

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Hidden mdDown>
          <Grid container>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box
                fontSize="13px"
                lineHeight="20px"
                color="#ffffff"
                fontFamily="Montserrat-MediumItalic"
                mt={9}
              >
                GET ON THE LIST
              </Box>
              <input
                type="email"
                id="fname"
                name="fname"
                placeholder="Email Address"
                className={classes.footerinput}
              />
              <IconButton className={classes.footerbtn}>
                <ArrowRightAltIcon className={classes.footerarrow} />
              </IconButton>
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box textAlign="center">
                <img
                  src={Footericon}
                  width="60%"
                  height="auto"
                  className={clsx(classes.apeimg, classes.apimrgn)}
                />
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box textAlign="right" className={classes.footersetting} mt={8}>
                <IconButton
                  color="inherit"
                  href="https://www.youtube.com/watch?v=xeDDq6BkScc"
                >
                  <YouTubeIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://www.instagram.com/boredapeyachtclub/"
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://discord.com/invite/3P5K3dzgdB"
                >
                  <AndroidIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://twitter.com/BoredApeYC"
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
              </Box>
              <Box
                fontSize="10px"
                lineHeight="20px"
                color="#ffffff"
                textAlign="right"
                fontFamily="Montserrat-Regular"
              >
                © 2021 Yuga Labs LLC
              </Box>
              <Box
                fontSize="10px"
                lineHeight="20px"
                color="#ffffff"
                textAlign="right"
                fontFamily="Montserrat-Regular"
              >
                {" "}
                <a className={classes.VERIFIED}> BAYC Terms & Conditions</a>
              </Box>
              <Box
                fontSize="10px"
                lineHeight="20px"
                color="#ffffff"
                textAlign="right"
                fontFamily="Montserrat-Regular"
              >
                {" "}
                <a className={classes.VERIFIED}>MAYC Terms & Conditions</a>
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container justifyContent="center">
            <Grid item sm={4} xs={6}>
              <Box textAlign="center">
                <img
                  src={Footericon}
                  width="50%"
                  height="auto"
                  className={clsx(classes.apeimg, classes.apimrgn)}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item sm={8} xs={10}>
              <Box
                fontSize="13px"
                lineHeight="20px"
                color="#ffffff"
                fontFamily="Montserrat-MediumItalic"
                textAlign="center"
              >
                GET ON THE LIST
              </Box>
              <input
                type="email"
                id="fname"
                name="fname"
                placeholder="Email Address"
                className={classes.footerinput}
              />
              <IconButton className={classes.footerbtn}>
                <ArrowRightAltIcon className={classes.footerarrow} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item sm={4} xs={4}>
              <Box
                fontSize="10px"
                lineHeight="20px"
                color="#ffffff"
                textAlign="center"
                fontFamily="Montserrat-Regular"
                my={5}
              >
                © 2021 Yuga Labs LLC
              </Box>
            </Grid>
            <Grid item sm={4} xs={4}>
              <Box textAlign="center" className={classes.footersetting} my={2}>
                <IconButton
                  color="inherit"
                  href="https://www.youtube.com/watch?v=xeDDq6BkScc"
                >
                  <YouTubeIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://www.instagram.com/boredapeyachtclub/"
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://discord.com/invite/3P5K3dzgdB"
                >
                  <AndroidIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://twitter.com/BoredApeYC"
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
            <Grid item sm={4} xs={4}>
              <Box
                fontSize="10px"
                lineHeight="20px"
                color="#ffffff"
                textAlign="center"
                mt={5}
                fontFamily="Montserrat-Regular"
              >
                {" "}
                <a className={classes.VERIFIED}> BAYC Terms & Conditions</a>
              </Box>
              <Box
                fontSize="10px"
                lineHeight="20px"
                color="#ffffff"
                textAlign="center"
                mb={5}
                fontFamily="Montserrat-Regular"
              >
                {" "}
                <a className={classes.VERIFIED}>MAYC Terms & Conditions</a>
              </Box>
            </Grid>
          </Grid>
        </Hidden>
      </Container>
      <Box bgcolor="#bfc500" py={1}></Box>
    </>
  );
}
