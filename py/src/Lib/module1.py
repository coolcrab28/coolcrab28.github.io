# test "throw"
def f():
    while True:
        try:
            print((yield))
        except ValueError:
            print("value error")
            #assert str(v)=="test"
import sys
g = f()
next(g)

g.throw(ValueError) # type only
