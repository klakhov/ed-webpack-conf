import {setter} from "../utils/setter";

export default class ErrorBundler {
    constructor(validator) {
        this.validator = validator;
    }
    parseError(){
        if(!this.validator.isIntegers || !this.validator.isStrings){
            setter('Inputs should be strings or integers!');
        }
    }
}