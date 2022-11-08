import * as React from 'react';
import './App.css';

import FullChart from './screen/fullchart';

class App extends React.Component {
	render() {
		return (
			<div className={ 'App' }>
				<header className={ 'App-header' }>
					<h1 className={ 'App-title' }>
						USD/EUR
					</h1>
				</header>
				<FullChart />
			</div>
		);
	}
}

export default App;
