<template>
    <main>
        <div class="text-center bg-black text-white p-4">
            <p class="mx-auto max-w-xl font-medium">
                🎉 To celebreate Spense's launch, we will be waiving all fees for the entire month
                of April.
                <span class="underline">You will be receiving 100% of the earnings.</span> 🎉
            </p>
        </div>
        <nav class="py-2 md:py-6 bg-gray-100">
            <div class="container">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center justify-between w-full">
                        <a
                            class="text-gray-700 text-2xl font-bold focus:bg-gray-100 focus:text-gray-700 mr-auto lg:mr-0"
                            href="javascript:;"
                        >
                            spense.
                        </a>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-baseline">
                                <a
                                    v-for="(link, i) in links"
                                    :key="i"
                                    href="javascript:;"
                                    class="px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"
                                    >{{ link.text }}</a
                                >
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <a
                                href="javascript:;"
                                class="px-2 lg:px-3 py-2 rounded-md text-md lg:text-lg whitespace-nowrap text-gray-700 focus:outline-none focus:bg-gray-100 ml-2 lg:ml-4"
                                >Login</a
                            >
                            <button
                                type="button"
                                class="rounded-md px-4 py-4 bg-gray-900 text-md lg:text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ml-2 lg:ml-4"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <button
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            @click="showMenu = !showMenu"
                        >
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
            <!-- Mobile menu, toggle classes based on menu state. Open: "block", closed: "hidden" -->
            <div class="md:hidden border-gray-300 border-b" :class="showMenu ? 'block' : 'hidden'">
                <div class="container">
                    <div class="pt-2 pb-3">
                        <a
                            v-for="(link, i) in links"
                            :key="i"
                            href="javascript:;"
                            class="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"
                        >
                            {{ link.text }}
                        </a>
                        <div>
                            <a
                                href="javascript:;"
                                class="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100 mt-1"
                                >Login</a
                            >
                            <button
                                type="button"
                                class="rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 my-4 w-full"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="bg-gray-100 pb-8">
            <div class="container">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full lg:w-1/2 xl:w-3/5 px-4 order-2 lg:order-1">
                        <h1 class="text-4xl md:text-5xl xl:text-6xl mb-4 max-w-2xl">
                            Share your unflitered thoughts. Get paid.
                        </h1>
                        <p class="text-lg max-w-2xl">
                            Spense is an open platform for individuals to share their unfiltered
                            thoughts. Discuss the topic you love, and get paid for doing
                            <em>just</em> that.
                        </p>
                        <ul class="spense-hero-list text-lg my-6">
                            <li>Receive 99% off the earnings.</li>
                            <li>Get paid via Debit Card, ACH, or Paypal.</li>
                            <li>Withdraw your earnings anytime.</li>
                        </ul>
                    </div>
                    <div class="w-full lg:w-1/2 xl:w-2/5 px-4 order-1 lg:order-2 mb-8 lg:mb-0">
                        <div class="spense-hero rounded-xl w-full relative">
                            <div class="bg-white rounded-lg p-4 absolute left-8 top-8">
                                <p class="border-color-gray-300 border-b pb-3 mb-3 text-lg">
                                    April Earnings
                                </p>
                                <p class="font-bold text-lg">$272.21</p>
                                <button
                                    type="button"
                                    class="rounded-md px-2 py-2 bg-gray-900 text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-4 w-full"
                                >
                                    Withdraw
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-x-hidden py-8">
            <div class="relative translate-x-1/2">
                <div class="spense-logos">
                    <img src="/img/spense/facebook-logo.png" alt="Facebook Logo" />
                    <img src="/img/spense/dribbble-logo.png" alt="Dribbble Logo" />
                    <img src="/img/spense/youtube-logo.png" alt="Youtube Logo" />
                    <img src="/img/spense/pinterest-logo.png" alt="Pinterest Logo" />
                    <img src="/img/spense/twitter-logo.png" alt="Twitter Logo" />
                    <img src="/img/spense/reddit-logo.png" alt="Reddit Logo" />
                    <img src="/img/spense/google-logo.png" alt="Google Logo" />
                    <img src="/img/spense/slack-logo.png" alt="Slack Logo" />
                    <img src="/img/spense/facebook-logo.png" alt="Facebook Logo" />
                    <img src="/img/spense/dribbble-logo.png" alt="Dribbble Logo" />
                    <img src="/img/spense/youtube-logo.png" alt="Youtube Logo" />
                    <img src="/img/spense/pinterest-logo.png" alt="Pinterest Logo" />
                    <img src="/img/spense/twitter-logo.png" alt="Twitter Logo" />
                    <img src="/img/spense/reddit-logo.png" alt="Reddit Logo" />
                    <img src="/img/spense/google-logo.png" alt="Google Logo" />
                    <img src="/img/spense/slack-logo.png" alt="Slack Logo" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => ({
        showMenu: false,
        links: [{ text: 'Business' }, { text: 'Pricing' }, { text: 'Features' }],
    }),
});
</script>
