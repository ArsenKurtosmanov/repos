import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


class User {
    constructor (id) {
        this.id = id
    }
}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        registerUser ({commit}, {email, password}) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                commit('setUser', new User(user.id))
            })
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}