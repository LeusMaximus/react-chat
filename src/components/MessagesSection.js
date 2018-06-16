// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// MUI icons
import ExpandMore from '@material-ui/icons/ExpandMore';

import debounce from 'debounce';

// Own modules
import MessagesList from './MessagesList';
import MessageField from './MessageField';
import { IClasses, IChatItem, IMessage } from '../interfaces/propTypes';

const styles = () => ({
  chatArea: {
    flexShrink: 1,
    flexGrow: 1,
    overflowY: 'auto',
  },

  btnDownHolder: {
    position: 'fixed',
    right: 30,
    bottom: 100,
  },

  noMessages: {
    position: 'absolute',
    top: '50%',
    left: 20,
    right: 20,
    transform: 'translateY(-50%)',
    textAlign: 'center',
  },
});

class MessagesSection extends React.Component {
  static defaultProps = {
    userId: '',
  };

  static propTypes = {
    classes: IClasses.isRequired,
    chat: IChatItem.isRequired,
    isChatMember: PropTypes.bool.isRequired,
    joinChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    userId: PropTypes.string,
    messages: PropTypes.arrayOf(IMessage.isRequired).isRequired,
    isConnected: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.chatAreaRef = React.createRef();
    this.btnDownHolderRef = React.createRef();
  }

  componentDidMount() {
    const area = this.chatAreaRef.current;

    this.goToLastMessage();
    this.setBtnDownStatus(area);

    area.addEventListener('scroll', debounce(this.handleChatAreaScroll.bind(this, area)), 500);
  }

  componentDidUpdate() {
    this.goToLastMessage();
  }

  // TODO: try change this functionality in future, maybe with state...
  setBtnDownStatus = (area) => {
    const btn = this.btnDownHolderRef.current;
    const isScrolledToBottom = area.scrollTop > area.scrollHeight - area.offsetHeight - 100;

    if (btn) {
      if (isScrolledToBottom) {
        btn.style.visibility = 'hidden';
      } else {
        btn.style.visibility = 'visible';
      }
    }
  };

  handleChatAreaScroll = (area) => {
    this.setBtnDownStatus(area);
  };

  goToLastMessage = () => {
    const el = this.chatAreaRef.current;

    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  handleGoBottom = (e) => {
    e.preventDefault();
    this.goToLastMessage();
  };

  render() {
    const {
      classes,
      chat,
      isChatMember,
      joinChat,
      sendMessage,
      userId,
      messages,
      isConnected,
    } = this.props;

    return (
      <React.Fragment>
        <div className={classes.chatArea} ref={this.chatAreaRef}>
          {messages.length ? (
            <MessagesList messages={messages} userId={userId} />
          ) : (
            <Typography className={classes.noMessages} variant="display2">
              There is no messages yet...
            </Typography>
          )}

          <div className={classes.btnDownHolder} ref={this.btnDownHolderRef}>
            <Button variant="fab" color="primary" onClick={this.handleGoBottom}>
              <ExpandMore />
            </Button>
          </div>
        </div>

        <MessageField
          disabled={!isConnected}
          isChatMember={isChatMember}
          joinChat={joinChat}
          sendMessage={sendMessage}
          activeId={chat._id}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MessagesSection);
