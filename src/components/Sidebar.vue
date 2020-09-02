<template>
  <div class="sidebar-component">
      <div class="sidebar">
          <sidebar-rows v-for="row in rowData" :key="row.id" :row="row"></sidebar-rows>
      </div>
  </div>
</template>

<script>
export default {
    name : "Sidebar",
    data() {
        return {
            //UserProfile
            userProfile : this.$store.state.userProfile,
        }
    },
    components : {
        'sidebarRows' : () => import(/* webpackChunkName: "Rows" */'./Rows'),
    },
    computed : {
        rowData(){
            const data = [
                {
                    id : 1,
                    src : this.userProfile.profilePhoto,
                    icon : '',
                    title : this.userProfile.name,
                },
                {
                    id : 2,
                    src : '',
                    icon : 'mdi-medical-bag',
                    title : 'COVID-19 Information Center',
                },
                {
                    id : 3,
                    src : '',
                    icon : 'mdi-flag',
                    title : 'Pages',
                },
                {
                    id : 4,
                    src : '',
                    icon : 'mdi-account-multiple',
                    title : 'Friends',
                },
                {
                    id : 5,
                    src : '',
                    icon : 'mdi-message-text',
                    title : 'Messenger',
                },
                {
                    id : 6,
                    src : '',
                    icon : 'mdi-storefront-outline',
                    title : 'Marketplace',
                },
                {
                    id : 7,
                    src : '',
                    icon : 'mdi-play-box-multiple',
                    title : 'Videos',
                },
            ];
            return data;
        }
    }
}
</script>

<style style="lang" scoped>
.sidebar-component{
    flex-basis : 20%;
}
.sidebar{
    padding: 25px 10px;
    /* flex: 0.33; */
}
</style>