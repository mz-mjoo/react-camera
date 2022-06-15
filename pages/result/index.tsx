import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';

export const ResultComponent = dynamic(
  () => import('../../components/test/ResultComponent'),
  {
    ssr: false,
  },
);

const Container = styled.div``;

const ResultPage = () => {
  return <ResultComponent />;
};

export default ResultPage;
