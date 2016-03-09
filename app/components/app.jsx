import React from 'react';

export default class App extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <h3>{ article.title }</h3>
        <section>
          { article.text }
        </section>
      </div>
    );
  }
}
