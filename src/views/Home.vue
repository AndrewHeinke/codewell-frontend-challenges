<template>
    <main class="homepage">
        <div class="container py-6">
            <div class="homepage-title-section rounded-xl p-8 text-center mb-16">
                <h1 class="homepage-title-heading">Codewell Front End Challenges</h1>
                <div>
                    <label class="sr-only" for="theme-select">Set Theme</label>
                    <select
                        class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 max-w-xs mx-auto"
                        name="theme"
                        id="theme-select"
                    >
                        <option value="0">Theme Default</option>
                        <option value="1">Theme Blue</option>
                        <option value="2">Theme Green</option>
                        <option value="3">Theme Purple</option>
                        <option value="4">Theme Orange</option>
                        <option value="5">Theme Dark</option>
                    </select>
                </div>
                <div class="flex justify-center pt-8">
                    <a
                        class="morph-btn"
                        href="https://github.com/AndrewHeinke/codewell-frontend-challenges"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        class="morph-btn"
                        href="https://www.linkedin.com/in/andrewheinke/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                            <path
                                d="M34 2.5v29a2.5 2.5 0 01-2.5 2.5h-29A2.5 2.5 0 010 31.5v-29A2.5 2.5 0 012.5 0h29A2.5 2.5 0 0134 2.5zM10 13H5v16h5zm.45-5.5a2.88 2.88 0 00-2.86-2.9H7.5a2.9 2.9 0 000 5.8 2.88 2.88 0 002.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 00-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 013-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"
                            />
                        </svg>
                    </a>
                    <a
                        class="morph-btn"
                        href="https://www.instagram.com/andrewheinke/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.063 169.063">
                            <path
                                d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"
                            />
                            <path
                                d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="card-container rounded-xl p-8">
                <div class="clock">
                    <div class="hand hours"></div>
                    <div class="hand minutes"></div>
                    <div class="hand seconds"></div>
                    <div class="point"></div>
                    <div class="marker">
                        <span class="marker__1"></span>
                        <span class="marker__2"></span>
                        <span class="marker__3"></span>
                        <span class="marker__4"></span>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link to="/Challenge1" class="homepage-card-link"
                            >Spense Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            Spence is a landing page for writers. Great for practicing absolute
                            positioning and flex layouts.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link to="/Challenge2" class="homepage-card-link"
                            >Fiber Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            An online portfolio generator. Great to practice flex/grid layouts,
                            absolute positioning and sliders.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link to="/Challenge3" class="homepage-card-link">
                            Gradie Sign Up Page
                        </router-link>
                        <p class="homepage-card-text">
                            Gradie is a simple sign up page, great to practice centering layouts and
                            absolute positioning.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link to="/Challenge1" class="homepage-card-link"
                            >Spense Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            Spence is a landing page for writers. Great for practicing absolute
                            positioning and flex layouts.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link to="/Challenge2" class="homepage-card-link"
                            >Fiber Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            An online portfolio generator. Great to practice flex/grid layouts,
                            absolute positioning and sliders.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link to="/Challenge3" class="homepage-card-link">
                            Gradie Sign Up Page
                        </router-link>
                        <p class="homepage-card-text">
                            Gradie is a simple sign up page, great to practice centering layouts and
                            absolute positioning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
const colorOptions = [
    {
        bgColor: '#eeeeee',
        shadowLight: '#ffffff',
        shadowDark: '#cacaca',
        textColor: '#6b7280',
        linkColor: '#6d28d9',
    },
    {
        bgColor: '#4A90E2',
        shadowLight: '#55a6ff',
        shadowDark: '#3f7ac0',
        textColor: '#FFFFFF',
        linkColor: '#F1BBDF',
    },
    {
        bgColor: '#7ed321',
        shadowLight: '#91F326',
        shadowDark: '#6BB31C',
        textColor: '#171738',
        linkColor: '#3423A6',
    },
    {
        bgColor: '#9013fe',
        shadowLight: '#a616ff',
        shadowDark: '#7A10D8',
        textColor: '#BCF8EC',
        linkColor: '#F9CFF2',
    },
    {
        bgColor: '#f5a623',
        shadowLight: '#FFBF28',
        shadowDark: '#D08D1E',
        textColor: '#1D2F6F',
        linkColor: '#2E4BB2',
    },
    {
        bgColor: '#3a3842',
        shadowLight: '#43404c',
        shadowDark: '#313038',
        textColor: '#D8E8F6',
        linkColor: '#44CF6C',
    },
];

// function generateRandomColor(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// function setSelectedIndex(s, i) {
//     s.options[i - 1].selected = true;
//     return;
// }

import { defineComponent } from 'vue';

export default defineComponent({
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
            let activeColor = colorOptions[colorIndex];

            document.getElementById('theme-select').value = colorIndex;

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
