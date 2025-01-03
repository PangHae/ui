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

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const requestUrl = searchParams.get('url');
  if (!requestUrl) {
    return NextResponse.json({ error: 'Please input endpoint' });
  }

  const requestBody = await request.json();

  try {
    const result = await fetchClient.post(requestUrl, requestBody);

    return NextResponse.json(result.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const requestUrl = searchParams.get('url');
  console.log(request);
  if (!requestUrl) {
    return NextResponse.json({ error: 'Please input endpoint' });
  }

  const requestBody = await request.json();

  try {
    const result = await fetchClient.patch(requestUrl, requestBody);

    return NextResponse.json(result.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function DELETE(request: NextRequest) {
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
