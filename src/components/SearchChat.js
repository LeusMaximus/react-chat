// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

// MUI icons
import Search from '@material-ui/icons/Search';

const styles = theme => ({
  searchChat: {
    paddingTop: 5,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    overflow: 'hidden',
  },
});

const SearchChat = ({ classes, onChange, term }) => (
  <div className={classes.searchChat}>
    <FormControl fullWidth>
      <InputLabel htmlFor="search_chat">Search chats...</InputLabel>

      <Input
        id="search_chat"
        onChange={onChange}
        value={term}
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  </div>
);

SearchChat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};

export default withStyles(styles)(SearchChat);
