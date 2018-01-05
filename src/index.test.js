import React from 'react';
import { shallow } from 'enzyme';
import copyToClipboardMock from 'copy-to-clipboard';
import CopyToClipboard from './index';

jest.mock('copy-to-clipboard', () => jest.fn());

describe('CopyToClipboard', () => {
  it('renders its children', () => {
    const Children = () => null;
    const wrapper = shallow(
      <CopyToClipboard>{() => <Children />}</CopyToClipboard>
    );

    expect(wrapper.contains(<Children />)).toBe(true);
  });

  describe('render prop', () => {
    it('renders its children', () => {
      const Children = () => null;
      const wrapper = shallow(<CopyToClipboard render={() => <Children />} />);

      expect(wrapper.contains(<Children />)).toBe(true);
    });
  });

  it('copies text', () => {
    const wrapper = shallow(
      <CopyToClipboard
        render={({ copy }) => (
          <button onClick={() => copy('some text')}>Copy</button>
        )}
      />
    );

    wrapper.find('button').simulate('click');

    expect(copyToClipboardMock).toHaveBeenCalledWith('some text');
  });

  it('calls onCopy callback', () => {
    copyToClipboardMock.mockReturnValue(true);

    const onCopy = jest.fn();
    const wrapper = shallow(
      <CopyToClipboard
        onCopy={onCopy}
        render={({ copy }) => (
          <button onClick={() => copy('some text')}>Copy</button>
        )}
      />
    );

    wrapper.find('button').simulate('click');

    expect(onCopy).toHaveBeenCalledWith({
      success: true,
      error: false,
      text: 'some text'
    });
  });
});
