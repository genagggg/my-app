import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component{
  
componentDidMount(){
  this.props.getUsers(this.props.currentPage, this.props.pageSize);
}
    
    onPageChanged = (pageNamber)=>{
  this.props.setCurrentPage(pageNamber);
  this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.pageNamber, this.props.pageSize).then(data =>{
  this.props.toggleIsFetching(false);  
  this.props.setUsers(data.items);
  });
    }
      render(){
       
          return <> 
          {this.props.isFetching ? 
         <Preloader />: null}
          <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
         followingInProgress={this.props.followingInProgress}
          /> 
          </>
  }
  }

let mapStateToProps = (state) => {
    return {
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalUsersCount: state.usersPage.totalUsersCount,
     currentPage: state.usersPage.currentPage,
     isFetching: state.usersPage.isFetching,
     followingInProgress: state.usersPage.followingInProgress
    }
    
}

export default connect(mapStateToProps, {
follow,

unfollow,

setUsers,

setCurrentPage,

 setTotalUsersCount,

toggleIsFetching,

toggleFollowingProgress,

getUsers: getUsers
})(UsersContainer);
 
 
