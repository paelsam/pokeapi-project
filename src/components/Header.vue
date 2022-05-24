<template>
  <header class="header">
    <div class="logo">
      <a href="/public/index.html">
        <img src="@/assets/images/pokeball.png" alt="Pokeball" />
        <h1>PokeAPI<br>&nbsp;&nbsp;Project</h1>
      </a>
    </div>
    <div class="social-media">
      <a
        href="https://github.com/paelsam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa class="github" :icon="['fab', 'github']" size="2x" fixed-width />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>

<style>
.header {
  z-index: 999;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  align-items: center;
  padding: 0.5em 2em;
  background-color: var(--main-color);
}

.logo a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--text-color);
}

.logo a img {
  width: 4.5em;
  padding: 0.5rem;
}

.logo a:hover {
  color: var(--second-color);
}

.logo a h1 {
  font-size: 150%;
}

.github {
  color: var(--text-color);
}

.github:hover {
  color: var(--second-color);
}
</style>
