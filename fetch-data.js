document.addEventListener("DOMContentLoaded", function() {
    const apiDataDiv = document.getElementById("api-data");

    // Function to fetch user data and display it
    function fetchUserData() {
        // Fetch user data from the API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())  // Parse response as JSON
            .then(users => {
                // Clear the "Loading..." message
                apiDataDiv.innerHTML = "";

                // Create an unordered list to display user names
                const userList = document.createElement("ul");

                // Loop through each user and add their name to the list
                users.forEach(user => {
                    const listItem = document.createElement("li");
                    listItem.textContent = user.name;  // Display user's name
                    userList.appendChild(listItem);
                });

                // Append the list of names to the "api-data" div
                apiDataDiv.appendChild(userList);
            })
            .catch(error => {
                // Handle any errors by displaying a message
                apiDataDiv.innerHTML = "Failed to load user data.";
                console.error("Error fetching data:", error);
            });
    }

    // Call the function to fetch and display data when the page loads
    fetchUserData();
});