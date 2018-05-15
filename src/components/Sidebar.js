// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

// MUI icons
import AddIcon from '@material-ui/icons/Add';

// Own modules
import SearchChat from './SearchChat';
import ChatList from './ChatList';
import ChatNav from './ChatNav';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
    height: '100%',
    overflow: 'hidden',
  },

  drawerTopToolbar: {
    ...theme.mixins.toolbar,
    flexShrink: 1,
  },

  chatsListHolder: {
    flexShrink: 1,
    flexGrow: 1,
    overflowY: 'scroll'
  },

  chatNavHolder: {
    position: 'relative',
    marginTop: 'auto',
    flexShrink: 1,
  },

  buttonAdd: {
    position: 'absolute',
    bottom: 'calc(100% + 20px)',
    right: 25,
  },
});

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerTopToolbar}>
      <SearchChat />
    </div>
    <Divider />

    <div className={classes.chatsListHolder}>
      <ChatList chats={chats} />
    </div>

    <div className={classes.chatNavHolder}>
      <Divider />

      <Button variant="fab" color="secondary" aria-label="add" className={classes.buttonAdd}>
        <AddIcon />
      </Button>

      <ChatNav />
    </div>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
