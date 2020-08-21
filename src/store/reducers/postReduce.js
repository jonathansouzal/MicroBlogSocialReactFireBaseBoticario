import { ADD_POST } from '../../store/actions/actionTypes'

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
    },
    {
        id: Math.random(),
        nickname: 'Gustavo tech',
        email: 'gustavo@email.com',
        imagePost: require('../../../assets/img/turismo-rural-paraguai.jpg'),
        comments: [{
            nickname: 'João Wall',
            comment: 'Show!'
        }, {
            nickname: 'Maria Julia',
            comment: 'Muito Bacana mesmo!'
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
        default:
            return state    
    }
}

export default reducer