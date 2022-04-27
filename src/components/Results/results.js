
import React from "react";

function Result(props){
    return(
        <section>
        <pre data-testid="resultTest">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
        </section>
    );
}

export default Result;