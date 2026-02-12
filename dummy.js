function generateDummyId() {
    const prefix = 'DUMMY';
    const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `${prefix}-${randomPart}`;
}

const id = generateDummyId();
console.log('Generated dummy identifier:', id);
