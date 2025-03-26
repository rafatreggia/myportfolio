import React from 'react'


const EmailTemplate = ({nombre,asunto,email}) => {
    
  return (
    <div>Te a enviado un email {nombre} con el siguiente sunto: {asunto} de parte de {email}</div>
  )
}

export default EmailTemplate