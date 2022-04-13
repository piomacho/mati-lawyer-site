import React, { useContext, useRef, useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import GlobalState from '../../context/GlobalState';
import { SuccessMessage, Wrapper } from './ContactForm.style';
import emailjs from '@emailjs/browser';
import { serviceName, templateID, userId } from '../../email.config';

export const ContactForm = () => {
    const { lang } = useContext(GlobalState);
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const isPl = lang === 'pl';
    const texts: Record<string, string> = {
        contact: isPl ? 'Skontaktuj się z nami !' : 'Contact with us !',
        fillForm: isPl ? 'Wypełnij ponizszy formularz.' : 'Fill the form below.',
        firstName: isPl ? 'Imię' : 'First Name',
        lastName: isPl ? 'Nazwisko' : 'Last Name',
        phone: isPl ? 'Telefon' : 'Phone number',
        message: isPl ? 'Wiadomość' : 'Type your message here',
        submit: isPl ? 'Wyślij' : 'Submit',
        enterName: isPl ? 'Wpisz imię' : 'Enter first name',
        enterLastName: isPl ? 'Wpisz nazwisko' : 'Enter last name',
        enterEmail: isPl ? 'Wpisz email' : 'Enter email',
        enterPhone: isPl ? 'Wpisz numer telefonu' : 'Enter phone number',
        success: isPl ? 'Wysłano wiadomość.' : 'Message was sent successfully.'
    }
    const isValid = formData.name !== "" && formData.lastName !== "" && formData.email !== "" && formData.email.includes('@') && formData.message !== "" && formData.phone !== "";
    const sendEmail = (e: any) => {
        e.preventDefault();
        var templateParams = {
            from_name: formData.name,
            last_name: formData.lastName,
            message: formData.message,
            phone: formData.phone,
            email: formData.email

        };
        emailjs.send(serviceName, templateID, templateParams, userId)
          .then((result) => {
              console.log(result.text);
              setFormData({
                name: "",
                lastName: "",
                phone: "",
                email: "",
                message: "",
            })
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3500);
          }, (error) => {
              console.log(error.text);
              setSuccess(false);
          });
      };
    
    const useStyles = makeStyles({
    card: {
        maxWidth: 450, padding: "0 5%", margin: "0 auto",
        ['@media (min-width:780px)']: {
            padding: "20px 5px", margin: "0 auto"
        },
    },
    });

    const classes = useStyles();
    return (
        <Wrapper> 
            <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px 10px 5px", margin: "0 auto"}}>
            <CardContent>
                <Typography gutterBottom variant="h5">
                {texts.contact}
            </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                {texts.fillForm}
            </Typography> 
                <form onSubmit={sendEmail}>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                        <TextField onChange={(a) => setFormData({...formData, name: a.target.value})} value={formData.name} placeholder={texts.enterName} label={texts.firstName} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField  onChange={(a) => setFormData({...formData, lastName: a.target.value})} placeholder={texts.enterLastName} value={formData.lastName}  label={texts.lastName} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="email"  onChange={(a) => setFormData({...formData, email: a.target.value})} placeholder={texts.enterEmail} value={formData.email} label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="number"  onChange={(a) => setFormData({...formData, phone: a.target.value})} placeholder={texts.enterPhone} value={formData.phone} label={texts.phone} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label={texts.message}  onChange={(a) => setFormData({...formData, message: a.target.value})} multiline rows={4} placeholder={texts.message} value={formData.message} variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button style={{backgroundColor: isValid ? '#000' : '#ccc8c8', color: '#fff', cursor: isValid ? 'pointer' : 'not-allowed'}} type="submit" variant="contained" color="primary" fullWidth>{texts.submit}</Button>
                    </Grid>
                    <Grid item xs={12}>
                        {success ? <SuccessMessage>{texts.success}</SuccessMessage> : null }
                    </Grid>

                </Grid>
                </form>
            </CardContent>
            </Card>
            </Grid>
        </Wrapper>
    )
}
