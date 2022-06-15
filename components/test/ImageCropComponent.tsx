import styled from '@emotion/styled';
import React, {FC, useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import {Point, Area} from 'react-easy-crop/types';
// import 'react-easy-crop/react-easy-crop.css';

interface IImageCropComponentProps {
  imgSrc?: string;
}
const Container = styled.div`
  /* height: 100vh; */
  /* margin-top: 50px; */
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background: blue;
  z-index: 1000;
`;

const ImageCropComponent: FC<IImageCropComponentProps> = ({imgSrc}) => {
  const [crop, setCrop] = useState<Point>({x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((payload1, payload2) => {
    console.log(payload1, payload2);
    // console.log('crop', crop);
  }, []);

  return (
    <Container>
      {imgSrc && (
        <Cropper
          image={imgSrc}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          cropShape={'round'}
          showGrid={false}
          cropSize={{width: 500, height: 600}}
          style={{
            containerStyle: {
              //   zIndex: -1,
            },
            cropAreaStyle: {
              border: '2px  solid rgba(255, 255, 255, 0.1)',
              color: 'rgba(27, 30, 32, 0.8)',
            },
          }}
        />
      )}
    </Container>
  );
};

export default ImageCropComponent;
