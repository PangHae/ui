'use client';

import { useSearchParams } from 'next/navigation';

import BaseLayout from '@/components/layout/BaseLayout';
import { useUserStore } from '@/stores/userStore';

const Meet = () => {
  const searchParams = useSearchParams();
  const meetId = searchParams.get('meetId');
  const userId = useUserStore((state) => state.id);
  console.log(meetId);

  /* MEMO
    1. 유저 로그인 정보 확인
      1.1. 없다면 로그인 시킴
      1.2. 있다면 2번으로 이동
    2. 유저가 모임에 포함 여부 확인
      2.1. 포함되어 있다면 정보 보여줌
      2.2. 포함되어 있지 않다면 신청 화면
    3. 유저가 모임장이라면 모임 유저 신청 수락/거절 페이지 표기
  */
  if (!userId) {
    return;
  }

  return <BaseLayout></BaseLayout>;
};

export default Meet;
