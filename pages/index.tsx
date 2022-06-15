import type {NextPage} from 'next';
import styled from '@emotion/styled';
import {useCallback, useRef, useState} from 'react';
import dynamic from 'next/dynamic';
import ImageCropComponent from '@/components/ImageCropComponent';
// import ImageCrop from '@/components/ImageCrop';

export const KonvaComponent = dynamic(
  () => import('../components/test/KonvaComponent'),
  {
    ssr: false,
  },
);

const Cotainer = styled.div`
  width: 750px;
  font-size: 25px;
`;

const Picture = styled.div``;
const Result = styled.div`
  border: 1px solid red;
  height: 100vh;
`;

export const ImageCrop = dynamic(() => import('../components/ImageCrop'), {
  ssr: false,
});

const Home: NextPage = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [open, setOpen] = useState(false);
  const [croppedArea, setCroppedArea] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    zoom: 1,
  });

  const onCroppedArea = useCallback((croppedArea) => {
    setCroppedArea(croppedArea);
    setOpen(true);
    console.log('onCroppedArea', croppedArea);
  }, []);

  const handleChange = useCallback((e) => {
    var file = e.target.files[0];

    setImgSrc(URL.createObjectURL(file));
  }, []);

  return (
    <Cotainer>
      {!imgSrc && (
        <div>
          <input
            id="take-picture"
            type="file"
            accept="image/*"
            capture
            onChange={handleChange}
          />
        </div>
      )}

      {imgSrc && !open && (
        <ImageCropComponent imgSrc={imgSrc} onCroppedArea={onCroppedArea} />
      )}
      {open && (
        <Result>
          <ImageCrop imgSrc={imgSrc} croppedArea={croppedArea} />
        </Result>
      )}
    </Cotainer>
  );
};

export default Home;
