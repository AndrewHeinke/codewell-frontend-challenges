<template>
    <nav class="main-nav">
        <div class="container">
            <div class="flex items-center h-16">
                <div class="flex items-center w-full">
                    <div class="flex-shrink-0">
                        <router-link class="main-nav-logo" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.41 323.21">
                                <path
                                    d="M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"
                                />
                            </svg>
                        </router-link>
                    </div>
                    <div class="hidden md:block py-8 pr-4">
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
                                    class="
                                        px-3
                                        py-2
                                        rounded-md
                                        text-base
                                        font-medium
                                        whitespace-nowrap
                                    "
                                    :class="[
                                        isExactActive ? 'nav-link nav-link--active' : 'nav-link',
                                        i > 0 && 'ml-4',
                                    ]"
                                    >{{ link.text }}</a
                                >
                            </router-link>
                        </div>
                    </div>
                    <div class="select-wrapper">
                        <div class="select-prepend">
                            <svg
                                aria-hidden="true"
                                class="w-4 h-4"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
                                ></path>
                            </svg>
                        </div>
                        <label class="sr-only" for="theme-select">Set Theme</label>
                        <select name="theme" id="theme-select">
                            <option value="0">Light</option>
                            <option value="1">Blue</option>
                            <option value="2">Green</option>
                            <option value="3">Purple</option>
                            <option value="4">Orange</option>
                            <option value="5">Dark</option>
                        </select>
                    </div>
                </div>

                <div class="flex md:hidden">
                    <!-- Mobile menu button -->
                    <button class="mobile-menu-btn" @click="showMenu = !showMenu">
                        <!-- Menu open: "hidden", Menu closed: "block" -->
                        <svg
                            :class="!showMenu ? 'block h-6 w-6' : 'hidden h-6 w-6'"
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
                            :class="showMenu ? 'block h-6 w-6' : 'hidden h-6 w-6'"
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
</template>

<script>
import { defineComponent } from 'vue';
import { colorSchemes } from './assets/color-schemes';

export default defineComponent({
    data: () => ({
        showMenu: false,
        links: [
            { text: 'Challenge 1', to: '/Challenge1' },
            { text: 'Challenge 2', to: '/Challenge2' },
            { text: 'Challenge 3', to: '/Challenge3' },
        ],
    }),
    mounted() {
        const myStorage = window.localStorage;
        const root = document.documentElement;

        document.getElementById('theme-select').addEventListener('change', function () {
            populateStorage();
        });

        if (!myStorage.getItem('colorIndex')) {
            populateStorage();
        } else {
            setStyles();
        }

        function setStyles() {
            let colorIndex = myStorage.getItem('colorIndex');
            let activeColor = colorSchemes[colorIndex];
            let selectWrapper = document.querySelector('.select-wrapper');
            document.getElementById('theme-select').value = colorIndex;

            if (colorIndex === '0') {
                selectWrapper.classList.add('light-theme');
            } else {
                selectWrapper.classList.remove('light-theme');
            }

            root.style.setProperty('--bg-color', activeColor.bgColor);
            root.style.setProperty('--text-color', activeColor.textColor);
            root.style.setProperty('--shadow-light', activeColor.shadowLight);
            root.style.setProperty('--shadow-dark', activeColor.shadowDark);
            root.style.setProperty('--link-color', activeColor.linkColor);
        }

        function populateStorage() {
            myStorage.setItem('colorIndex', document.getElementById('theme-select').value);

            setStyles();
        }
    },
});
</script>
