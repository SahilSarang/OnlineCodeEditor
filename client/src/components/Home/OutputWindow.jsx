import React from 'react'

import spin from '../../assets/loader.png'

const OutputWindow = () => {
  var loading = false
  return (
    <div>
      <h3>Output:</h3>
      {loading ? (
            <div className="spinner-box">
              <img src={spin} alt="Loading..." />
            </div>
          ) : (
            <div className="output-box">
              {/* <pre>{userOutput}</pre> */}
              <button className="clear-btn">
                 Clear
              </button>
            </div>
          )}
    </div>
  )
}

export default OutputWindow
