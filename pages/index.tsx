import type {NextPage} from 'next';
import styled from '@emotion/styled';
import {useCallback, useRef, useState} from 'react';
import dynamic from 'next/dynamic';

export const KonvaComponent = dynamic(
  () => import('../components/test/KonvaComponent'),
  {
    ssr: false,
  },
);

const Cotainer = styled.div`
  width: 750px;
  font-size: 25px;
`;

const Home: NextPage = () => {
  return <Cotainer></Cotainer>;
};

export default Home;
