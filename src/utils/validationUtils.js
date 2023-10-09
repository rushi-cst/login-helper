export const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const isValidPassword = (password) => {
    // Adjust this regex based on your password requirements
    return password.length >= 8;
};

export const isValidPhone = (phone) => {
    // This regex checks for 10-digit phone numbers. Adjust based on your requirements.
    return /^[0-9]{10}$/.test(phone);
};