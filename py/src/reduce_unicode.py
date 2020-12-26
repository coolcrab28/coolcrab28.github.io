current = None
with open("unicode.txt") as f:
    with open("unicode_reduce.txt", "w", encoding="ascii") as out:
        for line in f:
            if current is None:
                c_cp, c_descr, *rest = line.split(";")
                current = line
                out.write(line)
            else:
                cp, descr, *rest = line.split(";")
                nb = 0
                for nb, (x, y) in enumerate(zip(c_descr, descr)):
                    if x != y:
                        break
                if nb > 1:
                    line = [cp, f'%{nb}' + descr[nb:]] + rest
                    out.write(";".join(line))
                else:
                    out.write(line)

                c_cp, c_descr = cp, descr