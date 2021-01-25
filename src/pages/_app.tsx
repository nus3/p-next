import 'styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'store'
import { NextPage } from 'next'
import ErrorBoundary from 'error'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const store = useStore()
  const persistor = persistStore(store)

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading....</div>}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  )
}

export default MyApp
