async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const users = await response.json();

    users.slice(0, 5).forEach(user => {
      console.log(`${user.name} - ${user.email}`);
    });
  } catch (error) {
    console.error("Could not load users:", error.message);
  }
}

loadUsers();
