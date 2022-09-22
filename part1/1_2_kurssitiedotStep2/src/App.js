const Part = (props) => {
    return (
      <div>
        <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
        <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
        <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
      </div>
    )
}

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

  const Content = (props) => {
      return (
        <div>
          <Part course={props.course} />
        </div>
      )
  }

  const Total = (props) => {
    const sum1 = props.course.parts[0].exercises;
    const sum2 = props.course.parts[1].exercises;
    const sum3 = props.course.parts[2].exercises

    console.log(props.course.parts[0]);

    return (
      <div>
        <p>Number of exercises {sum1 + sum2 +sum3}</p>
      </div>
    )
  }

  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }

    console.log(Object.values(course));

    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

  export default App;
