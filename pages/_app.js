import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import  store  from '../state/store';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
  <Layout id='body'>

      <Component {...pageProps} />
  </Layout>
  </Provider>
)}

export default MyApp
