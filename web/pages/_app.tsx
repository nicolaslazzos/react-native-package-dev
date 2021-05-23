import React from "react";

import "../styles/global.css";

const AppComponent = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default AppComponent;
