---
title: "python错误和异常"
desc: "python基础知识"
tags: "Python的数据结构"
updateTime: "2025-5-23 14:46"
outline: deep
---

# Python错误和异常

## 概述
### 错误
- 语法错误：代码不符合Python语法规则
- 逻辑错误：程序在运行时出现问题，导致结果不正确
### 异常
定义：
- 异常是程序在执行过程中发生的错误，可能导致程序终止或产生意外结果
- 异常是Python对象，包含错误信息和堆栈跟踪
- 两个阶段：检测到错误，解释器引发异常对象，调用不同操作来处理异常

常见的类型 ：
KeyboardInterrupt：用户中断程序执行
SystemExit：程序正常退出
Exception：所有异常的基类中有
NameError：未定义变量
ZeroDivisionError：除以零
TypeError：类型错误
ValueError：值错误
IOError：输入/输出错误
FileNotFoundError：文件未找到
ImportError：导入模块错误
IndexError：索引超出范围
KeyError：字典中不存在的键
AttributeError：访问对象的不存在属性
SyntaxError：语法错误
IndentationError：缩进错误
RuntimeError：运行时错误
MemoryError：内存错误
OverflowError：数值运算超出最大限制
RecursionError：递归深度超过限制
StopIteration：迭代器没有更多元素
AssertionError：断言失败
ArithmeticError：算术错误
FloatingPointError：浮点数运算错误
OverflowError：数值运算超出最大限制
### BaseException
- 所有内置异常的基类
- 派生出Exception、SystemExit、KeyboardInterrupt等

### Exception
- 大多数内置异常的基类
- 用户自定义异常应继承自Exception


## Python内置异常层次结构


### 常见内置异常

#### 算术异常
- ZeroDivisionError：除数为零
- OverflowError：数值运算超出最大限制
- FloatingPointError：浮点数计算错误

#### 查找/索引异常
- IndexError：序列中没有此索引
- KeyError：映射中没有这个键
- NameError：未找到名称（变量）

#### 类型/值异常
- TypeError：对类型无效的操作
- ValueError：值不适合特定的数据类型
- AttributeError：对象没有这个属性

#### 文件操作异常
- FileNotFoundError：未找到文件
- PermissionError：权限不足
- IOError：输入/输出操作失败

#### 其他常见异常
- ImportError：导入模块失败
- ModuleNotFoundError：未找到模块
- RuntimeError：一般的运行时错误

## 异常处理

异常处理基本结构
try-except结构
try: 包含可能引发异常的代码
except exception1: 处理特定类型异常
except exception2: 可处理多种异常
except: 捕获所有异常（不推荐）
完整异常处理结构
try: 尝试执行的代码块
except Exception [as var]: 捕获并处理异常
else: 没有异常发生时执行
finally: 无论是否发生异常都会执行
异常处理的几种模式
except的多种形式
except: 捕获所有异常（不推荐）
except Exception: 捕获所有常规异常
except BaseException: 捕获包括系统退出在内的所有异常
except (Exc1, ... ExcN) [as var]: 捕获多个指定异常
except exception: pass: 捕获异常但不处理（不推荐）
try语句流程
正常情况: try → 无异常 → else → finally
异常情况: try → 发生异常 → except → finally
常见异常处理模式
try-except: 捕获异常，用于一般的异常处理
try-finally: 确保资源释放，例如关闭文件
try → 无异常 → else → finally: 完整流程，区分正常与异常情况
异常处理的其他注意点
如果无法解决异常，应交给调用者处理
使用except 异常类型 as 变量可获取异常信息
可以使用raise重新抛出异常
不要捕获所有异常！应该只捕获可处理的异常
注意异常粒度: 可以捕获所有异常，也可以只处理特定异常
异常链: 捕获异常后可继续抛出原异常或新异常
处理模式对比
try-except vs try-finally: 前者用于处理异常，后者用于确保资源释放

## 自定义异常

### 创建自定义异常类
- 继承自Exception或其子类
- 遵循命名约定，通常以Error结尾

```python
class ValueTooSmallError(Exception):
    """当输入值小于最小值时引发"""
    pass

class ValueTooLargeError(Exception):
    """当输入值大于最大值时引发"""
    pass

def validate_age(age):
    if age < 0:
        raise ValueTooSmallError("年龄不能为负数")
    if age > 120:
        raise ValueTooLargeError("年龄值不合理")
    return age
```

## 最佳实践

### 异常处理原则
- 只捕获预期的特定异常，不要笼统捕获
- 尽早处理异常，避免异常传播
- 提供有意义的错误消息

### 异常处理的设计模式
- EAFP (Easier to Ask Forgiveness than Permission)
  - Python推荐的方式
  - 先尝试操作，出错时处理异常

```python
# EAFP风格
try:
    value = my_dict[key]
except KeyError:
    # 处理键不存在的情况
```

- LBYL (Look Before You Leap)
  - 在操作前先检查条件
  - 有时会导致竞态条件

```python
# LBYL风格
if key in my_dict:
    value = my_dict[key]
else:
    # 处理键不存在的情况
```

### 调试技巧
- 使用traceback模块获取详细错误信息
- 使用logging模块记录异常
- 使用调试器(pdb)进行交互式调试

```python
import traceback
import logging

try:
    # 可能出错的代码
except Exception as e:
    logging.error(f"发生错误：{e}")
    logging.error(traceback.format_exc())
```

## 上下文管理器与异常处理

### with语句
- 简化资源管理和异常处理
- 自动处理清理操作

```python
# 文件操作的异常处理
with open("file.txt", "r") as file:
    content = file.read()
# 文件会自动关闭，即使发生异常
```

### 自定义上下文管理器
- 实现`__enter__`和`__exit__`方法
- `__exit__`处理异常

```python
class MyContext:
    def __enter__(self):
        print("进入上下文")
        return self
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("退出上下文")
        if exc_type is not None:
            print(f"处理异常：{exc_val}")
            return True  # 表示异常已处理
```
