export var studentArray=[]
export default function addStudentaddStudentOnTheBasedTheirIdNameHobbiesMobOnTheBasedTheirIdNameHobbiesMob(statetVariableId,stateVariableName,stateVariableHobbies,stateVariableMob){
var objectElement={id:statetVariableId,name:stateVariableName,hobbies:stateVariableHobbies,mob:stateVariableMob};
studentArray.push(objectElement) 
}
export function searchStudentBasedOnId(Id){
var student=studentArray.find((e)=>(e.id==Id))
return student;
}
export function deleteStudentBasedOnId(Id){
for(var i=0;i<studentArray.length;i++) {
    if(studentArray[i].id==Id){
       studentArray.splice(i,1);
    
       return "Customer Deleted Successfully"
    }
    
}

        return "Customer Not Found"
   
}
export function modifyCustomerBasedOnId(Name,Id,Hobbies,Mob){
var objectStudent=studentArray.find((e)=>(e.id==Id))
  objectStudent.Name=Name;
objectStudent.hobbies=Hobbies;
objectStudent.mob=Mob;
}