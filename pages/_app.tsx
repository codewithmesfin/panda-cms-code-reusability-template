import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { AuthProvider, ProtectRoute } from '../contexts/auth'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



export default function App({ Component, pageProps }: AppProps) {


  return <AuthProvider>
    <ProtectRoute>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </ProtectRoute>
  </AuthProvider>
}
