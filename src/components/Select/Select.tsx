import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import plFlag from '../../assets/pl.png'
import gbFlag from '../../assets/gb.png'
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import GlobalState from '../../context/GlobalState';

const useStyles = makeStyles({
  select: {
      '&:before': {
          borderColor: '#111',
      },
      '&:after': {
          borderColor: '#111',
      },
   
  },
  icon: {
    fill: '#111',
    marginBottom: '2px'
  }
});
export default function BasicSelect() {
  const { lang, setLang } = useContext(GlobalState);
  // const [state, setState] = ;

  const handleChange = (event: SelectChangeEvent) => {
    if(setLang !== undefined) {
      setLang(event.target.value);
    }
  };

const classes = useStyles()
const isPl = lang === 'pl';
const texts: Record<string, string> = {
    label: isPl ? 'Język' : 'Language',
    languagePol: isPl ? 'Polski' : 'Polish',
    languageEng: isPl ? 'Angielski' : 'English',
}
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" fullWidth>
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
            label={texts.label}
            onChange={handleChange}
            style={{color: '#111', fontSize: '18px'}}
        >
          <MenuItem style={{ display: 'flex'}} value={'pl'}>{texts.languagePol} &nbsp; <img src={plFlag} /></MenuItem>
          <MenuItem style={{ display: 'flex'}} value={'en'}>{texts.languageEng}  &nbsp; <img src={gbFlag} /> </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
