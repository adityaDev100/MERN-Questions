import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error and capture the error message
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render the fallback UI with the error message
      return (
        <div>
          <h4>{this.props.fallback}</h4>
          <h5>Exact error message : <span>{this.state.errorMessage}</span></h5>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
