import React from 'react';
import Fetch from 'react-fetch';

import FaSortDesc from './sort-desc';
import CamperList from './CamperList';

const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;

export default class LeaderTable extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
      campers: [],
			column: FIRST_COLUMN,
			requestFailed: false
    };
		this.handleClick1 = this.handleClick1.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
	}
	getCampersList(url){
		var that = this;
		fetch(url)
  		.then(response => {
    		if (response.status >= 400) {
      		throw new Error("Bad response from server");
    		}
    		return response.json();
  		})
  		.then(data => {
    		that.setState({campers: data, requestFailed: false});
  		}, () => {
				that.setState({requestFailed: true});
			});
	}
	handleClick1(e){
		e.preventDefault();
	 	this.getCampersList('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
		this.setState({column: FIRST_COLUMN});
	}
	handleClick2(e){
		e.preventDefault();
	 	this.getCampersList('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
		this.setState({column: SECOND_COLUMN});
	}
	componentDidMount(){
		this.getCampersList('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
	}

	render () {
		var style = {
      		fontSize: 20,
      		border: '1px black solid',
      		width: '80%',
      		marginLeft: 'auto',
      		marginRight: 'auto',
      		marginTop: '20px'
    	};

		let styleLeft = {
					textAlign: 'left'
		}
		let styleSorted = {
				color: "blue"
		}
		let descSign =<FaSortDesc style={{verticalAlign: 'none'}} />;
		let title1 = "Points in past 30 days  ";
		let title2 = "All time points  ";
		let descSign1='', descSign2='';

		if (this.state.column === FIRST_COLUMN)	{
			descSign1=descSign;
		}
		else {
			descSign2=descSign;
		}
		if (this.state.requestFailed) return <p>Failed!</p>;
		if (!this.state.campers) return <p>Loading...</p>
		return (
		<table style={style}>
          <thead>
            <tr>
            	<th>#</th>
            	<th style={styleLeft}>Camper Name</th>
            	<th style={(this.state.column === FIRST_COLUMN) ? styleSorted : {}} onClick={this.handleClick1}>
							{title1}{descSign1}
							</th>
							<th style={(this.state.column === SECOND_COLUMN) ? styleSorted : {}} onClick={this.handleClick2}>
							{title2}{descSign2}
							</th>
            </tr>
          </thead>
          <CamperList campersList={this.state.campers} />
        </table>
        )
	}
}
