import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/pokeball.png';
import {connect} from 'react-redux';
class Home extends Component {
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         this.setState({
    //             posts: res.data.slice(0,10)
    //         })
    //     })

    //     // axios.get('https://pokeapi.co/api/v2/pokemon/1').
    //     // then(res => {
    //     //     console.log(res);
        
    //     // })
    // }
    render () {    
        console.log(this.props);
        const { posts } = this.props;

        const postList = posts.length ? (
            (
                posts.map(post => {
                    return(
                        <div className="post card" key ={post.id}>
                            <div className="card-content">
                                <Link to={'/'+post.id}>
                                    <img src={Image} alt="A Pokeball"/>
                                    <span className="card-title red-text">{post.title}</span>
                                </Link>
                            </div>
                        </div>
                    )
                })
            )
        ) : (
            <div className="center">No Posts Yet!!</div>
        )
    return (
        <div className="container home">
            <h4 className="center">
                Home 
            </h4>
                {postList}
            </div>
    );
}
}
const mapStatetoProps =  (state) =>{
    return{
        posts: state.post
    }
}

export default connect(mapStatetoProps)(Home);