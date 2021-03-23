import React, { Component } from 'react';
import './css/style.css';
import Menu from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AcUnitIcon from '@material-ui/icons/AcUnit';

class App extends Component {
  handleWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
    if (window.innerWidth <= 768) {
      this.setState({
        collapseNav: true,
      });
    }
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWidth);
  };

  expandCollapsedNav = () => {
    this.setState({
      expandNavMenu: !this.state.expandNavMenu,
    });
  };

  state = {
    windowWidth: window.innerWidth,
    expandNavMenu: false,
    collapseNav: false,
  };

  render() {
    const navBar =
      this.state.windowWidth > 768 ? (
        <div className='nav-content'>
          <div className='nav-left'>site title</div>
          <div className='nav-right'>
            <div>Home</div>
            <div>About</div>
            <div>Rules</div>
            <div>Events</div>
            <div>Login</div>
          </div>
        </div>
      ) : this.state.expandNavMenu ? (
        <div className='nav-content'>
          <MenuOpen
            className='nav-left'
            onClick={this.expandCollapsedNav}
          />
          <AcUnitIcon />
          <AccountCircleIcon className='nav-right' />
        </div>
      ) : (
        <div className='nav-content'>
          <Menu
            className='nav-left'
            onClick={this.expandCollapsedNav}
          />
          <AcUnitIcon />
          <AccountCircleIcon className='nav-right' />
        </div>
      );

    return (
      <div className='root'>
        <div className='nav'>{navBar}</div>
        <div className='side'>side</div>
        <div className='content'>content</div>
        <div className='content'>more content</div>
        <div className='content'>small stuff</div>
        <div className='footer'>footer</div>
      </div>
    );
  }
}

export default App;
