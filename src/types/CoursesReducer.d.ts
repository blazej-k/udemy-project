type CoursesRedcucerType = AddCourse | GetCourses | Courses_SendRequest | CoursesError | CourseAdded

type CoursesReducer = {
    courses: CourseObj[]
    loading: boolean,
    error: string
}