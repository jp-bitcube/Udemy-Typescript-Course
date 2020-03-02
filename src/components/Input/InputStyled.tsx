import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(119,123,215, 1)',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'rgba(119,123,215, 0.7)',
       
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(119,123,215, 1)',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 100,
      color: 'white',
      background: 'rgba(139,197,205, 0.5)',
    },
    margin: {
      width: '60%',
      margin: theme.spacing(1),
    },
  }),
);

export default function InputStyled() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <CssTextField
        className={classes.margin}
        label="Create a To do!"
        variant="outlined"
        id="custom-css-outlined-input"
      />
    </form>
  );
}