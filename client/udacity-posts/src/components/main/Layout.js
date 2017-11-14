import React, { Component } from 'react';

class Layout extends Component {
  render () {
      return (
          <div className="site-wrapper">
              <div className="site-wrapper-inner">     
                  <h1>Udacity Posts Project</h1>             
                  <div>
                      {this.props.children}
                  </div>
              </div>
          </div>
      );
  }
}

export default Layout;