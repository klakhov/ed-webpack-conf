export const getter = ()=>{
    let fistField=document.getElementById("field-1").value;
    let secondField=document.getElementById("field-2").value;
    if(parseInt(fistField)) fistField = parseInt(fistField);
    if(parseInt(secondField)) secondField = parseInt(secondField);
    return {
        firstField:fistField,
        secondField:secondField,
    }
};
