import './marquee.css';

  /* span {
    color: ${({ theme, colorSecondary }) => (colorSecondary ? 'rgb(255, 79, 20)' : theme.text)};
    font-size: ${({ theme }) => theme.typography.fontSize.heading1}; 
    text-transform: uppercase;
  }  
  
  .marquee {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: 15s linear infinite;
    animation-name:  ${({left}) => (left ? 'rigth' : 'left')};
}

  @keyframes rigth {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }
    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }

  @keyframes left {
    0% {
      transform: translate3d(var(--move-final), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-initial), 0, 0);
    }
  } ;
`; */


export const Marquee = () => (
  <div className="container__marquee">
    <div className="marquee" aria-hidden="true">
      <span className='text'>en construccion</span>
      <span className='text'>en construccion</span>
      <span className='text'>en construccion</span>      
      <span className='text'>en construccion</span>      
    </div>   
  </div>
);