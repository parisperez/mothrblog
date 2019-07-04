<template>    
  <Layout>
	<section class="posts">
	<h1>THE BLOG PAGE</h1><br>
	  <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
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
    title: 'Posts'
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
