<template>
    <div>
      <!-- Tabs -->
      <div class="tabs">
        <button @click="activeTab = 'userDetails'" :class="{ 'active': activeTab === 'userDetails' }">User Details</button>
        <button @click="activeTab = 'accountCreation'" :class="{ 'active': activeTab === 'accountCreation' }">Account Creation</button>
      </div>
  
      <!-- Content based on active tab -->
      <div v-if="activeTab === 'userDetails'">
        <UserDetails />
      </div>
      <div v-else-if="activeTab === 'accountCreation'">
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
  