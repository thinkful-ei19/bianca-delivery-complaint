
export const required = value => 
    value !== undefined ? undefined : 'This field is required';
export const nonEmpty = value => 
    value.trim() !== '' ? undefined : 'You need to type something';

export const exactCharacters = value =>
    value.length === 5 ? undefined : 'Must be 5 characters long';
export const beNumber = value =>
    isNaN(value) ? 'Must be a number': undefined;

