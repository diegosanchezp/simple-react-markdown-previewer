import React, {useState, useEffect } from 'react';
import './App.css';
import marked from 'marked';
import hljs from 'highlight.js' ;

function App() {
  marked.setOptions({
    breaks: true,
    highlight: function(code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'markdown';
      return hljs.highlight(validLanguage, code).value;
    }
  })
  const initialMarkDown = 
`
# H1
## H2

[I'm an inline-style link](https://www.google.com)

Inline \`code\` has \`back-ticks around\` it.

\`\`\`javascript
// Codeblock
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
  const [html, setHtml] = useState(
    marked(initialMarkDown)
  );
  function processMarkdown(event){
    setHtml(
      marked(event.target.value)
    );
  }
  return (
    <div className="App">
      <textarea id="editor" onChange={processMarkdown}>
        {initialMarkDown}
      </textarea>
      <section id="preview" dangerouslySetInnerHTML={{ __html: html}}>
      </section>
    </div>
  );
}

export default App;
