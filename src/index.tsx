// import { Html, html } from "@elysiajs/html";
// import staticPlugin from "@elysiajs/static";
// import { Elysia } from "elysia";

// const app = new Elysia()
//   .use(await staticPlugin())
//   .use(html())
//   .get('/', () => (
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>About ClassWix - India's Premier Music LMS</title>
//         <meta name="description" content="Learn about ClassWix - transforming music education with live online classes, expert instructors, and innovative technology." />
//         <link rel="stylesheet" href="/style.css" />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
//         ></link>
//       </head>
//       <body>
//         <header class="header">
//           <div class="container">
//             <h1 class="logo">🎵 ClassWix</h1>
//             <nav><a href="/" class="btn-secondary">← Book Trial</a></nav>
//           </div>
//         </header>

//         <main class="about">
//           <div class="container">
//             <section class="hero-content" style="text-align:center; padding:4rem 0;">
//               <h1 style="font-size:3.5rem; margin-bottom:1rem;">Making Music<br />Accessible to All</h1>
//               <p style="font-size:1.3rem; color:#6b7280; max-width:600px; margin:0 auto;">
//                 ClassWix brings world-class music education to your doorstep with live 1:1 lessons.
//               </p>
//             </section>

//             <section class="grid" style="gap:2rem; margin:4rem 0;">
//               <div>
//                 <h2 style="font-size:2rem; margin-bottom:1rem;">Our Mission</h2>
//                 <p>Founded in Northeast India, we believe every music enthusiast deserves access to quality instruction regardless of location or schedule.</p>
//               </div>
//               <div>
//                 <h2 style="font-size:2rem; margin-bottom:1rem;">What Sets Us Apart</h2>
//                 <ul style="list-style:none; padding:0;">
//                   <li>✓ Expert instructors certified in multiple instruments</li>
//                   <li>✓ Live interactive classes (no pre-recorded videos)</li>
//                   <li>✓ Flexible scheduling that fits your life</li>
//                   <li>✓ Proven curriculum used by 5000+ students</li>
//                 </ul>
//               </div>
//             </section>
//           </div>
//         </main>
//       </body>
//     </html>
//   ))
//   .listen(3000);

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );


import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import { landingModule } from './views/index';
import { trialApi } from './routes';
// import { itemsModule } from './modules/items';

const app = new Elysia()
    .use(html()) // Enables SSR for SEO
    .use(staticPlugin()) // Serves /public folder
    .use(landingModule) // Frontend Landing Page
    .use(trialApi)   // CRUD API Module
    .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;