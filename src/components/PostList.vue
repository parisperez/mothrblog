
<template>
<!--   <div class="section">
    <div class="content"> -->
      <div class="post-list" >
          <p class="date" v-html="post.date"/>
          <h2 class="title" v-html="post.title"/>
          <p class="description" v-html="post.description"/>
          <b>{{post.timeToRead}} min read</b> &nbsp;
          <g-link :to="post.path" class="read">Read More...</g-link>
          <hr>
      </div>
<!--     </div>
  </div> -->
</template>

<script>
export default {
  props: ["post"]
};
</script>
