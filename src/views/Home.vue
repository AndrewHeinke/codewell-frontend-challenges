<template>
    <main class="homepage">
        <div class="container py-6">
            <div class="homepage-title-section rounded-xl p-8 text-center mb-16">
                <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                    Codewell Front End Challenges
                </h1>
                <p class="text-xl">
                    A site to show all the
                    <a
                        class="text-purple-700 hover:underline"
                        href="https://www.codewell.cc/challenges"
                        >Codewell Frontend Challenges</a
                    >.
                </p>
            </div>
            <div class="card-container rounded-xl p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link
                            to="/Challenge1"
                            class="text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"
                            >Spense Landing Page</router-link
                        >
                        <p class="text-gray-500 my-1">
                            Spence is a landing page for writers. Great for practicing absolute
                            positioning and flex layouts.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link
                            to="/Challenge2"
                            class="text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"
                            >Fiber Landing Page</router-link
                        >
                        <p class="text-gray-500 my-1">
                            An online portfolio generator. Great to practice flex/grid layouts,
                            absolute positioning and sliders.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link
                            to="/Challenge3"
                            class="text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"
                        >
                            Gradie Sign Up Page
                        </router-link>
                        <p class="text-gray-500 my-1">
                            Gradie is a simple sign up page, great to practice centering layouts and
                            absolute positioning.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link
                            to="/Challenge1"
                            class="text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"
                            >Spense Landing Page</router-link
                        >
                        <p class="text-gray-500 my-1">
                            Spence is a landing page for writers. Great for practicing absolute
                            positioning and flex layouts.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link
                            to="/Challenge2"
                            class="text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"
                            >Fiber Landing Page</router-link
                        >
                        <p class="text-gray-500 my-1">
                            An online portfolio generator. Great to practice flex/grid layouts,
                            absolute positioning and sliders.
                        </p>
                    </div>
                    <div class="relative w-full rounded-lg p-4 group homepage-card">
                        <router-link
                            to="/Challenge3"
                            class="text-purple-700 inline-flex items-center font-semibold text-lg cursor-pointer stretched-link outline-none"
                        >
                            Gradie Sign Up Page
                        </router-link>
                        <p class="text-gray-500 my-1">
                            Gradie is a simple sign up page, great to practice centering layouts and
                            absolute positioning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
