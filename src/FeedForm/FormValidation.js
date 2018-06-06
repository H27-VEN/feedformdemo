/* eslint-disable */
export function validateFeedName(event) {
  let errmsg = '';
  if (event.target.value.trim().length === 0) {
    errmsg = 'feed name cannot be empty';
  }
  return errmsg;
}

export function validateFeedURL(event) {
  let errmsg = '';
  const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (event.target.value.match(urlRegex) === null) {
    errmsg = 'Invalid feed url';
  }
  return errmsg;
}

export function validateFeedFrequency() {
  return null;
}

export function validateFeedHashtag() {
  return null;
}
