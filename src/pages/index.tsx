import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Spinner from '@/components/Spinner';

const API_KEY = process.env.NEXT_PUBLIC_DEMYSTIFY_API_KEY;

export default function HomePage() {
  const [count, setCount] = useState<number>(0);
  const [fizzbuzz, setFizzbuzz] = useState();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleCounter = async () => {
    setCount(count + 1);
  };

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <p className='mt-2 text-sm'>Your count</p>
            <p className='mb-3'>{count}</p>

            <button
              className={`mt-6 flex min-h-[52px] min-w-[136px] items-center justify-center rounded-[5px] bg-button px-[32px] py-[14px] text-white ${
                isFetching ? 'bg-disabled' : ''
              }`}
              onClick={() => handleCounter()}
              disabled={isFetching}
            >
              {isFetching ? <Spinner /> : 'Push me!'}
            </button>
            <h1 className='mt-[55px] min-h-[80px]'>{fizzbuzz}</h1>

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
