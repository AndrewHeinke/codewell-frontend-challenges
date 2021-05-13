<template>
    <main class="homepage">
        <div class="container py-6">
            <div class="homepage-title-section mb-16 p-8 text-center rounded-xl">
                <h1 class="homepage-title-heading">Front End Challenges</h1>
            </div>
            <div class="card-container p-4 rounded-xl md:p-8">
                <div
                    class="
                        grid
                        gap-4
                        grid-cols-1
                        sm:grid-cols-2
                        md:gap-8
                        lg:grid-cols-3
                        xl:grid-cols-4
                    "
                >
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge1" class="homepage-card-link"
                            >Spense Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            Spence is a landing page for writers. Great for practicing absolute
                            positioning and flex layouts.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge2" class="homepage-card-link"
                            >Fiber Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            An online portfolio generator. Great to practice flex/grid layouts,
                            absolute positioning and sliders.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge3" class="homepage-card-link">
                            Gradie Sign Up Page
                        </router-link>
                        <p class="homepage-card-text">
                            Gradie is a simple sign up page, great to practice centering layouts and
                            absolute positioning.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge4" class="homepage-card-link"
                            >IndieBrew Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            IndieBrew's template has a landing page and a sign up page. Great for
                            general practice.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge5" class="homepage-card-link"
                            >Snipper Landing Page</router-link
                        >
                        <p class="homepage-card-text">
                            Snipper's a really fun project if you want some quick coding to do.
                            Perfect for beginners.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge6" class="homepage-card-link">
                            Comment Module
                        </router-link>
                        <p class="homepage-card-text">
                            A comment box with nested replies. Perfect for practicing positioning.
                            Intermediate level.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge7" class="homepage-card-link">
                            Commune Waitlist Page
                        </router-link>
                        <p class="homepage-card-text">
                            The perfect template for beginners to start working on their HTML and
                            CSS skills.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge8" class="homepage-card-link">
                            TimeNow Landing Page
                        </router-link>
                        <p class="homepage-card-text">
                            A 2-page template, perfect for practicing custom components and flex
                            layouts.
                        </p>
                    </div>
                    <div class="group homepage-card relative p-4 w-full rounded-lg">
                        <img
                            class="mb-4 rounded-md"
                            src="http://via.placeholder.com/600x400"
                            alt=""
                        />
                        <router-link to="/Challenge9" class="homepage-card-link">
                            Unifeed Blog Page
                        </router-link>
                        <p class="homepage-card-text">
                            A blog page perfect for practicing both Flex and Grid. Beginner level.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="homepage-footer">
        <div class="container">
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
    </footer>
</template>
