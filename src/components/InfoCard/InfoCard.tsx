import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Title } from './InfoCard.style';
import { ModalComponent } from '../Modal/Modal';

interface AreaCardType { 
  title: string
}

export const ActionAreaCard = ({ title }: AreaCardType) => {
  return (
    <Card style={{backgroundColor: "#000", color: '#fff', marginRight: '20px', marginTop: '20px'}} sx={{ maxWidth: 445, width: 350, height: 200 }}>
      <CardActionArea style={{ height: '100%'}}>
        {/* <CardMedia
          component="img"
          height="140"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Title>
             {title}

            </Title>
           
          </Typography>
     
        </CardContent>
      </CardActionArea>
    </Card>
  );
}