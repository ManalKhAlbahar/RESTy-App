import './App.scss';
import React, { useState } from 'react';
import axios from 'axios'
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Form from './components/Form/form';
import Results from './components/Results/results';


function App(props){

  const [state, setState] = useState({data: '', requestParams:{}});

 async function callApi(requestParams) {
    const dataurl = await axios.get(requestParams.url);

    const data = {
      headers: [dataurl.headers],
      results: [dataurl.data.results],
    };
    setState({data, requestParams});
  }
  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Results data={state.data} />
      <Footer />
    </React.Fragment>
  );
}
export default App;