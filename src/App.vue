<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <div class="section">
    <router-view v-slot="{ Component, route }">
      <transition name="component-fade" mode="out-in">
        <component
          :is="Component"
          :key="route.meta.usePathKey ? route.path : undefined"
        />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .component-fade-enter-from,
  .component-fade-leave-to {
    opacity: 0;
  }
</style>
