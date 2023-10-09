// Helper function to handle input changes.
export const handleInputChange = (event, stateSetter) => {
    const { name, value } = event.target;
    stateSetter(prevState => ({ ...prevState, [name]: value }));
};

// Simple validation for email and password. 
// This can be expanded based on more specific requirements.
export const validateInputs = ({ email, password }) => {
    const errors = {};

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalid email address";
    }

    if (!password || password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    return errors;
};

// Simulated login function. Replace this with an actual API call in a real-world scenario.
export const loginUser = async ({ email, password }) => {
    // Simulating a network request delay.
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === "test@example.com" && password === "password123") {
        return { success: true, message: "Logged in successfully!" };
    } else {
        return { success: false, message: "Invalid email or password!" };
    }
};

// Simulated request for password reset. 
// In a real-world scenario, this would send an email to the user with a reset link or code.
export const requestPasswordReset = async (email) => {
    // Simulating a network request delay.
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === "test@example.com") {
        return { success: true, message: "Password reset email sent!" };
    } else {
        return { success: false, message: "Email not found!" };
    }
};

// Simulated validation of reset token. 
// Replace this with actual validation against your backend in a real-world scenario.
export const validateResetToken = async (token) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demonstration, let's assume '123456' is a valid token.
    if (token === "123456") {
        return { success: true, message: "Token validated!" };
    } else {
        return { success: false, message: "Invalid token!" };
    }
};

// Simulated function to set a new password after reset. 
// In a real-world scenario, you'd make an API call to update the password in your database.
export const setNewPassword = async (token, newPassword) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For this demonstration, let's assume '123456' is a valid token.
    if (token === "123456") {
        return { success: true, message: "Password updated successfully!" };
    } else {
        return { success: false, message: "Error updating password!" };
    }
};
