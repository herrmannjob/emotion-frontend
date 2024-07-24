<script setup>
import { ref } from 'vue'

let isSearchOpen = ref(false)
const searchList = ref([
    {
        name: 'Headphone 1',
        tech: 'Gadget',
        price: 300,
        badge: 'Sale',
    },
    {
        name: 'Headphone 2',
        tech: 'Gadget',
        price: 200,
        badge: 'New',
    },
    {
        name: 'Headphone 3',
        tech: 'Gadget',
        price: 100,
        badge: 'Sale',
    },
    {
        name: 'Headphone 4',
        tech: 'Gadget',
        price: 150,
        badge: 'New',
    },
])
</script>

<template>
    <div class="relative text-gray-600 search-bar mx-3 sm:flex hidden">
        <input
            class="bg-purple-50 bg-gray-100 h-10 px-3 w-full rounded-full text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Pesquisar"
        />
        <button
            class="absolute right-0 top-0 mt-2 mr-4 focus:outline-none"
            type="submit"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </button>
    </div>
</template>

<style lang="scss" scoped>
</style>
