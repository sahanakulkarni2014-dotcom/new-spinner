"use strict";

/* =============================================================
   Cloud AI Code Spinner — script.js
   Handles: wheel drawing, spin animation, random code generation,
            code validation, fixed question per number, page transitions
============================================================= */

/* ──────────────────────────────────────────────────────────────
   1. DATA — 40 Fixed Questions (one per number, 1-indexed)
────────────────────────────────────────────────────────────── */
const QUESTIONS = {
  1: {
    type: "code",
    java: `public class ArrayTest {
  public static void main(String[] args) {
    int[] arr = new int[5];
    for(int i=1; i<=arr.length; i++) {
      arr[i] = i * 2;
    }
    System.out.println(arr[0]);
  }
}`,
    python: `def array_test():
    arr = [0]*5
    for i in range(1,6):
        arr[i] = i*2
    print(arr[0])
array_test()`
  },
  2: {
    type: "code",
    java: `public class ReverseArray {
  public static void main(String[] args) {
    int[] nums = {1,2,3,4,5};
    for(int i=0; i<nums.length; i++) {
      System.out.println(nums[nums.length - i]);
    }
  }
}`,
    python: `def reverse_array():
    nums = [1,2,3,4,5]
    for i in range(len(nums)):
        print(nums[len(nums)-i])
reverse_array()`
  },
  3: {
    type: "code",
    java: `public class Average {
  public static void main(String[] args) {
    int[] marks = {50,60,70};
    int sum;
    for(int m : marks) sum += m;
    double avg = sum / marks.length;
    System.out.println("Average: " + avg);
  }
}`,
    python: `def average():
    marks = [50,60,70]
    for m in marks:
        sum += m
    avg = sum/len(marks)
    print("Average:", avg)
average()`
  },
  4: {
    type: "code",
    java: `public class Factorial {
  static int fact(int n) {
    if(n==0) return 0;
    return n * fact(n-1);
  }
  public static void main(String[] args) {
    System.out.println(fact(5));
  }
}`,
    python: `def fact(n):
    if n==0:
        return 0
    return n*fact(n-1)
print(fact(5))`
  },
  5: {
    type: "code",
    java: `public class Palindrome {
  static boolean isPalindrome(String s) {
    for(int i=0; i<s.length(); i++) {
      if(s.charAt(i) != s.charAt(s.length()-i))
        return false;
    }
    return true;
  }
  public static void main(String[] args) {
    System.out.println(isPalindrome("madam"));
  }
}`,
    python: `def is_palindrome(s):
    for i in range(len(s)):
        if s[i] != s[len(s)-i]:
            return False
    return True
print(is_palindrome("madam"))`
  },
  6: {
    type: "code",
    java: `class Student {
  String name;
  int age;
  Student(String n, int a) {
    name = n;
    age = age;
  }
  void display() {
    System.out.println(name + " " + age);
  }
}
public class Test {
  public static void main(String[] args) {
    Student s = new Student("Raj", 20);
    s.display();
  }
}`,
    python: `class Student:
    def __init__(self,name,age):
        self.name=name
        age=age
    def display(self):
        print(self.name,self.age)
s=Student("Raj",20)
s.display()`
  },
  7: {
    type: "code",
    java: `class Animal {
  void sound() {
    System.out.println("Animal sound");
  }
}
class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }
}
public class Test {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.Sound();
  }
}`,
    python: `class Animal:
    def sound(self):
        print("Animal sound")
class Dog(Animal):
    def sound(self):
        print("Bark")
a=Dog()
a.Sound()`
  },
  8: {
    type: "code",
    java: `import java.util.*;
public class ListTest {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("A");
    list.add("B");
    list.add("C");
    for(int i=0; i<=list.size(); i++) {
      System.out.println(list.get(i));
    }
  }
}`,
    python: `def list_test():
    lst=["A","B","C"]
    for i in range(len(lst)+1):
        print(lst[i])
list_test()`
  },
  9: {
    type: "code",
    java: `public class Divide {
  public static void main(String[] args) {
    int a = 10, b = 0;
    try {
      int c = a / b;
    } catch(Exception e) {
      System.out.println("Error: " + e.getMessage());
    } finally {
      System.out.println("Result: " + c);
    }
  }
}`,
    python: `def divide():
    a=10
    b=0
    try:
        c=a/b
    except Exception as e:
        print("Error:",e)
    finally:
        print("Result:",c)
divide()`
  },
  10: {
    type: "code",
    java: `public class ThreadDemo extends Thread {
  public void run() {
    for(int i=0; i<5; i++) {
      System.out.println(i);
      Thread.sleep(1000);
    }
  }
  public static void main(String[] args) {
    ThreadDemo t = new ThreadDemo();
    t.start();
  }
}`,
    python: `import time
def run():
    for i in range(5):
        print(i)
        time.sleep(1)
run()
run()`
  },
  11: {
    type: "code",
    java: `public class Factorial {
  static int fact(int n) {
    if(n==1) return 1;
    return n * fact(n);
  }
  public static void main(String[] args) {
    System.out.println(fact(5));
  }
}`,
    python: `def fib(n):
    if n==0: return 0
    if n==1: return 1
    return fib(n-1)+fib(n)
print(fib(5))`
  },
  12: {
    type: "code",
    java: `public class PalindromeCheck {
  static boolean isPalindrome(String s) {
    for(int i=0; i<s.length(); i++) {
      if(s.charAt(i) != s.charAt(s.length()-i))
        return false;
    }
    return true;
  }
  public static void main(String[] args) {
    System.out.println(isPalindrome("level"));
  }
}`,
    python: `def prime(n):
    for i in range(2,n):
        if n%i==0:
            return False
    return True
print(prime(1))`
  },
  13: {
    type: "code",
    java: `public class Fibonacci {
  static int fib(int n) {
    if(n==0) return 0;
    if(n==1) return 1;
    return fib(n-1) + fib(n);
  }
  public static void main(String[] args) {
    System.out.println(fib(5));
  }
}`,
    python: `def even_odd(num):
    if num%2=0:
        print("Even")
    else:
        print("Odd")
even_odd(7)`
  },
  14: {
    type: "code",
    java: `public class PrimeCheck {
  static boolean isPrime(int n) {
    for(int i=2; i<n; i++) {
      if(n%i==0) return false;
    }
    return true;
  }
  public static void main(String[] args) {
    System.out.println(isPrime(1));
  }
}`,
    python: `def sum_digits(n):
    s=0
    while n>0:
        s+=n%10
        n=n/10
    return s
print(sum_digits(-123))`
  },
  15: {
    type: "code",
    java: `public class EvenOdd {
  public static void checkEvenOdd(int num) {
    if(num%2=0) {
      System.out.println("Even");
    } else {
      System.out.println("Odd");
    }
  }
  public static void main(String[] args) {
    checkEvenOdd(7);
  }
}`,
    python: `def power(base,exp):
    if exp==0: return 0
    return base*power(base,exp-1)
print(power(2,3))`
  },
  16: {
    type: "code",
    java: `public class SumDigits {
  static int sumDigits(int n) {
    int sum=0;
    while(n>0) {
      sum += n%10;
      n = n/10;
    }
    return sum;
  }
  public static void main(String[] args) {
    System.out.println(sumDigits(-123));
  }
}`,
    python: `def reverse(s):
    rev=""
    for i in range(len(s)+1):
        rev=s[i]+rev
    return rev
print(reverse("hello"))`
  },
  17: {
    type: "code",
    java: `public class Power {
  static int pow(int base, int exp) {
    if(exp==0) return 0;
    return base * pow(base, exp-1);
  }
  public static void main(String[] args) {
    System.out.println(pow(2,3));
  }
}`,
    python: `def gcd(a,b):
    if b==0: return a
    return gcd(b,a%b)
print(gcd(0,0))`
  },
  18: {
    type: "code",
    java: `public class ReverseString {
  static String reverse(String s) {
    String rev="";
    for(int i=0; i<=s.length(); i++) {
      rev = s.charAt(i) + rev;
    }
    return rev;
  }
  public static void main(String[] args) {
    System.out.println(reverse("hello"));
  }
}`,
    python: `def lcm(a,b):
    return (a*b)//gcd(a,b)
print(lcm(4,6))`
  },
  19: {
    type: "code",
    java: `public class GCD {
  static int gcd(int a, int b) {
    if(b==0) return a;
    return gcd(b, a%b);
  }
  public static void main(String[] args) {
    System.out.println(gcd(0,0));
  }
}`,
    python: `class Car:
    def __init__(self,model,year):
        model=model
        year=year
    def show(self):
        print(self.model,self.year)
c=Car("Honda",2020)
c.show()`
  },
  20: {
    type: "code",
    java: `public class LCM {
  static int lcm(int a, int b) {
    return (a*b)/gcd(a,b);
  }
  public static void main(String[] args) {
    System.out.println(lcm(4,6));
  }
}`,
    python: `class Shape:
    def area(self):
        return 0
class Circle(Shape):
    def __init__(self,r):
        self.radius=r
    def area(self):
        return 3.14*self.radius*self.radius
s=Circle(5)
print(s.Area())`
  },
  21: {
    type: "code",
    java: `class Student {
  String name;
  int age;
  Student(String n, int a) {
    name = n;
    age = age;
  }
  void display() {
    System.out.println(name + " " + age);
  }
}
public class TestStudent {
  public static void main(String[] args) {
    Student s = new Student("Raj", 20);
    s.display();
  }
}`,
    python: `class Employee:
    def __init__(self,n,s):
        self.name=n
        salary=s
    def print(self):
        print(self.name,self.salary)
e=Employee("John",5000)
e.print()`
  },
  22: {
    type: "code",
    java: `class Animal {
  void sound() {
    System.out.println("Animal sound");
  }
}
class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }
}
public class TestAnimal {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.Sound();
  }
}`,
    python: `class Bank:
    def __init__(self):
        self.balance=1000
    def withdraw(self,amt):
        if amt>self.balance:
            print("Insufficient")
        else:
            self.balance=self.balance-amt
b=Bank()
b.withdraw(500)
print(balance)`
  },
  23: {
    type: "code",
    java: `class Car {
  String model;
  int year;
  Car(String model, int year) {
    model = model;
    year = year;
  }
  void show() {
    System.out.println(model + " " + year);
  }
}
public class TestCar {
  public static void main(String[] args) {
    Car c = new Car("Honda", 2020);
    c.show();
  }
}`,
    python: `class Counter:
    count=0
    def __init__(self):
        count+=1
c1=Counter()
c2=Counter()
print(c1.count)
print(c2.count)
print(count)`
  },
  24: {
    type: "code",
    java: `class Shape {
  double area() {
    return 0;
  }
}
class Circle extends Shape {
  double radius;
  Circle(double r) {
    radius = r;
  }
  double area() {
    return 3.14 * radius * radius;
  }
}
public class TestShape {
  public static void main(String[] args) {
    Shape s = new Circle(5);
    System.out.println(s.Area());
  }
}`,
    python: `class Vehicle:
    def run(self):
        print("Vehicle running")
class Bike(Vehicle):
    def run(self):
        print("Bike running")
v=Bike()
v.run()
v.speed()`
  },
  25: {
    type: "code",
    java: `class Employee {
  String name;
  double salary;
  Employee(String n, double s) {
    name = n;
    salary = salary;
  }
  void print() {
    System.out.println(name + " " + salary);
  }
}
public class TestEmployee {
  public static void main(String[] args) {
    Employee e = new Employee("John", 5000);
    e.print();
  }
}`,
    python: `class Person:
    def __init__(self,n,a):
        self.name=n
        self.age=a
    def show(self):
        print(self.name,self.age)
p=Person()
p.show()`
  },
  26: {
    type: "code",
    java: `class Parent {
  void display() {
    System.out.println("Parent");
  }
}
class Child extends Parent {
  void display() {
    System.out.println("Child");
  }
}
public class TestInheritance {
  public static void main(String[] args) {
    Parent p = new Child();
    p.display( );
  }
}`,
    python: `lst=[1,2,3]
print(lst[5])`
  },
  27: {
    type: "code",
    java: `class Bank {
  int balance=1000;
  void withdraw(int amt) {
    if(amt>balance) {
      System.out.println("Insufficient");
    } else {
      balance = balance - amt;
    }
  }
}
public class TestBank {
  public static void main(String[] args) {
    Bank b = new Bank();
    b.withdraw(500);
    System.out.println(balance);
  }
}`,
    python: `s="abc"
print(s[10])`
  },
  28: {
    type: "code",
    java: `class Counter {
  static int count;
  Counter() {
    count++;
  }
}
public class TestCounter {
  public static void main(String[] args) {
    Counter c1 = new Counter();
    Counter c2 = new Counter();
    System.out.println(c1.count);
    System.out.println(c2.count);
    System.out.println(count);
  }
}`,
    python: `import math
print(math.sqrt(-1))`
  },
  29: {
    type: "code",
    java: `class Vehicle {
  void run() {
    System.out.println("Vehicle running");
  }
}
class Bike extends Vehicle {
  void run() {
    System.out.println("Bike running");
  }
}
public class TestVehicle {
  public static void main(String[] args) {
    Vehicle v = new Bike();
    v.run();
    v.speed();
  }
}`,
    python: `import sys
sys.exit()
print("After exit")`
  },
  30: {
    type: "code",
    java: `class Person {
  String name;
  int age;
  Person(String n, int a) {
    name = n;
    age = a;
  }
  void show() {
    System.out.println(name + " " + age);
  }
}
public class TestPerson {
  public static void main(String[] args) {
    Person p = new Person();
    p.show();
  }
}`,
    python: `import threading
def run():
    for i in range(3):
        print(i)
        time.sleep(1)
t=threading.Thread(target=run)
t.run()`
  },
  31: {
    type: "code",
    java: `public class Block1 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_1():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_1()`
  },
  32: {
    type: "code",
    java: `public class Block2 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_2():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_2()`
  },
  33: {
    type: "code",
    java: `public class Block3 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_3():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_3()`
  },
  34: {
    type: "code",
    java: `public class Block4 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_4():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_4()`
  },
  35: {
    type: "code",
    java: `public class Block5 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_5():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_5()`
  },
  36: {
    type: "code",
    java: `public class Block6 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_6():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_6()`
  },
  37: {
    type: "code",
    java: `public class Block7 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_7():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_7()`
  },
  38: {
    type: "code",
    java: `public class Block8 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_8():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_8()`
  },
  39: {
    type: "code",
    java: `public class Block9 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_9():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_9()`
  },
  40: {
    type: "code",
    java: `public class Block10 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_10():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_10()`
  },
  41: {
    type: "code",
    java: `public class Block11 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_11():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_11()`
  },
  42: {
    type: "code",
    java: `public class Block12 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_12():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_12()`
  },
  43: {
    type: "code",
    java: `public class Block13 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_13():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_13()`
  },
  44: {
    type: "code",
    java: `public class Block14 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_14():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_14()`
  },
  45: {
    type: "code",
    java: `public class Block15 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_15():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_15()`
  },
  46: {
    type: "code",
    java: `public class Block16 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_16():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_16()`
  },
  47: {
    type: "code",
    java: `public class Block17 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_17():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_17()`
  },
  48: {
    type: "code",
    java: `public class Block18 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_18():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_18()`
  },
  49: {
    type: "code",
    java: `public class Block19 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_19():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_19()`
  },
  50: {
    type: "code",
    java: `public class Block20 {
  public static void main(String[] args) {
    int[] data = {1,2,3,4};
    for(int j=0; j<=data.length; j++) {
      System.out.println(data[j]);
    }
  }
}`,
    python: `def routine_20():
    total = 0
    for k in range(1,6):
        total += k
    print(total/0)
routine_20()`
  }
};

