import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textColor: {
    color: '#000000',
  },
}));

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  const classes = useStyles();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleLoginSubmit = async event => {
    console.log(email, password);
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
      props.history.replace('/home');
    } catch (err) {
      // need to add user message
      console.log(err.message);
      setHelperText('EMAIL OR PASSWORD INCORRECT');
      setError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.textColor} component="h1" variant="h5">
          Sign In
        </Typography>
        <form onSubmit={handleLoginSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="email"
            name="email"
            label="Email"
            type="email"
            value={email}
            error={error}
            helperText={helperText}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            error={error}
            helperText={helperText}
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(Login);
