import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput")
    return <MyParagraph>{props.show ? 'This is new paragraph!' : ''}</MyParagraph>
};


export default React.memo(DemoOutput);