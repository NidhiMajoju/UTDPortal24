import React from 'react';
import Link from 'next/link';

const FileNav = () => {
  return (
    <div className="relative -top-custom-bottom1 left-2 flex justify-center items-center space-x-2">
      <Link href="/StepOneCard">
        <div className="rounded-full h-6 w-6 flex items-center justify-center bg-black mx-2"></div>
      </Link>
      <Link href="/StepTwoCard">
        <div className="rounded-full h-6 w-6 flex items-center justify-center bg-black mx-2"></div>
      </Link>
      <Link href="/StepThreeCard">
        <div className="rounded-full h-6 w-6 flex items-center justify-center bg-black mx-2"></div>
      </Link>
      <Link href="/StepFourCard">
        <div className="rounded-full h-6 w-6 flex items-center justify-center bg-black mx-2"></div>
      </Link>
      <Link href="/StepFiveCard">
        <div className="rounded-full h-6 w-6 flex items-center justify-center bg-black mx-2"></div>
      </Link>
      <Link href="/StepSixCard">
        <div className="rounded-full h-6 w-6 flex items-center justify-center bg-black mx-2"></div>
      </Link>
    </div>
  );
};

export default FileNav;