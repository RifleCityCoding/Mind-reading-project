# HTML PSUED
```
  Setup basic bootstrap snippet
  Lets try completing using carousel
  Create each page --- 6 slides total
  Slide 1:
      Text: "I can read your mind"
      CTA: "Go" button
  Slide 2:
      Text: "Pick a mumber from 1-99"
      CTA: Next button; Refresh button
      subText: "when you have your number click next"
  Slide 3:
      Text: "Add both digits together to get a new number"
      CTA: Next button; Refresh button;
      subText: "Ex: 14 is 1 + 4 = 5" "click next to proceed"
  Slide 4:
      Text: "Subtract your new number from the original number"
      CTA: Next button; Refresh button;
      subText: "Ex: 14 -5 = 9", "click next to proceed"
  Slide 5:
      Text: "(Symbols and numeric values 1-99 each representing a symbol)"
      CTA: reveal button; refresh button
      subText: "Find your new number.", "Note the symbol beside the number"
  Slide 6: 
      Text: reveal the "(symbol)" as string
      CTA: refresh button
      subText: "Your symbol is:" "(symbol)"

```

```
BODY
    DIV: Container
        DIV: Column
            DIV: Page 1
                PARA: "I can read your mind"
                BTN: GO
            DIV: page 2
                PARA: "Pick a number from 1-99"
                BTN: Next
                secondaryText: "when you have your number click next"
                BTN: Go back (Refresh symbol)
            DIV: Page 3
                PARA: Add both digits together to get a new number
                BTN: Next
                secondaryText: "Ex: 14 is 1 + 4 = 5" "click next to proceed"
                BTN: Go back (Refresh symbol)
            DIV: Page 4
                PARA: "Subtract your new number from the original number"
                BTN: NEXT
                secondaryText: "Ex: 14 - 5 = 9" "click next to proceed"
                BTN: Go back (Refresh symbol)
            DIV: Page 5
                PARA: "(Number = Symbol) * 100
                BTN: Reveal
                secondaryText: "Find your new number." "Note the symbol beside the number"
                BTN: Go back (refresh symbol)
            DIV: Page 6
                PARA: "(Randomly generated symbol)"
                secondaryText: "Your symbol is: (generated symbol)"
                BTN: Go back (refresh symbol)

```

# JAVASCRIPT Psuedo
```
Add JSON objects for each symbol
Need variables:
    Buttons:
        Next/Reveal
        Go back
        Text changes from Next to Reveal in slides 4 --> 5
Functions:
    Switch state (No idea how this works, trying to learn switch to get this to work)
        Case 0:
            grab button
            grab text
        Case 1:
            btn changes to next
            divText new
            subText new
        Case 2:
            divText new
            subText new
        Case 3:
            divText new
            divText assign number to random symbol from array and print
            subText new
            Next button changes to reveal
        Case 4:
            divText new
            divText Take symbol from 9 to work
            subText new
            Next button dissapears


```