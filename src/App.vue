<template>
    <div>
        <nav class="bg-gray-800 border-b border-gray-600">
            <div class="container">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center overflow-x-auto">
                        <div class="flex-shrink-0">
                            <router-link
                                class="p-2 block fill-current text-gray-300 hover:bg-gray-700 rounded-md focus:outline-none focus:bg-gray-700 focus:text-white hover:text-whites"
                                to="/"
                            >
                                <svg
                                    class="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 242.41 323.21"
                                >
                                    <path
                                        d="M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"
                                    />
                                </svg>
                            </router-link>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-baseline">
                                <router-link
                                    v-for="(link, i) in links"
                                    :key="i"
                                    :to="link.to"
                                    custom
                                    v-slot="{ navigate, href, isExactActive }"
                                >
                                    <a
                                        :href="href"
                                        @click="navigate"
                                        class="px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                                        :class="[
                                            isExactActive
                                                ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                                            i > 0 && 'ml-4',
                                        ]"
                                        >{{ link.text }}</a
                                    >
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <button
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            @click="showMenu = !showMenu"
                        >
                            <!-- Menu open: "hidden", Menu closed: "block" -->
                            <svg
                                class="block h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <!-- Menu open: "block", Menu closed: "hidden" -->
                            <svg
                                class="hidden h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
            <div class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
                <div class="px-2 pt-2 pb-3 sm:px-3">
                    <router-link
                        v-for="(link, i) in links"
                        :key="i"
                        :to="link.to"
                        custom
                        v-slot="{ navigate, href, isExactActive }"
                    >
                        <a
                            :href="href"
                            @click="navigate().then(() => (showMenu = false))"
                            class="block px-3 py-2 rounded-md text-base font-medium"
                            :class="[
                                isExactActive
                                    ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                                i > 0 && 'mt-1',
                            ]"
                            >{{ link.text }}</a
                        >
                    </router-link>
                </div>
            </div>
        </nav>

        <router-view />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => ({
        showMenu: false,
        showProfileMenu: false,
        links: [
            { text: 'Challenge 1', to: '/Challenge1' },
            { text: 'Challenge 2', to: '/Challenge2' },
        ],
    }),
});
</script>
