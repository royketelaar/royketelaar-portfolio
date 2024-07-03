<script setup lang="ts">
import backgroundImage from '../assets/images/background.jpg'

const aboutMeText = [
  {
    text: 'Hi there, my name is Roy Ketelaar. I am a frontend developer with a background in web design.'
  },
  {
    text: 'I love learning new things, working with people and building applications that users find useful.'
  },
  {
    text: 'I enjoy the process of trial-and-error, optimizing, and creating a good user experience.'
  },
  {
    text: 'To make this happen, I think from a Design Thinking perspective, i.e. first understanding the user and putting yourself in their position before actually starting the work.'
  },
  {
    text: 'Outside of work, I like experiencing new things, traveling to cool places and maintaining an active lifestyle 🏋🏻🥾'
  }
]

</script>

<template>
  <main
    class="min-h-screen flex items-center justify-center font-sans bg-cover bg-fixed bg-center"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <!-- Content -->
    <div
      class="relative rounded-2xl text-stone-950 bg-stone-50 bg-opacity-80 top-36 p-8 pt-48 mx-8 mb-64 md:px-16 md:pb-16 md:mx-16 lg:pt-16 xl:max-w-4xl xl:mx-auto"
    >
      <!-- Avatar image (from the images folder, avatar.jpg) -->
      <img
        src="../assets/images/avatar.jpg"
        alt="Avatar"
        class="absolute rounded-full w-56 h-56 transform -translate-x-1/2 -top-16 left-1/2 lg:top-0 lg:left-auto lg:right-0 lg:transform-none lg:w-64 lg:h-64 lg:m-8"
      />
      <div class="lg:w-2/3 lg:pr-4">
        <!-- Name -->
        <h1 class="font-black text-4xl text-center mb-1 lg:text-left font-serif">
          Roy Ketelaar
        </h1>

        <!-- Job -->
        <h2 class="text-xl text-center mb-6 lg:text-left">Front-end Developer</h2>

        <!-- About me text -->
        <p class="text-stone-950 mb-4" v-for="(item, index) in aboutMeText" :key="index">
          {{ item.text }}
        </p>

        <div class="flex flex-col mb-4">
          <h3 class="font-bold mb-1">Programming</h3>
          <ul class="list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>Vue</li>
            <li>Nuxt.js</li>
            <li>React</li>
            <li>Gatsby.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>Netlify</li>
            <li>Playwright</li>
            <li>SEO</li>
          </ul>
        </div>

        <div class="flex flex-col mb-4">
          <h3 class="font-bold mb-1">Design & Methodology</h3>
          <ul class="list-disc list-inside">
            <li>UI/UX Design</li>
            <li>Design Thinking</li>
            <li>SCRUM</li>
          </ul>
        </div>

        <!-- Actions -->
        <div class="flex items-center mt-12">
          <a href="mailto:info@royketelaar.nl">
            <button class="bg-red-900 text-white py-2 px-4 rounded-lg mr-4">Get in touch!</button>
          </a>

          <!-- Links to GitHub and LinkedIn -->
          <a href="https://github.com/royketelaar/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/github.svg" alt="GitHub" class="mx-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/roy-ketelaar-36821b6b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/images/linkedin.svg" alt="LinkedIn" class="mx-2" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
