import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Application from "./components/common/Application";
import './resources/scss/docler.scss';

render(
	<Provider store={store}>
		<Application/>
	</Provider>,
	document.getElementById('application')
);