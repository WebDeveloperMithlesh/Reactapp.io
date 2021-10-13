import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./style";
import Logo from "../../assets/images/updatedlogo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import AndroidIcon from "@mui/icons-material/Android";
import TwitterIcon from "@mui/icons-material/Twitter";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Mobilemenu from "./mobilemenu";
import { Hidden } from "@mui/material";


export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "black" }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.logo}
            >
              <img src={Logo} width="auto" height="70px" />
            </IconButton>
            <Hidden lgDown>
              <div className={classes.Appbarsetting}>
                <Button color="inherit">BUY AN APE</Button>
                <Button color="inherit">ROADMAP</Button>
                <Button color="inherit">TEAM</Button>
                <Button color="inherit">MAYC</Button>
                <Button color="inherit">GALLERY</Button>
                <Button color="inherit">PROVENANCE</Button>
                <Button
                  color="inherit"
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  MEMBERS
                </Button>
            
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  sx={{ top: "48px" }}
                  classes={{ paper: classes.menuPaper }}
                >
                  <MenuItem onClick={handleClose} className={classes.profile}>
                    KENNEL CLUB
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.profile}>
                    MERCH
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.profile}>
                    BATHROOM
                  </MenuItem>
                </Menu>
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
              </div>
            </Hidden>
            <Hidden lgUp>
              <div className={classes.Appbarsetting}>
                <Mobilemenu />
              </div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
