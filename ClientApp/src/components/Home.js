import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>To-do em .Net Core com React</h1>
        <p>Esta é uma single-page application (SPA), com:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> e <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> para código servidor cross-platform</li>
          <li><a href='https://facebook.github.io/react/'>React</a> para código do lado do cliente</li>
          <li><a href='https://www.mysql.com/'>MySQL</a> para armazenamento via AWS RDS</li>
        </ul>
        
      </div>
    );
  }
}
