<template>
  <div>
    <h1>Account Creation</h1>
    <!-- Account creation form -->
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />

      <button type="submit">Create Account</button>
    </form>
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
