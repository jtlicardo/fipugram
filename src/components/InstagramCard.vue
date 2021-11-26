<template>
  <div class="card text-center mb-5">
    <div class="card-header text-left bg-white">
      <img src="@/assets/user.png" class="img-fluid mr-2" width="25px" />
      <span><b>username</b></span>
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" src="https://picsum.photos/800" />
    </div>
    <div class="card-footer bg-white">
      <div class="d-flex">
        <img src="@/assets/heart.png" width="25px" />
        <img src="@/assets/chat.png" width="30px" class="ml-2" />
        <img src="@/assets/bookmark.png" width="25px" class="ml-auto" />
      </div>
      <p class="text-left mt-2">
        Liked by
        <b>another_user</b>
        and
        <b>others</b>
      </p>
      <p class="text-left mb-0">
        <b>username</b>
        lorem ipsum
      </p>
      <p class="text-left text-muted days-ago">1 DAY AGO</p>
    </div>
    <div class="input-group border">
      <div class="input-group"></div>
      <input
        type="text"
        class="form-control p-4 border-0"
        placeholder="Add a comment..."
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <button class="btn btn-link" type="button">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstagramCard",
}
</script>

<style scoped>
.days-ago {
  font-size: 0.7rem;
}

.button-border {
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
}
</style>
