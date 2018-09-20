import React, { Component } from 'react';
import Truncate from 'react-truncate';

class ReadMore extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      expanded: false,
      truncated: false,
      search: ''
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {

    const {
      expanded,
      truncated,
      search
    } = this.state;
    let children = 'nihao,dfhkal,asld/wer.asdfnihao,dfhkal,asld/wer asdfasdfasdf';
    let content;
    if (search) {
      content = children.split(search);
      content = content.map((item, index) => {
        return (
          <span key={index}>
            {item}
            <i style={{ color: 'yellow' }}>{search}</i>
          </span>
        )
      })
    } else {
      content = children;
    }
    

    return (
      <div>
        <input value={this.state.search} onChange={e => this.setState({ search: e.target.value })} />
        <div style={{ width: 200, wordBreak: 'break-all' }}>
          <Truncate
            lines={!expanded && 3}
            ellipsis={(
              <a href='#' onClick={this.toggleLines}>Read more</a>
            )}
          >
            {content}
          </Truncate>
          {expanded && (
            <span> <a href='#' onClick={this.toggleLines}>Show less</a></span>
          )}
        </div>
      </div>
    );
  }
}

export default ReadMore;