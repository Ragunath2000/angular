import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  role="Co-Ordinator"
  // constructor(private listService: ListServiceService) { }
  // data: UserDTO[] = []
  ngOnInit(): void {
    // this.getAll()
  }
  // getAll() {
  //   this.listService.getAllUsersByRoleId(1).subscribe(res => {
  //     console.log(res)
  //     this.data = res
  //   })
  // }
}
