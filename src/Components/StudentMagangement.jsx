import React, { useState } from 'react'
import "/public/Static/CSS/style.css"
import addCustomerOnTheBasedTheirIdNameHobbiesMob, { deleteStudentBasedOnId,  modifyCustomerBasedOnId, searchStudentBasedOnId, studentArray } from '../BLL/function';

import DisplayStudent from './DisplayStudent';
function StudentMagangement() {
const[stateVariableId,setStateVariableId]=useState();
const[stateVariableName,setStateVariableName]=useState();
const[stateVariableHobbies,setStateVariableHobbies]=useState();
const[stateVariableMobileNo,setStateVariableMobileNO]=useState();
const[stateArray,setStateVariableArray]=useState([]);
function readValueId_OnChange (e){
setStateVariableId(e.target.value)
}
function readValueName_OnChange (e){
setStateVariableName((e.target.value))
}
function readValueHob_OnChange(e){
setStateVariableHobbies(e.target.value)
}
function readValueMob_OnChange(e){
setStateVariableMobileNO(e.target.value)
}
 function addStudentInfo_onClick(e){
   addCustomerOnTheBasedTheirIdNameHobbiesMob(stateVariableId,stateVariableName,stateVariableHobbies,stateVariableMobileNo)
setStateVariableArray([...studentArray])

 }
 function searchStudent_onClick(e){
   var object= searchStudentBasedOnId(stateVariableId);
   if(object){setStateVariableName(object.name)
 setStateVariableHobbies(object.hobbies) 
  setStateVariableMobileNO(object.mob) }
  else{
    alert("Id's not Found")
  }

 }
 function deletedStudent_onClick(e){
  var mssg= deleteStudentBasedOnId(stateVariableId);
  alert(mssg)
   setStateVariableArray([...studentArray]);

    
 }
 function modifyCustomer_onClick(e){
  modifyCustomerBasedOnId(stateVariableId);
  alert ("modify Successfully")
  setStateVariableArray([...studentArray]);
 }
 
    return (
        < >
            <table>
                <caption style={{fontSize:"50px",fontWeight:"300",color:"#ffe048ff"}}>Student Mananagement System</caption>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <label htmlFor="txtId">Student Id:</label> 
                            </td>
                           <td colSpan={2}><input onChange={readValueId_OnChange} value={stateVariableId} type="text" /></td> 
                       
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label htmlFor="txtName">Student Name:</label></td>
                          <td colSpan={2}> <input type="text"  onChange={readValueName_OnChange}value={stateVariableName} /></td> 
                      
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label htmlFor="TxtAddress">Student Hobbies:</label></td>
                           <td> <input type="text"  onChange={readValueHob_OnChange} value={stateVariableHobbies} /></td> 
                       
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label htmlFor="txtMobileNO">Student MobileNo:</label>  </td>
                        <td> <input type="text"  onChange={readValueMob_OnChange} value={stateVariableMobileNo}/></td>    
                      
                    </tr>
                </tbody>
            </table>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="button" value="ADD" onClick={addStudentInfo_onClick} className='btn' />
                        </td>
                        <td>
                            <input type="button" value="Search" onClick={searchStudent_onClick} className='btn'/>
                        </td>
                        <td>
                            <input type="button" value="Modify"className='btn' onClick={modifyCustomer_onClick}/>
                        </td>
                        <td>
                            <input type="button" value="Delete" onClick={deletedStudent_onClick} className='btn'/>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <DisplayStudent stateArray={stateArray}></DisplayStudent>
        </>

    )
}

export default StudentMagangement
