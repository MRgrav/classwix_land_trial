import html from '@elysiajs/html';
import { sql } from '../db';

// Country codes mapping
const COUNTRY_CODES = {
    'india': '+91',
    'united states of america': '+1', 
    'united kingdom': '+44',
    'malaysia': '+60',
    'australia': '+61',
    'canada': '+1',
    'uae': '+971'
} as Record<string, string>;

export const trialHandler = {
    create: async ({ body }: { 
        body: { 
            name: string, 
            subject: string, 
            phone: string, 
            email: string, 
            country: string, 
            address?: string,
            category?: string
        } 
    }) => {
        try {
            // Get country code and prefix phone
            const countryCode = COUNTRY_CODES[body.country] || '+00';
            const whatsappNumber = `${countryCode}${body.phone}`;
            
            const [newRequest] = await sql`
                INSERT INTO students (name, subject, contact_number, whatsapp_number, email, address) 
                VALUES (${body.name}, ${body.subject}, ${body.phone}, ${whatsappNumber}, ${body.email}, ${body.address || ''}, ${body.country})
                RETURNING *
            `;
            
            console.log('Student created:', { ...body, whatsappNumber });
            return `
                <div class="bg-gradient-to-tr from-blue-800 to-purple-900 p-6 h-fit sm:h-full overflow-y-auto">
                    <div class="mx-auto p-6 mb-10">
                        <div class="flex gap-2 justify-center font-semibold items-center text-4xl text-orange-500 mb-2">
                            <img src='https://pk.deolang.com/api/files/clients/qpoewnw72b2e9hh/apple_touch_icon_ikgrhid25v.png' class="h-12 w-12 rounded" />
                            <p>CLASSWiX</p>
                        </div>
                        <h2 class="text-white text-lg text-center">
                            We have received your request. Will contact you soon <span class='capitalize font-semibold'>${body.name}</span>!
                        </h2>
                    </div>
                    
                    <!-- New trial form -->
                    <form hx-post="/api/trials" hx-target="#success_container" hx-swap="innerHTML" class="space-y-5">
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
                        
                        <button type="submit" class="btn-submit w-full bg-zinc-400 text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-900/60 hover:scale-95 flex items-center justify-center gap-2">
                            <span>Claim My Free Lesson</span>
                            <span class="htmx-indicator animate-spin hidden">⏳</span>
                        </button>
                    </form>
                </div>
            `;
            
        } catch (error: any) {
            console.error('Trial creation failed:', error);
            return `
                <div class="flex flex-col justify-center bg-gradient-to-tr from-red-800 to-pink-800 p-8  h-fit sm:h-full rounded-xl text-center">
                    <h2 class="text-white text-xl font-bold mb-4">❌ Request Failed</h2>
                    <p class="text-white/90 mb-6">${error.message || 'Something went wrong. Please try again.'}</p>
                    <button onclick="window.location.reload()" class="bg-white text-red-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
                        Try Again
                    </button>
                </div>
            `;
        }
    }
};
