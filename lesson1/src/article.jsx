import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render(){
    const {article, isSelected, onClick} = this.props;
    const style = isSelected ? {color:'red'} : null;
    return (
      <div style={style}>
        <h1 onClick={this.toggleOpen.bind(this)}>{article.title}</h1>
        <a href="#" onClick={onClick}>select me</a>
        {this.getBody()}
      </div>
      )
  }

  getBody() {
    const {article} = this.props;
    const {isOpen} = this.state;
    if(!isOpen) return null;
    return <section>{article.text}</section>;
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article;