import React from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import LoadingScreen from '../components/LoadingScreen'
import { Windmill } from '@windmill/react-ui'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 6000)
  }, [])

  return (
    // <Layout>

    <>
      {!loading ? (
        <React.Fragment>
          <LoadingScreen />
        </React.Fragment>
      ) : (
        <Windmill>
        

          <Component {...pageProps} />
        </Windmill>
      )}
    </>
    // </Layout>
  )
}

export default MyApp
