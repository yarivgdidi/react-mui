import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Avatar, Box, Link, Grid, Typography, Container, CssBaseline,
    Checkbox, FormControlLabel, TextField
} from "@mui/material";

import {selectUser, signinUser, clearState} from '../userSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {Page} from "../../../app/layout/Page";


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export function SignIn() {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const { isFetching, isSuccess, isError } = useAppSelector(selectUser)

    useEffect(() => {
        if (isError) {
            dispatch(clearState());
        }
        if (isSuccess) {
            history.push('/');
        }
    }, [isError, isSuccess, history, dispatch]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email = data.get('email') as string;
        let password = data.get('password') as string;
        if (email && password) {
            dispatch(signinUser({ email, password}))
        }

    };

    return (
        <Page>
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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={isFetching}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs >
                            <Link href="forgot-password" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item >
                            <Link href="sign-up" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </Page>
    );
}
