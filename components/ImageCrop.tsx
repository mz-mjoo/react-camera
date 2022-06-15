import styled from '@emotion/styled';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
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

interface ImageCropProps {
  imgSrc: string;
  croppedArea: {
    x: number;
    y: number;
    width: number;
    height: number;
    zoom: number;
  };
}

const Container = styled.div`
  border: 1px solid red;
`;
const Button = styled.button`
  font-size: 50px;
`;

const url = 'img/yang.jpeg';

const ImageCrop: FC<ImageCropProps> = ({
  imgSrc,
  croppedArea,
  croppedArea: {x, y, width, height, zoom},
}) => {
  const [imageUrl] = useImage(imgSrc);
  const stageRef: any = useRef(null);

  const downloadURI = useCallback((uri, name) => {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  console.log('image crop croppedArea', croppedArea);

  return (
    <Container>
      <div>
        <div style={{border: '1px solid blue'}}>
          <Stage
            width={500}
            height={600}
            x={0}
            y={0}
            ref={stageRef}
            className="stage"
            style={{border: '1px solid lime'}}
          >
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
                width={500}
                height={600}
                image={imageUrl}
                crop={croppedArea}
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

export default ImageCrop;
