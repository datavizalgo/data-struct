cmake_minimum_required(VERSION 3.15.0)
project(SinglyLinkedList)

set(CMAKE_C_STANDARD 11)

include(CTest)
enable_testing()

add_executable(SinglyLinkedList main.c SinglyLinkedList.c SinglyLinkedList.h)

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)