/* ──────────────────────────────────────────────────────────────
   2. CANVAS — Setup & drawing
────────────────────────────────────────────────────────────── */
const canvas = document.getElementById("spinnerCanvas");
  const ctx = canvas.getContext("2d");
  const SLICES = 50;
  const ARC = (2 * Math.PI) / SLICES;

  /** 40-colour palette — one per slice for maximum visual distinction */
  const PALETTE = [
    "#4f8cff", "#a259ff", "#00e0ff", "#ff6ab0", "#ffd166",
    "#06d6a0", "#ef476f", "#118ab2", "#fca311", "#7b2d8b",
    "#3a86ff", "#ff006e", "#8338ec", "#fb5607", "#43aa8b",
    "#ffbe0b", "#3a0ca3", "#4cc9f0", "#f72585", "#4361ee",
    "#7209b7", "#560bad", "#480ca8", "#3f37c9", "#4895ef",
    "#e07c24", "#2ec4b6", "#d62828", "#9b5de5", "#00f5d4",
    "#f15bb5", "#00bbf9", "#fee440", "#9b2335", "#0ead69",
    "#6a4c93", "#1982c4", "#ff595e", "#8ac926", "#ffca3a",
    "#ff9e00", "#9d4edd", "#ff0054", "#390099", "#9e0059",
    "#ff5400", "#ffbd00", "#e01e37", "#6a040f", "#00b4d8"
  ];

  let currentAngle = 0;     // current wheel rotation in radians
  let isSpinning = false;
  let selectedNum = null;   // 1-40, set when spin completes
  let generatedCode = "";     // random code generated on spin stop

  /* ──────────────────────────────────────────────────────────────
     3. RANDOM CODE GENERATOR
  ────────────────────────────────────────────────────────────── */
  /**
   * Generate a random alphanumeric code of a given length.
   * Uses uppercase letters and digits for easy reading.
   */
  function generateRandomCode(length) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // removed ambiguous 0/O, 1/I
