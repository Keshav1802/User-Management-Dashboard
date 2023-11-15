<template>
  <div class="container mx-auto my-8 p-8 bg-white rounded shadow-md">
    <h1 class="text-3xl font-semibold mb-6">User Details</h1>
    
    <!-- Search bar -->
    <input v-model="searchTerm" placeholder="Search user..." class="p-2 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:border-blue-500 transition duration-300" />

    <!-- User table -->
    <div class="overflow-x-auto">
      <table class="min-w-full border border-collapse border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4">ID</th>
            <th class="py-2 px-4">Username</th>
            <th class="py-2 px-4">Email</th>
            <th class="py-2 px-4">Phone</th>
            <th class="py-2 px-4">Creation Date</th>
            <!-- Add more columns as needed -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id" @click="openModal(user)" class="hover:bg-gray-100 cursor-pointer">
            <td class="py-2 px-4">{{ user.id }}</td>
            <td class="py-2 px-4">{{ user.username }}</td>
            <td class="py-2 px-4">{{ user.email }}</td>
            <td class="py-2 px-4">{{ user.phone }}</td>
            <td class="py-2 px-4">{{ user.creationDate }}</td>
            <!-- Add more columns as needed -->
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal for user report -->
    <div v-if="selectedUser" class="modal p-4 bg-white border rounded mt-4">
      <!-- <h2>User Report for {{ user.username }}</h2> -->
      <h2 class="text-xl font-semibold mt-4 mb-2">User Information</h2>
      <p><strong>Username:</strong> {{ selectedUser.username }}</p>
      <p><strong>Email:</strong> {{ selectedUser.email }}</p>
      <button @click="closeModal" class="bg-gray-200 p-2 rounded">Close</button>
      <button @click="generateReport(selectedUser)" class="bg-blue-500 text-white p-2 rounded ml-2">Generate Report</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [ { id: 1, username: 'user1', email: 'user1@email.com', phone: '123456789', creationDate: '2023-01-01' },
      { id: 2, username: 'user2', email: 'user2@email.com', phone: '1234567890', creationDate: '2023-01-01' },
      { id: 3, username: 'user3', email: 'user3@email.com', phone: '123456789', creationDate: '2023-01-01' },], // Placeholder for user data
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
