import styled from '@emotion/styled';
import React from 'react';
import {Image, Layer, Stage} from 'react-konva';
import useImage from 'use-image';

const Container = styled.div`
  background-color: lightblue;
`;

const url = 'img/money.png';
const image = 'img/donggle.png';
const Picture = () => {
  const [imageSrc] = useImage(url);
  const [imageSrc2] = useImage(image);
  const number = 1000;

  return (
    <Container>
      <Stage width={1160} height={560}>
        <Layer>
          <Image
            image={imageSrc2}
            alt=""
            x={1160 / 2 - 352 / 2}
            y={560 / 2 - 420 / 2}
            width={352}
            height={420}
          />
          {/* <Text /> */}
          <Image image={imageSrc} width={1160} height={560} alt="" />
        </Layer>
      </Stage>
    </Container>
  );
};

export default Picture;
