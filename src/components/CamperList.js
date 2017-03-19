import React from 'react';


export default class CamperList extends React.Component {
	static propTypes = {
    campersList: React.PropTypes.array
  }

  static defaultProps = {
    campersList: []
  }

	render () {
		  let campersList=this.props.campersList.map((camper, index)=>{
      return (<tr className="camper-list" key={index}>
                <td>{index+1}</td>
                <td className="camper-column">
                  <a href={'https://www.freecodecamp.com/'+camper.username}>
                    <img src={camper.img} alt="UserPic"/>{camper.username}
                  </a>
                </td>
                <td className="data-column">{camper.recent}</td>
                <td className="data-column">{camper.alltime}</td>
              </tr>);
    });
		return (
		        <tbody>
                {campersList}
            </tbody>

        )
	}
}
