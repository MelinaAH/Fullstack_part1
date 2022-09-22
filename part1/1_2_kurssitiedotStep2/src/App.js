const Part = (props) => {
    return (
      <div>
        {props.parts.map((element) => (
          <p key={element.name}>{element.name} {element.exercises}</p>
        ))}
      </div>
    )
}

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = (props) => {
      return (
        <div>
          <Part parts={props.parts} />
        </div>
      )
  }

  const Total = (props) => {
    const sum1 = props.parts[0].exercises;
    const sum2 = props.parts[1].exercises;
    const sum3 = props.parts[2].exercises

    return (
      <div>
        <p>Number of exercises {sum1 + sum2 +sum3}</p>
      </div>
    )
  }

  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    console.log(Object.values(parts));

    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }

  export default App;
