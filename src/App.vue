<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-md navbar-light">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/fipu_logo.png"
          height="40"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <form id="search" class="navbar-form form-inline ml-auto">
          <input
            v-model="store.searchTerm"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
        <!-- Image and text -->
        <ul class="navbar-nav ml-auto">
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/signup" class="nav-link">Sign up</router-link>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <router-link to="/account" class="nav-link">Account info</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view />
      <!-- tu router dinamicki ubaci screen -->
    </div>
  </div>
</template>

<script>
import store from "@/store"
import { firebase } from "@/firebase.js"
import router from "@/router"

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute
  if (user) {
    // User is signed in.
    console.log(user.email)
    store.currentUser = user.email
    if (!currentRoute.meta.needsUser) router.push("/")
  } else {
    console.log("No user")
    store.currentUser = null
  }
})

export default {
  name: "app",
  data() {
    return {
      store,
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign out successful")
          this.$router.push("/login")
        })
        .catch((error) => {
          console.log("Error occurred: ", error)
        })
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#search {
  display: block;
  text-align: center;
}
</style>
