package com.pooja.fullstack_backend.controller;

import com.pooja.fullstack_backend.exception.StudentNotFoundException;
import com.pooja.fullstack_backend.model.Student;
import com.pooja.fullstack_backend.repository.StudentRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    public Student createStudent(@RequestBody Student student){
        return  studentRepository.save(student);
    }

    @GetMapping("/student")
    public List<Student> getAllUsers(){
        return studentRepository.findAll();
    }

    @GetMapping("/student/{studentId}")
    public  Student getStudent(@PathVariable Integer studentId){
        return studentRepository.findById(studentId)
                .orElseThrow(()->new StudentNotFoundException(studentId));
    }

    @PutMapping("/student/{studentId}")
    public Student updateStudent(@RequestBody Student newStudent,
                                 @PathVariable Integer studentId){
        return studentRepository.findById(studentId)
                .map(student->{student.setStudentName(newStudent.getStudentName());
                        student.setEmail(newStudent.getEmail());
                        student.setDepartment(newStudent.getDepartment());
                      return studentRepository.save(student);
                }).orElseThrow(()->new StudentNotFoundException(studentId));

    }

    @DeleteMapping("/student/{studentId}")
    public String deleteUser(@PathVariable Integer studentId){
        if(!studentRepository.existsById(studentId)){
            throw  new StudentNotFoundException(studentId);
        }
         studentRepository.deleteById(studentId);
        return "Deleted";
    }
}
