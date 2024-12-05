<template>
  <div class="image-container">
    <router-link
        v-for="(image, index) in images"
        :key="index"
        :to="`/image/${index}`"
        class="image-link"
    >
      <img :src="image.src" :alt="image.alt" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  data() {
    return {
      images: [
        { src: 'https://via.placeholder.com/300x200?text=Image+1', alt: 'Image 1' },
        { src: 'https://via.placeholder.com/300x200?text=Image+2', alt: 'Image 2' },
        { src: 'https://via.placeholder.com/300x200?text=Image+3', alt: 'Image 3' },
      ],
    };
  },
};
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image-link {
  margin: 0 10px;
  transition: transform 0.3s;
}

.image-link:hover {
  transform: scale(1.05);
}

.image-link img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
}
</style>
