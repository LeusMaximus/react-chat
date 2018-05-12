// React
import React from 'react';

// MUI components
import { withStyles } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

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

const SearchChat = ({ classes }) => (
  <div className={classes.searchChat}>
    <FormControl fullWidth>
      <InputLabel htmlFor="search_chat">Search chats...</InputLabel>

      <Input
        id="search_chat"
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  </div>
);

export default withStyles(styles)(SearchChat);
