import React from 'react';

function Posts(props) {

    console.log(props);

    return (
        <div>
            <h1>
                POSTS
            </h1>
        </div>
    );
}

export async function getStaticProps(context) {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

    return {
        props: {
            posts,
        }
    }
}

export default Posts;
