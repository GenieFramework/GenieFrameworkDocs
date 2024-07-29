---
title: Copy to clipboard button
description: Add a button to a card to copy its contents to the clipboard
---

## Copy to clipboard button

**Add a button to a card to copy its contents to the clipboard**


Often you want to create a button that would copy certain content into a clipboard.

Behavior:

- Have a vector of multiple cards
- Each card to have a small copy button
- If the user clicks that button, only the content of the associated card will be copied to clipboard

Example contributed by [Jan Siml](https://github.com/svilupp).

````julia
@app begin
    @in my_texts = [Dict(:id => id, :content => content) for (id, content) in zip(1:3, ["abc", "def", "ghi"])]
    @in copied_index = 0
end

function ui()
  [
    h3("Some Text"),
    card(class = "q-my-md", @for("(item, index) in my_texts"), key = :index, [
      cardsection([
        btn(icon = "content_paste", "", :flat, :dense, class = "absolute-right", @click("""
          this.copyToClipboard(this.my_texts[index].content);
          copied_index = index
          this.\$q.notify('Copied ' + index + '!')
        """)),
        "{{item.content}}",
      ]),
    ]),
    htmldiv("Copied Index: {{ copied_index }}")
  ]
end

@methods begin
    """
    copyToClipboard: function(str) {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected = this.my_text
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
    }
"""
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/copy-to-clipboard-button.jl)
