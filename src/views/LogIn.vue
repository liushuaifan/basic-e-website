<template>
    <div class="page-log-in">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Log in</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Username</label>
                        <div class="control">
                            <input type="text" class="input" v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
          
                        </div>
                    </div>

                    <hr>

                     <router-link to="/cart">login</router-link> 
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            username: '',
            password: '',
            errors: []
            
        }
    },
    mounted() {
        document.title = 'Log In | Djackets'
    },
    methods: {
       
            showerror(){
                console.log(localStorage.username)
            }        
        }
    }

</script>