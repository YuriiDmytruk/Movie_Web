import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

import { Search, SearchIconWrapper, StyledInputBase } from '../styled/NavBar';

import { DocumentNode } from '@apollo/client';
import {
  GET_POPULAR,
  GET_POPULAR_TYPE,
  GET_TOP_RATED,
  GET_TOP_RATED_TYPE,
  GET_NOW_PLAYING,
  GET_NOW_PLAYING_TYPE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_TYPE,
} from '../apolo/queries';

interface NavBarPropsInterfce {
  setQuery: (query: string) => void;
  setgqlQuery: (queryObject: { query: DocumentNode; type: string }) => void;
}

const NavBar: React.FC<NavBarPropsInterfce> = (props) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const onCangeSearch = (value: string) => {
    setSearch(value);
  };

  const onNowPlayingClick = () => {
    props.setgqlQuery({ query: GET_NOW_PLAYING, type: GET_NOW_PLAYING_TYPE });
    navigate('/');
  };

  const onPopularClick = () => {
    props.setgqlQuery({ query: GET_POPULAR, type: GET_POPULAR_TYPE });
    navigate('/');
  };

  const onTopRatedClick = () => {
    props.setgqlQuery({ query: GET_TOP_RATED, type: GET_TOP_RATED_TYPE });
    navigate('/');
  };

  const onSearchClick = () => {
    props.setgqlQuery({ query: SEARCH_MOVIE, type: SEARCH_MOVIE_TYPE });
    props.setQuery(search);
  };

  const onStatisticClick = () => navigate('/statistic');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'inline-flex',
              },
              textAlign: 'center',
              flexDirection: 'row',
              width: '650px',
            }}
          >
            <ListItem key="Now Playing">
              <ListItemButton
                onClick={onNowPlayingClick}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary="Now Playing" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Popular">
              <ListItemButton
                onClick={onPopularClick}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary="Popular" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Top Rated">
              <ListItemButton
                onClick={onTopRatedClick}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary="Top Rated" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Statistic">
              <ListItemButton
                sx={{ textAlign: 'Statistic' }}
                onClick={onStatisticClick}
              >
                <ListItemText primary="Statistic" />
              </ListItemButton>
            </ListItem>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'inline-flex',
              },
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <ListItem key="Search">
              <ListItemButton
                onClick={onSearchClick}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary="Search" />
              </ListItemButton>
            </ListItem>
            <Search sx={{ maxHeight: '50px' }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ cursor: 'pointer' }} />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(event) => {
                  onCangeSearch(event.target.value);
                }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
