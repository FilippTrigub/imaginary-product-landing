#!/usr/bin/env lua

local args = {...}

if #args > 0 then
  print("Hello, " .. table.concat(args, " ") .. "!")
else
  print("Hello, world!")
end
