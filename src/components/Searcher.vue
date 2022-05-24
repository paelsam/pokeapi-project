import Searcher from '@/components/Searcher.vue';
<template>
  <section class="searcher">
    <h4>Busca el poke que quieras</h4>
    <div class="input-container rounded">
      <input
        type="search"
        class="rounded searcher-input"
        placeholder="Por ejemplo: Pikachu..."
        aria-label="Search"
        aria-describedby="buscar-poke"
      />
      <fa :icon="['fas', 'search']" size="1x" class="lupa" />
    </div>

    <button class="button-results">
      <a href="#results">👇 Resultados</a>
    </button>
  </section>
</template>

<script>

</script>

<style>
.searcher {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  padding-top: 2rem;
  width: 100%;
  min-height: 25em;
  text-align: center;
  background-color: var(--main-color);
}

.searcher h4 {
  font-size: 150%;
  color: var(--text-color);
}

.searcher a {
  padding: 2rem 0 0 0;
  text-decoration: none;
  color: var(--text-color);
}

.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  position: relative;
}

/* Search */
.rounded {
  border-radius: 3em !important;
}

.searcher-input {
  padding: 0.5rem;
  width: 70vw;
  max-width: 100vw;
  border: 2.5px solid var(--text-color);
}

.searcher-input:focus {
  outline: none;
  border-color: var(--second-color);
}

.lupa {
  color: var(--text-color);
  cursor: pointer;
  position: absolute;
  transform: translate(63vw);
}

.button-results {
  outline: none;
  border: none;
  height: 3em;
  width: 10em;
  border-radius: 5em;
  margin-top: 5em;

  background-color: var(--text-color);
}
.button-results a {
  font-size: 1.1em;
  color: var(--main-color);
}
</style>