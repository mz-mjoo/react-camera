import styled from '@emotion/styled';
import React, {FC, useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import {Point, Area} from 'react-easy-crop/types';
// import 'react-easy-crop/react-easy-crop.css';

interface IImageCropComponentProps {
  imgSrc?: string;
  onCroppedArea: (croppedArea: {
    x: number;
    y: number;
    width: number;
    height: number;
    zoom: number;
  }) => void;
}
const Container = styled.div`
  /* margin-top: 50px; */
  border: 1px solid lime;
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background: blue;
  z-index: 1000;
  font-size: 50px;
  color: #fff;
`;

const ImageCropComponent: FC<IImageCropComponentProps> = ({
  imgSrc,
  onCroppedArea,
}) => {
  const [crop, setCrop] = useState<Point>({x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [cropped, setCropped] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      // setCropped({
      //   ...croppedArea,
      //   width: 500,
      //   height: 600,
      // });
      setCropped(croppedAreaPixels);
      console.log('croppedArea', croppedArea);
      console.log('croppedAreaPixels', croppedAreaPixels);
    },
    [setCropped],
  );

  return (
    <Container>
      <>
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
                zIndex: -1,
              },
              cropAreaStyle: {
                border: '2px  solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(27, 30, 32, 0.8)',
              },
            }}
          />
        )}
      </>
      <Button
        onClick={() => {
          console.log('111');
          // console.log('croped!', croped);
          if (cropped) {
            onCroppedArea({
              ...cropped,
              zoom,
            });
            console.log('zoom', zoom);
          }
        }}
      >
        크롭 버튼
      </Button>
    </Container>
  );
};

export default ImageCropComponent;