let code = "";
for (let i = 0; i < length; i++) {
  code += chars.charAt(Math.floor(Math.random() * chars.length));
}
return code;
}

/* ──────────────────────────────────────────────────────────────
   4. DRAW WHEEL
────────────────────────────────────────────────────────────── */
/**
 * Draw the wheel at a given rotation offset (radians).
 * Called each animation frame and on init.
 */
function drawWheel(rot) {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = cx - 6; // radius with small inset for border
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < SLICES; i++) {
    const startAngle = rot + i * ARC - Math.PI / 2;
    const endAngle = startAngle + ARC;
    const midAngle = startAngle + ARC / 2;

    /* ── Slice fill ── */
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = PALETTE[i % PALETTE.length];
    ctx.fill();

    /* ── Radial highlight (inner glow) ── */
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0, "rgba(255,255,255,0.15)");
    grad.addColorStop(0.55, "rgba(255,255,255,0.00)");
    ctx.fillStyle = grad;
    ctx.fill();

    /* ── Slice border ── */
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.closePath();
    ctx.strokeStyle = "rgba(8,14,28,0.5)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    /* ── Number label ── */
    const fontSize = Math.max(14, Math.floor(r / 14));
    ctx.save();
    ctx.translate(
      cx + Math.cos(midAngle) * r * 0.75,
      cy + Math.sin(midAngle) * r * 0.75
    );
    ctx.rotate(midAngle + Math.PI / 2);
    ctx.font = `900 ${fontSize}px 'Segoe UI', system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    /* Black outline for contrast on any color */
    ctx.strokeStyle = "rgba(0,0,0,0.9)";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.strokeText(String(i + 1), 0, 0);
    /* White fill with glow */
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(0,0,0,0.9)";
    ctx.shadowBlur = 6;
    ctx.fillText(String(i + 1), 0, 0);
    ctx.restore();
  }

  /* ── Centre hub ── */
  const hubR = r * 0.12;
  const hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubR);
  hg.addColorStop(0, "#ffffff");
  hg.addColorStop(0.5, "#c8d6ff");
  hg.addColorStop(1, "#4f8cff");
  ctx.beginPath();
  ctx.arc(cx, cy, hubR, 0, 2 * Math.PI);
  ctx.fillStyle = hg;
  ctx.shadowColor = "#4f8cff";
  ctx.shadowBlur = 18;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(255,255,255,0.6)";
  ctx.lineWidth = 2;
  ctx.stroke();
}

/* Initial render */
drawWheel(currentAngle);

/* ──────────────────────────────────────────────────────────────
   5. SPIN ANIMATION
────────────────────────────────────────────────────────────── */

/** Ease-out cubic — starts fast, decelerates smoothly to a stop */
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

/* Animation state */
let spinStartTime = null;
let spinDuration = 0;
let spinTotalAngle = 0;
let spinFromAngle = 0;

/**
 * Begin a spin.
 * - Picks a random target slice (1-25).
 * - Calculates total angle to rotate so the pointer lands on that slice.
 * - Kicks off requestAnimationFrame loop.
 */
function startSpin() {
  if (isSpinning) return;

  /* Reset UI */
  hide("code-panel");
  hide("result-badge");
  hide("code-error");
  hide("code-display");
  document.getElementById("code-input").value = "";
  document.getElementById("btn-spin").disabled = true;
  canvas.classList.add("canvas-spinning");

  isSpinning = true;
  spinStartTime = null;

  /* Random target slice 1-40 */
  const target = Math.floor(Math.random() * SLICES) + 1;
  selectedNum = target;

  /*
   * The pointer sits at the top (–PI/2 in canvas space).
   * For the pointer to land on slice (target), the final wheel
   * rotation must satisfy:
   *   finalAngle ≡ –((target-1)+0.5) * ARC   (mod 2π)
   *
   * We compute the exact delta from the current angle, then
   * add several full rotations for the visual spin effect.
   */
  const sliceCentre = ((target - 1) + 0.5) * ARC;

  /* How far we need to rotate from currentAngle so the pointer
     lands on the centre of the target slice (mod 2π) */
  let delta = (-sliceCentre - currentAngle) % (2 * Math.PI);
  delta = ((delta % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  if (delta === 0) delta = 2 * Math.PI;

  /* Add 4-8 extra full spins for visual effect */
  const extraSpins = (4 + Math.floor(Math.random() * 5)) * 2 * Math.PI;

  spinDuration = 4200 + Math.random() * 2000;  // 4.2 – 6.2 seconds
  spinTotalAngle = extraSpins + delta;
  spinFromAngle = currentAngle;

  requestAnimationFrame(animateSpin);
}

/** rAF callback — updates wheel each frame */
function animateSpin(timestamp) {
  if (!spinStartTime) spinStartTime = timestamp;

  const elapsed = timestamp - spinStartTime;
  const progress = Math.min(elapsed / spinDuration, 1);
  const eased = easeOutCubic(progress);

  currentAngle = spinFromAngle + spinTotalAngle * eased;
  drawWheel(currentAngle);

  if (progress < 1) {
    requestAnimationFrame(animateSpin);
  } else {
    /* Animation complete */
    currentAngle = spinFromAngle + spinTotalAngle;
    drawWheel(currentAngle);
    onSpinComplete();
  }
}

/** Called when the wheel fully stops */
function onSpinComplete() {
  isSpinning = false;
  canvas.classList.remove("canvas-spinning");
  document.getElementById("btn-spin").disabled = false;

  /* Generate a random code for this spin */
  generatedCode = generateRandomCode(6);

  /* Reveal result badge */
  document.getElementById("result-number").textContent = selectedNum;
  show("result-badge");

  /* Show the generated code to the user */
  document.getElementById("display-code-value").textContent = generatedCode;
  show("code-display");

  /* Reveal code entry panel */
  document.getElementById("code-number-label").textContent = "#" + selectedNum;
  show("code-panel");

  playStopSound();
}

/* ──────────────────────────────────────────────────────────────
   6. SOUND EFFECT — Web Audio API (graceful fallback)
────────────────────────────────────────────────────────────── */
function playStopSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ac = new AudioCtx();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ac.currentTime + 0.35);
    gain.gain.setValueAtTime(0.4, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.6);
    osc.start();
    osc.stop(ac.currentTime + 0.6);
  } catch (e) { /* Audio blocked or not supported — silently ignore */ }
}

/* ──────────────────────────────────────────────────────────────
   7. CODE VALIDATION
────────────────────────────────────────────────────────────── */
function submitCode() {
  const raw = document.getElementById("code-input").value;
  const entered = raw.trim().toUpperCase();
  hide("code-error");

  if (!entered) {
    showError("Please enter the code shown above.");
    return;
  }

  if (entered === generatedCode) {
    /* ✓ Correct — transition to question page */
    goToQuestionPage();
  } else {
    /* ✗ Wrong — show error with red shake */
    showError("⚠ Invalid Code. Check the code above and try again.");
    const inp = document.getElementById("code-input");
    inp.style.borderColor = "#ff6b6b";
    setTimeout(() => { inp.style.borderColor = ""; }, 800);
  }
}

function showError(msg) {
  const el = document.getElementById("code-error");
  el.textContent = msg;
  show("code-error");
  /* Re-trigger CSS shake animation */
  el.style.animation = "none";
  void el.offsetWidth; // force reflow
  el.style.animation = "";
}

/* ──────────────────────────────────────────────────────────────
   8. PAGE TRANSITIONS
────────────────────────────────────────────────────────────── */

/**
 * Render the question content into the question-text container.
 * Handles both code snippet objects and plain text strings.
 */
function renderQuestion(num) {
  const q = QUESTIONS[num];
  const container = document.getElementById("question-text");
  const card = document.getElementById("question-card");

  if (q && typeof q === "object" && q.type === "code") {
    /* Code snippet — render dual Java + Python blocks */
    card.classList.add("code-question");
    container.innerHTML = `
      <p class="snippet-instruction">🐛 Find and fix the bug(s) in both code snippets below:</p>
      <div class="code-snippets">
        <div class="code-block">
          <div class="code-block-title"><span class="lang-icon">☕</span> Java</div>
          <pre><code>${escapeHTML(q.java)}</code></pre>
        </div>
        <div class="code-block">
          <div class="code-block-title"><span class="lang-icon">🐍</span> Python</div>
          <pre><code>${escapeHTML(q.python)}</code></pre>
        </div>
      </div>`;
  } else {
    /* Plain text question */
    card.classList.remove("code-question");
    container.textContent = q;
  }
}

/** Escape HTML special characters for safe insertion into innerHTML */
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Show the question page with the FIXED question for selectedNum */
function goToQuestionPage() {
  renderQuestion(selectedNum);
  document.getElementById("q-number-tag").textContent = "#" + selectedNum;

  /* Save state so page refresh stays on the question */
  sessionStorage.setItem("spinnerQuestion", selectedNum);

  const spinnerPage = document.getElementById("page-spinner");
  const questionPage = document.getElementById("page-question");

  spinnerPage.classList.remove("active");
  spinnerPage.style.display = "none";

  questionPage.style.display = "flex";
  questionPage.classList.add("active");
}



/* ──────────────────────────────────────────────────────────────
   9. UTILITY HELPERS
────────────────────────────────────────────────────────────── */
function show(id) { document.getElementById(id).classList.remove("hidden"); }
function hide(id) { document.getElementById(id).classList.add("hidden"); }

/* Also allow clicking the canvas to trigger spin */
canvas.addEventListener("click", startSpin);

/* ──────────────────────────────────────────────────────────────
   10. RESTORE STATE ON PAGE LOAD
────────────────────────────────────────────────────────────── */
(function restoreState() {
  const saved = sessionStorage.getItem("spinnerQuestion");
  if (saved) {
    const num = parseInt(saved, 10);
    if (num >= 1 && num <= SLICES && QUESTIONS[num]) {
      selectedNum = num;
      /* Go directly to question page */
      renderQuestion(num);
      document.getElementById("q-number-tag").textContent = "#" + num;

      const spinnerPage = document.getElementById("page-spinner");
      const questionPage = document.getElementById("page-question");

      spinnerPage.classList.remove("active");
      spinnerPage.style.display = "none";

      questionPage.style.display = "flex";
      questionPage.classList.add("active");
    }
  }
})();
