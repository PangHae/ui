'use client';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useUserStore } from '@/stores/userStore';
import { Response } from '@/types/service';
import { SocialLoginUser } from '@/types/user';
import { apiClient } from '@/util/apiClient';

const OAuthCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get('code');
  const user = useUserStore((state) => state);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const login = async () => {
      try {
        const { data } = await apiClient.get<Response<SocialLoginUser>>(
          '/api/login',
          {
            params: {
              code,
            },
          },
        );
        setUser(data.data?.accessToken ?? '', data.data?.userName ?? '');
      } catch (error) {
        console.error(error);
        return;
      }
    };

    if (code) {
      login();
    }
  }, [code, setUser]);

  useEffect(() => {
    if (user.accessToken && user.name) {
      router.push('/');
    }
  }, [router, user]);

  return null;
};

export default OAuthCallback;
