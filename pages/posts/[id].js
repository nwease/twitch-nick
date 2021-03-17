import React from 'react';

function Post({post}) {
    return (
        <div>
            <h1>
                POST
            </h1>
        </div>
    );
}

export async function getStaticProps(context) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
        .then(res => res.json());

    return {
        props: {
            post,
        }
    }
}

export async function getStaticPaths(context) {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

    const paths = posts.map(post => `/posts/${post.id}`)

    return {
        paths, fallback: false
    }
}

export default Post;
