<template>
<div class="layout"> 
<bulma-nav/>

<!-- header hero -->
      <section class="hero is-medium is-primary is-bold">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
        </div>
        <!-- Hero content: will be in the middle -->
        <header class="header">   
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-1"><g-link to="/">Mothr Board</g-link></h1>
              <h2 class="title is-2"> You got this.</h2>
            </div>
          </div>  

          <!-- start google analytics code -->
        </header>  
      </section>
    
<!-- end header hero -->

          <slot/> <!-- Page/Template will be inserted here -->   

<!-- start footer -->
    <footer class="footer">
      <div class="content">
          <p>
              Made with Gridsome by <a target="_blank" href="mailto:hello@babyspaceships.com">Baby Spaceships</a>.
          </p>
      </div>
    </footer>
<!-- end footer -->

  </div> <!-- end layout-->
</template>

<style>
.footer {
  padding: 1rem 1rem 1rem;
}
</style>


<script>
import BulmaNav from '~/components/bulma-nav'

export default {
  components: {
    BulmaNav,
  } 
  
};
</script>


