//input names and their requirements
let config = {
    'firstname_lastname': {
        required: true,
        min_length: 3,
        max_length: 50
    },
    'username': {
        required: true,
        min_length: 5,
        max_length: 50
    },
    'email': {
        required: true,
        email: true,
        min_length: 5,
        max_length: 50
    },
    'postal_code': {
        required: true,
        min_length: 5,
        max_length: 5,
        numbers: true
    },
    'phone': {
        min_length: 9,
        max_length: 13,
        numbers: true
    },
    'password': {
        required: true,
        min_length: 7,
        max_length: 25,
        matching: 'confirm_password'
    },
    'confirm_password': {
        required: true,
        min_length: 7,
        max_length: 25,
        matching: 'password'
    }
};

let validator = new Validator(config);