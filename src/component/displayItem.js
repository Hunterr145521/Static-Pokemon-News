import React, { Component } from 'react'
import Rainbow from '../HOC/rainbow';
import { connect } from 'react-redux';
import { deletePost } from "../action/action";
 class displayItem extends Component {
    
    // componentDidMount(){
    //     let id = this.props.match.params.path;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //     })  
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        // afteer deleting to redirect we can use ...
        this.props.history.push('/');     
    }
    render() {
        const post = this.props.post ? (
           <div className="post container">
               <h4 className="center">{this.props.post.title}</h4>
               <p className='center'>{this.props.post.body}</p>
               <div className="center">
                   <button className="btn blue" onClick = {this.handleClick}>
                       Delete Post!
                   </button>
               </div>
           </div>
        ) : (
            <div className="center">Loading Post!!!</div>
        )
        return (
            <div>
                {post}
            </div>
        )
    }
}
const mapStatetoProps = (state, ownprops) => {
    let id  =  ownprops.match.params.path;
     return{
         post : state.post.find(posts => posts.id === id)
     }
}
const mapDispatchtoProps = (dispatch) => {
    return{
        deletePost : (id) => { dispatch(deletePost(id))}
    }
} 

export default connect(mapStatetoProps,mapDispatchtoProps)(Rainbow(displayItem));