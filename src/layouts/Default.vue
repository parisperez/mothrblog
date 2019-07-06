<template>
<div class="layout"> 
<bulma-nav/>
<header class="header"></header>
<!-- header hero -->
      <section class="hero is-primary">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
        </div>
        <!-- Hero content: will be in the middle -->
        <header class="header">   
          <div class="hero-body">
            <div class="container">
              <h1 class="title"><g-link to="/">Mothr Board</g-link></h1>
            </div>
          </div>
        </header>  
      </section>
    
<!-- end header hero -->

          <slot/> <!-- Page/Template will be inserted here -->   

<!-- start footer -->
    <footer class="footer">
      <div class="content">
          <p>
              Made with Gridsome and Bulma.
          </p>
      </div>
    </footer>
<!-- end footer -->

  </div> <!-- end layout-->
</template>

<script>
import BulmaNav from '~/components/bulma-nav'
export default {
  components: {
    BulmaNav
  } 
  
};
</script>

