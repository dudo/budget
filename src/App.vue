<template>
  <div
    id="app"
    class="container">
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          <img
            src="@/../public/images/bag.png"
            alt="Seize the Bag Logo"
            width="28"
            height="28">
        </a>
        <a class="navbar-item">
          <router-link to="/">Home</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/cashflow">Cashflow</router-link>
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
