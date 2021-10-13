import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useStyles } from "./style";

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
     
    >
  
      <List>
  
          <ListItem button>
            <ListItemText className={classes.mobtext}> BUY AN APE</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>ROADMAP</ListItemText>
          </ListItem>
           <ListItem button>
           <ListItemText className={classes.mobtext}>TEAM</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>MAYC</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>GALLERY</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>PROVENANCE</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>MEMBERS</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>KENNEL CLUB</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>MERCH</ListItemText>
          </ListItem>
          <ListItem button>
          <ListItemText className={classes.mobtext}>BATHROOM</ListItemText>
          </ListItem>
        
          
         
      
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            color="inherit"
            className={classes.menumob}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={classes.drawersetting}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
