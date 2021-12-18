export const updateObjectInArray=(items, itemId, objPropName, newObjProps)=>{
   return  items.users.map(u => {
                    if (u["id"] === itemId) {
                        return { ...u, ...newObjProps };
                    }
                    return u;
                })
            }