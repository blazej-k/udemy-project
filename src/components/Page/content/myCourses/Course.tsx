import React from 'react'
 export interface CourseProps {
     name: string,
     author: string,
     rate: number,
     img?: unknown,
     description: string,
     price?: number
 }
  
 const Course: React.FunctionComponent<CourseProps> = ({name, author, rate, description, price =  -1}) => {
     return (
         <div className="Course">
            <h2>{name}</h2>
            <span>{author}</span>
            <p>To bd zdj</p>
            <p>{description}</p>
            <h2>{rate}</h2>
            {price > -1 && <h1>{price}</h1>}
         </div>
     );
 }
  
 export default Course;