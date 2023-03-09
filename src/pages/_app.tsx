import { AppProps } from 'next/app';
import { toast, ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position={toast.POSITION.TOP_RIGHT} hideProgressBar />
    </>
  );
}

export default MyApp;
