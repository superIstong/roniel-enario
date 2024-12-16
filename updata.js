$(document).ready(function () {

    // Create (Save to localStorage)
    $("#account").on("submit", function (event) {
        event.preventDefault();
        
        const formData = {
            userId: $("#userId").val(),
            username: $("#username").val(),
            password: $("#password").val(),
        };

        // Check if localStorage already has users
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Add new user to users array
        users.push(formData);

        // Save updated users array to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Clear the form
        clearForm();

        // Display success message
        $("#result").html("User successfully log In!");

        // Refresh the user list
        loadUsers();
    });

    // Read (Load users from localStorage)
    function loadUsers() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let userList = $("#userList");
        userList.empty();

        users.forEach(function (user, index) {
            userList.append(`
                <div class="user-item">
                    <span>${user.username}</span>
                    <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
                </div>
            `);
        });
    }

    // Update (Edit user in localStorage)
    window.editUser = function (index) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users[index];

        // Fill the form with existing user data
        $("#userId").val(user.userId);
        $("#username").val(user.username);
        $("#password").val(user.password);

        // Change submit button text to "Save"
        $("#submitButton").text("Save").attr('id', 'updateButton').attr('data-index', index);
    };

    // Save updated user to localStorage
    $(document).on("click", "#updateButton", function () {
        const index = $(this).data('index');
        const updatedData = {
            userId: $("#userId").val(),
            username: $("#username").val(),
            password: $("#password").val(),
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users[index] = updatedData;

        // Save updated users array to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Clear form and reset button
        clearForm();
        $("#submitButton").text("Submit").attr('id', 'submitButton');

        // Display success message
        $("#result").html("User successfully updated!");

        // Refresh the user list
        loadUsers();
    });

    // Delete user from localStorage
    window.deleteUser = function (index) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Remove the user at the specified index
        users.splice(index, 1);

        // Save the updated list to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Refresh the user list
        loadUsers();
    };

    // Clear the form
    function clearForm() {
        $("#userId").val('');
        $("#username").val('');
        $("#password").val('');
    }

    // Load the users when the page loads
    loadUsers();
});
