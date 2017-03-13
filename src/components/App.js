import React from 'react';
import LeaderTable from "./LeaderTable";

class App extends React.Component {
	render() {
        return (
					<div>
					<div className="app-header">
					 <h2>The list of the FreeCodeCamp leaders</h2>
					</div>
           <LeaderTable />
					</div>
        )
    }
}

export default App;
