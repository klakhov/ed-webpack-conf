import FormValidator from "./classes/FormValidator";
import {getter} from './utils/getter';
import {setter} from "./utils/setter";
import ErrorBundler from "./classes/ErrorBundler";
import './app.sass';
import './app.css';
export const run = ()=>{
    let button = document.getElementById('summarise');
    button.addEventListener('click',()=>{
        let validator = new FormValidator(getter());
        if(validator.validate()){
            let data = getter();
            setter(data.firstField+data.secondField);
        }else{
            let errorBundler = new ErrorBundler(validator);
            errorBundler.parseError();e
        }
    });
}