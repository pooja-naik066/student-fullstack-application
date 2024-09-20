package com.pooja.fullstack_backend.exception;

public class StudentNotFoundException extends RuntimeException {
    public StudentNotFoundException(Integer studentId) {
        super("Student not found");
    }
}
