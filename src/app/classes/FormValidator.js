export default class  FormValidator {
    constructor(data) {
        this.firstField = data.firstField;
        this.secondField = data.secondField;
        this.isIntegers = false;
        this.isStrings = false;
    }

    validate() {
        if (this.validateIntegers) {
            this.isIntegers = true;
            return true;
        } else if (this.validateStrings) {
            this.isStrings = true;
            return true;
        }
        return false
    }

    validateIntegers() {

        return (typeof(this.firstField) == "number")&&(typeof(this.secondField)=="number");
    }

    validateStrings() {
        return (typeof(this.firstField) == "string")&&(typeof(this.secondField)=="string");
    }
}
