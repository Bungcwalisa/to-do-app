<template>
  <!-- Hero Section -->
  <div class="gif-header">
    <img src="/todoApp/public/imagess/pan_cooking masterclass.gif" alt="Cooking Masterclass GIF" />
    <div class="hero-content">Cooking Masterclass</div>
  </div>

  <div class="wrapper">
    <div class="header">
      <h1>Cooking Masterclass</h1>
      <div>Wishlist: <strong>{{ wishlistCount }}</strong></div>
    </div>

    <h2>View our catalogue with top chefs</h2>

    <div class="course-grid">
      <div class="card" v-for="course in courses" :key="course.id">
        <img :src="course.image" class="card-img" />

        <div class="card-content">
          <strong>{{ course.chef }}</strong><br />
          <small>{{ course.level }}</small>

          <h3>{{ course.title }}</h3>
          <p><strong>Price:</strong> ${{ course.price }}</p>

          <span v-if="!course.available" class="sold-out">Sold Out</span>

          <button :disabled="!course.available" @click="addToWishlist(course.id)">
            Save to Wishlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const wishlistCount = computed(() => store.getters.wishlistCount);
    const courses = computed(() => store.getters.allCourses);

    const addToWishlist = (id) => store.commit("ADD_TO_WISHLIST", id);

    return { wishlistCount, courses, addToWishlist };
  }
};
</script>

<style>
:root {
  --bg: #f0f0f0;
  --header-bg: #e0e0e0;
  --accent: #76c71aff;
  --danger: #8b0f0fff;
  --radius: 12px;
  --transition: 0.25s ease;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: var(--bg);
  color: #333;
}

.wrapper {
  width: min(1200px, 92%);
  margin: auto;
  padding: 24px 0 50px;
}

.gif-header {
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #999;
  border-radius: var(--radius);
}

.gif-header img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.hero-content {
  position: relative;
  color: #fff;
  font-size: clamp(2rem, 5vw, 4rem);
  text-shadow: 0 4px 12px rgba(0,0,0,0.7);
  z-index: 2;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  padding: 20px;
  border-radius: var(--radius);
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}

.card {
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0,0,0,0.06);
  border: 1px solid #ddd;
  transition: 0.25s ease;
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.sold-out {
  display: inline-block;
  padding: 6px 10px;
  background: var(--danger);
  color: #fff;
  border-radius: 6px;
  margin-bottom: 12px;
}

button {
  padding: 10px;
  width: 100%;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
}

button:disabled {
  background: #bbb;
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    text-align: center;
  }
}
</style>