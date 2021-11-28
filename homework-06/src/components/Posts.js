import React from 'react';


export class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        };

        const getPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            this.setState({
                posts: data,
                isLoading: false
            });
        }

        this.componentDidMount = () => {
            getPosts();
        }
    }

    render() {

        return (
            <div>
                <h1>Posts:</h1>
                {this.state.isLoading ? <p>Loading...</p> :
                    this.state.posts.map(post => {
                        return (
                            <div key={post.id}>
                                <h2>Post title {post.id}: {post.title}</h2>
                                <p> <strong> Post body:</strong> {post.body}</p>
                            </div>
                        )   
                    })}
            </div>
        );
    }
}