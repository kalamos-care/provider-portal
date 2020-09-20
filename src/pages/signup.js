import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import logo from '../images/K_Fav_tn.jpg';
import axios from 'axios';



export default function SignUp(props) {


      const [state , setState] = useState({
        provider_first_name: "",
        provider_last_name: "",
        provider_email: "",
        provider_phone: "",
        provider_npi: "",
        provider_medicaid_id: "",
        provider_state_licenses: "",
        provider_password: "",
    })

      
      const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
      const API_BASE_URL = "http://127.0.0.1:8888/" //move this
      
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
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
      
      const redirectToHome = () => {
          //props.updateTitle('Home')
          //props.history.push('/home');
        }
        
      const handleSubmitClick = (e) => {
          //e.preventDefault();
          sendDetailsToServer()    
          console.log("state.password " + state.password)

          if(state.password) {
              console.log("asdasdasadas")
      
              sendDetailsToServer()    
          } else {
              //props.showError('Passwords do not match');
          }
      }
      
      const sendDetailsToServer = () => {
          console.log("asdasdasadas")
      
          if(true) {
              //props.showError(null);
              const payload={
                  "provider_first_name":state.provider_first_name,
                  "provider_last_name":state.provider_last_name,
                  "provider_email":state.provider_email,
                  "provider_phone":state.provider_phone,
                  "provider_npi":state.provider_npi,
                  "provider_medicaid_id":state.provider_medicaid_id,
                  "provider_state_licenses":state.provider_state_licenses,
                  "provider_password":state.provider_password
              }
              console.log("posted")
              axios.post(API_BASE_URL+'providers', payload)
                  .then(function (response) {
                      if(response.data.code === 200) {
                          //setState(prevState => ({
                          //    ...prevState,
                          //    'successMessage' : 'Registration successful. Redirecting to home page..'
                          //}))
                          //redirectToHome();
                          //props.showError(null)
                      } else {
                          //props.showError("Some error ocurred");
                      }
                  })
                  .catch(function (error) {
                      console.log(error);
                  });    
          } else {
              //props.showError('Please enter valid username and password')    
          }
          
      }


  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.paper}>

          {/* <img src={logo} alt="logo" /> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="provider_first_name"
                variant="outlined"
                onChange={handleChange}
                required
                fullWidth
                id="provider_first_name"
                label="First Name"
                value={state.provider_first_name}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                onChange={handleChange}
                required
                fullWidth
                id="provider_last_name"
                label="Last Name"
                name="lastNprovider_last_nameame"
                value={state.provider_last_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="provider_email"
                label="Email Address"
                onChange={handleChange}
                name="provider_email"
                value={state.provider_email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="provider_phone"
                label="Provider Phone"
                onChange={handleChange}
                name="provider_phone"
                value={state.provider_phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="provider_npi"
                label="Provider Npi"
                onChange={handleChange}
                name="provider_npi"
                value={state.provider_npi}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="provider_medicaid_id"
                label="Provider Medicaid Id"
                onChange={handleChange}
                name="provider_medicaid_id"
                value={state.provider_medicaid_id}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="provider_state_licenses"
                label="Provider State Licenses"
                onChange={handleChange}
                name="provider_state_licenses"
                value={state.provider_state_licenses}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="provider_password"
                label="Password"
                type="password"
                id="provider_password"
                onChange={handleChange}
                value={state.provider_password}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            ////type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="app/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Layout>
  );
  }
