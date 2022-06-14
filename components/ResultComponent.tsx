import styled from '@emotion/styled';
import React, {useEffect, useRef} from 'react';
import {
  Image,
  Layer,
  Stage,
  Arc,
  Circle,
  RegularPolygon,
  Rect,
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
  console.log(Stage);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = canvasRef.current?.getContext('2d');
  const stageRef = useRef(null);

  //   useEffect(() => {
  //     console.log('useEffect ctx', ctx);
  //     const img = new window.Image();
  //     const w = 500;
  //     const h = 600;
  //     const size = Math.min(w, h);
  //     img.src = url;
  //     img.onload = function () {
  //       //   ctx?.drawImage(img, x, y, width, height);
  //       //   ctx.drawImage(img, startX, startY, endX, endY, x, y, sizeX, sizeY)
  //       ctx?.drawImage(img, 93, 47, w, h, 0, 0, w, h);
  //       ctx.globalCompositeOperation = 'destination-in';
  //       //   ctx.fillStyle = '#000';
  //       ctx?.beginPath();
  //       //   ctx?.ellipse(size * 0.5, size * 0.5, size * 0.5, 0, Math.PI * 2);
  //       ctx?.ellipse(size * 0.5, size * 0.5, w / 2, h / 2, 0, 0, Math.PI * 2);
  //       ctx?.fill();
  //       //   ctx?.clip();

  //       //   ctx.globalCompositeOperation = 'source-over';

  //       // show canvas
  //       //   canvas.hidden = false;
  //     };
  //   }, [ctx]);

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
          }}
        >
          save
        </Button>

        {/* <canvas ref={canvasRef} width={500} height={600}></canvas> */}
      </div>
    </Container>
  );
};

export default ResultComponent;
