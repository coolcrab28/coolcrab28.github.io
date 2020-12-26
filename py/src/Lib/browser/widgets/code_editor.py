from browser import document, window, html
from . import menu, dialog

fontFamily = "Arial"
color = "CadetBlue"

styles = {
    "panel": {
        "border-width": "0",
        "padding": 0,
        "border-style": "solid",
        "border-color": color,
        "border-width": "0 0 1px 0",
        "border-spacing": 0,
        "background-color": "#fff"
    },
    "menu": {
        "border-style": "solid",
        "border-color": color,
        "border-width": "0 0 1px 0",
        "background-color": "#fff",
        "font-size": "0.8em"
    },
    "editor": {
        "overflow": "auto",
        "border-style": "solid",
        "border-color": color,
        "border-width": "0 1px 0 0",
        "font-family": "Consolas",
        "font-size": "0.8em",
        "background-color": "#fff"
    },
    "linenums": {
        "text-align": "right",
        "resize": "none",
        "overflow": "hidden",
        "border-style": "solid",
        "border-color": color,
        "border-width": "0 0 0 1px",
        "padding-right": "1em",
        "font-family": "Consolas",
        "font-size": "0.8em",
        "background-color": "#ddd"
    }
}

class Editor:

    def __init__(self, container, rows=20):

        table = html.TABLE(style=styles["panel"])

        menu_td = html.TD(colspan=2, style=styles["menu"])
        self.menu = menu.Menu(menu_td)
        m1 = self.menu.add_menu("Edition")
        m1.add_item("Search", self.search_dialog)
        table <= html.TR(menu_td)

        self.linenums = html.TEXTAREA(rows=21, cols=5, autocomplete="off",
            disabled=True, style=styles["linenums"])
        self.editor = html.TEXTAREA(rows=20, cols=120, wrap="off",
            autocomplete="off", spellcheck="false", style=styles["editor"])
        table <= html.TR(html.TD(self.linenums, valign="top") +
                         html.TD(self.editor, valign="top"))
        container <= table
        self.editor.bind("keydown", self.keydown)
        self.editor.bind("keyup", self.keyup)
        self.editor.bind("scroll", self.scroll)
        self.set_line_nums()
        self.stack = []
        self.store_undo()

    def keydown(self, evt):
        if evt.keyCode == 9: # tab
            evt.preventDefault()
            sel = window.getSelection()
            start = self.editor.selectionStart
            end = self.editor.selectionEnd
            self.editor.value = (self.editor.value[:start] + "    " +
                editor.value[end:])
        elif evt.keyCode == 13:
            start = self.editor.selectionStart
            line = self.editor.value[:start].split("\n")[-1]
            self.indent = len(line) - len(line.lstrip())
            if line.rstrip().endswith(":"):
                self.indent += 4

    def keyup(self, evt):
        if evt.keyCode == 13:
            start = self.editor.selectionStart
            end = self.editor.selectionEnd
            self.editor.setRangeText(" " * self.indent, start, end, "end")
            self.editor.selectionEnd = end + self.indent
            self.set_line_nums()
        elif evt.ctrlKey:
            self.store_undo()
            self.set_line_nums()
            self.scroll(evt)
        elif evt.keyCode == 8: # backspace
            self.store_undo()
            pos = self.editor.selectionStart
            if self.editor.value and self.editor.value[pos - 1] == "\n":
                self.set_line_nums()
                self.scroll(evt)
        elif evt.code == 46: # delete
            self.store_undo()
            pos = self.editor.selectionEnd
            if pos < len(self.editor.value) and \
                    self.editor.value[pos + 1] == "\n":
                self.set_line_nums()
                self.scroll(evt)

    def make_search(self, evt):
        if not hasattr(self, "search_pos"):
            self.search_pos = 0
        text = self.dialog.content.select_one("input").value
        self.dialog.close()
        if not text:
            return
        print("search ", text)
        pos = self.editor.value.find(text, self.search_pos)
        if pos == -1:
            print("not found")
        else:
            # adapdted from https://stackoverflow.com/questions/7464282/
            # by Kevin Li
            selectionStart = pos
            selectionEnd = pos + len(text)
            self.search_pos = pos + len(text)

            fullText = self.editor.value
            self.editor.value = fullText[:selectionEnd]
            scrollHeight = self.editor.scrollHeight
            self.editor.value = fullText
            scrollTop = scrollHeight
            textareaHeight = self.editor.clientHeight
            if scrollTop > textareaHeight:
                # scroll selection to center of textarea
                scrollTop -= int(textareaHeight / 2)
            else:
                scrollTop = 0
            self.editor.scrollTop = scrollTop

            self.editor.focus()
            self.editor.setSelectionRange(selectionStart, selectionEnd)
            print(selectionStart, selectionEnd)

    def scroll(self, evt):
        self.linenums.scrollTop = self.editor.scrollTop

    def search_dialog(self, evt):
        self.dialog = dialog.Dialog(style={"font-family": "Arial"},
            left=100, top=100, ok_cancel=True)
        entry = html.INPUT()
        self.dialog.ok_button.bind("click", self.make_search)
        self.dialog.content <= "Search" + entry
        entry.focus()

    def set_line_nums(self):
        nblines = len(self.editor.value.split("\n")) or 1
        self.linenums.value = "\n".join(str(i) for i in range(1, nblines + 1))

    def store_undo(self):
        self.stack.append(self.editor.value)

def make_editor(container):
    Editor(container)
