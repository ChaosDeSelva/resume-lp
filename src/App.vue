<template>
  <div class="w-full">
    <div class="min-h-screen bg-white flex">
      <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
              Jacob Lashley
            </h2>
            <div class="mt-2 text-sm text-gray-600">
              <p>Software Engineer in Portland, Oregon</p>
              <div class="flex flex-wrap items-center h-32" >
                <div v-if="temp"  class="flex flex-wrap items-start">
                  <div class="text-6xl">{{ temp }}</div>
                  <div class="text-2xl">&#8457;</div>
                </div>
                <div><img v-if="icon" class="h-32 w-auto" :src="icon" alt="Weather Icon" /></div>
              </div>
            </div>
          </div>

          <div class="mt-1">
            <div>
              <div>
                <p class="text-sm font-medium text-gray-700">
                  Find me on
                </p>

                <div class="mt-1 grid grid-cols-3 gap-3">
                  <div>
                    <a :href="LINKEDIN_URL" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">LinkedIn Profile</span>
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a :href="GITHUB_URL" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">GitHub Profile</span>
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="mt-6 relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <form @submit.prevent="onSubmit" class="space-y-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div class="mt-1">
                    <input v-focus v-model="email" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div class="mt-1">
                    <input v-model="name" id="name" name="name" type="text" autocomplete="name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div class="mt-1">
                    <input v-model="subject" id="subject" name="subject" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>
                </div>

                <div class="space-y-1">
                  <label for="message" class="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div class="mt-1">
                    <textarea v-model="message" id="message" name="message" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <div v-if="validationMessage" class="pb-4">
                    <div :class="[validationTitle === 'Error' ? 'bg-red-100 border-red-500 text-red-700': 'bg-green-100 border-green-500 text-green-700', 'border-l-4 p-4']" role="alert">
                      <p class="font-bold">{{ validationTitle }}</p>
                      <p>{{ validationMessage }}</p>
                    </div>
                  </div>
                  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    Send me a message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img class="absolute inset-0 h-full w-full object-cover" src="@/assets/bkg.jpeg" alt="Background" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Day from '@/assets/weather/day.svg'
import Night from '@/assets/weather/night.svg'
import Cloudy from '@/assets/weather/cloudy.svg'
import Thunder from '@/assets/weather/thunder.svg'
import CloudyDay from '@/assets/weather/cloudy-day-3.svg'
import CloudyNight from '@/assets/weather/cloudy-night-3.svg'
import RainDay from '@/assets/weather/rainy-1.svg'
import Rain from '@/assets/weather/rainy-5.svg'
import HighRain from '@/assets/weather/rainy-6.svg'
import SnowDay from '@/assets/weather/snowy-1.svg'
import Snow from '@/assets/weather/snowy-6.svg'

import { computed, onMounted, ref } from 'vue'

interface Icons {
  [key: string]: string
}

const icons: Icons = {
  '01d': Day,
  '02d': CloudyDay,
  '03d': Cloudy,
  '04d': Cloudy,
  '09d': HighRain,
  '10d': RainDay,
  '11d': Thunder,
  '13d': CloudyDay,
  '50d': SnowDay,
  '01n': Night,
  '02n': CloudyNight,
  '03n': Cloudy,
  '04n': Cloudy,
  '09n': HighRain,
  '10n': Rain,
  '11n': Thunder,
  '13n': Snow,
  '50n': Cloudy,
} as const

interface Contact {
  _id: string;
  email: string;
  name: string;
  subject: string;
  message: string;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface CurrentWeather {
  main: Main;
  sunrise: number;
  sunset: number;
  weather: Weather;
}

const WEATHER_URL: string = import.meta.env.VITE_WEBHOOK_WEATHER_URL as string
const CONTACT_URL: string = import.meta.env.VITE_WEBHOOK_CONTACT_URL as string
const LINKEDIN_URL: string = import.meta.env.VITE_LINKEDIN_URL as string
const GITHUB_URL: string = import.meta.env.VITE_GITHUB_URL as string

let wether = ref<null | CurrentWeather>(null)
let email = ref('')
let name = ref('')
let subject = ref('')
let message = ref('')
let validationTitle = ref<string>('Error')
let validationMessage = ref<null | string>(null)

onMounted(async () => {
  if (URL) {
    const response = await fetch(WEATHER_URL)
    wether.value = await response.json()
  }
})

async function onSubmit() {
  const form = {
    email: email.value,
    name: name.value,
    subject: subject.value,
    message: message.value,
  }

  if (Object.keys(form).filter(value => value.length > 0)) {
    const response = await fetch(CONTACT_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const result =  await response.json()

    if (result && 'insertedId' in result) {
      const formValues = [email, name, subject, message]
      formValues.forEach((item) => item.value = '')
      validationTitle.value = 'Success'
      validationMessage.value = 'Message received! Talk to you soon.'
    } else {
      validationMessage.value = 'We appear to be having issues submitting your request. Please try again.'
    }
  } else {
    validationMessage.value = 'All fields are required. Please try again.'
  }
}

const icon = computed(() => {
  const current = wether.value
  if (current) {
    return icons[current.weather.icon]
  }
  return null
})

const temp = computed(() => {
  const current = wether.value
  if (current) {
    return Math.round(current.main.temp)
  }
  return null
})
</script>
