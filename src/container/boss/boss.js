import React from 'react'
import {getUserList} from '../../redux/charuser.redux'

import {connect} from 'react-redux'
import UserCard from '../../component/usercard/usercard'

class newBoss extends React.Component{
 
  componentDidMount(){
   this.props.getUserList('qiancheng')
  }
  render(){
    return (
     <UserCard userlist={this.props.userlist}></UserCard>
    )
  }
}
const mapStateToProps=state=>{
  return state.chatuser
}
const mapDispatchToProps={getUserList}
const Boss = connect(mapStateToProps, mapDispatchToProps)(newBoss)
export default Boss