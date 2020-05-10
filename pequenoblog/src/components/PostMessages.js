import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage.js";
import {
  Grid,
  Paper,
  withStyles,
  Typography,
  Divider
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PostMessageForm from "./PostMessageForm";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
});

const PostMessages = ({ classes, ...props }) => {
  //const [x, setX] = useState(0)
  //setX(5)

  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessageForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {props.postMessageList.map((record, index) => {
              return (
                <Fragment key={index}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="n5">{record.title}</Typography>
                      <div>{record.message}</div>
                    </ListItemText>
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(PostMessages));
