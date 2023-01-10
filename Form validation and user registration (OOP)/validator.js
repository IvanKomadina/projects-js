class Validator {
    constructor(config) {
        this.elementsConfig = config;
        this.errors = {};

        this.generateErrorsObject();
        this.inputListener();
    }
    //generate object with array of errors for every input field
    generateErrorsObject() {
        for(let field in this.elementsConfig) {
            this.errors[field] = [];
        }
    }
    //go through all elements of config and make listener for every element
    inputListener() {
        let inputSelector = this.elementsConfig;

        for(let field in inputSelector) {
            let el = document.querySelector(`input[name="${field}"]`);
            el.addEventListener('input', this.validate.bind(this));
        }
    }
    //main function for checking input(receives current field)
    validate(e) {
        let el_fields = this.elementsConfig;
        //take name and value of current field
        let field = e.target;
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;
        //array for errors of current field
        this.errors[fieldName] = [];
        //validation if field is required
        if(el_fields[fieldName].required) {
            if(fieldValue === '') {
                this.errors[fieldName].push('This field can not be empty');
            }
        }
        //validation if field is for email input
        if(el_fields[fieldName].email) {
            if(!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push('Incorrect email address');
            }
        }
        //check if field contains only numbers
        if(el_fields[fieldName].numbers) {
            if(!(/^\d+$/.test(fieldValue))) {
                this.errors[fieldName].push('Field can contain only numbers');
            }
        }
        //check the length of input
        if(fieldValue.length < el_fields[fieldName].min_length || fieldValue.length > el_fields[fieldName].max_length) {
            if(el_fields[fieldName].min_length === el_fields[fieldName].max_length) {
                this.errors[fieldName].push(`Field has to contain ${el_fields[fieldName].min_length} characters`);
            }
            else {
                this.errors[fieldName].push(`Field has to contain ${el_fields[fieldName].min_length} - ${el_fields[fieldName].max_length} characters`);
            }
        }
        //if field has to match with other field, check if they are same 
        if(el_fields[fieldName].matching) {
            //find field that has to be the same as current field
            let matchingEl = document.querySelector(`input[name="${el_fields[fieldName].matching}"]`);
            
            if(fieldValue !== matchingEl.value) {
                this.errors[fieldName].push('Passwords do not match');
            }
            //to prevent constant comparation of two fields that have to match
            if(this.errors[fieldName].length === 0) {
                this.errors[fieldName] = [];
                this.errors[el_fields[fieldName].matching] = [];
            }
        }

        this.populateErrors(this.errors);
    }
    //function for printing errors
    populateErrors(errors) {
        //remove old errors
        for (const elem of document.querySelectorAll('ul')) {
            elem.remove();
        }
        //loop through errors, find parent element of field where error occurs
        for(let key of Object.keys(errors)) {
            let parentEl = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsElement = document.createElement('ul');
            parentEl.appendChild(errorsElement);
            //loop through errors of every element
            //create element with text of error
            errors[key].forEach(error => {
                let li = document.createElement('li');
                li.innerText = error;

                errorsElement.appendChild(li);
            });
        }
    }
    //regex function for email validation
    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }

        return false;
    }
}