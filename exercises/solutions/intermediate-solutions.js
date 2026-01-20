/**
 * SOLUTIONS: Intermediate Exercises
 * 
 * Complete solutions for intermediate-level exercises.
 */

// ============================================
// ARRAY SOLUTIONS
// ============================================

function filterEvens(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
}

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function findMax(numbers) {
    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) max = num;
    }
    return max;
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
    // Alternative: return arr.filter((item, index) => arr.indexOf(item) === index);
}

function flattenArray(arr) {
    return arr.flat();
    // Alternative: return arr.reduce((flat, item) => flat.concat(item), []);
}

function groupBy(arr, property) {
    return arr.reduce((groups, item) => {
        const key = item[property];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
}

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

// ============================================
// OBJECT SOLUTIONS
// ============================================

function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        isAdult() {
            return this.age >= 18;
        }
    };
}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
    // Alternative: return Object.assign({}, obj1, obj2);
}

function formatUser(user) {
    const { name, email, age } = user;
    return `${name} (${email}) - ${age} years old`;
}

function countProperties(obj) {
    return Object.keys(obj).length;
}

function invertObject(obj) {
    return Object.entries(obj).reduce((inverted, [key, value]) => {
        inverted[value] = key;
        return inverted;
    }, {});
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
    // Note: This works for simple objects but has limitations with functions, dates, etc.
    // For production, consider using structuredClone() or a library like lodash
}

function pick(obj, keys) {
    return keys.reduce((result, key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

function hasPath(obj, path) {
    const keys = path.split('.');
    let current = obj;
    
    for (let key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return false;
        }
    }
    
    return true;
}

// ============================================
// DOM MANIPULATION SOLUTIONS
// ============================================

function createElement(id, className, textContent) {
    const element = document.createElement('div');
    element.id = id;
    element.className = className;
    element.textContent = textContent;
    return element;
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}

function getAllText(element) {
    return element.textContent.trim().replace(/\s+/g, ' ');
}

function createList(items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    return ul;
}

function findParentByClass(element, className) {
    let current = element.parentElement;
    while (current) {
        if (current.classList.contains(className)) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}

function countAllChildren(element) {
    return element.querySelectorAll('*').length;
}

function createTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    // Create header row
    const headerRow = document.createElement('tr');
    data[0].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    
    // Create body rows
    for (let i = 1; i < data.length; i++) {
        const row = document.createElement('tr');
        data[i].forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    }
    
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

module.exports = {
    filterEvens,
    doubleNumbers,
    sumArray,
    findMax,
    removeDuplicates,
    flattenArray,
    groupBy,
    chunkArray,
    createPerson,
    mergeObjects,
    formatUser,
    countProperties,
    invertObject,
    deepClone,
    pick,
    hasPath,
    createElement,
    toggleClass,
    getAllText,
    createList,
    findParentByClass,
    countAllChildren,
    createTable,
    debounce
};
