import type {NextPage} from 'next';
import styled from '@emotion/styled';
import {useCallback, useRef, useState} from 'react';
// import KonvaComponent from '@/components/KonvaComponent';
import dynamic from 'next/dynamic';
import NoSSR from 'react-no-ssr';
import {Suspense} from 'react';
import ImageCropComponent from '@/components/ImageCropComponent';
import Canvas from '@/components/Canvas';

export const KonvaComponent = dynamic(
  () => import('../components/KonvaComponent'),
  {
    ssr: false,
  },
);

const Cotainer = styled.div`
  width: 750px;
  font-size: 25px;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background: blue;
  z-index: 1000;
`;

const Text = styled.div`
  background-color: red;
`;

const Home: NextPage = () => {
  const [imgSrc, setImgSrc] = useState('');

  return (
    <Cotainer>
      <ImageCropComponent imgSrc="img/yang.jpeg" />
      {/* <Text>hihihi</Text> */}
      <div>
        <h2>Result</h2>
        {imgSrc && <Canvas />}
      </div>
    </Cotainer>
  );
};

export default Home;
