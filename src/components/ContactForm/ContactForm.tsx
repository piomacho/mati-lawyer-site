import React, { useContext } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import GlobalState from '../../context/GlobalState';
import { Wrapper } from './ContactForm.style';

export const ContactForm = () => {
    const { lang } = useContext(GlobalState);
    const isPl = lang === 'pl';
    const texts: Record<string, string> = {
        contact: isPl ? 'Skontaktuj się z nami !' : 'Contact with us !',
        fillForm: isPl ? 'Wypełnij ponizszy formularz.' : 'Fill the form below.',
        firstName: isPl ? 'Imię' : 'First Name',
        lastName: isPl ? 'Nazwisko' : 'Last Name',
        phone: isPl ? 'Telefon' : 'Phone number',
        message: isPl ? 'Wiadomość' : 'Type your message here',
        submit: isPl ? 'Wyślij' : 'Sumbmit',
        enterName: isPl ? 'Wpisz imię' : 'Enter first name',
        enterLastName: isPl ? 'Wpisz nazwisko' : 'Enter last name',
        enterEmail: isPl ? 'Wpisz email' : 'Enter email',
        enterPhone: isPl ? 'Wpisz numer telefonu' : 'Enter phone number',
    }
    
    return (
        <Wrapper> 
            <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto"}}>
            <CardContent>
                <Typography gutterBottom variant="h5">
                {texts.contact}
            </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                {texts.fillForm}
            </Typography> 
                <form>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                    <TextField onChange={(a) => console.log(a)} placeholder={texts.enterName} label={texts.firstName} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                    <TextField placeholder={texts.enterLastName}  label={texts.lastName} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField type="email" placeholder={texts.enterEmail} label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField type="number" placeholder={texts.enterPhone} label={texts.phone} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField label={texts.message} multiline rows={4} placeholder={texts.message} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button style={{backgroundColor: '#000', color: '#fff'}} type="submit" variant="contained" color="primary" fullWidth>{texts.submit}</Button>
                    </Grid>

                </Grid>
                </form>
            </CardContent>
            </Card>
            </Grid>
        </Wrapper>
    )
}
