import { NextRequest, NextResponse } from 'next/server';

import { fetchClient } from '@/util/apiClient';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  try {
    const result = await fetchClient.get('/dok/api/kakao/login', {
      params: {
        code: searchParams.get('code'),
      },
    });

    return NextResponse.json(result.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
