import React, { Component } from 'react';
class UserResult extends Component{

  render() {
   var issues= [];
   var Obj=this.props.issues;
   for (var prop in Obj) {
     issues.push(Obj[prop])
   }
   //console.log(issues);
  
   const images=[
       "/can_I_eat_this/images/icons/egg-color.png",
       "/can_I_eat_this/images/icons/fish-color.png",
       "/can_I_eat_this/images/icons/milk-color.png",
       "/can_I_eat_this/images/icons/icons-blackandwhite/peanut-bw.png",
       "/can_I_eat_this/images/icons/sesame-color.png",
       "/can_I_eat_this/images/icons/shellfish-color.png",
       "/can_I_eat_this/images/icons/soy-color.png",
       "/can_I_eat_this/images/icons/treenut-color.png",
       "/can_I_eat_this/images/icons/wheat-color.png",
       ];
   let fact , advice;
   console.log(this.props.finding)
  
   let result = this.props.finding.map((d,i) => {
     console.log("contained food"+ d)
    
     if(issues[i+1]===true && d===true) {
       advice="allergy warning: This product is not for you";
       console.log("allergy" + issues[i + 1] + "contained food" + d)
     } else {
       advice=" ";
     }
     if(d) {
       fact = "✔️ The product contains ";
     } else {
       fact = "✖︎ The product does not contain"
     }
    
     return (
       <tr key={i} >
         <td >{fact}</td>
         <td className="icons"><img src={images[i]} alt="allergies" /></td>
         <td >{advice}</td>
       </tr>
       )
     }
   );
  
   return (
     <center>
       <table>
         <tbody className="historyRow">
           {result}
         </tbody>
       </table>
     </center>
   )
 }
};

export default UserResult;