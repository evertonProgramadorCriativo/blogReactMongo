// eslint-disable-next-line

import React, { useEffect, useState } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useFrom from "./useForm";

const initialFieldValues = {
  title: "",
  message: ""
};

const styles = (theme) => ({
  root: {
    "& .MuiTexField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
   postBtn:{

    width: "50%"
  }
});

const PostMessagesFrom = ({ classes, ...props }) => {

  const validade = () => {
    let temp = {...errors}
    temp.title = values.title?"":"This field is required."
    temp.message = values.message?"":"This field is required."
    return Object.values(temp).every( x => x == "")

  }
 
  var { values, setValues, errors, setErrors,handleInputChange } = useFrom(initialFieldValues);

  const handleSubmit = e => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root}  ${classes.form}`}
      onSubmit={handleSubmit}
    >

   
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
        onChange={handleInputChange}
      />  
       <Button
       variant="contained"
       color="primary"
       size="large"
       type="submit"
       className={classes.postBtn}
       >Submit</Button>

    </form>
  );
};

export default withStyles(styles)(PostMessagesFrom);
