import React from 'react'

const Button = () => {
  return (
    <div>Button
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        Visit {name}
      </a>

    </div>
  )
}

export default Button


.card-link {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  margin: 8px 0;
}

.card-link:hover {
  background-color: #0056b3;
}