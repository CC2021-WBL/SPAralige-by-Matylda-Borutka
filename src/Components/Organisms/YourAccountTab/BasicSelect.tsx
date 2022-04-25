import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

function BasicSelect(prop) {
  const [colors, setColors] = React.useState('');
  const [language, setLanguage] = React.useState('');

  const handleColorChange = (event: any) => {
    setColors(event.target.value as string);
  };
  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value as string);
  };

  const {
    // t,
    i18n,
  } = useTranslation('navFooter');
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      {prop.colorsSelect && (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small" disabled>
            <InputLabel id="demo-simple-select">Kolory</InputLabel>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
              value={colors}
              label="Kolory"
              onChange={handleColorChange}
            >
              <MenuItem value={1}>domyślny</MenuItem>
              <MenuItem value={2}>delikatny</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      {prop.langSelect && (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small" disabled>
            <InputLabel id="demo-simple-select">Język</InputLabel>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
              value={language}
              label="lang"
              onChange={handleLanguageChange}
            >
              <MenuItem
                value={'polish'}
                onClick={() => {
                  changeLanguage('pl');
                }}
              >
                polski
              </MenuItem>
              <MenuItem
                value={'english'}
                onClick={() => {
                  changeLanguage('en');
                }}
              >
                english
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}
    </>
  );
}

export default BasicSelect;
