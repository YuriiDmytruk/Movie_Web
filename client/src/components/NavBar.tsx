import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from '../styled/NavBar';

interface NavBarPropsInterfce {
  setQuery: (query: string) => void;
}

const NavBar: React.FC<NavBarPropsInterfce> = (props) => {
  const [search, setSearch] = useState('');

  const onCangeSearch = (value: string) => {
    console.log(value);
    setSearch(value);
  };

  const onSearchClick = () => {
    props.setQuery(search);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movies
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              onSearchClick();
            }}
          >
            Search
          </Button>
          <Search
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onCangeSearch(event.target.value);
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
