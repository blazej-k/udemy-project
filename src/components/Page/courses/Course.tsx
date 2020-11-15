import React, {FC} from 'react'
 export interface CourseProps {
     name: string,
     author: string,
     img?: unknown,
     description: string,
     price?: number
 }
  
 const Course: FC<CourseProps> = ({name, author, description, price =  -1}) => {
     return (
         <div className="Course">
            <h2>{name}</h2>
            <span>{author}</span>
            <p>To bd zdj</p>
            <p>{description}</p>
            {price > -1 && <h1>{price}</h1>}
         </div>
     );
 }
  
 export default Course;