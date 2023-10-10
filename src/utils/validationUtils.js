export const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const validatePassword = (password) => {
    const errors = [];

    if (!/(?=.*[a-z])/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }

    if (!/(?=.*[A-Z])/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }

    if (!/(?=.*\d)/.test(password)) {
        errors.push("Password must contain at least one number.");
    }

    if (!/(?=.*[@$!%*?&#])/.test(password)) {
        errors.push("Password must contain at least one special character (@$!%*?&#).");
    }

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    return errors;
};


export const isValidPhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
};