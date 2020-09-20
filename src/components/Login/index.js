import React from "react"
import { navigate } from "gatsby"
import styles from "./login.module.css"
import { handleLogin, isLoggedIn } from "../../utils/auth"
// imports from Chris' login
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
// import logo from '../images/K_Fav_tn.jpg';

{/* import { navigate } from "@reach/router" */ }

const Form = ({ handleSubmit, handleUpdate }) => {
    return (
        <form
            className={styles.form}
            method="post"
            onSubmit={event => {
                handleSubmit(event)
                navigate(`/app/profile`)
            } }
        >
            <p className={styles[`form__instructions`]}>
                For this demo, please log in with the username <code>gatsby</code> and the
                password <code>demo</code>.
            </p>
            <label className={styles[`form__label`]}>
                Username
                <input
                    className={styles[`form__input`]}
                    type="text"
                    name="username"
                    onChange={handleUpdate} />
            </label>
            <label className={styles[`form__label`]}>
                Password
                <input
                    className={styles[`form__input`]}
                    type="password"
                    name="password"
                    onChange={handleUpdate} />
            </label>
            <input className={styles[`form__button`]} type="submit" value="Log In" />
        </form>
    )
}

class Login extends React.Component {
    state = {
        username: ``,
        password: ``,
    }

    handleUpdate(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        handleLogin(this.state)
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/app/dashboard`)
        }

        return (
            <Form
                handleUpdate={e => this.handleUpdate(e)}
                handleSubmit={e => this.handleSubmit(e)}
        />
        )
    }
}

export default Login

/*
https://github.com/kalamos-care/provider-frontend/blob/login/src/pages/login.js

export default function SignIn() {
  const API_BASE_URL = "http://127.0.0.1:8888/" //move this

  
  const [state , setState] = useState({
    email : "",
    password : ""
  })
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }
  const redirectToHome = () => {
    //props.updateTitle('Home')
    //props.history.push('/home');
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload={
      "email":state.email,
      "password":state.password,
    }
    axios.post(API_BASE_URL+'login', payload)
        .then(function (response) {
            if(response.data.code === 200){
                redirectToHome();
                //props.showError(null)
            }
            else if(response.data.code === 204){
                //props.showError("Username and password do not match");
            }
            else{
                //props.showError("Username does not exists");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
  }

      <div className={classes.paper}>
        <img src={logo} alt="logo" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={state.email}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      */