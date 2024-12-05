<template>
  <div class="detail-container">
    <div class="zoomed-image">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div class="specific-elements">
      <!-- Remplacez ce contenu par les éléments spécifiques à chaque image -->
      <h2>{{ image.alt }}</h2>
      <p>Voici des informations spécifiques à cette image.</p>
      <button @click="goBack">Retour</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'ImageDetail',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const image = ref({ src: '', alt: '' });

    const images = [
      { src: 'https://via.placeholder.com/600x400?text=Image+1', alt: 'Image 1' },
      { src: 'https://via.placeholder.com/600x400?text=Image+2', alt: 'Image 2' },
      { src: 'https://via.placeholder.com/600x400?text=Image+3', alt: 'Image 3' },
    ];

    onMounted(() => {
      const id = parseInt(route.params.id, 10);
      if (!isNaN(id) && images[id]) {
        image.value = images[id];
      } else {
        // Rediriger vers la vue principale si l'ID est invalide
        router.push('/');
      }
    });

    const goBack = () => {
      router.push('/');
    };

    return {
      image,
      goBack,
    };
  },
};
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.zoomed-image {
  position: relative;
  left: 50px; /* Positionné à gauche */
  transform: scale(1.5);
  transition: transform 0.5s ease, left 0.5s ease;
  z-index: 1;
}

.zoomed-image img {
  width: 600px;
  height: 400px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.specific-elements {
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
