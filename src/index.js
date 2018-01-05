import { Component } from 'react';
import PropTypes from 'prop-types';
import copyToClipboard from 'copy-to-clipboard';

class CopyToClipboard extends Component {
  static propTypes = {
    children: PropTypes.func,
    onCopy: PropTypes.func,
    render: PropTypes.func
  };

  static defaultProps = {
    children: () => null,
    onCopy: () => {}
  };

  copy = text => {
    const { onCopy } = this.props;
    const success = copyToClipboard(text);

    onCopy({ success, error: !success, text });
  };

  render() {
    const { children, render } = this.props;
    const renderProps = { copy: this.copy };

    if (render) {
      return render(renderProps);
    }

    return children(renderProps);
  }
}

export default CopyToClipboard;
