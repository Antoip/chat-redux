export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload;
    case 'POST_MESSAGE':
      return state.messages.push(action.payload);
    default:
      return state;
  }
}
