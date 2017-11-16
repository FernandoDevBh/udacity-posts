import React, { Component } from 'react';

class Layout extends Component {
  render () {
      return (
          <div className="site-wrapper">
              <div className="site-wrapper-inner">               
                  <div>
                      {this.props.children}
                  </div>
              </div>
          </div>
      );
  }
}

export default Layout;