import { SendBirdAction } from '../../lib/Sendbird/SendBirdAction';
// Open Channel 가져오기
export const listOpenChannel = ({ isInit, urlKeyword }) =>
  SendBirdAction.getInstance().getOpenChannelList(isInit, urlKeyword);
