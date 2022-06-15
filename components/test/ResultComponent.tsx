import styled from '@emotion/styled';
import React, {useCallback, useEffect, useRef} from 'react';
import {
  Image,
  Layer,
  Stage,
  Arc,
  Circle,
  RegularPolygon,
  Rect,
  KonvaNodeComponent,
} from 'react-konva';
import useImage from 'use-image';

const Container = styled.div`
  border: 1px solid red;
`;
const Button = styled.button`
  font-size: 50px;
`;

const url = 'img/yang.jpeg';

const ResultComponent = () => {
  const [imageUrl] = useImage(url);
  console.log('img url', imageUrl);

  const stageRef: any = useRef(null);
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
      <div>
        <div style={{border: '1px solid blue'}}>
          <Stage width={500} height={600} x={0} y={0} ref={stageRef}>
            <Layer
              clipFunc={(ctx) => {
                ctx.ellipse(
                  500 * 0.5,
                  600 * 0.5,
                  250,
                  300,
                  0,
                  Math.PI * 4,
                  Math.PI * 2,
                );
              }}
            >
              <Image
                image={imageUrl}
                crop={{
                  x: 93,
                  y: 47,
                  width: 500 + 93,
                  height: 600 + 47,
                }}
                alt=""
              />
            </Layer>
          </Stage>
        </div>
        <Button
          onClick={() => {
            console.log('ctx', stageRef.current.toDataURL());
            const url = stageRef.current.toDataURL();
            downloadURI(url, 'photo');
          }}
        >
          save
        </Button>
      </div>
    </Container>
  );
};

export default ResultComponent;
