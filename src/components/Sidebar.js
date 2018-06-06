// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// MUI icons
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';

// Own modules
import SearchChat from './SearchChat';
import ChatList from './ChatList';
import ChatNav from './ChatNav';
import ChatCreate from '../containers/ChatCreate';

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
    chatsFilterTerm: '',
  };

  handleChatsTabChange = (e, value) => {
    this.setState({
      isMyChatsActive: value === 0,
    });
  };

  handleSearchChats = event => {
    const { value } = event.target;

    this.setState({
      chatsFilterTerm: value,
    });
  };

  render() {
    const { classes, allChats, myChats, setActiveChat, activeId, isConnected } = this.props;
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
          <SearchChat onChange={this.handleSearchChats} term={this.state.chatsFilterTerm} />
        </div>
        <Divider />

        <div className={classes.chatsListHolder}>
          {
            chats.length
              ? <ChatList
                  disabled={!isConnected}
                  chats={isMyChatsActive ? myChats : allChats}
                  setActiveChat={setActiveChat}
                  activeId={activeId}
                  searchTerm={this.state.chatsFilterTerm}
                />
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

          <ChatCreate disabled={!isConnected} />

          <ChatNav tabsChange={this.handleChatsTabChange} tabNumber={isMyChatsActive ? 0 : 1} />
        </div>
      </Drawer>
    );
  }
};

export default withStyles(styles)(Sidebar);
