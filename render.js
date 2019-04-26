import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CatalogPage from "./CatalogPage";

const render = () => {
    return ReactDOMServer.renderToString(<CatalogPage/>)
}

export default render;