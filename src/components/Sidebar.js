// React
import React from 'react';

// MUI components
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Button from 'material-ui/Button';

// MUI icons
import ChildCare from '@material-ui/icons/ChildCare';
import Rowing from '@material-ui/icons/Rowing';
import AddIcon from '@material-ui/icons/Add';

// vendor modules
import nanoid from 'nanoid';

// Own modules
import getInitials from '../utils/getInitials';
import SearchChat from './SearchChat';

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

  chatNav: {
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
      <List>
        {
          chats.map(item => (
            <ListItem button key={nanoid()}>
              <Avatar>
                {getInitials(item.name)}
              </Avatar>
              <ListItemText primary={item.name} secondary={item.date} />
            </ListItem>
          ))
        }
      </List>
    </div>

    <div className={classes.chatNav}>
      <Divider />

      <Button variant="fab" color="secondary" aria-label="add" className={classes.buttonAdd}>
        <AddIcon />
      </Button>

      <BottomNavigation showLabels>
        <BottomNavigationAction label="My Chats" icon={<ChildCare />} />
        <BottomNavigationAction label="All Chats" icon={<Rowing />} />
      </BottomNavigation>
    </div>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
