import { SIGNIN, SIGNOUT, SIGNUP, BUYCOURSE, GETSTATE } from '../actions/UserActions'


const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

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
                        res.courses = []
                        localStorage.setItem('store', JSON.stringify(res))
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
        default:
            return state
    }
}   