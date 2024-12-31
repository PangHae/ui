'use client';

import { useState } from 'react';

import qs from 'qs';
import { useForm } from 'react-hook-form';

import Button from '@/components/base/Button';
import Input from '@/components/base/Input';
import { apiClient } from '@/util/apiClient';

import styles from './test.module.scss';

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
    const queryObject = qs.parse(
      qs.stringify(
        Object.fromEntries(
          Object.entries(data).filter(([, value]) => value !== ''),
        ),
      ),
    );

    try {
      const result = await apiClient.get('/test', {
        params: queryObject,
      });
      setResponse(result.data);
    } catch (error) {
      console.error('Error가 발생했습니다.', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>API Tester</h1>
      <form className={styles.testForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register('url')}
          placeholder="API URL (e.g. /dok/example)"
          required
        />
        <fieldset className={styles.method}>
          <legend>HTTP 메소드 선택</legend>
          <div className={styles.radioWrapper}>
            <Input type="radio" id="get" value="GET" {...register('method')} />
            <label htmlFor="get">GET</label>
          </div>
          <div className={styles.radioWrapper}>
            <Input
              type="radio"
              id="post"
              value="POST"
              {...register('method')}
            />
            <label htmlFor="post">POST</label>
          </div>
          <div className={styles.radioWrapper}>
            <Input type="radio" id="put" value="PUT" {...register('method')} />
            <label htmlFor="put">PUT</label>
          </div>
          <div className={styles.radioWrapper}>
            <Input
              type="radio"
              id="delete"
              value="DELETE"
              {...register('method')}
            />
            <label htmlFor="delete">DELETE</label>
          </div>
        </fieldset>
        <Input
          type="text"
          placeholder="Query params (e.g. ?param1=value1&param2=value2)"
          {...register('queryParams')}
        />
        <textarea
          placeholder="Request body (JSON)"
          {...register('requestBody')}
        />
        <Button type="submit" className="secondary" width="100%" height="32px">
          Send Request
        </Button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
