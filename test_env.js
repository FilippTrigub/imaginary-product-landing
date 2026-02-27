const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
console.log('FOOBAR:', process.env.FOOBAR);
console.log('NEXT_PUBLIC_FOOBAR:', process.env.NEXT_PUBLIC_FOOBAR);
console.log('foobar variable:', foobar);
console.log('Is truthy?', !!foobar);
