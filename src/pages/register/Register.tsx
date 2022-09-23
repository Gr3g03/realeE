import { FC } from 'react';
import { useDispatch } from 'react-redux';
import onRegister from '../../main/store/stores/user/register.store.on-register';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IUser from '../../main/interfaces/IUser';

const RegisterPage: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const firstName: string = e.target.firstName.value;
    const lastName: string = e.target.lastName.value;
    const email: string = e.target.email.value;
    const address: string = e.target.address.value;
    const phone: string = e.target.phone.value;
    const userName: string = e.target.userName.value;
    const avatar: string = e.target.avatar.value;
    const password = e.target.password.value;
    const data: IUser = {
      firstName,
      lastName,
      email,
      address,
      phone,
      userName,
      password,
      avatar,
    };
    dispatch(onRegister(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>

            <Grid item xs={12}>
              <TextField required fullWidth id="phone" label="phone" name="phone" autoComplete="phone" />
            </Grid>

            <Grid item xs={12}>
              <TextField required fullWidth id="address" label="address" name="address" autoComplete="address" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="userName" label="userName" name="userName" autoComplete="userName" />
            </Grid>

            <Grid item xs={12}>
              <TextField required fullWidth id="avatar" label="avatar" name="avatar" autoComplete="avatar" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end"></Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
