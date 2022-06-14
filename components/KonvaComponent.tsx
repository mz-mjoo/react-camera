import styled from '@emotion/styled';
import React, {useRef} from 'react';
import {Stage, Layer, Circle, Image, Text} from 'react-konva';
import useImage from 'use-image';

const url = 'https://konvajs.org/assets/yoda.jpg';

const Container = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid blue;
  position: relative;
`;
const Layout = styled.div`
  position: absolute;
  background: lightcoral;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

const KonvaComponent = () => {
  const [image] = useImage(url);
  return (
    <Container>
      <Stage
        width={300}
        height={300}
        style={{
          border: '1px solid red',
          background: 'red',
          borderRadius: '50%',
        }}
      >
        <Layer width={300} height={300}>
          {/* <Circle
          x={100}
          y={100}
          radius={70}
          fill={'red'}
          stroke={'black'}
          strokeWidth={4}
        /> */}
          <Text text={'hihi'} fontSize={50} />
          <Image
            width={300}
            height={300}
            image={image}
            draggable
            style={{borderRadius: 30}}
          />
        </Layer>
      </Stage>
      <button
        type="button"
        onClick={() => {
          //   Image.crop({
          //     x: 20,
          //     y: 20,
          //     width: 20,
          //     height: 20,
          //   });
        }}
      >
        crop!!
      </button>
      <Layout></Layout>
    </Container>
  );
};

export default KonvaComponent;
