<template>
    <div class="row flex flex-center">
      <div class="col-6 form-widget">
        <h1 class="header">Supabase + Vue 3</h1>
        <p class="description">Sign in via magic link with your email below</p>
        <form class="form-widget" @submit.prevent="handleLogin">
          <div>
            <input
              class="inputField"
              type="email"
              placeholder="Your email"
              v-model="email"
            />
          </div>
          <div>
            <input
              type="submit"
              :value="loading ? 'Loading' : 'Send magic link'"
              :disabled="loading"
            />
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { supabase } from '../supabaseClient' // Adjust path if needed
  
  const email = ref('')
  const loading = ref(false)
  
  const handleLogin = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signInWithOtp({ email: email.value }) // Using signInWithOtp for magic link
  
      if (error) throw error
      alert('Check your email for the magic link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .form-widget {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .header {
    text-align: center;
    color: #333;
  }
  
  .description {
    text-align: center;
    color: #666;
    margin-bottom: 20px;
  }
  
  .inputField {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Include padding and border in element's total width */
  }
  
  input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  input[type="submit"]:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  </style>