import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Container } from './App.styled';


export default function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const onClick = (evt) => {

    switch (evt.target.name) {
      case 'good':
        setGood(prevState => prevState +1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState +1)
        break;
      case 'bad':
        setBad(prevState =>  prevState +1)
        break;
      
      default: return
    }
    
  };

  // const onClick = evt => {
  //   useState(prevState => ({
  //     [evt.target.name]: prevState[evt.target.name] + 1,
  //   }));
  // };

  const countTotalFeedback =() => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  }

 
    const total = countTotalFeedback();
    const positiveFeegback = countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{good, neutral, bad}}
            onLeaveFeedback={onClick}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeegback={positiveFeegback}
            />
          )}
        </Section>
        <GlobalStyle/>
      </Container>
    );
  }



