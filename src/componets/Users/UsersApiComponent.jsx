import * as axios from 'axios';
import React from 'react';
import Users from './Users';


class UsersApiComponent extends React.Component{

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
  });
  }
  
  onPageChanged = (pageNamber)=>{
this.props.setCurrentPage(pageNamber);
axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`).then(response =>{
  this.props.setUsers(response.data.items)
});
  }
    render(){
     
        return  <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        /> 
}
}

export default UsersApiComponent;
