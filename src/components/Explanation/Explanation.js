import React from 'react'
import './Explanation.css';

const Explanation = () => {
  return (
    <div className='explanation-main'>
      <div>
      <h2>
        Explication:
      </h2>
      </div>
      <div className='guide-content'>
      <text >
      <p >
        - Le <span className="green-ribbon">ruban vert</span> avec le mot <strong>"Disponible"</strong> signifie que le service fonctionne correctement et est accessible sans problème.
        </p>
      <p>
        - Le <span className="red-ribbon">ruban rouge</span> avec le mot <strong>"Indisponible"</strong> indique que le service est temporairement hors ligne ou indisponible en raison d'une panne ou d'un problème technique.
      </p>
        <p>
          - Accessible Globalement: Disponible sur le cloud et accessible de n'importe où
        </p>
        <p>
          - Accessible Localement: Disponible uniquement sur le serveur local
        </p>
      </text>
      </div>

    </div>
  )
}

export default Explanation
