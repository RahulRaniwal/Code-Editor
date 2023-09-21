
import Header from "./header";
import Code from "./code";
import React from "react";
import Result from "./result";
const Home = function() {
    // multiple parent element ko return karane
    // ke liye wrap karna padega for this we use react fragment  
    return (
        <>
        <Header/>
        <Code/>
        <Result/>
        </>

    );
}

export default Home;