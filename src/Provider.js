import React from 'react';

const DEFAULT_STATE = {
  // allChar: Char,
  // searchTerm: '',
};

export const ThemeContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
  state = DEFAULT_STATE;

  searchTermChanged = searchTerm => {
    this.setState({searchTerm});
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          searchTermChanged: this.searchTermChanged,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
