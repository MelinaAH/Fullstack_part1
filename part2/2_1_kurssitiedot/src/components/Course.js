const Total = ({ parts }) => {
    const total = parts.reduce((prev, curr) => prev + curr.exercises, 0);
  
    return (
      <div>
        <p><b>total of {total} exercises</b></p>
      </div>
    )
  }
  
  const Content = ({ name, parts }) => {
    return (
      <div>
        <h2>{name}</h2>
        {parts.map(part =>
          <p key={part.id}>{part.name} {part.exercises}</p>
        )}
        <Total parts={parts} />
      </div>
    )
  }
  
  const Header = ({ courses }) => {
    return (
      <div>
        {courses.map(course =>
          <Content key={course.id} name={course.name} parts={course.parts} />
        )}
      </div>
    )
  }
  
  const Course = ({ courses }) => {
    return (
      <div>
        <Header courses={courses} />
      </div>
    )
  }

export default Course