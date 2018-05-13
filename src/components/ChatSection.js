// React
import React from 'react';

// MUI components
import { withStyles } from 'material-ui/styles';

// Own modules
import MessagesList from './MessagesList';

const styles = theme => ({
  chatArea: {
    flexShrink: 1,
    flexGrow: 1,
    overflowY: 'auto',
  },
});

class ChatSection extends React.Component {
  constructor(props) {
    super(props);
    this.chatAreaRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToLastMessage();
  }

  componentDidUpdate() {
    this.scrollToLastMessage();
  }

  scrollToLastMessage = () => {
    const el = this.chatAreaRef.current;

    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <main className={classes.chatArea} ref={this.chatAreaRef}>
        <MessagesList messages={messages} />
      </main>
    );
  }
};

export default withStyles(styles)(ChatSection);
