'use client';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { apiClient } from '@/util/apiClient';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'UPDATE';

type APITest = {
  url: string;
  queryParams: string;
  requestBody: string;
  method: HttpMethod;
};

export default function ApiTester() {
  const { register, handleSubmit } = useForm<APITest>({
    defaultValues: {
      url: '',
      queryParams: '',
      method: 'GET',
      requestBody: '',
    },
  });
  const [response, setResponse] = useState(null);

  const onSubmit = async (data: APITest) => {
    const result = await apiClient.get(data.url);
    setResponse(result.data);
  };

  return (
    <div>
      <h1>API Tester</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('url')}
          placeholder="API URL"
          required
        />
        <fieldset>
          <legend>HTTP 메소드 선택</legend>
          <div>
            <input type="radio" id="get" value="GET" {...register('method')} />
            <label htmlFor="get">GET</label>
          </div>
          <div>
            <input
              type="radio"
              id="post"
              value="POST"
              {...register('method')}
            />
            <label htmlFor="post">POST</label>
          </div>
          <div>
            <input type="radio" id="put" value="PUT" {...register('method')} />
            <label htmlFor="put">PUT</label>
          </div>
          <div>
            <input
              type="radio"
              id="delete"
              value="DELETE"
              {...register('method')}
            />
            <label htmlFor="delete">DELETE</label>
          </div>
        </fieldset>
        <input
          type="text"
          placeholder="Query params (e.g. param1=value1&param2=value2)"
          {...register('queryParams')}
        />
        <textarea
          placeholder="Request body (JSON)"
          {...register('requestBody')}
        />
        <button type="submit">Send Request</button>
      </form>
      {response && (
        <div className="mt-8">
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
