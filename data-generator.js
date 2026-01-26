/**
 * Data Generator - Generates dummy data for NovaSphere landing page
 */

const generateProducts = (count = 5) => {
    const products = [];
    const adjectives = ['Advanced', 'Premium', 'Elite', 'Pro', 'Ultimate'];
    const features = ['Holographic', 'AI-Powered', 'Quantum', 'Neural', 'Cloud-Based'];
    
    for (let i = 0; i < count; i++) {
        products.push({
            id: `prod-${i + 1}`,
            name: `${adjectives[i % adjectives.length]} ${features[i % features.length]} Module`,
            price: Math.floor(Math.random() * 5000) + 1000,
            rating: (Math.random() * 2 + 3).toFixed(1),
            inStock: Math.random() > 0.3
        });
    }
    
    return products;
};

const generateTestimonials = (count = 10) => {
    const names = ['Alex Johnson', 'Sarah Chen', 'Michael Brown', 'Emma Davis', 'James Wilson', 
                   'Olivia Martinez', 'David Lee', 'Sophia Taylor', 'Daniel Anderson', 'Isabella Garcia'];
    const companies = ['TechCorp', 'InnovateLabs', 'FutureSoft', 'QuantumSystems', 'NexGen Industries'];
    const comments = [
        'NovaSphere has revolutionized our workflow!',
        'The holographic interface is mind-blowing.',
        'Best investment we made this year.',
        'Incredible technology, highly recommended.',
        'Our productivity increased by 300%!'
    ];
    
    const testimonials = [];
    for (let i = 0; i < count; i++) {
        testimonials.push({
            id: `test-${i + 1}`,
            name: names[i % names.length],
            company: companies[i % companies.length],
            comment: comments[i % comments.length],
            rating: Math.floor(Math.random() * 2) + 4,
            date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString()
        });
    }
    
    return testimonials;
};

const generateStats = () => {
    return {
        totalUsers: Math.floor(Math.random() * 100000) + 50000,
        countriesServed: Math.floor(Math.random() * 50) + 100,
        satisfactionRate: (Math.random() * 5 + 95).toFixed(1),
        uptime: '99.99%',
        processingSpeed: `${Math.floor(Math.random() * 500) + 500}ms`
    };
};

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateProducts, generateTestimonials, generateStats };
} else {
    window.DataGenerator = { generateProducts, generateTestimonials, generateStats };
}

// Demo usage
if (require.main === module) {
    console.log('=== Generated Products ===');
    console.log(JSON.stringify(generateProducts(3), null, 2));
    
    console.log('\n=== Generated Testimonials ===');
    console.log(JSON.stringify(generateTestimonials(3), null, 2));
    
    console.log('\n=== Generated Stats ===');
    console.log(JSON.stringify(generateStats(), null, 2));
}
