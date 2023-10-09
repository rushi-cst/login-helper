const API_ENDPOINT = "https://yourapiendpoint.com";

export const postRequest = async (url, data) => {
  try {
    const response = await fetch(`${API_ENDPOINT}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Add other methods like getRequest, putRequest, etc. as needed
