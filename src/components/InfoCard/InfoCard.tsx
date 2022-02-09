import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Title } from './InfoCard.style';
import { makeStyles } from '@material-ui/core';
import GlobalState from '../../context/GlobalState';

interface AreaCardType { 
  title: string,
  type: string,
}
const useStyles = makeStyles({
  card: {
    width: 300,
    height: 70,
    ['@media (min-width:780px)']: {
      width: 350,
      height: 200
    },
  },
});
export const ActionAreaCard = ({ title, type }: AreaCardType) => {
  const classes = useStyles()
  const { modalType, setModalOpen } = React.useContext(GlobalState);
  if(setModalOpen === undefined) {
    return null;
  }
  return (
    <Card 
      style={{backgroundColor: "#000", color: '#fff', marginRight: '20px', marginTop: '20px'}}
      // sx={{ maxWidth: 445, width: 350, height: 200 }}
      className={classes.card}
      onClick={() => setModalOpen(type)}
      >
      <CardActionArea style={{ height: '100%'}}>
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

