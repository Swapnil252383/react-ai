// src/components/Courses.js
import React from 'react';
import './Courses.css';

const coursesData = [
  { title: 'React Basics', description: 'Learn the fundamentals of React.' },
  { title: 'Advanced React', description: 'Dive deeper into React features and best practices.' },
  { title: 'React with Redux', description: 'Manage state effectively using Redux.' },
  { title: 'React Native', description: 'Build mobile applications using React Native.' },
];

const Courses = () => {
  return (
    <div className="courses">
      <h1>Available Courses</h1>
      <div className="course-list">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
