<template>
  <div>
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-3xl font-semibold mb-6 text-center text-gray-800">Create Your Account</h1>

      <!-- Account creation form -->
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600">Username:</label>
          <input v-model="username" type="text" id="username" required
            class="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500 transition duration-300"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
          <input v-model="password" type="password" id="password" required
            class="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500 transition duration-300"
          />
        </div>

        <button type="submit" class="bg-indigo-500 text-white p-2 rounded w-full hover:bg-indigo-600 transition duration-300">
          Create Account
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Handle dummy request logic
      console.log('Creating account:', this.username);
      console.log('Password:', this.password);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles or use Tailwind classes */
</style>
