#!/usr/bin/env lua
-- Lua Hello World Script
-- Demonstrating Lua programming techniques

-- Simple print
print("Hello, World!")

-- Using string concatenation
local greeting = "Hello"
local target = "World"
print(greeting .. ", " .. target .. "!")

-- Using string.format
print(string.format("Hello, %s!", "World"))

-- Function definition
function greet(name)
    name = name or "World"
    return "Hello, " .. name .. "!"
end

print(greet())
print(greet("Lua"))

-- Table (Lua's main data structure)
local names = {"World", "Lua", "Universe"}
for i, name in ipairs(names) do
    print("Hello, " .. name .. "!")
end

-- Table as object
local greeter = {
    message = "Hello, World!"
}

function greeter:greet()
    return self.message
end

function greeter:new(message)
    local obj = {message = message or "Hello, World!"}
    setmetatable(obj, self)
    self.__index = self
    return obj
end

local g = greeter:new()
print(g:greet())

-- Metatable example
local mt = {
    __tostring = function(t)
        return "Hello, " .. t.name .. "!"
    end
}

local obj = {name = "World"}
setmetatable(obj, mt)
print(tostring(obj))

-- Anonymous function
local say_hello = function(name)
    print("Hello, " .. (name or "World") .. "!")
end

say_hello()
say_hello("Lua")

-- Multiple return values
function get_greeting()
    return "Hello", "World"
end

local g, t = get_greeting()
print(g .. ", " .. t .. "!")
