import React from 'react'

function App() {
  React.useEffect(() => {
    // Register the message listener on load
    // eslint-disable-next-line
    chrome.runtime.onMessage.addListener((action) => {
      switch (action.type) {
        case 'filter-by-duration': {
          console.log('received click event from context menu')
          break
        }
        default:
          break
      }
    })
  }, [])

  return null
}

export default App
