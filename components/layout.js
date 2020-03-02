import Navigation from './navigation'
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
        <Head>
            <title>Hasan Aydin</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Navigation />
      <main>{children}</main>
      <footer>hasan aydin. 2020</footer>
    </div>
  )
}

export default Layout
