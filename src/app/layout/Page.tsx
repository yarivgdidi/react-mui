import {Container, Grid} from "@mui/material";

export function Page({children}: any) {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {children}
            </Grid>
        </Container>
    );
}
