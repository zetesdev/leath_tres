<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark, faUser } from '@fortawesome/free-solid-svg-icons';

const BEHANCE_URL = 'https://www.behance.net/zbigniewsulkowski';
const LINKEDIN_URL = 'https://linkedin.com/in/zbigniew-sulkowski';
const facePhoto = './cropped_02_web_01.png';

const showAbout = ref(false);

const toggleShowAbout = () => {
  showAbout.value = !showAbout.value;
};
</script>

<template>
  <button
    @click="toggleShowAbout"
    class="z-40 fixed top-0 right-0 flex text-2xl px-2 items-center justify-between text-white border-white border-2 w-32 h-auto lg:top-12 lg:right-12 lg:text-3xl lg:w-40 lg:overflow-hidden hover:bg-gray-500 transition-colors"
  >
    <p class="font-light pb-0.5 lg:pb-1">
      {{ showAbout ? 'CLOSE' : 'ABOUT' }}
    </p>
    <font-awesome-icon
      v-if="showAbout"
      :icon="faXmark"
      class="text-xl lg:text-3xl"
    />
    <font-awesome-icon v-else :icon="faUser" class="text-xl lg:text-2xl" />
  </button>

  <div
    @click="toggleShowAbout"
    :class="`z-30 fixed top-0 left-0 flex overflow-hidden items-center justify-center h-full bg-gray-600 bg-opacity-50 ${
      showAbout ? 'w-full' : 'w-0'
    }`"
  >
    <div
      @click.stop
      className="flex flex-col items-center p-2 m-2  landscape:md:max-lg:p-4  bg-white shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16 lg:flex-row lg:space-y-0 lg:space-x-10 lg:m-0 lg:p-16"
    >
      <div
        className="flex flex-col space-y-3 text-center landscape:md:max-lg:text-center md:text-md md:text-left md:mb-4s lg:text-md lg:text-left lg:mb-4s"
      >
        <p>&#x1F44B; hello, i am Zbigniew</p>
        <h1
          className="max-w-sm text-xl font-medium  landscape:md:max-lg:pb-2 landscape:md:max-lg:text-lg md:pb-5 md:text-3xl lg:pb-5 lg:text-3xl"
        >
          I work as <span class="text-red-500"> frontend </span> dev and
          <span class="text-red-500">3D </span>technical generalist.
        </h1>
        <p
          className="text-sm max-w-sm font-light landscape:md:max-lg:text-sm md:text-lg lg:text-lg"
        >
          This site is my R&D project, where i tried to explore connection
          between modern web development and 3D world.
        </p>

        <p
          className="hidden text-sm font-light landscape:md:max-lg:hidden  md:text-lg md:block lg:text-lg lg:block"
        >
          You can see more here:
        </p>
        <div className="flex flex-col">
          <a
            :href="BEHANCE_URL"
            className="flex items-center justify-center mt-1 px-5 space-x-3 border-2 border-gray-300 lg:py-3 lg:shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
          >
            <FaBehance className="text-xl" />
            <span>Behance</span>
          </a>

          <a
            :href="LINKEDIN_URL"
            className="flex items-center justify-center mt-1 px-5 space-x-3 border-2 border-gray-300 lg:py-3 lg:shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
          >
            <FaLinkedin className="text-xl" />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      <div
        className="m-auto pt-2 w-24 landscape:sm:max-md:hidden landscape:md:max-lg:w-32 md:w-56 md:pt-5 lg:w-56 lg:pt-5"
      >
        <img :src="facePhoto" alt="" className="rounded-full" />
      </div>
    </div>
  </div>
</template>
