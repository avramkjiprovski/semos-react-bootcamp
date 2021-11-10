import React from "react";

export const Hello = (props) => {
    console.log(props);
    return (
        <div id="hello">
            <h1>Hello</h1>
            <p>
                {props.greeting}
            </p>
            {
                props.displayValue === true && <p>The variable is true</p>
            }
            {
                props.flag === true ? <h2>The statement is true</h2> : <p>It's all lie</p>
            }
        </div>
    );
}