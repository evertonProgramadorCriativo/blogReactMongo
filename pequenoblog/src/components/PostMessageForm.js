// eslint-disable-next-line

import React, { useEffect, useState } from "react";
import { TextField, withStyles } from "@material-ui/core";

const initialFieldValues = {
  title: "",
  message: "",
};

const styles = (theme) => ({
  root: {
    "& .MuiTexField-root": {
      margin: theme.spacing(1) 
    },
  }, form: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'center'
  }
});

const PostMessagesFrom = ({classes,...props}) => {
  const [values, setValues] = useState(initialFieldValues)

const handleInputChange = e => {
   const { name, value } = e.target
   setValues({
      ...value,
      [name]: value
   })
}

  return (
    <form autoComplete="off" noValidate className={ `${classes.root}  ${classes.form}`}>
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={values.title}
        onChange={handleInputChange}
      />

      <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={values.message}
      />
    </form>
  );
};

export default withStyles(styles)(PostMessagesFrom);
