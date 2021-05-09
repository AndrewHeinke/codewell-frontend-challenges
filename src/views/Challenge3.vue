<template>
    <main>
        <div class="gradie-desktop-bg h-full flex lg:items-center lg:p-4">
            <div class="gradie block lg:flex w-full lg:max-w-6xl mx-auto">
                <section
                    class="flex-1 bg-gray-900 text-center gradie-bg lg:h-auto px-4 lg:px-0 py-12 lg:rounded-l-xl"
                >
                    <h1 class="text-white font-bold text-5xl mb-4">Gradie</h1>
                    <p class="text-white text-lg lg:text-xl text-blue-200">
                        Beautiful gradients in seconds.
                    </p>
                </section>
                <section
                    class="flex-1 py-12 bg-white lg:rounded-r-xl lg:border-gray-200 lg:border lg:border-l-0"
                >
                    <div class="mx-auto max-w-lg px-4">
                        <h2 class="text-gray-900 font-bold text-5xl mb-8">Login</h2>
                        <form action="#" method="POST" onsubmit="return false;" autocomplete="off">
                            <div class="mb-4">
                                <label
                                    for="email-input"
                                    class="block text-md font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    name="email-input"
                                    id="email-input"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 appearance-none"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="password-input"
                                    class="block text-md font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    name="password-input"
                                    id="password-input"
                                    type="password"
                                    required
                                    minlength="8"
                                    placeholder="At least 8 characters"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 appearance-none"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="inline-flex items-start mt-3">
                                    <input
                                        type="checkbox"
                                        class="form-checkbox h-5 w-5 text-gray-900 focus:ring-gray-900 cursor-pointer rounded relative top-1"
                                        required
                                    /><span class="ml-2 text-gray-700 cursor-pointer"
                                        >By creating an account, you agree to the Terms &amp;
                                        Conditions.</span
                                    >
                                </label>
                            </div>
                            <div
                                class="flex flex-col-reverse mt-4 sm:block col-span-full sm:place-self-end"
                            >
                                <button
                                    type="submit"
                                    class="rounded-md border border-transparent shadow-sm px-4 py-4 bg-gray-900 text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full"
                                >
                                    Create an Account
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>
