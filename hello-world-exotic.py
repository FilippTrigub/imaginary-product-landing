#!/usr/bin/env python3
# Hello World using Python's exotic features

# Using exec
exec('print("Hello, World!")')

# Using eval
eval('print("Hello, World!")')

# Using compile and exec
code = compile('print("Hello, World!")', '<string>', 'exec')
exec(code)

# Using lambda
hello = lambda: print("Hello, World!")
hello()

# Using decorator
def shout(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

@shout
def greet():
    return "hello, world!"

print(greet())

# Using generator
def hello_generator():
    yield "Hello"
    yield "World"

print(", ".join(hello_generator()) + "!")

# Using context manager
class HelloContext:
    def __enter__(self):
        print("Hello, World!")
        return self
    def __exit__(self, *args):
        pass

with HelloContext():
    pass

# Using metaclass
class HelloMeta(type):
    def __new__(cls, name, bases, attrs):
        print("Hello, World!")
        return super().__new__(cls, name, bases, attrs)

class Hello(metaclass=HelloMeta):
    pass

# Using __getattr__
class MagicHello:
    def __getattr__(self, name):
        if name == "world":
            return "Hello, World!"
        raise AttributeError(f"'{type(self).__name__}' object has no attribute '{name}'")

magic = MagicHello()
print(magic.world)

# Using walrus operator (Python 3.8+)
if (msg := "Hello, World!"):
    print(msg)

# Using dictionary dispatch (alternative to match-case for Python < 3.10)
greeting = "world"
greetings = {
    "world": lambda: print("Hello, World!"),
    "universe": lambda: print("Hello, Universe!")
}
greetings.get(greeting, lambda: print("Unknown greeting"))()
