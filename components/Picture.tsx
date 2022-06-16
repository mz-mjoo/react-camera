import styled from '@emotion/styled';
import React, {FC, useCallback, useRef} from 'react';
import {Image, Layer, Stage, Text} from 'react-konva';
import useImage from 'use-image';

interface IPictureProp {
  money?: string;
}

const Container = styled.div`
  background-color: lightblue;
`;

const Button = styled.button`
  font-size: 50px;
`;

const url = 'img/money.png';
const image = 'img/donggle.png';
const canvasWidth = 1160;
const canvasHeight = 560;
const imageWidth = 352;
const imageHeight = 420;
const gap = 240;
const totalLen = 5;

const Picture: FC<IPictureProp> = ({money = '20000'}) => {
  const pictureStage: any = useRef(null);
  const [imageSrc] = useImage(url);
  const [imageSrc2] = useImage(image);
  const moneyLength = (totalLen - money.length) * 20;

  const downloadURI = useCallback((uri, name) => {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <Container>
      <Stage width={canvasWidth} height={canvasHeight} ref={pictureStage}>
        <Layer>
          <Image
            image={imageSrc2}
            alt=""
            x={canvasWidth / 2 - imageWidth / 2}
            y={canvasHeight / 2 - imageHeight / 2}
            width={imageWidth}
            height={imageHeight}
          />

          <Image
            image={imageSrc}
            width={canvasWidth}
            height={canvasHeight}
            alt=""
          />
          {/* 다섯자리 810  + 0 */}
          {/* 네자리 835 + 20 */}
          {/* 세자리 860 + 20 (40) */}
          {/* 네자리 890 + 20 (60) */}
          {/* 한자리 920 + 20 (80)*/}
          <Text
            text={money}
            x={canvasWidth / 2 + gap + moneyLength}
            y={264}
            fontSize={60}
            fill={'rgba(45, 58, 68, 1)'}
            fontFamily={'Gravitas One, cursive'}
            fillAfterStrokeEnabled={true}
            stroke={'rgba(215, 235, 226, 1)'}
            strokeWidth={8}
          />
        </Layer>
      </Stage>

      <Button
        type="button"
        onClick={() => {
          const url = pictureStage.current.toDataURL();
          downloadURI(url, 'photo');
        }}
      >
        save
      </Button>
    </Container>
  );
};

export default Picture;
