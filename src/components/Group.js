import React, {Component} from 'react';
import '../App.scss';
import Member from './Member';
import PropTypes from "prop-types";

class Group extends Component {
    constructor(props) {
      super(props);
    }

  componentDidMount() {
    //console.log(this.state.groups);

  }

    handleGroupImage() {
        let {name, image,} = this.props
        if (image) {
            return (
                <img className="group-image" src={image} alt="group-pic"/>
            )
        }
        return (
                <div className="default-group-image">
                    <img className="group-image" src="https://admin.dev.kin.business/assets/group.icons/kin_group_im_2@2x.png" alt="group-pic"/>
                </div>

        )
    }

    renderMembers() {
        const membersObj = this.props.members.length >= 5 ? this.props.members.slice(0, 5) : this.props.members;
        let members =  membersObj.map(member => (
                <Member key={member.id} name={member.name} image={member.image} />
        ))
        return members;
    }

    renderRemainder() {
        let {members} = this.props
        const memberRemainder = members.length - 5;
        if(memberRemainder > 0){
            return (
                <Member key="remainder" name={null} image={null} remainder={memberRemainder} />
            )
        }
    }

    memberBalance() {
        const currentUserId = this.props.currentMember.id;
        const memberBalance = [];
        this.props.memberToMemberBalance.map(payment => {
            if(payment.toMemberId === currentUserId) {
                let amountFormatted = parseFloat(payment.amount.formatted.slice(1));
                memberBalance.push(amountFormatted)
            }
        })
        const amountOwed = memberBalance.reduce((a, b) => a + b, 0);

        return amountOwed;

    }

    renderMemberBalance(amount){
        if(amount) {
            return (
                <div>You owe <span>{amount}</span></div>
            )
        } else {
            return (
                <div>You're are all square.</div>
            )
        }
    }



  render(){
        let {name} = this.props
        return (
            <div className="group" data-test="groupComponent">
                {this.handleGroupImage()}
                <div className="group-right">
                    <div className="group-name">{name.length > 54 ? "" + name.substring(0, 54)+ "..." : name}</div>
                    <div className="members">
                        {this.renderMembers()}
                        {this.renderRemainder()}
                    </div>
                    <div className="balance">
                        {this.renderMemberBalance(this.memberBalance())}
                    </div>
                </div>
            </div>
        );
  }

}
Group.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    memberToMemberBalance: PropTypes.array,
}
export default Group;
