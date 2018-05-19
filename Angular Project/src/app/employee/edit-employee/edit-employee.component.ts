import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

formData: FormGroup;
constructor(private route: ActivatedRoute,
  private router:Router,private employeeService : EmployeeService) { }

  id=this.route.snapshot.paramMap.get('id');
  employees;
  employee={
    empName:"",
    designation:"",
    contactNo:null,
    emailId:"",
    skillSet:"",
    managerId:null
  };
  
  ngOnInit() {
    this.employeeService.getAllEmployees();
    this.employeeService.employee$.subscribe(
      data=>{
        this.employees=data;
        console.log(this.employees);
      }
    );
    this.employeeService.getAllEmployeesbyId(this.id);

    this.employeeService.employee$.subscribe(
      data=>{
        this.employee.empName=data['empName'];
        this.employee.designation=data["designation"];
        this.employee.contactNo=data["contactNo"];
        this.employee.emailId=data["emailId"];
        this.employee.skillSet=data["skillSet"];
        this.employee.managerId=data["managerId"];        
        console.log(this.employee);

        this.formData=new FormGroup({
          empName:new FormControl(this.employee.empName,[]),
          designation:new FormControl(this.employee.designation,[]),
          contactNo:new FormControl(this.employee.contactNo,[]),
          emailId:new FormControl(this.employee.emailId,[]),
          skillSet:new FormControl(this.employee.skillSet,[]),
          managerId: new FormControl(this.employee.managerId,[])
        });
      }
    );
    this.employeeService.ErrorResponse$.subscribe(
      message=>{
        console.log(message);
        alert(message);
      }
    );
    this.formData=new FormGroup({
      empName:new FormControl('',[]),
      designation:new FormControl('',[]),
      contactNo:new FormControl('',[]),
      emailId:new FormControl('',[]),
      skillSet:new FormControl('',[]),
      managerId:new FormControl('',[])
    });
    console.log(this.formData);
  }
onClickSubmit(employee){
  this.employeeService.updateEmployee(this.id,employee);    
debugger;
    this.employeeService.response$.subscribe(
      data=>{
        console.log("Employee Updated.....");
        this.router.navigate(['/Employee/showemployee'])
      }
    );
    this.employeeService.ErrorResponse$.subscribe(
      message=>{
        console.log(message);
        alert(message);
      }
    );
}
}
