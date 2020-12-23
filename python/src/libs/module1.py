import tokenize
import token
import re

with open("math_kozh.js", encoding="utf-8") as f:
    src = f.read()

start = src.find("var _mod =")
rest = src[start:]
pattern = "(\s*)(.*)\s*:\s*function\s*(\(.*\))\s*{"
def repl(mo):
    spaces, name, args = mo.groups()
    if name.startswith("//"):
        return mo.group(0)
    print(mo.group(0), name, len(args.split(",")))
    return (mo.group(0) + spaces + "    $B.check_nb_args('" +
        name + "', " + str(len(args.split(","))) +
        ", arguments)" + spaces + "    $B.check_no_kw('" + name +
        "', " + ",".join(args[1:-1].split(",")) + ")\n")
new = re.sub(pattern, repl, rest)

with open("math.js", "w", encoding="utf-8") as out:
    out.write(src[:start] + new)
