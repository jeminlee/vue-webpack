<template>
<table>
  <thead>
    <tr>
      <th width="100">ID</th>
      <th width="200">Name</th>
      <th width="150">Username</th>
      <th width="150">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
    </tr>
  </tbody>
</table>
</template>


<script>
import axios from 'axios';
    export default {
        data(){
            return {
                users: []
            }
        },
        created(){
            axios.get('https://jsonplaceholder.typicode.com/users')
              .then(response => this.users = response.data)
              .catch(function (error) {
                console.log(error);
              });
        }
    }
</script>

<style lang="scss">

</style>
