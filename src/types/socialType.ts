export const SOCIAL_TYPES = {
  KAKAO: 'kakao',
  NAVER: 'naver',
  GOOGLE: 'google',
} as const;

export type SocialType = (typeof SOCIAL_TYPES)[keyof typeof SOCIAL_TYPES];
