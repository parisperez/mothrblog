<template>
<div class="layout"> 
<!-- header hero -->
      <section class="hero is-primary">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
          <nav class="main-nav navbar ">
            <div class="container">
                <div class="navbar-start">
                  <g-link to="/" class="navbar-item"> Mothr Board </g-link>
                </div>  
                <div class="navbar-end">  
                  <g-link to="/blog" class="navbar-item">Blog</g-link>
                  <g-link to="/" class="navbar-item">Directory</g-link>
                  <g-link to="/" class="navbar-item">Shop</g-link>
                </div>
                  <span class="navbar-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
              </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <header class="header">   
          <div class="hero-body">
            <div class="container">
              <h1>Mothr Board</h1>
            </div>
          </div>
        </header>  
      </section>
    

<!-- end header hero -->

      <div class="container">
          <slot/> <!-- Page/Template will be inserted here -->  
      </div> <!-- container -->      
  </div>
</template>

<style>

  .hero.is-primary {
    margin-bottom: 60px;
  }
  
</style>


