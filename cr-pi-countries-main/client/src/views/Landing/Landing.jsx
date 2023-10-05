import { useRef, useState, useEffect } from 'react';
import background from '../../assets/background.jpg';
import { useNavigate } from 'react-router-dom';
import style from './landing.module.css';



export default function LandingPage () {
    const canvasRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();
    const backgroundColor = [0, 0, 0]; 
  
    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.src = background

        image.onload = () => {
            canvas.width = canvas.clientWidth; 
            canvas.height = canvas.clientHeight; 
            
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }

        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);

    useEffect(() => {
        console.log(isHovering)
    }, [isHovering])
  
    const handleMouseMove = (event) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const pixel = ctx.getImageData(x, y, 1, 1).data;

        
        const isPixelBackground = (
        pixel[0] !== backgroundColor[0] &&
        pixel[1] !== backgroundColor[1] &&
        pixel[2] !== backgroundColor[2]
        );

        setIsHovering(isPixelBackground)    
    };

    const [login, setLogin] = useState(false)

    const handleHome = () => {
        setLogin(true)
        setIsHovering(false)
    }
  
    return (
      <div className={style.landingPage}> 
        <canvas onClick={handleHome} ref={canvasRef} className={!isHovering ? style.canvas : style.canvasHover} />
        {
            isHovering && !login && <h1 className={style.title}>Click to log in</h1>
        }
        {
            navigate('/home')
        }
      </div>
    );
};