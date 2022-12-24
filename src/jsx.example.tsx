import React, {createElement as e} from 'react';

function App() {
  // return (
  //   <h1>hello</h1>
  // );
    return e('div', {className: 'content'}, [
      e('h1', {className: 'title', key: 1}, 'title'),
      e('button', {key: 2}, 'click')
    ])
}

export default App;
