# react-copy-to-clipboard

React library for building declarative copy to clipboard buttons

## Example

```
class App extends Component {
  render() {
    return (
      <CopyToClipboard
        onCopy={({ success, text }) => {
          var msg = success ? "Copied!" : "Whoops, not copied!";
          this.button.innerHTML = msg;
          console.log(msg, text);
        }}
        render={({ copy }) => (
          <div>
            <input
              defaultValue="some text"
              ref={input => {
                this.textInput = input;
              }}
            />
            <button
              onClick={() => copy(this.textInput.value)}
              ref={button => {
                this.button = button;
              }}
            >
              Copy
            </button>
          </div>
        )}
      />
    );
  }
}

```

[![Edit react-copy-to-clipboard](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/84wjv58r0j)

## Built With

* [React](https://reactjs.org)
* [ReactDOM](https://reactjs.org/docs/react-dom.html)
* [copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard)

## Authors

* **Vicent Gozalbes** - *Initial work* - [vigosan](https://github.com/vigosan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
