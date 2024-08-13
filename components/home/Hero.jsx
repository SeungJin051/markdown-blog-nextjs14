import React from 'react';
import GdscAnimation from './GdscAnimation';

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl dark:text-white">
          동의대학교의{' '}
          <span className="underline">Google Devleopment Student Club</span>에
          오신 것을 환영합니다!
        </h1>
        <p className="mb-8 leading-relaxed dark:text-slate-200">
          GDSC DEU 에서는 구글 개발자 기술에 관심이 있는 모든 학생의 참여를
          환영하며, <br />{' '}
          <span className="font-bold text-blue-500">연결(Connect)</span>,
          <span className="font-bold text-green-500">배움(Learn)</span>,
          <span className="font-bold text-orange-500">성장(Grow)</span>을 가치로
          다양한 배경과 전공을 가진 학생들이 모여 <br /> 기술을 습득하고 지역
          공동체에 기여하기 위한 활동을 진행합니다.
        </p>
        <div className="flex justify-center">
          <button className="about-us">About Us</button>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <GdscAnimation />
      </div>
    </>
  );
}
