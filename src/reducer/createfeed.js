export default function createfeed(store = { msg: null }, action) {
  let newStore = {};
  switch (action.type) {
    case 'ADD_FEED_FULLFILLED':
      newStore = { ...store, msg: 'feed successfully submitted' };
      break;
    case 'ADD_FEED_REJECTED':
      newStore = { ...store, msg: 'feed cannot be submited due to some error in the network' };
      break;
    default:
      newStore = { ...store };
      break;
  }
  return newStore;
}
