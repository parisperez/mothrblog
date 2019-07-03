<template>    
  <Layout>
            <header class="header">   
              <!-- <h1 v-html="$page.metaData.siteName" />
                <h2 v-html="$page.metaData.siteDescription" /> -->
            </header>
            <section class="posts">
              <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
             </section>

  </Layout>
</template>
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: ""
  }
};
</script>

<page-query>
query {
  metaData {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }

  }
}
</page-query>

