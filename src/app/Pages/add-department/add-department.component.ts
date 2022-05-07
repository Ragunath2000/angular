import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/department';
import { userService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private userservice:userService) { }
  public department:Department={
    id: 1,
    name:"",
    isDisabled: false
  }
  ngOnInit(): void {
  }
  OnSubmit(){
    this.userservice.postDepartment(this.department).subscribe(
      res=>{console.log(res)}
    )
  }


}
