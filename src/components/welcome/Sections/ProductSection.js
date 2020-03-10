import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from '../../Grid/GridContainer.js';
import GridItem from '../../Grid/GridItem.js';
import InfoArea from '../../InfoArea/InfoArea.js';

import styles from '../../../assets/jss/material-kit-react/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>링커의 플랫폼 서비스는?</h2>
          <h5 className={classes.description}>
            입시의 모든 것을 해결하기 위한 목적으로, 당신의 대학을 가고자 하는
            멘티를 연결해 드릴 겁니다.
            <br />
            <br />
            링커는, 이를 통해서 발생하는 모든 수익의 주인은 당신이라 생각
            합니다. 단지, 링커는 플랫폼 제공에 대한 최소한의 합리적인 수수료만
            제공받습니다. <br />
            <br />
            서비스 출시 후 서비스소개페이지에서 자세한 내용의 확인이 가능합니다.
            사전가입 시 참고할 주요 서비스는 아래 이미지를 참고해 주세요.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="입시의 모든 것을 해결하기 위한 목적으로, 당신의 대학을 가고자 하는 멘티를 연결해 드릴 겁니다.  "
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="링커는, 이를 통해서 발생하는 모든 수익의 주인은 당신이라 생각 합니다.
              단지, 링커는 플랫폼 제공에 대한 최소한의 합리적인 수수료만 제공받습니다."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Security"
              description="업로드한 자료의 원본은 data추출 후 삭제처리 되며,
              추출된 data는 AWS(아마존웹서비스)의 격리된 보안 영역에 저장 됩니다."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
