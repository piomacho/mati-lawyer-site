import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

export const ContactForm = () => {
    return (
        <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto"}}>
        <CardContent>
            <Typography gutterBottom variant="h5">
            Skontaktuj się z nami !
        </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Wypełnij ponizszy formularz
        </Typography> 
            <form>
            <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                <TextField onChange={(a) => console.log(a)} placeholder="Enter first name" label="Imię" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter last name" label="Nazwisko" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <TextField label="Wiadomość" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <Button style={{backgroundColor: '#000', color: '#fff'}} type="submit" variant="contained" color="primary" fullWidth>Wyślij</Button>
                </Grid>

            </Grid>
            </form>
        </CardContent>
        </Card>
        </Grid>
    )
}
