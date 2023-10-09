import { postRequest } from './apiUtils';
import { isValidEmail, isValidPassword, isValidPhone } from './validationUtils';

export const handleInputChange = (event, stateSetter) => {
    const { name, value } = event.target;
    stateSetter(prevState => ({ ...prevState, [name]: value }));
};

export const validateInputs = ({ email, password, phone }) => {
    const errors = {};

    if (!isValidEmail(email)) {
        errors.email = "Invalid email address";
    }

    if (!isValidPassword(password)) {
        errors.password = "Password must be at least 8 characters";
    }

    if (!isValidPhone(phone)) {
        errors.phone = "Invalid phone number. It should be 10 digits.";
    }

    return errors;
};

export const loginUser = async ({ email, password }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === "test@example.com" && password === "password123") {
        return { success: true, message: "Logged in successfully!" };
    } else {
        return { success: false, message: "Invalid email or password!" };
    }
};

export const requestPasswordReset = async (email) => {
    try {
        const response = await postRequest('/request-password-reset', { email });
        return response;
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const validateResetToken = async (token) => {
    try {
        const response = await postRequest('/validate-reset-token', { token });
        return response;
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const setNewPassword = async (token, newPassword) => {
    try {
        const response = await postRequest('/set-new-password', { token, newPassword });
        return response;
    } catch (error) {
        return { success: false, message: error.message };
    }
};