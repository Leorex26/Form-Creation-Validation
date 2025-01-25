document.addEventListener("DOMContentLoaded", function() {
    // Declare the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element where the API data will be displayed
    const dataContainer = document.getElementById("api-data");
    
    // Function to fetch user data and display it
    async function fetchUserData() {
        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);

            // Check if the response is valid (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Convert the response to JSON
            const users = await response.json();

            // Clear the "Loading..." message before appending new content
            dataContainer.innerHTML = "";

            // Check if the users array is empty
            if (users.length === 0) {
                dataContainer.innerHTML = "No users found.";
                return;
            }

            // Create a <ul> element to display user names
            const userList = document.createElement("ul");

            // Loop through the users array and create a list item for each user
            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;  // Set the user's name
                userList.appendChild(listItem);    // Append the list item to the list
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Clear the content and display an error message in case of failure
            dataContainer.innerHTML = "Failed to load user data.";
            console.error("Error fetching data:", error);
        }
    }

    // Invoke the function to fetch and display data when the DOM is fully loaded
    fetchUserData();
});