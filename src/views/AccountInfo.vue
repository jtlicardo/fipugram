<template>
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">ACCOUNT INFO</h5>
      <p class="card-text">Email: {{ userEmail }}</p>
      <button type="button" class="btn btn-primary" @click="changePassword">
        {{ buttonText }}
      </button>
      <div v-if="inputVisible">
        <p class="mt-3">Enter new password:</p>
        <input type="password" v-model="newPassword" />
        <p class="mt-3">Repeat password:</p>
        <input type="password" v-model="repeatedPassword" />
        <button type="button" class="btn btn-primary mt-3" @click="setPassword">
          Set new password
        </button>
      </div>
      <p v-if="successfulUpdate" class="mt-3">Password updated successfully!</p>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js"

export default {
  data() {
    return {
      inputVisible: false,
      buttonText: "Change password",
      newPassword: "",
      repeatedPassword: "",
      successfulUpdate: null,
    }
  },
  computed: {
    userEmail() {
      return firebase.auth().currentUser.email
    },
  },
  methods: {
    changePassword() {
      if (!this.inputVisible) {
        this.inputVisible = true
        this.buttonText = "Cancel"
      } else {
        this.inputVisible = false
        this.buttonText = "Change password"
      }
    },
    setPassword() {
      if (this.newPassword.length < 6) {
        alert("Password needs to be at least 6 characters long!")
        return
      }

      if (this.newPassword !== this.repeatedPassword) {
        alert("Passwords don't match!")
        return
      }

      const user = firebase.auth().currentUser
      user
        .updatePassword(this.newPassword)
        .then(() => {
          this.successfulUpdate = true
          this.inputVisible = false
          this.buttonText = "Change password"
        })
        .catch((error) => {
          console.error("Update password error!  ", error)
        })
    },
  },
}
</script>

<style></style>
