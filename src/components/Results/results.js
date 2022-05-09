import './results.scss'
import JSONPretty from 'react-json-pretty';

const Results = function (props) {
  if (!props.loading) {
    return (
      <>
        <div id='headers'>
        <p>Headers</p>
          <JSONPretty id='json-pretty' data={props.headers} />
        </div>
        <div id='results'>
          <p>Result</p>
          <JSONPretty id='json-pretty' data={props.url} />
        </div>
      </>
    );
  } else {
    return <p>Loading </p>;
  }
};

export default Results;