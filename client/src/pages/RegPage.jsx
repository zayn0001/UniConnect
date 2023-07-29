import React from 'react'
import './../firebase-connect'

const RegPage = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
          <label htmlFor="usernameInput">Username:</label>
          <input id="usernameInput" type="text" />
          </div>
          <div>
          <label htmlFor="passwordInput">Password:</label>
          <input id="passwordInput" type="text" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

export default RegPage