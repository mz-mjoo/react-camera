import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';

export const PictureComponent = dynamic(
  () => import('../../components/Picture'),
  {
    ssr: false,
  },
);

const Container = styled.div``;

const PicturePage = () => {
  return (
    <Container>
      <PictureComponent />
    </Container>
  );
};

export default PicturePage;
