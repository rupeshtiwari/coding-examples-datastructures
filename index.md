# Data Structure Programming & problem solving

## You have 17 yrs of full stack coding experience still solve School level DS & Algorithm problems!

The most important thing you need in the journey of cracking Big-4 companies is true confidence. When I started I had 17 years of coding experience with Angular Development, Asp.net C#, full stack coding etc. So I had over confident that I can solve directly competitive programming problems. This is not a true confidence. This type of confidence will help you for few days then you will stop since you will not be able to solve many problems.

I am from non-computer background when in some problem people say knap-sack, back tracing, DP, two-pointers etc. I don't used to understand anything out of it. Therefore, I could not solve competitive programming and you can not remember problems if you really want to crack coding interview.

Therefore, I would ask you if you are also like me non-computer science engineer and having 17 years of full stack development background. Still start solving `Data Structure and Algorithm` problems from `SCHOOL` level first. Yes I am not kidding. Like I said you need true confidence. And I will assure you if you start solving some problems that you can solve and you will get confidence slowly to solve higher difficulty levels like `BASIC`, `MEDIUM` etc.

Therefore, here is the plan I am going to follow. I will assume, I don't know any coding and I am going to start from the beginning.

## What plan I have to learn coding?

I will try to choose some book that I can understand. I know many people says Algorithm Manual/Design books are great. However, my truth is I could not understand those books✋. I have to find out some book for DS and Algorithm and learn basics. Then I will solve school level problems. Then I will slowing go solving higher level problems. After I finish DS & Algorithms then I will start attempting Competitive Programming problems.

> Goal is to do 6 Questions per day. 3 easy, 2 medium and 1 hard.

## Which Language should I use in a coding interview?

