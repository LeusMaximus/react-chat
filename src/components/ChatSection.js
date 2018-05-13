// React
import React from 'react';

// MUI components
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

// MUI icons
import ExpandMore from '@material-ui/icons/ExpandMore';

import debounce from 'debounce';

// Own modules
import MessagesList from './MessagesList';

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
});

class ChatSection extends React.Component {
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

    if (isScrolledToBottom) {
      btn.style.visibility = 'hidden';
    } else {
      btn.style.visibility = 'visible';
    }
  }

  handleGoBottom = e => {
    e.preventDefault();
    this.goToLastMessage();
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <main className={classes.chatArea} ref={this.chatAreaRef}>
        <MessagesList messages={messages} />

        <div className={classes.btnDownHolder} ref={this.btnDownHolderRef}>
          <Button variant="fab" color="primary" onClick={this.handleGoBottom}>
            <ExpandMore />
          </Button>
        </div>
      </main>
    );
  }
};

export default withStyles(styles)(ChatSection);
