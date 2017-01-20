# Ping Pong

#### Epicodus Intro Week 3 Solo Project for Code Review, 1/20/2017

#### By Benjamin T. Seaver

## Description

The intention of this project is to demonstrate the process of Behavior Driven Development (BDD).  Following BDD we start with detailed specifications (see below).  The specifications begin with the simplest behaviors the program should do and give examples of inputs and expected outputs.  One may track the sequential implementation of the behaviors by the commits.

The project implements a version of the Ping Pong series where the user enters a positive integer and the program outputs the numbers 1 to the inputted value.  However there are exceptions to the outputs. See the specifications below for details.

## Setup/Installation Requirements
* Clone project
* Open index.html

## See this page on GitHub.io
[https://bseaver.github.io/ping-pong/](https://bseaver.github.io/ping-pong/)

## Known Bugs
* No known bugs

## Support and contact details
* No support

## Technologies Used
* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap
* git

## Copyright (c)
* 2017 Benjamin T. Seaver

## License
* MIT

## Specifications
* First First Spec: - Program will present a minimal Bootstrap, jQuery HTML front end with input, submit and output for testing purposes
  #### Example Input: hello
  #### Example Output: Result is not an array

* First Spec: It can count up to the provided number
  #### Example Input: 2
  #### Example Output: [1, 2]

* Numbers divisible by 3 are replaced with "ping"
  #### Example Input: 4
  #### Example Output: [1, 2, "ping", 4]

* Numbers divisible by 5 are replaced with "pong"
  #### Example Input: 7
  #### Example Output: [1, 2, "ping", 4, "pong", "ping", 7]

* Numbers divisible by 15 are replaced by "ping-pong"
  #### Example Input: 16
  #### Example Output: [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong", 16]

* As time allows proceed with the following features:

* In the front end, provide a feature where the user can hover the mouse over string output and see the output's array index plus 1
  #### Example Output: [1, 2, "ping"]
  #### Example Output with mouse hovering over "ping" - near the mouse pointer appears: 3

* Refactor the back end so that it requires a second argument that is an array of two element arrays.  The first element is the divisor, the second element is the string exception.
  #### Example Input: (Re-run all previous specifications' inputs)
  #### Example Output: (Verify all previous specifications' outputs)

* Revise the front end form so that the rules may be modified.
  #### Example Input: (Re-run a variation of all previous specifications inputs)
  #### Example Output: (Verify the variation of all previous specifications outputs)

* End specifications
