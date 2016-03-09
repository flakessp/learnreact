import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  };

  getBody(){
    const { article } = this.props;
    const { isOpen } = this.state;
    if (!isOpen) return null;
    return <section>{article.text}</section>
  };

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { article, isSelected, onClick } = this.props;
    const style = isSelected ? {color: 'red'} : null;

    return (
      <div style={style}>
        <h3 onClick = {this.toggleOpen.bind(this)}>{ article.title }</h3>
        <a href="#" onClick = {onClick}>Select me</a>
        {this.getBody()}
      </div>
    );
  };
}
