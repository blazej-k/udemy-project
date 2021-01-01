import { SIGNIN, SIGNOUT, SIGNUP, BUYCOURSE, GETSTATE, GETUSERCOURSES, USER_SENDREQUEST, USERERROR } from '../actions/UserActions'
import arrayBufferToBase64 from './arrayBufferToBase64'

const initState: UserReducer = {
    user: {},
    loading: false,
    error: ''
}

export const UserReducer = (state = initState, action: UserActionType) => {
    const { localStorage } = window
    switch (action.type) {
        case USER_SENDREQUEST:
            return state = { ...state, error: '', loading: true }

        case SIGNUP:
        case SIGNIN:
            const { payload } = action
            const { login, password, isAdmin, isUserLogged, _id } = payload
            localStorage.setItem('store', JSON.stringify({ login, password, isAdmin, isUserLogged, _id }))
            return state = { user: payload, loading: false, error: '' }

        case SIGNOUT:
            localStorage.removeItem('store')
            return state = initState

        case BUYCOURSE:
        case GETUSERCOURSES:
            let newCourses: CourseObj[]
            newCourses = action.payload.map((course) => {
                const imageStr = arrayBufferToBase64(course.img.data.data);
                return { ...course, imgString: `data:${course.img.contentType};base64,` + imageStr }
            })
            return state = { user: { ...state.user, courses: newCourses }, loading: false, error: '' }

        case GETSTATE:
            return state = { user: action.payload, loading: false, error: '' }

        case USERERROR:
            return state = { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}   