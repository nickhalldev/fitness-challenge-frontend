import { withFormsy } from 'formsy-react';
import React from 'react';

class SimpleInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    console.log('props - ', props)
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
    this.props.onChange(event);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div>
        <input
          id={this.props.id}
          name={this.props.name}
          onFocus={this.props.onFocus}
          onChange={this.changeValue}
          type={this.props.type}
          validations={this.props.validations}
          value={this.props.getValue() || ''}
          placeholder={this.props.placeholder}
          className={this.props.className}
        />
        <span className="validation-error validation-error-hidden">{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(SimpleInput);
