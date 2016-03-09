import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  };

  render() {
    return (
      <div>
        <h3 onClick = {this.toggleOpen.bind(this)}>{ article.title }</h3>
        <section>
          {this.getBody()}
        </section>
      </div>
    );
  };

  getBody(){
    const { article } = this.props;
    const { isOpen } = this.state;
    if (!isOpen) return null;
    return <section>{article.text}</section>
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
