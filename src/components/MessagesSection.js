// React
import React from 'react';

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

const styles = theme => ({
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
  }
});

class MessagesSection extends React.Component {
  constructor(props) {
    super(props);
    this.chatAreaRef = React.createRef();
    this.btnDownHolderRef = React.createRef();
  }

  componentDidMount() {
    const area = this.chatAreaRef.current;

    this.goToLastMessage();

    area.addEventListener('scroll', debounce(this.handleChatAreaScroll.bind(this, area)), 500);
  }

  componentDidUpdate() {
    this.goToLastMessage();
  }

  goToLastMessage = () => {
    const el = this.chatAreaRef.current;

    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }

  handleChatAreaScroll = area => {
    this.setBtnDownStatus(area);
  }

  // TODO: try change this functionality in future, maybe with state...
  setBtnDownStatus = area => {
    const btn = this.btnDownHolderRef.current;
    const isScrolledToBottom = area.scrollTop > area.scrollHeight - area.offsetHeight - 100;

    if (btn) {
      if (isScrolledToBottom) {
        btn.style.visibility = 'hidden';
      } else {
        btn.style.visibility = 'visible';
      }
    }
  }

  handleGoBottom = e => {
    e.preventDefault();
    this.goToLastMessage();
  }

  render() {
    const { classes, chat, isChatMember, joinChat } = this.props;

    return (
      <React.Fragment>
        <div className={classes.chatArea} ref={this.chatAreaRef}>
          {
            chat.messages.length
              ? <MessagesList messages={chat.messages} />
              : <Typography className={classes.noMessages} variant="display2">
                  There is no messages yet...
                </Typography>
          }

          <div className={classes.btnDownHolder} ref={this.btnDownHolderRef}>
            <Button variant="fab" color="primary" onClick={this.handleGoBottom}>
              <ExpandMore />
            </Button>
          </div>
        </div>

        <MessageField isChatMember={isChatMember} joinChat={joinChat} activeId={chat._id} />
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(MessagesSection);
