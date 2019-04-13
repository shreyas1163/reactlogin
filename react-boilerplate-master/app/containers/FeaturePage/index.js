/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';


export default class FeaturePage extends React.Component {
  // Since state and props are static,

  constructor(props){
    super(props)
    this.state = {"data": [{
      "id":1,
      "name":"test1",
      "age" : "11",
      "gender":"male",
      "email" : "test1@gmail.com",
      "phoneNo" : "9415346313"
      },
      {
      "id" : 2,
      "name":"test2",
      "age" : "12",
      "gender":"male",
      "email" : "test2@gmail.com",
      "phoneNo" : "9415346314"
      },
      {
      "id":3,
      "name":"test3",
      "age" : "13",
      "gender":"male",
      "email" : "test3@gmail.com",
      "phoneNo" : "9415346315"
      },
      {
      "id":4,
      "name":"test4",
      "age" : "14",
      "gender":"male",
      "email" : "test4@gmail.com",
      "phoneNo" : "9415346316"
      },
      {
      "id":5,
      "name":"test5",
      "age" : "15",
      "gender":"male",
      "email" : "test5@gmail.com",
      "phoneNo" : "9415346317"
      },
      {
      "id":6,
      "name":"test6",
      "age" : "16",
      "gender":"male",
      "email" : "test6@gmail.com",
      "phoneNo" : "9415346318"
      }
     ]
     }
 
}

  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta
            name="description"
            content="Dashboard of React.js Boilerplate application"
          />
        </Helmet>
    
    
     <div>
         <table className="table">
          <thead>
            <tr>
                <th style={{height: '50px'}}>name</th>
                <th style={{height: '50px'}}>age</th>
                <th style={{height: '50px'}}>gender</th>
                <th style={{height: '50px'}}>Email</th>
                <th style={{height: '50px'}}>phoneNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(obj => { 
              return (
                
                <tr>
                  
                  <td style={{backgroundColor: 'white'}}>{obj.name}</td>
                  <td style={{backgroundColor: 'white'}}>{obj.age}</td>
                  <td style={{backgroundColor: 'white'}}>{obj.gender}</td>
                  <td style={{backgroundColor: 'white'}}>{obj.email}</td>
                  <td style={{backgroundColor: 'white'}}>{obj.phoneNo}</td>

        
                </tr>
              );
            })}
          </tbody>
        </table>
       </div>
       </div>
      
    );
  }
}
