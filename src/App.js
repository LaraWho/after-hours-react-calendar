import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    let monthDays = {
      Jan: 31,
      Feb: 28,
      Mar: 31,
      Apr: 30,
      May: 31,
      Jun: 30,
      Jul: 31,
      Aug: 31,
      Sep: 30,
      Oct: 31,
      Nov: 30,
      Dec: 31
    }

    let days = []

    for(let month in monthDays) {
      for(let i = 1; i <= monthDays[month]; i++) {
          let day = {
            month: month,
            day: i
          }
          days.push(day)
      }
    

  
  this.state = {
    days: days
  }
}

  render() {
    let styles = {
      height: 150,
      width: 150,
      border: '2px solid black'
    }

    let displayDays = this.state.days.map( (day, i) => {
    return(
    <div style={styles} key={ day.month + day.day}> { `${day.month} - ${day.day}` } </div> 
    )
  })
  

    return(
      <div className="cal">
        {displayDays}
      </div>
    );
    
  }
}


export default App;
