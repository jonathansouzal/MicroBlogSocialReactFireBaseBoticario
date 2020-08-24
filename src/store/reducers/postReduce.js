import { ADD_POST, ADD_COMMENT } from '../../store/actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Rafael Filho',
        email: 'rafael@email.com',
        imagePost: require('../../../assets/img/papagaio.jpg'),
        comments: [{
            nickname: 'Jony Wall',
            comment: 'Show!'
        }, {
            nickname: 'Ana Julia',
            comment: 'Muito Bacana!'
        }]
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer