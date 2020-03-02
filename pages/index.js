import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
        <Head>
            <title>Homepage</title>
        </Head>
      <h1 className='title'>Home Page</h1>


        <style jsx>{`
            .title{
            background-color: grey;
            font-size: 42px;
            color: white;
            }
      `}</style>
        <style global jsx>{`
            body{
            background-color: rgb(247,255,200);
            }
            html{
                font-size: 45px;
            }
      `}</style>
    </Layout>
  )
}

export default HomePage
