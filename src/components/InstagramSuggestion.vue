<template>
  <div class="border p-2 suggestion m-1">
    <img src="@/assets/close.png" width="10px" class="d-block ml-auto close-button" />
    <img class="rounded-circle mx-auto" src="https://picsum.photos/200" width="50px" />
    <p class="card-text mb-0">
      <b>user</b>
    </p>
    <p class="text-muted suggestion-username">username</p>
    <button type="button" class="btn btn-primary btn-sm btn-block">Follow</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
.suggestion {
  display: inline-block;
  width: 100px;
}
.suggestion-username {
  font-size: 0.8rem;
}
.close-button {
  cursor: pointer;
}
</style>
