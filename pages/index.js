import Head from 'next/head'
import Form from '../pages/components/Form'
export default function Home() {
  return (
    <div>
      <Head>
        <title>form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form/>
    </div>
  )
}
