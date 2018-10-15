import request from '../util/request'

export function wocao(data) {
    return request({
        url: '/api/user/register',
        method: 'post',
        data: data
    })
}

export function login(data) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data: data
    })
}

export function createPost() {
    return request({
        url: '/api/post/createPost',
        method: 'post'
    })
}

export function findPostById(postId) {
    return request({
        url: '/api/post/findPostById',
        method: 'post',
        data: {
            postId
        }
    })
}