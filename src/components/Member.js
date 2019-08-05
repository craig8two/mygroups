import React, {Component} from 'react';
import '../App.scss';
import PropTypes from 'prop-types';

class Member extends Component {
    constructor(props) {
      super(props);
    }

  componentDidMount() {

  }
    getRandomArbitrary() {
        let randomNumber =  Math.floor(Math.random() * 4);
        return "color-"+randomNumber;
    }
  handleMemberImage() {
        let {name, image, remainder} = this.props
      if (image) {
          return (
              <img className="member-image" src={image} alt="member-pic"/>
          )
      } else if(name) {
          const memberInitials = name.charAt(0).toUpperCase();
          return (
                  <div className={this.getRandomArbitrary() +" name-avatar"}>
                    <span>
                        {memberInitials}
                    </span>
                  </div>
          )
      } else if(remainder) {
          return (
                  <div className="name-avatar bg-gray">
                    <span>
                        +{remainder}
                    </span>
                  </div>
          )
      }


  }

  render(){
    return (
            <div className="member" data-test="memberComponent">
                {this.handleMemberImage()}
            </div>
    );
  }

}
Member.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
}
export default Member;
