<template>
  <div class="user-list-component">
      <div class="user-list">
        <v-avatar>
          <img :src="user.profilePic" alt="">
        </v-avatar>
        <h4>{{user.username}}</h4>
      </div>
  </div>
</template>

<script>
export default {
 name : "userList",
 props : ['user']
}
</script>

<style lang="scss" scoped>
.user-list-component{
    .user-list{
      display : flex;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      &:hover{
        background-color: lightgrey;
        border-radius: 10px;
      }
      img{
        max-width: 100%;
        height: auto;
      }
      h4{
        font-size: medium;
        font-weight: 600;
        margin-left: 15px;
      }
    }
}
</style>