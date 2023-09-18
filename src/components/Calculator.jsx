import React from 'react';
import { ArrowUUpLeft } from '@phosphor-icons/react';

const Calculator = () => {
  return (
    <>
      <div className='mb-2 px-4'>
        <div className='flex min-h-[9rem] flex-col items-end justify-end py-4 text-right'>
          <span className='w-full text-6xl text-textDark dark:text-white'>
            123
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center bg-light-100 px-4 py-2 dark:bg-dark-100'>
        <span className='mr-3 cursot-pointer hover:text-black dark:hover:text-white'>
          <ArrowUUpLeft size={20} />
        </span>
        <div className='flex w-full items-center overflow-x-auto text-2xl font-extralight [&>*:first-child]:ml-auto'>
          <span>123</span>
        </div>
      </div>
      <div className='flex items-center justify-between p-4'>
        <div className='flex w-full flex-col gap-1 rounded-lg'>{}</div>
      </div>
    </>
  );
};

export default Calculator;
