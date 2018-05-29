// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// MUI icons
import AddIcon from '@material-ui/icons/Add';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';

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

  notChatsMessage: {
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
    padding: '10px 5px',
  },
});

class Sidebar extends React.Component {
  state = {
    isMyChatsActive: true,
  };

  handleChatsTabChange = (e, value) => {
    this.setState({
      isMyChatsActive: value === 0 ? true : false,
    });
  };

  render() {
    const { classes, allChats, myChats } = this.props;
    const { isMyChatsActive } = this.state;
    const chats = isMyChatsActive ? myChats : allChats;

    return (
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
          {
            chats.length
              ? <ChatList chats={isMyChatsActive ? myChats : allChats} />
              : <Paper elevation={4} className={classes.notChatsMessage}>
                  <Typography variant="body1" align="center">
                    There is not chats yet...
                  </Typography>

                  <SentimentVeryDissatisfied style={{ marginLeft: 10 }} />
              </Paper>
          }
        </div>

        <div className={classes.chatNavHolder}>
          <Divider />

          <Button variant="fab" color="secondary" aria-label="add" className={classes.buttonAdd}>
            <AddIcon />
          </Button>

          <ChatNav tabsChange={this.handleChatsTabChange} tabNumber={isMyChatsActive ? 0 : 1} />
        </div>
      </Drawer>
    );
  }
};

export default withStyles(styles)(Sidebar);
