import React from "react";

function History(props) {
    return (
        <div>
            <h2>History:</h2>
            {props.history.map((data, idx) => {
                return (
                    <>
                        <p>{data.method}</p>
                        <p>{data.url}</p>
                    </>
                )
            })}
        </div>
    )
}

export default History;