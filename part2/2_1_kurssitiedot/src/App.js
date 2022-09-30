const Total = ({ parts }) => {
  const total = parts.reduce((prev, curr) => prev + curr.exercises, 0);

  return (
    <div>
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

const Part = ({ parts }) => {
  console.log('part:', parts);

  return (
    <div>
      {parts.map(part =>
        <p key={part.id}>{part.name} {part.exercises}</p>)}
      <Total parts={parts} />
    </div>
  )
}

const Content = ({ course }) => {
  console.log('Content:', course.parts);

  return (
    <div>
      <Part parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Course = ({ course }) => {
  console.log('course:', course.name);

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const course = {
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
      }
    ]
  }
  console.log('app toimii:', course.name);

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App