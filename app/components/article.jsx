import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  };

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;
    const body = isOpen ? article.text : null;

    return (
      <div>
        <h3 onClick = {this.toggleOpen.bind(this)}>{ article.title }</h3>
        <section>
          {body}
        </section>
      </div>
    );
  };

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
