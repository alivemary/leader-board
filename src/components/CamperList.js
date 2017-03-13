import React from 'react';


export default class CamperList extends React.Component {
	static propTypes = {
    campersList: React.PropTypes.array
  }

  static defaultProps = {
    campersList: []
  }

	render () {
		let style={
        textAlign: 'left',
				width: '60%'
    	};
    let imgStyle={
      heigth: '30px',
      width: '30px',
      marginRight: '10px',
      border: '1px solid darkgrey'
    }
    let campersList=this.props.campersList.map((camper, index)=>{
      return (<tr key={index}>
                <td>{index+1}</td>
                <td style={style}>
                  <a href={'https://www.freecodecamp.com/'+camper.username}>
                    <img style={imgStyle} src={camper.img} alt="UserPic"/>{camper.username}
                  </a>
                </td>
                <td width="18%">{camper.recent}</td>
                <td width="18%">{camper.alltime}</td>
              </tr>);
    });
		return (
		        <tbody>
                {campersList}
            </tbody>

        )
	}
}
