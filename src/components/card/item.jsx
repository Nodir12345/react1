import React from "react"
import "./item.css"
export const Item = (user) => {
  return (
    <div>
      {user.children}
      <p className="item">{user.name}
      </p>
      <p>{user.age}</p>
      {
        user.insof ? <p>insofli</p> : <p>insofsiz</p>
      }

    </div>
  )
}