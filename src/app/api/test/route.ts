import { NextRequest, NextResponse } from 'next/server';

import { fetchClient } from '@/util/apiClient';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paramsObject = Object.fromEntries(searchParams);

  try {
    const result = await fetchClient(paramsObject);

    return NextResponse.json(result.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
