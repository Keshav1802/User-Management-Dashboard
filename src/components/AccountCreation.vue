<!-- AccountCreation.vue -->

<template>
  <div class="container mx-auto my-8 p-8 bg-white rounded shadow-md">
    <h1 class="text-3xl font-semibold mb-6">Account Creation</h1>
    
    <!-- Account creation form -->
    <form @submit.prevent="submitForm" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-600">Username:</label>
        <input v-model="username" type="text" id="username" required
          class="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500 transition duration-300"
        />
      </div>

      <div class="mb-6 relative">
        <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
        <div class="flex items-center">
          <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password" required
            class="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <button type="button" @click="togglePasswordVisibility" class="absolute right-0 pr-2 focus:outline-none">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              <path d="M12 21a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
        </div>
      </div>

      <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">Create Account</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    submitForm() {
      // Simulate sending data to a database (push to the users array)
      const newUser = {
        id: Date.now(),
        username: this.username,
        email: `${this.username}@example.com`,
        phone: '123456789',
        creationDate: new Date().toISOString().split('T')[0],
      };

      // In a real scenario, you would send a request to a server to store the data in the database.
      // Here, we'll just push the new user to the users array for demonstration purposes.
      this.$root.$emit('newUserCreated', newUser);

      // Optional: Reset form fields
      this.username = '';
      this.password = '';
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
/* Add your custom styles or use additional Tailwind classes as needed */
</style>
