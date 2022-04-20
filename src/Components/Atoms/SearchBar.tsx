// import CloseIcon from '@mui/icons-material/Close';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  searchBar: {
    width: '100%',
  },
  input: { color: '#000000DE' },
});
function SearchBar() {
  // { onChange }: { onChange?: (event: any) => void }
  const classes = useStyles();

  return (
    <TextField
      id="search-bar"
      className={classes.searchBar}
      variant="outlined"
      placeholder="Szukaj zabiegu"
      // onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: '#0000008A', fontSize: '1.0625rem' }} />
          </InputAdornment>
        ),
        className: classes.input,
      }}
    />
  );
}

export default SearchBar;
