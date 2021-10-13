import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  logo: {
    "&:hover": {
      backgroundColor: "transparent !important ",
    },
  },
  btnmargn: {
    marginLeft: "auto",
  },
  Appbarsetting: {
    marginLeft: "auto",
    display:"flex",
    "& .MuiButton-textInherit": {
      fontSize: "9px",
      fontFamily: "Montserrat-MediumItalic",
      lineHeight: "12px",
      marginRight: "15px",
      "&:hover": {
        color: "#bfc500",
        backgroundColor: "transparent !important",
      },
    },
    "& .MuiIconButton-colorInherit": {
      "&:hover": {
        color: "#bfc500",
        backgroundColor: "transparent !important",
      },
    },
  },
  connectwallet:{
    fontSize: "9px",
    fontFamily: "Montserrat-MediumItalic",
    lineHeight: "12px",
    marginRight: "15px",
    backgroundColor: "transparent !important",
    "&:hover": {
      color: "#bfc500",
      backgroundColor: "transparent !important",
    },
  },
  menuPaper: {
    backgroundColor: "black !important ",
  },

  profile: {
    fontSize: "9px !important ",
    fontFamily: "Montserrat-MediumItalic !important ",
    lineHeight: "12px !important",
    color: "white !important ",
    "&:hover": {
      color: "#bfc500 !important ",
    },
  },
  menumob: {
    "&:hover": {
      color: "#bfc500",
      backgroundColor: "transparent !important",
    },
  },
  drawersetting: {
    "& .MuiDrawer-paper": {
      backgroundColor: "black !important ",
      width: "197px !important ",
    },
  },
  mobtext: {
    "& .MuiListItemText-primary": {
      fontSize: "12px !important ",
      fontFamily: "Montserrat-MediumItalic !important ",
      lineHeight: "12px !important",
      color: "white !important ",
      paddingTop: "10px",
      "&:hover": {
        color: "#bfc500 !important ",
      },
    },
  },
  openseabtn: {
    fontSize: "16px !important ",
    fontFamily: "Montserrat-SemiBold !important ",
    lineHeight: "25px !important",
    color: "#bfc500 !important ",
    backgroundColor: "black !important",
    padding: "5% !important",
    borderRadius: "8px !important",
    width: "210px",
    height: "71px",
    "&:hover": {
      color: "black !important",
      backgroundColor: "white !important",
    },
  },
  dividersetting: {
    borderColor: " white !important",
    borderStyle: "outset !important ",
    marginTop: "50px !important ",
  },
  record: {
    color: "#bfc500",
    "&:hover": {
      color: "white !important",
    },
  },
  clubcard: {
    width: "54% !important ",
    height: "149px  !important ",
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  tilotimg: {
    marginTop: "41px",
  },
  roadmaptext: {
    textDecoration: "line-through !important ",
  },
  shirtwidth: {
    width: "100% !important",
  },
  nftxpbtn: {
    fontSize: "16px !important ",
    fontFamily: "Montserrat-SemiBold !important ",
    lineHeight: "25px !important",
    color: "#000 !important ",
    backgroundColor: "#bfc500 !important",
    padding: "5% !important",
    borderRadius: "8px !important",
    width: "231px",
    height: "48px",
    marginTop: "10px !important ",
    "&:hover": {
      color: "black !important",
      backgroundColor: "white !important",
    },
  },
  teamtext: {
    fontFamily: "Montserrat-MediumItalic!important ",
    color: "white",
  },
  VERIFIED: {
    fontFamily: "Montserrat-MediumItalic!important ",
    color: "#bfc500",
    "&:hover": {
      color: "white !important",
    },
  },
  footerinput: {
    width: "80%",
    marginTop: "10px",
    padding: "8px",
    backgroundColor: "#272626",
    border: "none",
    fontSize: "12px",

    "&:active": {
      border: "none !important",
    },
    "&::placeholder": {
      fontFamily: "Montserrat-MediumItalic!important ",
      color: "#fff !important",
    },
  },
  footerbtn: {
    padding: "0px !important",
    boxShadow: "none !important",
  },
  footerarrow: {
    backgroundColor: "#4b4a4a",
    height: "30px !important ",
    width: "40px !important ",
    position: "relative",
    color: "#fff !important",
    top: "-1px",
    "&:hover": {
      backgroundColor: "#bfc500 !important",
      color: "black !important",
    },
  },
  footersetting: {
    marginLeft: "auto",
    color: "#fff !important",
    "& .MuiIconButton-colorInherit": {
      "&:hover": {
        color: "#bfc500",
        backgroundColor: "transparent !important",
      },
    },
  },
  VERIFIED: {
    color: "#bfc500",
    
    cursor: "pointer",
    "&:hover": {
      color: "white !important",
      borderBottom: "1px solid white ",
    },
  },

  // medium media query
  [theme.breakpoints.down("md")]: {
    apeimg: {
      width: "85%",
    },
    apimrgn: {
      marginTop: "20px",
    },
    fairmrgn: {
      marginTop: "20px",
    },
    bonding: {
      marginTop: "10px !important ",
    },
    openseabtn: {
      width: "auto",
      marginTop: "10px  !important ",
    },
    programmatically: {
      textAlign: "center",
    },
    Speciesgif: {
      marginTop: "30px  !important ",
    },
    nftxpbtn: {
      marginLeft: "30px !important ",
    },
    Communitybtn: {
      marginTop: "10px  !important ",
    },
  },
  //  small media query
  [theme.breakpoints.down("sm")]: {
    apeimg: {
      width: "100%",
    },
    welcomemrgn: {
      marginTop: "10px !important ",
    },
    tilotimg: {
      width: "35%  ",
    },
    smarttext: {
      fontSize: "13px !important ",
    },
  },
}));
