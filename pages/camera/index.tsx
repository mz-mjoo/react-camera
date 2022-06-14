import React from 'react';
import styled from '@emotion/styled';
import {useCallback, useRef, useState} from 'react';
import ImageCropComponent from '@/components/ImageCropComponent';

const Cotainer = styled.div`
  width: 750px;
  height: 1000px;
  background-color: lightgray;
  font-size: 25px;

  #frame {
    width: 500px;
    height: 500px;
    margin-top: 50px;
  }
`;

const Label = styled.label`
  font-size: 30px;
`;

const CameraDetail = () => {
  const [imgSrc, setImgSrc] = useState('');
  const handleChange = useCallback((e) => {
    var file = e.target.files[0];

    console.log('file', file);
    console.log('url file', URL.createObjectURL(file));
    setImgSrc(URL.createObjectURL(file));

    // ref.current.
  }, []);
  return (
    <Cotainer>
      <div>
        <h1>사진 촬영</h1>
        {/* <Label htmlFor="take-picture">사진 촬영</Label> */}
        {/* <input id="take-picture" type="file" accept="image/*;capture=camera" /> */}
        <input
          id="take-picture"
          type="file"
          accept="image/*"
          capture
          onChange={handleChange}
        />
      </div>

      {/* {imgSrc && <img id="frame" src={imgSrc} alt="" />} */}

      <ImageCropComponent imgSrc={imgSrc} />
    </Cotainer>
  );
};

export default CameraDetail;
