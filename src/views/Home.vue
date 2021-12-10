<template>
  <div class="row">
    <div class="col-8">
      <instagram-card v-for="card in filteredCards" :key="card.url" :info="card" />
    </div>
    <div class="col-4">
      Sidebar
      <input
        class="form-control mr-sm-2 my-3"
        type="search"
        placeholder="Ime"
        v-model="ime"
      />
      <input
        class="form-control mr-sm-2 my-3"
        type="search"
        placeholder="Prezime"
        v-model="prezime"
      />
      <p>{{ imePrezime }}</p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue"
import store from "@/store.js"

let cards = [
  {
    url: "https://picsum.photos/id/1/400/400",
    description: "laptop",
    time: "few minutes ago...",
    author: "random guy",
  },
  {
    url: "https://picsum.photos/id/2/400/400",
    description: "laptop #2",
    time: "hour ago...",
    author: "some dude",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    description: "laptop #3",
    time: "few hours ago...",
    author: "average Joe",
  },
]

export default {
  name: "home",
  data() {
    return {
      cards,
      store,
      ime: "",
      prezime: "",
    }
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm

      return this.cards.filter(
        (card) => card.description.includes(termin) || card.author.includes(termin)
      )
    },
    imePrezime() {
      return this.ime + " " + this.prezime
    },
  },
  components: {
    InstagramCard,
  },
}
</script>
