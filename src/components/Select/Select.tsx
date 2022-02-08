import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import plFlag from '../../assets/pl.png'
import gbFlag from '../../assets/gb.png'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  select: {
      '&:before': {
          borderColor: '#fff',
      },
      '&:after': {
          borderColor: '#fff',
      },
   
  },
  icon: {
    fill: '#fff',
  }
});
export default function BasicSelect() {
  const [lang, setLang] = React.useState('pl');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

const classes = useStyles()
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" fullWidth>
        {/* <InputLabel id="demo-simple-select-standard-label">Język</InputLabel> */}
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={lang}
            defaultValue='pl'
            className={classes.select}
            inputProps={{
              classes: {
                  icon: classes.icon,
              },
          }}
            label="Język"
            onChange={handleChange}
            style={{color: 'white'}}
        //   style={{display: 'flex', flexDirection: 'column'}}
        >
          <MenuItem style={{ display: 'flex'}} value={'pl'}>Polski &nbsp; <img src={plFlag} /></MenuItem>
          <MenuItem style={{ display: 'flex'}} value={'en'}>Angielski &nbsp; <img src={gbFlag} /> </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
