import React from 'react';
import Onclock from './onclock/onclock';
import Ref from './Ref/Ref' ;


 function App() {
   const myname="prakrithi";
   return(
     <div>
     <Onclock name = {myname} />
     <Ref />
     </div>
   );

 }
export default App;
