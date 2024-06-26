// import styles from "./../Styles/loading.module.css"
// 'use client'
import { motion } from 'framer-motion';

const containerStyle = {
  position: 'relative',
  width: '3rem',
  height: '3rem',
  boxSizing: 'border-box',
};

const circleStyle = {
  display: 'block',
  width: '3rem',
  height: '3rem',
  border: '0.5rem solid #e9e9e9',
  borderTop: '0.5rem solid #3498db',
  borderRadius: '50%',
  position: 'absolute',
  boxSizing: 'border-box',
  top: 0,
  left: 0,
};

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

const LoadingCatto = () => {
  return (
    <>
      <div className="relative box-border h-12 w-12 bg-white">
        {/* <div className={containerStyle}> */}
        <motion.span
          className="border-[0.5rem solid #e9e9e9] bt-[0.5rem solid #3498db] absolute left-0 top-0 box-border block h-12 w-12 rounded-full text-orange-400"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      </div>
      {/* <div className="w-20 h-20 bg-gray-500">
        <motion.div
        className="bg-white"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        />
      </div>
      <div role="status">
        <svg aria-hidden="true"
          className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div> */}
      {/* <div className="w-12 h-12 rounded-full animate-spin
                    border-2 border-dashed border-blue-500 border-t-transparent"
                    >
      </div> */}
      {/* <hr />
      <div className="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent">
      </div>
      <div className="text-white">
        simple loading
      </div>

      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
        >
      </div> */}
      {/* <div className="loaderCatto">
      </div> */}
    </>
  );
};

export default LoadingCatto;
