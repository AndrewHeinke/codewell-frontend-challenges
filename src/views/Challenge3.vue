<template>
    <main class="h-full">
        <div class="gradie-desktop-bg flex h-full lg:items-center lg:p-4">
            <div class="gradie block mx-auto w-full lg:flex lg:max-w-6xl">
                <section
                    class="
                        gradie-bg
                        flex-1
                        px-4
                        py-12
                        text-center
                        bg-gray-900
                        lg:px-0
                        lg:h-auto
                        lg:rounded-l-xl
                    "
                >
                    <h1 class="mb-4 text-white text-5xl font-bold">Gradie</h1>
                    <p class="text-blue-200 text-white text-lg lg:text-xl">
                        Beautiful gradients in seconds.
                    </p>
                </section>
                <section
                    class="
                        flex-1
                        py-12
                        bg-white
                        lg:border lg:border-l-0 lg:border-gray-200
                        lg:rounded-r-xl
                    "
                >
                    <div class="mx-auto px-4 max-w-lg">
                        <h2 class="mb-8 text-gray-900 text-5xl font-bold">Login</h2>
                        <form action="#" method="POST" onsubmit="return false;" autocomplete="off">
                            <div class="mb-4">
                                <label
                                    for="email-input"
                                    class="text-md block text-gray-700 font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    name="email-input"
                                    id="email-input"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    class="
                                        block
                                        mt-1
                                        px-3
                                        py-2
                                        w-full
                                        bg-white
                                        border border-gray-300
                                        rounded-md
                                        focus:outline-none
                                        shadow-sm
                                        appearance-none
                                        focus:ring-gray-900 focus:ring-offset-2 focus:ring-2
                                    "
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="password-input"
                                    class="text-md block text-gray-700 font-medium"
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
                                    class="
                                        block
                                        mt-1
                                        px-3
                                        py-2
                                        w-full
                                        bg-white
                                        border border-gray-300
                                        rounded-md
                                        focus:outline-none
                                        shadow-sm
                                        appearance-none
                                        focus:ring-gray-900 focus:ring-offset-2 focus:ring-2
                                    "
                                />
                            </div>
                            <div class="mb-4">
                                <label class="inline-flex items-start mt-3">
                                    <input
                                        type="checkbox"
                                        class="
                                            form-checkbox
                                            relative
                                            top-1
                                            w-5
                                            h-5
                                            text-gray-900
                                            rounded
                                            cursor-pointer
                                            focus:ring-gray-900
                                        "
                                        required
                                    /><span class="ml-2 text-gray-700 cursor-pointer"
                                        >By creating an account, you agree to the Terms &amp;
                                        Conditions.</span
                                    >
                                </label>
                            </div>
                            <div
                                class="
                                    flex flex-col-reverse
                                    col-span-full
                                    mt-4
                                    sm:block
                                    sm:place-self-end
                                "
                            >
                                <button
                                    type="submit"
                                    class="
                                        px-4
                                        py-4
                                        w-full
                                        text-white text-xl
                                        font-medium
                                        hover:bg-gray-700
                                        bg-gray-900
                                        border border-transparent
                                        rounded-md
                                        focus:outline-none
                                        shadow-sm
                                        focus:ring-gray-900 focus:ring-offset-2 focus:ring-2
                                    "
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
