<template>
  <div>
    <h1>User Details</h1>
    <!-- Search bar -->
    <input v-model="searchTerm" placeholder="Search user..." />
    
    <!-- User table -->
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>ID</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id" @click="openModal(user)">
          <td>{{ user.username}}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.creationDate }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for user report -->
    <div v-if="selectedUser" class="modal">
      <button @click="closeModal">Close</button>
      <button @click="generateReport(selectedUser)">Generate Report</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [], // Placeholder for user data
      searchTerm: '',
      selectedUser: null,
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    openModal(user) {
      this.selectedUser = user;
    },
    closeModal() {
      this.selectedUser = null;
    },
    generateReport(user) {
      // Implement report generation logic
      console.log(`Generating report for user: ${user.username}`);
    },
  },
  mounted() {
    // Fetch user data from a placeholder database
    // You can use Axios or fetch API for this
    // Dummy data for demonstration purposes
    this.users = [
      { id: 1, username: 'user1', email: 'user1@email.com', phone: '123456789', creationDate: '2023-01-01' },
      { id: 2, username: 'user2', email: 'user2@email.com', phone: '1234567890', creationDate: '2023-01-01' },
      { id: 3, username: 'user3', email: 'user3@email.com', phone: '123456789', creationDate: '2023-01-01' },
      // Add more users...
    ];
    this.$root.$on('newUserCreated', newUser => {
      this.users.push(newUser);
    });
  },
};
</script>

<style scoped>
/* Add your custom styles or use Tailwind classes */
</style>
