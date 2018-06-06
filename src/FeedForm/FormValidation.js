/* eslint-disable */
export function validateFeedName(name) {
  let errmsg = '';
  if (name.trim().length === 0) {
    errmsg = 'feed name cannot be empty';
  }
  return errmsg;
}

export function validateFeedURL(url) {
  let errmsg = '';
  const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (url.match(urlRegex) === null) {
    errmsg = 'Invalid feed url';
  }
  return errmsg;
}

export function validateFeedFrequency(feedfrequency) {
  console.log('validateFeedFrequency');
  console.log('feedfrequency: ', feedfrequency);
  let errmsg = '';
  console.log(typeof feedfrequency);
  if (feedfrequency === '') {
    errmsg = 'please select a valid feed frequency';
  }
  console.log('errmsg: ', errmsg);
  return errmsg;
}

export function validateFeedPost(feedpost) {
  let errmsg = '';
  if (feedpost === '') {
    errmsg = 'please select a valid number of feed post';
  }
  console.log('err: ', errmsg);
  return errmsg;
}

// export function validateFeedHashtag() {
//   return null;
// }
