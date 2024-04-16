import React, { PureComponent } from 'react'

class Posts extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts:[],
            comments:[],
            loading:true
        }
        this.timerId = null;
    }

    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/';
        fetch(url+'posts')
        .then(data=>data.json())
        .then(data=>this.setState({
                                    posts:data,
                                    loading: false}))
        this.timerId = setInterval(()=>{
            fetch(url+'comments')
            .then(data=>data.json())
            .then(data=>this.setState({comments: data}))
        }, 2000)
    }
    componentWillMount(){
        clearInterval(this.timerId);
    }
    render() {
        let content ='';
        let content2 ='';
        if(this.state.loading){
            content = <h2>loading...</h2>;
        }
        else{
            content = this.state.posts
            .map(post=>(
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))
            content2 = this.state.comments.map(comment => (
                <li key={comment.id}>
                    <h2>{comment.name}</h2>
                </li>
            ));
        }
        return (
            <>
            <h1>Posts</h1>
            <ul>
                {content}
            </ul>
            <h1>Comments</h1>
            <ul>
                {content2}
            </ul>
            </>
        )
    }
}

export default Posts