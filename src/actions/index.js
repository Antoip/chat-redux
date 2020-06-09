// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise };
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { channel, author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POST_MESSAGE,
    payload: promise };
}
