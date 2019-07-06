<template>
  <Layout>
    <section>
    <div class="section">
      <div class="container">
        <div class="content">
          <g-link to="/" class="link">  &larr; Go Back</g-link>
          <br>
          <div class="post-title">

              <h1> {{$page.post.title}} </h1>
                <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read 
              </p>
          </div>
          <div class="post-content">
            <p v-html="$page.post.content" />
          </div>
        </div>
      </div>
    </div>  
    </section>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>