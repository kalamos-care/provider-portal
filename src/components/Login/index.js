import React from "react"
import { Link, navigate } from "gatsby"
import styles from "./login.module.css"
import { handleLogin, isLoggedIn } from "../../utils/auth"
// imports from Chris' login
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    <div className={styles.login}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <p className={styles[`form__instructions`]}>
        For this demo, please log in with the email <code>jay@gatsby.org</code> and the password <code>demo</code>.
      </p>
      <form
        className={styles.form}
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/app/profile`)
        }}
      >
        <Grid container>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              // fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // value={state.email}
              onChange={handleUpdate}
              autoFocus
            ></TextField>
          </Grid>
          </Grid>
          <Grid container>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              // fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // value={state.password}
              onChange={handleUpdate}
              autoComplete="current-password"
            />
          </Grid>
          </Grid>
          <Grid container>
          <Grid item sm>
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              className={styles[`form__button`]}
              // onClick={handleSubmitClick}
              value="Log In"
            >
              Sign In
          </Button>
          </Grid>
        </Grid>
        <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </form>
    </div>
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

        <form className={classes.form} noValidate>

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