# AlgorithmsInJS

1) Given an array, print the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater element on the right side of x in array. Elements for which no greater element exist, consider next greater element as ­1. Examples:
  a) For any array, rightmost element always has next greater element as ­1.
  b) For an array which is sorted in decreasing order, all elements have next greater element as ­1. c) For the input array [4, 5, 2, 25}, the next greater elements for each element are as follows. Element NGE
  4 --> 5,
  5 --> 25,
  2 --> 25,
  25 --> -1

2) Given an n x n matrix and a number x, find position of x in the matrix if it is present in it. Else print “Not Found”. In the given matrix, every row and column is sorted in increasing order. The designed algorithm should have linear time complexity.

3) Min Heap in JavaScript

4) Implement an algorith to determine if all the characters in the string are unique. What if you cannot use additional data structure.

5) Write a function to check if given string is a permutation of a palindrome.
    Example:
    Input: Tact Coa
    Output: True (taco cat is a palindrome)

6) Given an image represented by NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

7) Remove duplicate elements from a linked list.

8) Write a code to partition linkedlist around  value x, such that all nodes less thanx comebefore all nodes greater than or equal to x. If x is contained in the list, the values of x only need to beafter the elements less than x. The partition element x can appear anywhre in the right partition
  Input: 3->5->8->5->10->2->1
  output: 3->1->2->10->5->5->8

9) Your final exam is approaching and you haven't begun to study. In order to have the best chance of passing the course, you resolve to study from now until exam time. Chapters vary in length, but not in value towards a passing grade, so you want to study as many complete chapters as possible. The order of chapters doesn't matter, but you must complete a chapter before it will help your grade.
Your task is to maximize the number of complete chapters you can study between now and exam time.

10) You are appointed as a system admin in a firm, and it is your responsibility to check the safety of the server racks in one of the server rooms. The server racks are arranged in an array. If any rack reaches another rack when it falls, it will cause the other rack to fall. Safety rules require that at least some of the racks should remain standing if one of the ends falls toward the others.
Your task is to determine whether either or both ends will cause all racks to fall should one be tipped. To determine if a rack will knock over another rack, use the following two rules*:

  left rack falls if: position[i] + height[i] >= position[i_to_test]
  right rack falls if: position[i] - height[i] <= position[i_to_test]

  Assume the position of a rack is position[i] and its height is height[i].

  The test is based on a single event. In other words, if it takes toppling both the left and right ends to knock down all the servers, you still pass the safety inspection.

  Complete the function checkAll, which takes the positions and heights of the server racks as input, and return a string ['RIGHT','LEFT','BOTH','NONE']  representing which of the ends is unsafe.

  If the racks fall over no matter from which end it gets triggered, then return BOTH. If the racks fall over due to rack at leftmost or rightmost, then return LEFT or RIGHT respectively. If neither end toppling will cause all the racks to fall over, return NONE.
  --hackerrank

11) Given an array of integers, partition the array into two parts such that the two parts hold same average.

12) Given preorder traversal of a binary search tree, construct the BST.
  Also calculate the sum of height of each node i.e. total height.

13) Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

14) Implement a function to check if a binraytree is balanced. For the purpose of this question, a binray tree is balaned if the heights of the two subtrees of the node never differ by more than one.
