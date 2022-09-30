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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App