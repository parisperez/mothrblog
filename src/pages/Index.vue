<template>    
  <Layout>
    <section class="posts">
      <div class="section">
        <div class="container">
          
        
            <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
        </div>
      </div>
   </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "Mothr Board"
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

