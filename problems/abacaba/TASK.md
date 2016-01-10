# Abacaba

This one is nothing too complex: take in a number and generate the mystical _abacaba_ sequence for that number!

## What is the abacaba sequence?

For number 0, the sequence is:

> a

For number 1, the sequence is:

> aba

For number 2, the sequence is:

> abacaba

For any number _n_, the sequence is `n - 1`'s sequence, followed by the nth character in the alphabet, followed by `n - 1`'s sequence again.

## Rules

Take in a number, return the abacaba sequence for that number. Your solution must solve for all numbers up to 25.
