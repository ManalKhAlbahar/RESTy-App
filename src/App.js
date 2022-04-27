import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Form from './components/Form/form';
import Results from './components/Results/results';


function App(props) {

  const [state, setState] = useState({ data: '', requestParams: {} });

  function callApi(requestParams) {
    const data = {
      count: 1,
      results: [
        { name: 'link 1', url: 'https://reqres.in/api/users?page=2' },
      ],
    };
    setState({ data, requestParams });
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