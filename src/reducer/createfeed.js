export default function createfeed(store = { msg: null, status: null }, action) {
  let newStore = {};
  console.log('action: ', action.type);
  switch (action.type) {
    case 'ADD_FEED_FULFILLED':
      newStore = {
        ...store,
        status: 'success',
        msg: `feed successfully submitted with the feed ID: ${action.payload}`,
      };
      break;
    case 'ADD_FEED_REJECTED':
      newStore = {
        ...store,
        status: 'fail',
        msg: 'feed cannot be submited due to some error in the network',
      };
      break;
    default:
      newStore = { ...store };
      break;
  }
  return newStore;
}
