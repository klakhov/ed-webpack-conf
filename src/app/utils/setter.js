export const setter = (data)=>{
    let resultFiled = document.getElementById('result');
    resultFiled.classList.remove('d-none');
    resultFiled.innerText = data;
};