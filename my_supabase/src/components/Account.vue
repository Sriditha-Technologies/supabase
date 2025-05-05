<template>
    <div class="form-widget">
      <p>Welcome, {{ user?.email }}!</p>
  
      <div>
        <button class="button block" @click="signOut" :disabled="loading">
          Sign Out
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, toRefs } from 'vue'
  import { supabase } from '../supabaseClient'
  
  const loading = ref(true)
  const username = ref('')
  const website = ref('')
  const avatar_url = ref('')
  
  // We'll get the user from the parent component or a global state later
  const props = defineProps(['session'])
  const { session } = toRefs(props)
  
  // Optional: Fetch user data if you have a 'profiles' table linked to auth.users
  // async function getProfile() {
  //   try {
  //     loading.value = true
  //     const { user } = session.value
  
  //     const { data, error, status } = await supabase
  //       .from('profiles')
  //       .select(`username, website, avatar_url`)
  //       .eq('id', user.id)
  //       .single()
  
  //     if (error && status !== 406) throw error
  
  //     if (data) {
  //       username.value = data.username
  //       website.value = data.website
  //       avatar_url.value = data.avatar_url
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message)
  //     }
  //   } finally {
  //     loading.value = false
  //   }
  // }
  
  async function signOut() {
    try {
      loading.value = true
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading.value = false
    }
  }
  
  // onMounted(() => {
  //   getProfile()
  // })
  
  // Access the user object from the session prop
  const user = session.value?.user;
  </script>
  
  <style scoped>
  /* Add styles similar to Auth.vue for consistency */
  .form-widget {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  .button {
     padding: 10px;
    background-color: #dc3545; /* Red for sign out */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }
  
  .button:disabled {
     background-color: #cccccc;
    cursor: not-allowed;
  }
  </style>