<template>
  <div class="row">
    <div class="col-8">
      <form @submit.prevent="postNewImage" class="form-inline mb-5 d-block">
        <h3 class="mb-4">Add new image</h3>
        <div class="form-group d-block my-2">
          <label for="imageUrl">Image URL</label>
          <input
            v-model="newImageUrl"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image URL"
            id="imageUrl"
          />
        </div>
        <div class="form-group d-block my-2">
          <label for="imageDescription">Description</label>
          <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
          />
        </div>
        <button type="submit" class="btn btn-primary ml-2 my-2" v-if="!inputEmpty">
          Post image
        </button>
        <p v-if="bothInputsEmpty && successfulPost">Image successfully posted!</p>
      </form>
      <instagram-card v-for="card in filteredCards" :key="card.id" :info="card" />
    </div>
    <div class="col-4">Sidebar</div>
  </div>
</template>

<style scoped>
form {
  border: 1px solid black;
  border-radius: 20px;
  max-width: 400px;
  margin: 0 auto;
  padding: 50px 0;
}
</style>

<script>
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue"
import store from "@/store"
import { db } from "@/firebase.js"

//... API/Firebase -> sve kartice -> cards

// cards = [
//   {
//     url: "https://picsum.photos/id/1/400/400",
//     description: "laptop",
//     time: "few minutes ago...",
//   },
//   {
//     url: "https://picsum.photos/id/2/400/400",
//     description: "laptop #2",
//     time: "hour ago...",
//   },
//   {
//     url: "https://picsum.photos/id/3/400/400",
//     description: "laptop #3",
//     time: "few hours ago...",
//   },
// ]

export default {
  name: "home",
  data: function () {
    return {
      cards: [],
      store,
      newImageUrl: "",
      newImageDescription: "",
      successfulPost: null,
    }
  },
  computed: {
    filteredCards() {
      // logika koja filtrira cards
      let termin = this.store.searchTerm

      return this.cards.filter((card) => card.description.includes(termin))
    },
    inputEmpty() {
      if (this.newImageUrl === "" || this.newImageDescription === "") return true
      else return false
    },
    bothInputsEmpty() {
      if (this.newImageUrl === "" && this.newImageDescription === "") return true
      else return false
    },
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      console.log("Firebase dohvat")
      db.collection("posts")
        .orderBy("posted_at", "desc")
        .limit(10)
        .get()
        .then((query) => {
          this.cards = []
          query.forEach((doc) => {
            console.log("ID dokumenta: ", doc.id)
            console.log("Podaci: ", doc.data())

            const data = doc.data()

            this.cards.push({
              id: doc.id,
              url: data.url,
              description: data.desc,
              time: data.posted_at,
            })
          })
        })
    },
    postNewImage() {
      const imageUrl = this.newImageUrl
      const imageDescription = this.newImageDescription
      db.collection("posts")
        .add({
          url: imageUrl,
          desc: imageDescription,
          email: store.currentUser,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc)
          this.newImageUrl = ""
          this.newImageDescription = ""
          this.getPosts()
          this.successfulPost = true
        })
        .catch((e) => {
          console.error(e)
        })
    },
  },
  components: {
    InstagramCard,
  },
}
</script>
