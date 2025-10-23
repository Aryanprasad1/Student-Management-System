import React from 'react'

import "/public/Static/CSS/style.css"
function DisplayStudent(props) {
  return (
    <>
  
      <table>
            
                    <tr>
                       
                        <td>Id:</td>
                        <td>Name:</td>
                        <td>Hobbiess:</td>
                        <td>MobileNo:</td>
                    </tr>
                    {
                     props.stateArray.map((e)=>( <tr>
                        <th>{e.id}</th>
                        <td>{e.name}</td>
                        <td>{e.hobbies}</td>
                        <td>{e.mob}</td>
                      </tr>))
                     
                    }
                    
              
            </table>
    </>
  )
}

export default DisplayStudent
