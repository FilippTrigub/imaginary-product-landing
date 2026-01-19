#!/usr/bin/lua
-- Hello World using Lua's exotic features

-- Using metatables
local mt = {
    __tostring = function() return "Hello, World!" end,
    __call = function() print("Hello, World!") end
}
local hello = setmetatable({}, mt)
print(hello)
hello()

-- Using coroutines
local co = coroutine.create(function()
    coroutine.yield("Hello")
    coroutine.yield("World")
end)

local _, part1 = coroutine.resume(co)
local _, part2 = coroutine.resume(co)
print(part1 .. ", " .. part2 .. "!")

-- Using environment manipulation
local env = {
    print = function(msg) 
        io.write("Hello, World!\n")
    end
}
setmetatable(env, {__index = _G})
local f = load([[print("anything")]], "chunk", "t", env)
f()

-- Using debug library
local function hidden()
    local secret = "Hello, World!"
    return function() end
end
local closure = hidden()
local i = 1
while true do
    local name, value = debug.getupvalue(closure, i)
    if not name then break end
    if name == "secret" then
        print(value)
        break
    end
    i = i + 1
end

-- Using loadstring (Lua 5.1) or load (Lua 5.2+)
local code = [[return "Hello, World!"]]
local func = load(code)
print(func())

-- Using string patterns with gsub callback
local text = "HELLO, WORLD!"
print((text:gsub("(%w+)", function(word) 
    return word:sub(1,1) .. word:sub(2):lower()
end)))

-- Using weak tables
local weak = setmetatable({}, {__mode = "v"})
weak.greeting = "Hello, World!"
print(weak.greeting)

-- Using __index metamethod
local proxy = setmetatable({}, {
    __index = function(t, k)
        if k == "message" then
            return "Hello, World!"
        end
    end
})
print(proxy.message)

-- Using tail call optimization
local function tail_hello(n, msg)
    if n == 0 then
        print(msg)
        return
    end
    return tail_hello(n - 1, msg)
end
tail_hello(1000, "Hello, World!")

-- Using vararg
local function vararg_hello(...)
    local args = {...}
    print(table.concat(args, ", ") .. "!")
end
vararg_hello("Hello", "World")

-- Using chunk loading
local chunk = string.dump(function() print("Hello, World!") end)
load(chunk)()
