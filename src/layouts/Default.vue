<template>
<div class="layout"> 
<header class="header"></header>
<!-- nav start -->
<!--   <nav class="navbar is-primary">
      <div class="navbar-brand">
      </div>  
      <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <g-link to="/" class="navbar-item"> Mothr Board </g-link>
          </div>  
          <div class="navbar-end">  
            <g-link to="/blog" class="navbar-item">Blog</g-link>
            <g-link to="/" class="navbar-item">Directory</g-link>
            <g-link to="/" class="navbar-item">Shop</g-link>
          </div>
      </div>
    </nav> -->
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


