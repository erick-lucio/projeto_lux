import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 80+'%',
      
    },
  },
}));

export default function TextArea(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={false}
          id="standard-error-helper-text"
          label={props.label}
          helperText={props.helperText}
          placeholder={props.placeholder}
        />
      </div>

    </form>
  );
}