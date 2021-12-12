import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks=(props)=>{

  let [editMode, setEditMode]=useState(false);
let[status, setStatus]=useState(props.status)

useEffect(()=>{
  setStatus(props.status)
}, [props.status])

  const activateEditMode =()=>{
    console.log("huy");
setEditMode(true);
}

const deactivateEditMode=()=>{
    console.log('deactivate');
setEditMode(false);
props.updateStatus(status)

}

const onStatusChange=(e)=>{
setStatus(e.currentTarget.value);
}
return(
<div>
   { !editMode && <div>
        <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
    </div>}
   {editMode && <div>
        <input  
        onChange={onStatusChange}
        autoFocus={true}
         onBlur={deactivateEditMode}
         value={status}/>
    </div>}
</div>
);

}


export default ProfileStatusWithHooks;