import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Bad', 'Very Bad', 'Good',
           'Very Good', 'Best'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [20, 5, 25, 20, 30]
    }
  ]
}

export default class FeedbackVisualization extends React.Component {
  render() {
    return (
      <div>
       

        <Doughnut
          data={state}
          width={600}
          options={{
            title:{
              display:true,
              text:'Overall Feedback',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}