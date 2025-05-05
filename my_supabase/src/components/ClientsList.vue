<template>
    <div>
      <h2>Clients</h2>
      <p v-if="loading">Loading clients...</p>
      <p v-if="error">{{ error }}</p>
      <table v-if="clients.length">
        <thead>
          <tr>
            <th>User_ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.user_id">
            <td>{{ client.user_id }}</td>
            <td>{{ client.name }}</td>
            <td>{{ client.address }}</td>
            <td>{{ client.contact }}</td>
            <td>{{ client.email }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else-if="!loading && !error">No clients found.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { supabase } from '/src/components/supabaseClient'; // Adjust the path if needed
  
  const clients = ref([]);
  const loading = ref(true);
  const error = ref(null);
  
  async function fetchClients() {
    try {
      loading.value = true;
      const { data, error: fetchError } = await supabase
        .from('clients') // Table name
        .select('user_id, name, address, contact, email'); // Columns to select
  
      if (fetchError) {
        throw fetchError;
      }
  
      clients.value = data;
    } catch (err) {
      console.error('Error fetching clients:', err.message);
      error.value = 'Failed to load clients.';
    } finally {
      loading.value = false;
    }
  }
  
  onMounted(() => {
    fetchClients();
  });
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  </style>