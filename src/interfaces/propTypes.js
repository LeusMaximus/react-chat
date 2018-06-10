import PropTypes from 'prop-types';

export const IClasses = PropTypes.objectOf(PropTypes.string);

export const IChatItem = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const IMessage = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
});

export const IUser = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
});
