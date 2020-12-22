import { SIGNIN, SIGNOUT, SIGNUP, BUYCOURSE, GETSTATE, GETUSERCOURSES } from '../actions/UserActions'


export const UserReducer = async (state: User = {}, action: UserActionType) => {
    const { localStorage } = window
    switch (action.type) {
        case SIGNUP:
        case SIGNIN:
            await action.payload
                .then(res => res.json())
                .then((res: User) => state = res)
                .then(res => {
                    if (!res.error){
                        const resToStorage = res
                        delete resToStorage.courses
                        localStorage.setItem('store', JSON.stringify(resToStorage))
                    }
                })
            return state

        case SIGNOUT:
            state.isUserLogged = false
            localStorage.removeItem('store')
            return state = {} 

        case BUYCOURSE:
            await action.payload
                .then(res => res.json())
                .then((res: User) => {
                    state = res
                    res.courses?.map((course: CourseObj): string => {
                        const imageStr = arrayBufferToBase64(course.img.data.data);
                        return course.imgStringsTab = `data:${course.img.contentType};base64,` + imageStr
                    })
                })
            return state
        
        case GETSTATE:
            return state = action.payload
        case GETUSERCOURSES:
            let newState: User = {}
            await Promise.resolve(state).then(res => newState = res).then(async() => {
                await action.payload
                    .then(res => res.json())
                    .then((res: CourseObj[]) => {
                        newState = {...newState, courses: res}
                        newState.courses?.map((course: CourseObj): string => {
                            const imageStr = arrayBufferToBase64(course.img.data.data);
                            return course.imgStringsTab = `data:${course.img.contentType};base64,` + imageStr
                        })
                    })
                }
            )
            console.log(newState)
            return state = newState
        default:
            return state
    }
}   