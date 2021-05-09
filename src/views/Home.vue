<template>
    <main>
        <div class="container py-6">
            <h1 class="text-6xl font-bold leading-tight mb-4">Codewell Front End Challenges</h1>
            <p class="text-xl mb-8">A site to show all the Codwell Frontend Challenges.</p>
            <ul>
                <li>
                    <div class="max-w-lg w-full rounded-lg border border-gray-300 p-4 mb-4">
                        <h3 class="font-semibold text-lg tracking-wide">Spense Landing Page</h3>
                        <p class="text-gray-500 my-1">
                            Spence is a landing page for writers. Great for practicing absolute
                            positioning and flex layouts.
                        </p>
                        <div class="mt-2">
                            <router-link to="/Challenge1">
                                <a
                                    class="text-blue-700 inline-flex items-center font-semibold tracking-wide"
                                >
                                    <span class="hover:underline">View Demo</span>
                                    <span class="text-xl ml-2">&#8594;</span>
                                </a>
                            </router-link>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="max-w-lg w-full rounded-lg border border-gray-300 p-4 mb-4">
                        <h3 class="font-semibold text-lg tracking-wide">Fiber Landing Page</h3>
                        <p class="text-gray-500 my-1">
                            An online portfolio generator. Great to practice flex/grid layouts,
                            absolute positioning and sliders.
                        </p>
                        <div class="mt-2">
                            <router-link to="/Challenge2">
                                <a
                                    class="text-blue-700 inline-flex items-center font-semibold tracking-wide"
                                >
                                    <span class="hover:underline">View Demo</span>
                                    <span class="text-xl ml-2">&#8594;</span>
                                </a>
                            </router-link>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="max-w-lg w-full rounded-lg border border-gray-300 p-4 mb-4">
                        <h3 class="font-semibold text-lg tracking-wide">Gradie Sign Up Page</h3>
                        <p class="text-gray-500 my-1">
                            Gradie is a simple sign up page, great to practice centering layouts and
                            absolute positioning.
                        </p>
                        <div class="mt-2">
                            <router-link to="/Challenge3">
                                <a
                                    class="text-blue-700 inline-flex items-center font-semibold tracking-wide"
                                >
                                    <span class="hover:underline">View Demo</span>
                                    <span class="text-xl ml-2">&#8594;</span>
                                </a>
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>
