<template>
   <!DOCTYPE html>
    <html>    
    <div class="layout">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>

<!-- header hero -->

<section class="hero is-primary" style="margin-bottom: 20px;">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <nav class="main-nav navbar ">
  <div class="container">
    <div class="navbar-start">
      <a class="navbar-item" href="https://jenil.github.io/bulmaswatch/">
        <img src="/bulmaswatch/assets/icons/apple-touch-icon-144x144.png" alt="" class="logo">
        <h1 class="title is-5">Mothr Board</h1>
      </a>  
    </div>  
    <div class="navbar-end">  
      <a class="navbar-item " href="#">Blog</a>
      <a class="navbar-item " href="#">Directory</a>
      <a class="navbar-item " href="#">Shop</a>
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
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Mothr Board
        </h1>
        <h2 class="subtitle">
          A blog and directory
        </h2>
        
      </div>
    </div>
  </section>


<!-- end header hero -->

  <body>
    <div class="container" id="page-container">
      <div id="content-wrap">
    <slot/> <!-- Page/Template will be inserted here -->
    <div id="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
      </p>
      </div>
    </div>
    </div>
  </body>
  </div>
  </html>
</template>


