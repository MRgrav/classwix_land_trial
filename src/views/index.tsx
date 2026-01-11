import { Html } from '@elysiajs/html';
import { Elysia } from 'elysia';

export const landingModule = new Elysia()
    .get('/', () => (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Unlock Your Musical Potential | Harmony Academy</title>
                <meta name="description" content="Register for a free trial music class at Harmony Academy. Expert instructors for Piano, Guitar, and Violin." />

                {/* HTMX & Tailwind */}
                <script src="https://unpkg.com/htmx.org@1.9.10"></script>
                <script src="https://cdn.tailwindcss.com"></script>

                <style>{`
                    .glass {
                        background: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(10px);
                    }
                    .htmx-indicator {
                        display: none;
                    }
                    .htmx-request .htmx-indicator {
                        display: inline;
                    }
                    .htmx-request.btn-submit {
                        pointer-events: none;
                        opacity: 0.8;
                    }
                        /* Carousel Styles */
                    .carousel-page { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }

                    .carousel-section { padding: 4rem 0; }
                    .section-title { 
                    text-align: center; font-size: clamp(2rem, 5vw, 3.5rem); 
                    color: white; margin-bottom: 3rem; 
                    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                    }

                    .carousel-container {
                    max-width: 1000px; margin: 0 auto;
                    width: 90%;
                    position: relative; height: auto;
                    aspect-ratio: 12/4;
                    border-radius: .4rem; overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                    }

                    .carousel-indicators {
                    position: absolute; bottom: 20px; left: 50%;
                    transform: translateX(-50%); display: flex;
                    gap: 10px; z-index: 10;
                    }

                    .indicator {
                    width: 12px; height: 12px; border-radius: 50%;
                    background: rgba(255,255,255,0.5); cursor: pointer;
                    transition: all 0.3s ease;
                    }

                    .indicator.active { background: white; transform: scale(1.2); }

                    .carousel {
                    width: 100%; height: 100%; overflow: hidden;
                    position: relative;
                    }

                    .slides {
                    display: flex; width: 400%; /* 4 slides = 400% */
                    height: 100%; animation: autoSlide 24s infinite;
                    }

                    .slide {
                    width: 25%; /* 100% / 4 = 25% */
                    height: 100%; position: relative;
                    }

                    .slide img {
                    width: 100%; height: 100%; object-fit: cover;
                    display: block;
                    }

                    .slide-content {
                    display: none;
                    position: absolute; bottom: 30px; left: 30px;
                    background: rgba(0,0,0,0.8); color: white;
                    padding: 1.5rem 2rem; border-radius: 12px;
                    backdrop-filter: blur(10px);
                    }

                    .slide-content h3 { font-size: 1.8rem; margin-bottom: 0.5rem; }
                    .slide-content p { opacity: 0.9; font-size: 1.1rem; }

                    /* Auto-slide Animation */
                    @keyframes autoSlide {
                    0%, 5%        { transform: translateX(0%); }
                    20%, 25%      { transform: translateX(-25%); }
                    40%, 45%      { transform: translateX(-50%); }
                    60%, 65%      { transform: translateX(-75%); }
                    80%, 100%     { transform: translateX(0%); }
                    }

                    /* Pause on hover */
                    .carousel-container:hover .slides {
                    animation-play-state: paused;
                    }

                    /* Responsive */
                    @media (max-width: 768px) {
                    .carousel-container {  margin: 0 1rem; }
                    .slide-content { 
                        left: 20px; bottom: 20px; right: 20px;
                        padding: 1rem;
                    }
                    .slide-content h3 { font-size: 1.4rem; }
                    }

                `}</style>
                <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
                {/* <script src='/public/select.js'></script> */}

            </head>
            <body class="bg-slate-50 text-slate-900 font-sans scroll-smooth">
                {/* Navigation */}
                <nav class="fixed w-full z-50 glass border-b border-slate-200">
                    <div class="w-full mx-auto px-6 h-16 flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            {/* <span class="text-2xl">🎹</span>
                            <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                Harmony Academy
                            </h1> */}
                            <div class="flex gap-2 justify-center font-bold font-serif items-center text-4xl text-blue-800 mb-2">
                                <img src='https://pk.deolang.com/api/files/clients/qpoewnw72b2e9hh/apple_touch_icon_ikgrhid25v.png' class="h-10 w-10 rounded" />
                                <p>CLASSWiX</p>
                            </div>
                        </div>
                        <div class="hidden md:flex space-x-8 font-medium">
                            {/* <a href="#features" class="hover:text-indigo-600 transition">Our Methods</a> */}
                            <a href="#trial" class="text-indigo-600 font-bold underline decoration-2 underline-offset-4">Free Trial</a>
                        </div>
                    </div>
                </nav>

                <div class="grid md:grid-cols-10 min-h-dvh h-full w-full pt-12 sm:overflow-hidden sm:fixed">
                    <aside id='success_container' class={'md:col-span-3'}>
                        <div class="bg-gradient-to-tr from-blue-800 to-purple-900 p-6 h-fit sm:h-full overflow-y-auto">
                            {/* <div class=""> */}
                            <div id='success_container' class="mx-auto p-6">
                                {/* <div class="flex gap-2 justify-center font-semibold items-center text-4xl text-white mb-2">
                                <img src='https://pk.deolang.com/api/files/clients/qpoewnw72b2e9hh/apple_touch_icon_ikgrhid25v.png' class="h-12 w-12 rounded" />
                                <p>CLASSWiX</p>
                            </div> */}
                                <h2 class="text-orange-500 font-bold text-lg text-center">Book Your Free 1:1 Trial Class</h2>
                            </div>
                            <form
                                hx-post="/api/trials"
                                hx-target="#success_container"
                                hx-swap="innerHTML"
                                class="space-y-5"
                            >
                                <div>
                                    <label class="block text-sm font-bold text-slate-200 mb-1">Select Category</label>
                                    <select id='category' name="category" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white">
                                        <option value="">Select category</option>
                                        <option value="academics">Academic</option>
                                        <option value="musics">Music</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-slate-200 mb-1">Select Course</label>
                                    <select id='subject' name="subject" disabled class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white">
                                        <option value="">Select category first</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-slate-200 mb-1">Student's Name</label>
                                    <input name="name" type="text" required placeholder="student's full name" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                                </div>
                                {/* <div>
                                <label class="block text-sm font-bold text-slate-200 mb-2">Age</label>
                                <input name="name" type="text" required placeholder="John Doe" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                            </div> */}
                                <div>
                                    <label class="block text-sm font-bold text-slate-200 mb-1">Email Address</label>
                                    <input name="email" type="email" required placeholder="arjun@zohomail.in" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-slate-200 mb-1">Phone/WhatsApp Number</label>
                                    <input name="phone" type="number" required placeholder="10 digit phone number" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                                </div>

                                <div>
                                    <label class="block text-sm font-bold text-slate-200 mb-1">Select Country</label>
                                    <select id='country' name="country" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white">
                                        <option value="">Select country</option>
                                        <option value="india">India</option>
                                        <option value="united states of america">United States of America</option>
                                        <option value="united kingdom">United Kingdom</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UAE">UAE</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-slate-200 mb-1">Address</label>
                                    <input name="address" type="text" required placeholder="town/city, state..." class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
                                </div>
                                {/* <div>
                                <label class="block text-sm font-bold text-slate-200 mb-2">Select State</label>
                                <select id="state" name="state" disabled class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white" required>
                                    <option value="">First select country</option>
                                </select>
                            </div> */}

                                <button type="submit" class="btn-submit w-full bg-zinc-400 text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-900/60 hover:scale-95 flex items-center justify-center gap-2">
                                    <span>Claim My Free Lesson</span>
                                    <span class="htmx-indicator animate-spin">⏳</span>
                                </button>
                            </form>
                            {/* </div> */}
                        </div>
                    </aside>
                    <main class="md:col-span-7 overflow-y-auto">
                        {/* <!-- Pure CSS Carousel --> */}
                        <div class="carousel-container top-20">
                            {/* <!-- Indicators (visual dots) --> */}
                            <div class="carousel-indicators">
                                <span class="indicator active"></span>
                                <span class="indicator"></span>
                                <span class="indicator"></span>
                                <span class="indicator"></span>
                            </div>

                            {/* <!-- Slides --> */}
                            <div class="carousel">
                                <div class="slides">
                                    <div class="slide">
                                        <img src="https://pk.deolang.com//api/files/pbc_3003487910/jl45piflpq856gb/slide1_bj3vpya93g.webp" alt="Guitar lesson" />
                                        {/* <div class="slide-content">
                                            <h3>Guitar Mastery</h3>
                                            <p>Beginner to pro in 6 months</p>
                                        </div> */}
                                    </div>
                                    <div class="slide">
                                        <img src="https://pk.deolang.com//api/files/pbc_3003487910/idqtqaqlzi51i75/slide2_5395anwfon.webp" alt="Piano lesson" />
                                        {/* <div class="slide-content">
                                            <h3>Piano Perfection</h3>
                                            <p>Classical & contemporary</p>
                                        </div> */}
                                    </div>
                                    <div class="slide">
                                        <img src="https://pk.deolang.com//api/files/pbc_3003487910/e8nqmus8awok35v/slide3_9i8xi45427.webp" alt="Violin lesson" />
                                        {/* <div class="slide-content">
                                            <h3>Violin Virtuoso</h3>
                                            <p>Personalized technique</p>
                                        </div> */}
                                    </div>
                                    <div class="slide">
                                        <img src="https://pk.deolang.com//api/files/pbc_3003487910/mfsfjjdsapmtub7/slide4_0lyw3580hr.webp" alt="Drums lesson" />
                                        {/* <div class="slide-content">
                                            <h3>Drum Dynamics</h3>
                                            <p>Rhythm & groove mastery</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Hero Section */}
                        <header class="relative pt-32 pb-20 px-6 overflow-hidden">
                            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
                                <div class="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
                                <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
                            </div>

                            <div class="max-w-4xl mx-auto text-center">
                                <span class="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
                                    Limited Slots Available for 2026
                                </span>
                                <h2 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                                    Inspiring Excellence in  <span class="text-blue-800">Education & Music</span>
                                </h2>
                                <p class="text-xl text-slate-600 mb-10 leading-relaxed">
                                    Experience the Difference - Where Education and Music Come Together To Make Magic.
                                    Enroll Today And Unlock Your Full Potential With Us!
                                </p>
                                {/* <a href="#trial" class="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all inline-block">
                                    Book Your Free Trial Now
                                </a> */}
                            </div>
                        </header>

                        <section class="bg-blue-50 p-10">
                            <div class="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div class="bg-white rounded-2xl p-8 px-6 shadow-lg flex flex-col items-center text-center">
                                    <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                                        <svg stroke-width="0" color="currentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                                            <path fill="currentColor" d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.129 56.129 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"></path>
                                            <path fill="currentColor" d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0 1 6 13.18v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 0 0 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.668 2.25 2.25 0 0 0 2.12 0Z"></path>
                                            <path fill="currentColor" d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 0 1-1.286 1.794.75.75 0 1 1-1.06-1.06Z"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-xl font-bold text-gray-800 mb-4">Online Courses</h2>
                                    <p class="text-gray-600 mb-2 text-sm">Academics (3-12) &amp; Music (All Ages)</p>
                                    <p class="text-gray-600 mb-6 text-sm">Learn From Experts, Anywhere, Anytime</p>
                                    <a href="https://www.classwix.com" target='_blank' class="bg-blue-600 text-white px-6 mt-auto mb-2 py-2 rounded-full hover:bg-blue-800 hover:scale-95 transition duration-300 inactive" >Learn more</a>
                                </div>
                                <div class="bg-gradient-to-tr from-blue-800 to-pink-800 rounded-2xl py-8 px-4 shadow-lg flex flex-col items-center text-center">
                                    <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                                        <svg stroke-width="0" color="currentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                                            <path fill="currentColor" d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-xl font-bold text-white mb-4">Enhance Your Expertise</h2>
                                    <p class="text-purple-200 mb-2 text-sm">Elevate Your Expertise, Amplify Your Success</p>
                                    <p class="text-purple-200 mb-6 text-sm">Upgrade Your Skills, Unleash Your Potential</p>
                                    <a href="https://www.classwix.com" target='_blank' class="bg-blue-600 text-white px-6 mt-auto mb-2 py-2 rounded-full hover:bg-blue-500 hover:scale-95 transition duration-300">Learn more</a>
                                </div>
                                <div class="bg-white rounded-2xl py-8 px-4 shadow-lg flex flex-col items-center text-center">
                                    <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                                        <svg stroke-width="0" color="currentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-white text-3xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                                            <path fill="currentColor" d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z"></path>
                                            <path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-xl font-bold text-gray-800 mb-4">Get Certified In Music</h2>
                                    <p class="text-gray-600 mb-2 text-sm">Transform Your Passion Into A Profession</p>
                                    <p class="text-gray-600 mb-6 text-sm">Earn Recognition From Top Universities/Boards</p>
                                    <a href="https://www.classwix.com" target='_blank' class="bg-blue-600 text-white mt-auto mb-2 px-6 py-2 rounded-full hover:bg-blue-800 hover:scale-95 transition duration-300 inactive" >Learn more</a>
                                </div>
                            </div>
                        </section>

                        <section class="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
                            <div class="max-w-7xl mx-auto">
                                <div class="text-center mb-12" style="opacity: 1; --motion-translateY: 0px; transform: translateY(var(--motion-translateY));">
                                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose <span class="text-indigo-600">CLASSWiX</span></h2>
                                    <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Learn Without Limits, Grow With CLASSWiX</p>
                                </div>
                                <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" style="opacity: 1; --motion-translateY: 0px; transform: translateY(var(--motion-translateY));">
                                        <svg stroke-width="0" color="currentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-12 h-12 text-indigo-600 mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;"><path fill="currentColor" d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                                        </svg>
                                        <h3 class="text-xl font-semibold mb-2">Comprehensive Courses</h3>
                                        <p class="text-gray-600">In-depth learning pathways for accelerated progress</p>
                                    </div>
                                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" style="opacity: 1; --motion-translateY: 0px; transform: translateY(var(--motion-translateY));">
                                        <svg stroke-width="0" color="currentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-12 h-12 text-indigo-600 mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                                            <path fill="currentColor" fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd"></path>
                                            <path fill="currentColor" d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"></path>
                                        </svg>
                                        <h3 class="text-xl font-semibold mb-2">Expert Instructors</h3><p class="text-gray-600">Instruction from renowned experts and thought leaders in their fields</p>
                                    </div>
                                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" style="opacity: 1; --motion-translateY: 0px; transform: translateY(var(--motion-translateY));">
                                        <svg stroke-width="0" color="currentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-12 h-12 text-indigo-600 mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                                            <path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd"></path>
                                        </svg>
                                        <h3 class="text-xl font-semibold mb-2">Flexible Learning</h3>
                                        <p class="text-gray-600">Learn at your pace, anywhere with personalized support</p>
                                    </div>
                                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" style="opacity: 1; --motion-translateY: 0px; transform: translateY(var(--motion-translateY));">
                                        <svg stroke-width="0" color="currentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-12 h-12 text-indigo-600 mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                                            <path fill="currentColor" fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd"></path>
                                        </svg>
                                        <h3 class="text-xl font-semibold mb-2">Revision Made Easy</h3>
                                        <p class="text-gray-600">Check recorded classes for revision, clarifying doubts at your convenience</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="min-h-[180px]">
                            <div class="px-8 pt-10 sm:py-0 md:px-20 lg:px-20 bg-gradient-to-r from-pink-800 to-[#00299b]">
                                <div class="flex flex-col sm:flex-row items-end container mx-auto text-center text-white">
                                    <div class="py-2 sm:py-16" style="opacity: 1; --motion-translateX: 0px; transform: translateX(var(--motion-translateX));">
                                        <h2 class="text-3xl font-bold mb-6 text-left">Start your learning journey today! Enroll now in our online course.</h2>
                                        <div class="text-left">
                                            <a href="https://play.google.com/store/apps/details?id=com.deolang.classwix&amp;pcampaignid=web_share" target="_blank" class="bg-white flex gap-2 px-4 rounded-lg text-orange-600 font-semibold shadow hover:scale-95 w-40">
                                                <img src="https://classwix.com/icons/google-play.png" alt="" class="w-8 my-2" />
                                                <p class="my-auto">Download</p>
                                            </a>
                                        </div>
                                        <div class="mt-2 text-left">
                                            <p class="text-zinc-200 text-xs mt-3">PWA also available*</p>
                                        </div>
                                    </div>
                                    <div class="min-w-[200px] min-h-[200px]">
                                        <img src="https://classwix.com/images/BoyPhone_small.webp" alt="" class="w-3/4  max-w-[200px] my-auto mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <footer class="">
                            {/* <p class="text-slate-400 text-sm italic">
                            &copy;2025 CLASSWiX, All rights reserved.
                            </p> */}
                            <div class="flex flex-wrap-reverse gap-6 justify-center sm:justify-between bg-zinc-900 px-12 py-2 border-t border-zinc-600">
                                <div>
                                    <p class="text-center text-sm text-zinc-300">©2025 CLASSWiX, All rights reserved.</p>
                                </div>
                                <div>
                                    <ul class="flex gap-4 mx-auto ">
                                        <li class="hover:scale-110 hover:-translate-y-1">
                                            <a aria-label="facebook" href="https://www.facebook.com/classwix" class="inactive" >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="white" width="24" height="24">
                                                    <path d="M24,4C12.972,4,4,12.972,4,24c0,10.006,7.394,18.295,17,19.75V29h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4v-3.632	C21,15.617,23.427,13,27.834,13c1.786,0,3.195,0.124,3.254,0.129C31.604,13.175,32,13.607,32,14.125V17.5c0,0.553-0.448,1-1,1h-2	c-1.103,0-2,0.897-2,2V24h4c0.287,0,0.56,0.123,0.75,0.338c0.19,0.216,0.278,0.502,0.243,0.786l-0.375,3	C31.555,28.624,31.129,29,30.625,29H27v14.75c9.606-1.455,17-9.744,17-19.75C44,12.972,35.028,4,24,4z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="hover:scale-110 hover:-translate-y-1"><a aria-label="whatsapp" href="https://wa.aisensy.com/+919401400399" class="inactive" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white" width="28" height="28">
                                                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                                            </svg>
                                        </a>
                                        </li>
                                        <li class="hover:scale-110 hover:-translate-y-1"><a aria-label="twitter" href="https://x.com/Classwix_App?t=vSW6JHBjSgNnGyfBszv_2Q" class="inactive" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="24" height="24">
                                                <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
                                            </svg>
                                        </a>
                                        </li>
                                        <li class="hover:scale-110 hover:-translate-y-1"><a aria-label="instagram" href="https://www.instagram.com/classwix_app/" class="inactive" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="white" width="24" height="24">
                                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                            </svg>
                                        </a>
                                        </li>
                                        <li class="hover:scale-110 hover:-translate-y-1">
                                            <a aria-label="youtube" href="https://www.youtube.com/@classwix" class="inactive" >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                                    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </main>
                </div>
                <script src='/public/select.js'></script>
            </body>
        </html>
    ));