<template>
<div class="chat-sidebar-component">
    <div class="chat-sidebar">
        <!-- Sponsored -->
        <div class="chat-sidebar__sponsored">
            <h3>Sponsored</h3>
            <img src="../assets/images/sponsored.jpg" alt="">
        </div>
        <!-- Event/Birthday -->
        <div class="chat-sidebar__events">
            <h3>Events</h3>
            <div class="events__info">
                <v-icon x-large>mdi-guitar-acoustic</v-icon>
                <p><strong>John Mayor</strong> is coming to <a href="#">Canadian Tire Center</a> near you ! </p>
            </div>
        </div>
        <!-- User List -->
        <div class="chat-sidebar__users">
            <div class="users__top">
                <h3>Contacts</h3>
                <div class="users__options">
                    <v-icon>mdi-video-plus</v-icon>
                    <v-icon>mdi-magnify</v-icon>
                    <v-icon>mdi-cogs</v-icon>
                </div>
            </div>
            <div class="users__list">
              <app-user-list v-for="user in usersList" :key="user.id" :user="user"></app-user-list>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "chatSidebar",
    components : {
        'appUserList': () => import( /* webpackChunkName: "UserList" */ './UserList'),
    },
    data(){
      return{
        usersList : [
          {
            id : 1,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MzgxMzQ5N15BMl5BanBnXkFtZTgwMzMzNjkwOTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
            username : 'Sydney Sweeney',
          },
          {
            id : 2,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NTczNTMzN15BMl5BanBnXkFtZTYwNjYwMzU0._V1_UY256_CR0,0,172,256_AL_.jpg',
            username : 'Taika Waititi',
          },
          {
            id : 3,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg',
            username : 'Kaya Scodelario',
          },
          {
            id : 4,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg',
            username : 'Zachary Levi',
          },
          {
            id : 5,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg',
            username : ' Chris Hemsworth',
          },
          {
            id : 6,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
            username : ' Will Smith',
          },
          {
            id : 7,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2OTY5MzcwMV5BMl5BanBnXkFtZTgwODM4MDI5MjI@._V1_UX172_CR0,0,172,256_AL_.jpg',
            username : 'Chadwick Boseman',
          },
          {
            id : 8,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY256_CR3,0,172,256_AL_.jpg',
            username : ' Jennifer Aniston',
          },
          {
            id : 9,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_UY256_CR6,0,172,256_AL_.jpg',
            username : 'John Krasinskii',
          },
          {
            id : 10,
            profilePic : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4ODQ5NDMzOV5BMl5BanBnXkFtZTcwMjEzODA3MQ@@._V1_UX172_CR0,0,172,256_AL_.jpg',
            username : ' Kelly Hu',
          },

        ]
      }
    }
}
</script>

<style lang="scss" scoped>
.chat-sidebar-component {
      flex-basis : 20%;
    .chat-sidebar {
      display: flex;
      flex-direction: column;
      padding: 10px;
        &__sponsored,
        &__events,
        &__users {
            padding: 20px 0px;

            h3 {
                font-size: 1.3rem;
                font-weight: 700;
                padding-bottom: 10px;
                border-bottom: 1px solid lightgray;
                margin-bottom: 10px;
            }
        }

        &__sponsored {
            img {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
            }
        }

        &__events {
            .events__info {
                display: flex;
                align-items: center;
                .v-icon {
                    color: lightsalmon;
                }

                p {
                    margin-left: 10px;
                    font-size: medium;

                    a {
                        text-decoration: none;
                        color: lightsalmon;
                        font-weight: 600;
                    }
                }
            }
        }
        &__users {
            .users__top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid lightgray;
                margin-bottom: 10px;
                h3{
                  border-bottom: none;
                  margin-bottom: 0;
                }
                .users__options{
                  display: flex;
                  justify-content: space-evenly;
                  align-items: center;
                  .v-icon{
                    margin-right: 5px;
                    cursor: pointer;
                    padding: 7px;
                    &:hover{
                      background-color: lightgrey;
                      border-radius: 20px;
                    }
                  }
                }
            }
        }
    }
}
</style>
