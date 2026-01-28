#!/usr/bin/env node

/**
 * Dummy Script for NovaSphere Landing Page
 * 
 * This script demonstrates a simple utility that generates
 * sample user testimonials for the landing page.
 */

const testimonials = [
    {
        name: "Alex Chen",
        role: "Tech Innovator",
        quote: "NovaSphere has revolutionized how I interact with technology. The holographic interface is mind-blowing!"
    },
    {
        name: "Sarah Martinez",
        role: "Creative Director",
        quote: "Finally, a computing experience that matches my imagination. NovaSphere is the future."
    },
    {
        name: "James Wilson",
        role: "Software Engineer",
        quote: "The seamless integration and intuitive controls make NovaSphere an absolute game-changer."
    },
    {
        name: "Emily Thompson",
        role: "Product Designer",
        quote: "I've never experienced such fluid interaction with digital content. NovaSphere is incredible!"
    },
    {
        name: "Michael Rodriguez",
        role: "Entrepreneur",
        quote: "NovaSphere isn't just a product, it's a paradigm shift in personal computing."
    }
];

function generateTestimonialHTML(testimonial) {
    return `
    <div class="testimonial-card">
        <p class="testimonial-quote">"${testimonial.quote}"</p>
        <div class="testimonial-author">
            <strong>${testimonial.name}</strong>
            <span>${testimonial.role}</span>
        </div>
    </div>`;
}

function generateAllTestimonials() {
    console.log("=== NovaSphere Testimonials Generator ===\n");
    console.log("Generated HTML snippets for testimonials:\n");
    
    testimonials.forEach((testimonial, index) => {
        console.log(`Testimonial #${index + 1}:`);
        console.log(generateTestimonialHTML(testimonial));
        console.log("");
    });
    
    console.log("=== Generation Complete ===");
    console.log(`Total testimonials generated: ${testimonials.length}`);
}

function generateRandomTestimonial() {
    const random = testimonials[Math.floor(Math.random() * testimonials.length)];
    console.log("Random Testimonial:");
    console.log(generateTestimonialHTML(random));
}

// Main execution
const args = process.argv.slice(2);

if (args.includes('--random')) {
    generateRandomTestimonial();
} else if (args.includes('--help')) {
    console.log("NovaSphere Dummy Script");
    console.log("\nUsage:");
    console.log("  node dummy-script.js          Generate all testimonials");
    console.log("  node dummy-script.js --random Generate a random testimonial");
    console.log("  node dummy-script.js --help   Show this help message");
} else {
    generateAllTestimonials();
}
