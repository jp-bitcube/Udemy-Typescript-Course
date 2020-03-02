import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-left: 40%;
`

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: '60%',
      color: 'rgba(139,197,205, 0.5)',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();

  return (
    <InputContainer>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label="What do you want to do?"
          placeholder="Write it down to remember!"
          multiline
          variant="outlined"
        />
      </form>
    </InputContainer>

  );
}