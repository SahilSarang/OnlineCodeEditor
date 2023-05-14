import React from 'react'
import Editor from '@monaco-editor/react'

const CodeEditor = () => {
  return (
    <div>
      <h3>Code Editor:</h3>
      <h4>Default.py</h4>
      <button>x</button>
      <button>+</button>
      <div>
        <Editor
          height="50px"
          width="100%"
          defaultLanguage="python"
          defaultValue="# Enter your code here"/>
      </div>
    </div>
  )
}

export default CodeEditor
