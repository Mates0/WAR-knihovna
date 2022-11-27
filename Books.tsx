import React from "react";

export default function Books({title, icon}) {
  return (
    <div>
        <h1>{title}</h1>
        <div>{icon}</div>
    </div>
  )
}