



export const SliceName = (name, maxLength = 5) =>{
 
    if(name?.length > maxLength) {

        return name.slice(0, maxLength, -3) + '...'
    }


    return name


}


export const SliceNameNot = (name, maxLength = 5) =>{
 
    if(name?.length > maxLength) {

        return name.slice(0, maxLength, -3) 
    }


    return name


}