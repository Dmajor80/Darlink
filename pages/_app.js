import React from 'react'
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
      {/* <Component {...pageProps} /> */}
      {!loading ? (
        <React.Fragment>
          <LoadingScreen />
        </React.Fragment>
      ) : (
        <Windmill>
        

          <Component {...pageProps} />
        </Windmill>
      )}
      {/* <h1 className='text-red-500 '>hey</h1> */}
    </>
    // </Layout>
  )
}

export default MyApp
