import styled from '@emotion/styled';
import React from 'react';
import {Image, Layer, Stage} from 'react-konva';
import useImage from 'use-image';

const Container = styled.div`
  background-color: lightblue;
`;

const url = 'img/money.png';
const image = 'img/photo1.png';
const Picture = () => {
  const [imageSrc] = useImage(url);
  const [imageSrc2] = useImage(image);
  const number = 1000;

  return (
    <Container>
      <Stage width={1160} height={560}>
        <Layer
          clipFunc={(ctx) => {
            console.log('ctx', ctx);
          }}
        >
          <Image
            image={imageSrc}
            opacity={0.5}
            width={1160}
            height={560}
            alt=""
            fillPatternImage={imageSrc2}
            fillPatternRepeat={'no-repeat'}
            fillPatternOffset={{x: -(1160 / 2) + 250, y: 0}}
            fillPatternScale={{x: 0.7, y: 0.7}}
          />
        </Layer>
      </Stage>
    </Container>
  );
};

export default Picture;
