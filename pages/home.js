import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import WithAnalytics from '~/hocs/WithAnalytics';

const Title = styled.h1`
  color: #959;
  font-size: 40px;
`;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/panda.jpeg" />
    <Title>Hello World</Title>
    <Link href="/users" >
      <a>Ir para Membros</a>
    </Link>
  </>
);

export default WithAnalytics()(Home);