Many companies don’t prefer Python in coding interviews. Because, it has an in-built library for stack or so on. If you are doing Python then learn one more language in backup ( C#, C, C++ or Java ). Python is mostly used in Data Science and Machine Learning since these topics are very complex and you must write less code to solve these big problems.

I am going to use JavaScript for coding interview. I am not `node.js` expert. Therefore, for server side concepts I will use `C# language`. Since from last 17 years I have been coding in `Asp.net C#`.

## Where should I practice for DS and Algorithm problems?

Use geeksforgeeks.com to practice data structure and algorithm problems.

- Solve Problems for DS & Algorithm
- Reading company interview experiences

Amazon, FB etc. they ask the questions from the Geek for Geeks sometime. So it is a good idea to solve them. Geeks For Geeks is the best site to start learning coding for any beginners.

- Go to [https://practice.geeksforgeeks.org/](https://practice.geeksforgeeks.org/)
- Then do 50 questions per data structures
- Do more than 50 for Array and String

[https://i.imgur.com/t1YSbs8.png](https://i.imgur.com/t1YSbs8.png)

In Geek of Geeks you can filter difficulty level and you can also check which problem is asked in which company. Select Array then filter by Basic, Medium or Hard then work on them.

Every day you do 2 basic, 2 medium and 1 hard problem per data structure

## Which Data Structure Problem Should I Focus and solve?

Do 50 questions on below data structures. Do 70 questions on Array and Linked List. First solve the problems which are described in the [data structure in Hindi videos](https://www.youtube.com/watch?v=t5JfBFfi2sU&list=PLg6p_zdrEgHEqaRQbZADU6suNgh28JiKb&index=1). Then solve others on your own. If you don't watch videos and try to solve your own in Geek of Geeks you will solve 5 problems. However, if you watch videos and solve them then you should be able to solve 15 problems on your own. Do below Data Structure:

- Array
- Link List
- Stack
- Queue
- Tree
- Graph

### Linear Storage

- Array
- Link List
- Stack
- Queue

### Non Linear Storage

- Tree
- Graph

If you get some problem and want to solve that. You will write some code step by step. That is called algorithm.

## Which Algorithm Problem Should I Do?

Most of the companies ask DP problems, they are very important.

- Sorting - do 50 problems
- Greedy - do 70 problems
- Dynamic Programming - do 70 problems

If you finish Dynamic programming then whatever Data Structure concepts that you have first finished. There you can optimize your solution using Dynamic Programming.

## From where should I practice Competitive Programming Problems?

**LeetCode.com**

Use [https://leetcode.com/](https://leetcode.com/)

**Codechef.com**

Use [https://www.codechef.com/](https://www.codechef.com/)

Every month 3 competitions run

- **Long Challenge**: Within 10 days you have to solve problems
- **Cook Off **
- **Lunch Time**: Within 2-3 hours solve problems

## Recursion

Since I have done coding from last 17 years. I was told recursion is not good in terms of performance. Since it allocate stack of frames for each recursion call. Also it clones the function every time it is called with every parameter values or references. Therefore, I decided to not learn or not solve any problems using recursion rather do via iterative programming. Which is all correct. However this mentality stopped me to learn the in-depth knowledge of recursion. Therefore, now I am learning the basics of recursion from the beginning. Once I learn them then I can decide should I apply recursion or not in order to keep performance high. However, I should still learn recursion.

Recursion types are: Direct, Indirect, Non-Tail and Tail.

### Direct Recursion

A function that calls itself repetitively. Like Factorial function.

### Indirect Recursion

A function that calls some other function repetitively.

### Non-Tail Recursion

In traditional recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don't get the result of your calculation until you have returned from every recursive call.

Example of `non-tail recursion` calculate **factorial**:

```js
function factorial(n) {
  if (n == 0) return 1;

  return n * factorial(n - 1);
}
```

![](https://i.imgur.com/W1cFspu.png)

### Tail Recursion

In **tail recursion**, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of `(return (recursive-function params))`. **Basically, the return value of any given recursive step is the same as the return value of the next recursive call.**

The consequence of this is that once you are ready to perform your next recursive step, you don't need the current stack frame any more. This allows for some optimization.

Example of `tail recursion` calculate **factorial**:

```js
function factorial(n) {
  if (n == 0) return n;

  return factorial(n - 1);
}
```

_Python interpreters don't support [tail call optimization](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization). However, while tail call optimization is [part of the ECMAScript 2015 spec](https://www.ecma-international.org/ecma-262/6.0/#sec-tail-position-calls), most JavaScript interpreters [don't support it](https://kangax.github.io/compat-table/es6/#test-proper_tail_calls_(tail*call_optimisation)).*

## India GATE exam Recursion Coding Problems

### 2016 GATE problem

![](https://i.imgur.com/Y72nRyq.png)

![](https://i.imgur.com/vjbsHNw.png)

### 2020 GATE problem

![](https://i.imgur.com/5D3Muqx.png)

## Bitwise operation in JavaScript

### Right Shift x>>y

Moving bit/s towards the right side in binary number.

`x>>y` means `x/2^y` divide x by 2 to the power of y.

### Left Shift x<<y

Moving bit/s towards the left side in binary number.

`4<<2 == 0`

`x<<y` means `x*2^y` multiply x by 2 to the power of y.

## Time Complexity

Within a `1 second` normally `10^8` loop can run. If your solution is trying to run more than 10^8 loops within a second. You need to optimize your solution to bring it within a range.

## Array Basic Problems

### How to find the address of 1 dimensional array to do random access?

`a[i] = (i*size_of_each_element) + Base_Address`

![](https://i.imgur.com/vFiJyEA.png)

### How to find the address of any index in Row-Major Order Array?

2-D Array Matrix example 3x3 Matrix below:

![](https://i.imgur.com/dEJkxTJ.png)

Converting 3x3 Matrix in Row-Major Order Array, below is the diagram:

![](https://i.imgur.com/FutGvQV.png)

`a[i][j] = (i*N+j)*size_of_each_element+Base_Address`

![](https://i.imgur.com/1y2wxsM.png)

### What is the address of any index in Column-Major Order Array?

![](https://i.imgur.com/fBsEbr7.png)

![](https://i.imgur.com/EOkmMrS.png)

### Array Interview Questions

[Important array problems](./src/02-Array/01-reverse-array.js)

| problem                                                           | logic                                                                                                                                                |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Reverse](src/02-Array/01-reverse-array.js)                       | 2 pointer + swap                                                                                                                                     |
| [Rotate](src/02-Array/02-rotate-array.js)                         | 3 times reverse                                                                                                                                      |
| [Leaders](src/02-Array/03-leaders-array.js)                       | Iterate from back, compare with Max.                                                                                                                 |
| [Max Sub Array Sum](src/02-Array/04-max-sub-array-sum.js)         | Kadane's Algorithm                                                                                                                                   |
| [Pair Sum in Sorted Array](src/02-Array/05-pair-sum-array.js)     | 2 Pointer, Calculate sum, Move higher or lower after comparing sum                                                                                   |
| [Majority Element](src/02-Array/06-majority-element-in-array.js)  | Moore's Algorithm                                                                                                                                    |
| [Chocolate Problem](src/02-Array/07-chocolate-problem.js)         | Sort the array, then find min difference between first and last package.                                                                             |
| [Rain Water Harvesting](src/02-Array/08-rain-water-harvesting.js) | Create Max size building array from left, create max size building array from right, at any building do (Min(left,right) - Size_of_Current Building) |
