import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Tomar" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Anshul Gautam" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>hi! 👋
          <br /></span>I am{" "}
        <span itemProp="givenName">Anshul.</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        I am a Software Engineer and Blogger from India
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        {/*With a detail oriented focus, I enjoy creating simple but effective software solutions, improve application performance with ease of maintenance, and enhance the overall user experience.*/}
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
