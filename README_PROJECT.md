<!DOCTYPE html>
<html>
<head>
    <title>Environment Variable Test</title>
</head>
<body>
    <h1>Environment Variable Test</h1>
    <p>This project is now set up to show a banner when FOOBAR or NEXT_PUBLIC_FOOBAR environment variables are set.</p>
    <p>See index.html for the main website and how it responds to environment variables.</p>
    <p>Run with: <code>pnpm run dev</code> or <code>pnpm run preview</code> after building with environment variable set.</p>
    
    <h2>Files and Configuration Overview:</h2>
    <ul>
        <li><strong>index.html</strong>: Main website with banner that appears when environment variable is set</li>
        <li><strong>main.js</strong>: Includes logic to check for environment variables</li>
        <li><strong>vite.config.js</strong>: Configured to expose NEXT_PUBLIC_* variables</li>
        <li><strong>package.json</strong>: Includes pnpm scripts for development and building</li>
        <li><strong>.env</strong>: Sample environment variable configuration</li>
    </ul>
    
    <p>To test: run <code>NEXT_PUBLIC_FOOBAR='Your Value' pnpm run build && pnpm run preview</code></p>
</body>
</html>