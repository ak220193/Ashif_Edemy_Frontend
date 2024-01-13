import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "react-image-lightbox/style.css";
import "swiper/css/bundle";
import "../styles/style.css";
import "../styles/responsive.css";
import { Provider } from 'react-redux';
import store from '../store/store';

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</Provider>
	);
};

export default MyApp;
