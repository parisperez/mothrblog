<template>
	<section>
		<div  v-for="item in $static.allListing.edges" :key=item.node.id >	
			<h2 class="title">Showing All</h2>
			<ul class="card" v-for="(value, key) in orderBy(item.node.records, 'name')" :key="key">
				<li> Name: {{value.name }} </li>
				<li>Category: {{value.category }} </li>
				<li> <a :href="value.link" target="_blank" >Website</a></li>
				<li style="margin-bottom: 20px;">Location: {{ value.location }} </li>
			</ul>
		</div>
	</section>	
</template>

<static-query>

query ListingList {
  allListing {
    edges {
      node {
        id
        records {
          name
          category
          link
          location
          }  
        }
      }
    }
  }

</static-query> 

<script>
import Vue2Filters from 'vue2-filters'

export default {
	mixins: [Vue2Filters.mixin]
}
</script>
