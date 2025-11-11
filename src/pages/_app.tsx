import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>사이사주 - 토정비결·사주풀이 전문 웹사이트</title>
        <meta name="description" content="전통 토정비결과 사주풀이를 현대적으로 재해석한 운세 서비스입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

