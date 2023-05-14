import React from 'react'

import OutputWindow from './OutputWindow'
import InputWindow from './InputWindow'
import CodeEditor from './CodeEditor'

const Home = () => {
  return (
    <div className='main-frame'>
        <div className='left-frame'>
            <CodeEditor/>
        </div>
        <div className='right-frame'>
            <div className='input-window'>
                <InputWindow/>
            </div>
            <div className='output-window'>
                <OutputWindow/>
            </div>
        </div>
    </div>
  )
}

export default Home
