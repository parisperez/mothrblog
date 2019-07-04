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

   <body>   
      <div class="container" id="page-container">
        <div id="content-wrap">
          <slot/> <!-- Page/Template will be inserted here -->
            <div id="footer">
                <p>
                    Built with
                    <a href="https://gridsome.org"> Gridsome</a>
                </p>
            </div>
          </div>
        </div>
      </body>
  </div>
</template>

<style>

  .hero.is-primary {
    margin-bottom: 60px;
  }
  
</style>


