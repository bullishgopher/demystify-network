import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Spinner from '@/components/Spinner';

const API_URL = process.env.NEXT_PUBLIC_DEMYSTIFY_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_DEMYSTIFY_API_KEY;

type BodyRequestType = {
  address: string;
  apiKey: string;
};
export default function HomePage() {
  const [address, setAddress] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleCounter = async () => {
    try {
      setIsFetching(true);
      if (!API_URL || !API_KEY) return;

      const body: BodyRequestType = {
        address,
        apiKey: API_KEY,
      };

      const res = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      await res.json();
      setScore(100);
    } catch (error) {
      toast.error('Something went wrong');
    }
    setIsFetching(false);
  };

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Enter your address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='w-full md:w-1/2'
            />
            <p className='mt-2 text-xs'>
              i.e. 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
            </p>

            <button
              className={`mt-6 flex min-h-[52px] min-w-[136px] items-center justify-center rounded-[5px] bg-button px-[32px] py-[14px] text-black hover:bg-hover ${
                isFetching ? 'bg-disabled' : ''
              }`}
              onClick={() => handleCounter()}
              disabled={isFetching}
            >
              {isFetching ? <Spinner /> : 'Get Score!'}
            </button>

            <h1 className='mt-10 min-h-[80px]'>{score}</h1>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/smarterdegen/'>
                smarterdegen
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
