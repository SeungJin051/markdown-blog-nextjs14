import Things from '@/components/about-us/Things';
import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <section className="body-font dark-text">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <Image
          className="object-cover object-center w-4/6 mb-10 rounded "
          src="/GDSC-DEU-3rd.jpg"
          alt="GDSC-DEU-3rd.jpg"
          width={500}
          height={500}
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium title-font sm:text-4xl">
            GDSC Dong-Eui University
          </h1>
          <p className="mb-8 leading-relaxed">
            GDSC DEU에서는 구글 개발자 기술에 관심이 있는 모든 학생의 참여를
            환영하며, 연결(Connect), 배움(Learn), 성장(Grow)을 가치로 다양한
            배경과 전공을 가진 학생들이 모여 기술을 습득하고 지역 공동체에
            기여하기 위한 활동을 진행합니다.
          </p>
          <div className="flex justify-center">
            <ol className="mb-3 space-y-1 text-gray-500 list-decimal list-inside text-start dark:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  공부하고 싶은 분야를 다른 사람과 같이 공부하는 스터디를
                  진행합니다.
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  본인이 공유하고 싶은 주제에 대해서 발표 세션을 진행합니다.
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  해커톤을 개최하거나 운영합니다.
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  전세계 최대 IT 기업인 Google과 협업하고, 개발자 커뮤니티를
                  만들어 갑니다.
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Google’s Developer Ecosystem의 일원으로 참여합니다.
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Google IO와 같은 이벤트와 컨퍼런스에 참여합니다.
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  우수한 활동을 한 GDSC 멤버에게는 Google I/O 참여 기회가
                  주어집니다.
                </span>
              </li>
            </ol>
          </div>
          <Things />
          <div>
            <div>
              <h1 className="mb-3 text-3xl font-medium title-font sm:text-4xl text-start">
                다양한 활동
              </h1>
              <span>
                본인이 배우고 싶은 주제를 다른 사람과 함께 공부합니다. React,
                Spring, AI, 보안 등 다양한 주제로 스터디가 진행되었으며,
                GDSC-DEU 멤버라면 누구나 언제든지 스터디원을 모집하고 진행할 수
                있습니다.
              </span>
            </div>
            <div>
              <h1 className="mt-10 mb-3 text-3xl font-medium title-font sm:text-4xl text-start">
                🎙️ 세션
              </h1>
              <span>
                자신이 알고 있는 지식을 다른 멤버들에게 공유하면서 발표하며 함께
                소통합니다. 발표를 준비하는 과정에서 자신의 역량을 더욱 향상시킬
                수 있으며, 다른 사람의 세션을 듣고 새로운 지식을 배우며 시야를
                넓힐 수 있습니다.
              </span>
            </div>
            <div>
              <h1 className="mt-10 mb-3 text-3xl font-medium title-font sm:text-4xl text-start">
                GDSC DEU의 특혜
              </h1>
              <ol className="mb-3 space-y-1 text-gray-500 list-decimal list-inside text-start dark:text-gray-400">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Google에서 열리는 Solution Challenge 행사 참여 기회
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    본인의 지식을 알릴 수 있는 Session(강의) 발표의 기회
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Google I/O Extended
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    전세계 GDSC 멤버들과 함께하는 Study Jam
                    (Cloud/ML/Android/Flutter 등)
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    [Google X Wanted] GDSC Korea Job Fair 오프라인 참석 기회
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    그외 전세계 GDSC 챕터들과 함께하는 행사!
                  </span>
                </li>
              </ol>
            </div>
            <div>
              <h1 className="mt-10 mb-3 text-3xl font-medium title-font sm:text-4xl text-start">
                GDSC DEU 지원하기
              </h1>
              <p className="text-start">
                🙂 23-24 GDSC DEU는 모두 지원이 마감되었습니다! 지원해 주신 모든
                분들 감사합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
