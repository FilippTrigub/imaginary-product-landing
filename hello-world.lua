#!/usr/bin/lua
-- Hello World in Lua

-- Simple print
print("Hello, World!")

-- Using string concatenation
print("Hello" .. ", " .. "World" .. "!")

-- Using string.format
print(string.format("Hello, %s!", "World"))

-- Using variables
local greeting = "Hello"
local target = "World"
print(greeting .. ", " .. target .. "!")

-- Using table
local words = {"Hello", "World"}
print(words[1] .. ", " .. words[2] .. "!")

-- Using io.write
io.write("Hello, World!\n")

-- Using string.char
print(string.char(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33))

-- Using function
function greet(name)
    return "Hello, " .. name .. "!"
end
print(greet("World"))

-- Using table.concat
local chars = {"H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"}
print(table.concat(chars))

-- Using gsub
local text = "Goodbye, Universe!"
text = text:gsub("Goodbye", "Hello"):gsub("Universe", "World")
print(text)

-- Using multiple return values
function get_greeting()
    return "Hello", "World"
end
local h, w = get_greeting()
print(h .. ", " .. w .. "!")
