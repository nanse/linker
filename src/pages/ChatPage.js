import React from 'react';

import { Drawer, Grid } from '@material-ui/core';
import ChannelList from '../components/channel/ChannelList';

const dummyData = {
  channels: [
    {
      url:
        'sendbird_open_channel_56735_c30f53ca2c9fb133a4919b3839f49162310d0ed1',
      channelType: 'open',
      name: 'channelTest4',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_09.jpg',
      createdAt: 1581324223000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_a2718d6fba0f31c489bd161f2ccc36b0aa910c51',
      channelType: 'open',
      name: 'channelTest4',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_04.jpg',
      createdAt: 1581322494000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_616acbf363a0310091a968876b30626e43a74e0e',
      channelType: 'open',
      name: 'channelTest4',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_07.jpg',
      createdAt: 1581127683000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_c7d1f70e0dd1ac26bb369e436bc25475e5b11865',
      channelType: 'open',
      name: 'channelTest4',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_07.jpg',
      createdAt: 1581127644000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_dc7ba8d949365f6c15f67c75c16015c5db4477fd',
      channelType: 'open',
      name: '채널33',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_09.jpg',
      createdAt: 1581056206000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/balloon.jpg',
          userId: '5c0aaba04def1cd4afe06ff3a912d47b',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_abec9f473cf338ec0ce7ec33b25e3899e1d918c1',
      channelType: 'open',
      name: '채널222',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_01.jpg',
      createdAt: 1581055886000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_716937d217e5289903f12a8a036105c745b15481',
      channelType: 'open',
      name: 'channelTest4',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_06.jpg',
      createdAt: 1580881000000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_460a641a2f3872151bd3b492cb3f83ae8cb48565',
      channelType: 'open',
      name: 'channelTest4',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_01.jpg',
      createdAt: 1580880909000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_b2cb684863b7da19886857792fe522630e13d52a',
      channelType: 'open',
      name: 'channelTest4',
      coverUrl: 'https://static.sendbird.com/sample/cover/cover_04.jpg',
      createdAt: 1580880849000,
      data: '',
      customType: '인기',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: 'test',
          profileUrl: 'http://192.168.1.108:8080/resources/img/camp.jpg',
          userId: 'ace98dcb2aebb34b125efb21a030ac28',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_370a3af28a4eac50c152ef663973fdf2b8fb44d0',
      channelType: 'open',
      name: '인하대 수시합격! 생기부 질문 받습니다.',
      coverUrl: 'https://sendbird.com/main/img/cover/cover_09.jpg',
      createdAt: 1575095617000,
      data: '',
      customType: '이번주 주제',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: '건이민서',
          profileUrl:
            'https://k.kakaocdn.net/dn/cfJUYI/btqAkSVAn28/CDQIoXIc9jplMDe9d9AkZ0/img_640x640.jpg',
          userId: '8bdc7ad9e596642822b0e0b6ea8fedfe',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_cbd12c3820aca1e39735854eceb32ba9d544b360',
      channelType: 'open',
      name: '성균관대 입시 관련 질문방',
      coverUrl: 'https://sendbird.com/main/img/cover/cover_07.jpg',
      createdAt: 1574836318000,
      data: '',
      customType: '이번주 주제',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: '건이민서',
          profileUrl:
            'https://k.kakaocdn.net/dn/cfJUYI/btqAkSVAn28/CDQIoXIc9jplMDe9d9AkZ0/img_640x640.jpg',
          userId: '8bdc7ad9e596642822b0e0b6ea8fedfe',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_44cc19becb1448e2126f0b041f743da21e59710d',
      channelType: 'open',
      name: '서울대 정시 관련 질문 받습니다.',
      coverUrl: 'https://sendbird.com/main/img/cover/cover_08.jpg',
      createdAt: 1574836297000,
      data: '',
      customType: '추천 주제',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: '건이민서',
          profileUrl:
            'https://k.kakaocdn.net/dn/cfJUYI/btqAkSVAn28/CDQIoXIc9jplMDe9d9AkZ0/img_640x640.jpg',
          userId: '8bdc7ad9e596642822b0e0b6ea8fedfe',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_444b14e9ab75392d5672769fc8cc571efe349164',
      channelType: 'open',
      name: '각 대학별 논술 관련 문의 질문 받습니다.',
      coverUrl: 'https://sendbird.com/main/img/cover/cover_01.jpg',
      createdAt: 1574836248000,
      data: '',
      customType: '추천 주제',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: '건이민서',
          profileUrl:
            'https://k.kakaocdn.net/dn/cfJUYI/btqAkSVAn28/CDQIoXIc9jplMDe9d9AkZ0/img_640x640.jpg',
          userId: '8bdc7ad9e596642822b0e0b6ea8fedfe',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_b45f921aa73e2394101accd9cab0898f38fe153a',
      channelType: 'open',
      name: '생기부 문의사항 있으신 분들 편하게 오세요',
      coverUrl: 'https://sendbird.com/main/img/cover/cover_08.jpg',
      createdAt: 1574836203000,
      data: '',
      customType: '인기 주제',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: '건이민서',
          profileUrl:
            'https://k.kakaocdn.net/dn/cfJUYI/btqAkSVAn28/CDQIoXIc9jplMDe9d9AkZ0/img_640x640.jpg',
          userId: '8bdc7ad9e596642822b0e0b6ea8fedfe',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
    {
      url:
        'sendbird_open_channel_56735_44024a8060e199aad3ea23deb91d9b65eccef01a',
      channelType: 'open',
      name: '자소서 작성 관련 질문 받습니다.',
      coverUrl: 'https://sendbird.com/main/img/cover/cover_06.jpg',
      createdAt: 1574836177000,
      data: '',
      customType: '인기 주제',
      isFrozen: false,
      isEphemeral: false,
      participantCount: 0,
      operators: [
        {
          nickname: '건이민서',
          profileUrl:
            'https://k.kakaocdn.net/dn/cfJUYI/btqAkSVAn28/CDQIoXIc9jplMDe9d9AkZ0/img_640x640.jpg',
          userId: '8bdc7ad9e596642822b0e0b6ea8fedfe',
          connectionStatus: 'nonavailable',
          lastSeenAt: 0,
          metaData: {},
          isActive: true,
          friendDiscoveryKey: null,
          friendName: null,
          _preferredLanguages: null,
        },
      ],
    },
  ],
};

const PostPage = () => {
  return (
    <>
      <Drawer classes={{}} variant={'persistent'} open>
        <ChannelList openChannels={dummyData.channels}></ChannelList>
      </Drawer>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h4>메인 톡</h4>
          <h4>메인 톡</h4>
          <h4>메인 톡</h4>
          <h4>메인 톡</h4>
          <h4>메인 톡</h4>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h4>그외 톡</h4>
          <h4>그외 톡</h4>
          <h4>그외 톡</h4>
          <h4>그외 톡</h4>
          <h4>그외 톡</h4>
        </Grid>
      </Grid>
    </>
  );
};

export default PostPage;
