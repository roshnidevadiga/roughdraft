# Table rendering test

These tables used to disappear in Roughdraft. After the fix they should render
as real, editable tables.

## Plain table (control)

| # | Item | Status |
| --- | --- | --- |
| 1 | First | Ready |
| 2 | Second | Open |

## Escaped pipe in a cell

| Item | Note |
| --- | --- |
| literal pipe a \| b | low |
| normal row | low |

## Escaped pipe inside inline code

| Cmd | Note |
| --- | --- |
| `a \| b` | piped code |
| plain | ok |

## After the tables

If you can see all three tables above (and edit their cells), the fix works.
