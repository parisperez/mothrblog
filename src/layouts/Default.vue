<template>
<div class="layout"> 
<!-- nav start -->
  <nav class="navbar is-primary">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navMenuSpacelab">
              <span></span>
              <span></span>
              <span></span>
        </div>
      </div>  
      <div id="#navMenuSpacelab" class="navbar-menu">
          <div class="navbar-start">
            <g-link to="/" class="navbar-item"> Mothr Board </g-link>
          </div>  
          <div class="navbar-end">  
            <g-link to="/blog" class="navbar-item">Blog</g-link>
            <g-link to="/" class="navbar-item">Directory</g-link>
            <g-link to="/" class="navbar-item">Shop</g-link>
          </div>
        </div>
    </nav>
<!-- nav end -->
<!-- header hero -->
      <section class="hero is-primary">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
        </div>
        <!-- Hero content: will be in the middle -->
        <header class="header">   
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Mothr Board</h1>
            </div>
          </div>
        </header>  
      </section>
    
<!-- end header hero -->

      <div class="container">
          <slot/> <!-- Page/Template will be inserted here -->  
      </div> <!-- container -->   

        <!-- start footer -->
  <!--      <footer class="footer">
        <div class="content has-text-centered">
            <p>
                Made with Gridsome and Bulma.
            </p>
        </div>
      </footer> -->
  </div> <!-- end layout-->
</template>

<style>

  .hero.is-primary {
    margin-bottom: 60px;
  }

  
</style>


