import { SendBirdAction } from '../../lib/Sendbird/SendBirdAction';

// Open Channel 가져오기
export const listChannel = ({ isInit, urlKeyword }) =>
  SendBirdAction.getInstance().getOpenChannelList(isInit, urlKeyword);

export const enter = url => {
  console.log('> api enter: ', url);
  return SendBirdAction.getInstance().enter(url);
};

export const getChannel = (url, isOpenChannel = true) => {
  console.log('> api getChannel: ', url, isOpenChannel);
  return SendBirdAction.getInstance().getChannel(url, isOpenChannel);
};
