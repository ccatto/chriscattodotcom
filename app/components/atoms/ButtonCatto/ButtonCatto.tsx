type Props = {
    text: string,
    style: string,
    onClick2: string,
    // isButton?: boolean,
    // buttonText: string,
  }
  

const ButtonCatto = ({ text, style, onClick2}: Props ) => {
    return (
      <>
          <div 
            className={style}
            // onClick={onClick2}
            // Type 'string' is not assignable to type 'MouseEventHandler<HTMLDivElement>'.ts(2322)
            >
            {text}
          </div>
      </>
    )
  }
  export default ButtonCatto;
