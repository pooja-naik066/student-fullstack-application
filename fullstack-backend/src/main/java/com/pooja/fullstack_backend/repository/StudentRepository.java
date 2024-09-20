package com.pooja.fullstack_backend.repository;

import com.pooja.fullstack_backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Integer> {
}
