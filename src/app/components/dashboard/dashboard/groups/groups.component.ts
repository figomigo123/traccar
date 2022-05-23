import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group/group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(private groupService: GroupService, private modalService: NgbModal) { }

  isLoading = true;
  groups: Group[];
  selectedGroup: Group = null;
  name: string;

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(){
    this.groupService.getGroups("/groups/all").subscribe((groups)=>{
      this.groups = groups;
      this.isLoading = false;
    })
  }

  selectGroup(group){
    this.selectedGroup = group;
  }

  openAddGroupModal(modal){
    this.modalService.open(modal);
  }

  addGroup(event){
    event.preventDefault();
    let info = {
      name : this.name,
      groupId : 0,
      attributes : {}
    }
    this.groupService.addGroup("/groups", info).subscribe((res)=>{
      this.modalService.dismissAll();
      this.getGroups();
      this.name = null;
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Group Added Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }

  openEditGroupModal(modal){
    this.name = this.selectedGroup['name'];
    this.modalService.open(modal);
  }

  editGroup(event){
    event.preventDefault();
    let info = {
      name : this.name,
      groupId : 0,
      attributes : {}
    }
    this.groupService.editGroup("/groups/"+this.selectedGroup['id'], info).subscribe((res)=>{
      this.modalService.dismissAll();
      this.getGroups();
      this.name = null;
      this.selectedGroup = null;
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Group Editted Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }

  deleteGroup(){
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this group!',
      showCancelButton: true,
      confirmButtonColor: '#0162e8',
      cancelButtonColor: '#0162e8',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.groupService.deleteGroup("/groups/"+this.selectedGroup['id']).subscribe((res)=>{
          this.selectedGroup = null;
          this.getGroups();
          Swal.fire({
            title: 'Deleted!',
            text: 'Group Deleted Successfully.',
            icon: 'success',
            confirmButtonColor: '#0162e8'
          })
        })
      }
    })
  }

}
