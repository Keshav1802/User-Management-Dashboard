<template>
  <div class="max-w-md mx-auto my-20 p-8 bg-white rounded shadow-md">
    <!-- Tabs -->
    <div class="flex mb-4">
      <button @click="activeTab = 'userDetails'" :class="{ 'bg-blue-500 text-white': activeTab === 'userDetails', 'hover:bg-blue-600': activeTab !== 'userDetails' }" class="flex-1 py-2 rounded-l-full focus:outline-none transition duration-300">User Details</button>
      <button @click="activeTab = 'accountCreation'" :class="{ 'bg-blue-500 text-white': activeTab === 'accountCreation', 'hover:bg-blue-600': activeTab !== 'accountCreation' }" class="flex-1 py-2 rounded-r-full focus:outline-none transition duration-300">Account Creation</button>
    </div>

    <!-- Content based on active tab -->
    <div v-if="activeTab === 'userDetails'" class="border-t border-blue-500 pt-4">
      <UserDetails />
    </div>
    <div v-else-if="activeTab === 'accountCreation'" class="border-t border-blue-500 pt-4">
      <AccountCreation />
    </div>
  </div>
</template>
  
  <script>
  import UserDetails from './UserDetails.vue';
  import AccountCreation from './AccountCreation.vue';
  
  export default {
    components: {
      UserDetails,
      AccountCreation,
    },
    data() {
      return {
        activeTab: 'userDetails',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles or use Tailwind classes */
  .tabs {
    display: flex;
    margin-bottom: 20px;
  }
  
  .tabs button {
    margin-right: 10px;
    cursor: pointer;
  }
  
  .tabs button.active {
    font-weight: bold;
  }
  </style>
  