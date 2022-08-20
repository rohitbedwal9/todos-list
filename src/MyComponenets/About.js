import React from 'react'

export const About = () => {
  const aboutStyle={
    margin:"2em auto auto auto",
    height:"80vh"
  }
  const headingStyle={
    color:"white",
    backgroundColor:"black",
    margin:"auto auto 1em auto",
    textAlign:"center"
  }
  return (
    <div className="container" style={aboutStyle}>
        <h3 style={headingStyle}>About Website</h3>
        <h6>TODOS List Website is a kind of Website that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. 
          <hr/><b>Features:</b><hr/>
          <ul>
            <li>Create (add) a new task or adding a new ToDo in the ToDo List App.</li>
            <li>See all the tasks or View all the ToDos that were added to the app.</li>
            <li>Delete any ToDo from the list of ToDos.</li>
          </ul>
        </h6>
    </div>
  )
}
