import { useRef, useState, useEffect } from 'react';
import background from '../../assets/background.jpg';
import { useNavigate } from 'react-router-dom';
import style from './landing.module.css';

export default function LandingPage() {
  const canvasRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const backgroundColor = [0, 0, 0];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = background;

    image.onload = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    const handleCanvasClick = () => {
      if (isHovering) {
        navigate('/home'); 
      }
    };

    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering, navigate]);

  useEffect(() => {
    console.log(isHovering);
  }, [isHovering]);

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const isPixelBackground =
      pixel[0] !== backgroundColor[0] &&
      pixel[1] !== backgroundColor[1] &&
      pixel[2] !== backgroundColor[2];

    setIsHovering(isPixelBackground);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={style.landingPage}>
      <canvas ref={canvasRef} className={!isHovering ? style.canvas : style.canvasHover} />
      {isHovering && <h1 className={style.title}>Proyecto Individual: Juan Manuel Rodriguez Hurtado</h1>}
    </div>
  );
}