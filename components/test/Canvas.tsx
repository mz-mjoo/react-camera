import styled from '@emotion/styled';
import React, {useRef} from 'react';

const Container = styled.div``;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = canvasRef.current?.getContext('2d');
  return (
    <Container>
      {/* <canvas ref={canvasRef} width={500} height={600}></canvas> */}
    </Container>
  );
};

export default Canvas;
