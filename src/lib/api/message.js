import { SendBirdAction } from '../../lib/Sendbird/SendBirdAction';

// Open Channel 가져오기
export const listMessage = (channel, isInit) =>
  SendBirdAction.getInstance().getMessageList(channel, isInit);
