type UserActionType = SignIn | SignOut | SignUp | BuyCourse | GetState | GetUserCourses | User_SendRequest | UserError

type UserReducer = {
    user: User,
    loading: boolean,
    error: string
}