import React, {Component} from 'react';
import './App.scss';
import Group from './components/Group';
import 'typeface-roboto';

class App extends Component {
    constructor() {
      super();
      this.state = {
        groups: [],
        isLoading: false,
        fetchError: false,
      }
    }

  componentDidMount() {
    this.fetchDataFromServer();
  }

  async fetchDataFromServer() {
      this.setState({
        isLoading: true,
      })
    try {
      //const response = await fetch('http://devpoint.co.za/mygroups/public/data/mygroups.json', {mode: 'no-cors'});
      const response = await fetch('http://localhost:3000/data/mygroups.json');
      this.setState({
        isLoading: false,
      })
      const responseData = await response.json();
      //console.log(responseData);
      this.setState({
          groups: responseData.data.groups,
      })

        //console.log("groups state is: ",this.state.groups);
    } catch (error) {
        console.log("Problem getting data from server", error)
        this.setState({
            fetchError: true,
        })
        this.setState({
            isLoading: false,
      })
    }
  }

  render(){
      if(this.state.isLoading){
        return (
                <div className="loading-container">
                    <h5>Loading Kins...</h5>
                    <img className="load-logo" src="http://devpoint.co.za/mygroups/public/kin-load.png" alt="loading your kins"/>
                </div>
        )
      }
    return (
            <div className="App">
                <div className="group-container">
                    <h1>My KINS</h1>
                    <div className={this.state.fetchError ? "showMe" : "hideMe"}>We were unable to fetch your Kins, please try again later.</div>
                    {this.state.groups.map(group => (
                        <Group key={group.id} name={group.name} image={group.image} members={group.members} currentMember={group.currentMember} memberToMemberBalance={group.memberToMemberBalance} />
                    ))}
                </div>
            </div>
    );
  }

}

export default App;
