// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';

// Own modules
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import MessageField from './MessageField';
import ChatSection from './ChatSection';
import { messages } from '../mock-data';

const styles = theme => ({
  appFrame: {
    display: 'flex',
    flexDirection: 'row-reverse',
    height: '100vh',
  },

  mainArea: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
});

class ChatPage extends React.Component {
  componentDidMount() {
    const { getAllChats, getMyChats } = this.props;

    Promise.all([
      getAllChats(),
      getMyChats(),
    ]);
  }

  render() {
    const { classes, chats } = this.props;

    return (
      <div className={classes.appFrame}>
        <div className={classes.mainArea}>
          <ChatHeader chatName="Some Chat Name" />

          <ChatSection messages={messages} />

          <MessageField />
        </div>

        <Sidebar chats={chats} />
      </div>
    );
  }
};

export default withStyles(styles)(ChatPage);
