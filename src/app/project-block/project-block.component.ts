import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.scss']
})
export class ProjectBlockComponent implements OnInit {
  projects: any;

  constructor(public projectService:UserInfoService) { }

  editProjectBlock () {
    let clearBtn = document.querySelector('.project-block-clear') as HTMLInputElement;
    let addBtn = document.querySelector('.project-block-add') as HTMLInputElement;
    let form = document.querySelector('.project-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  };

  clearProjectBlock () {
    let clearButtons = document.querySelector('.project-add-form-clear') as HTMLDivElement;
    let form = document.querySelector('.project-edit-form') as HTMLFormElement;
    clearButtons.classList.toggle('none');
    form.classList.toggle('none');
  };

  clearProjectBlockAcept() {
    let clearButtons = document.querySelector('.project-add-form-clear') as HTMLDivElement;
    clearButtons.classList.add('none');
    let addForm = document.querySelector('.project-add-form') as HTMLFormElement;
    addForm.classList.add('none');
    this.projectService.deleteProjects();
  };

  clearProjectBlockReject() {
    let clearButtons = document.querySelector('.project-add-form-clear') as HTMLDivElement;
    clearButtons.classList.toggle('none');
    let addForm = document.querySelector('.project-add-form') as HTMLFormElement;
    addForm.classList.add('none');
  };  

  addProject () {
    let addForm = document.querySelector('.project-add-form') as HTMLFormElement;
    addForm.classList.toggle('none');
    let form = document.querySelector('.project-edit-form') as HTMLFormElement;
    form.classList.toggle('none');
  };

  confirmAddProject() {
    let logoElement = document.querySelector('.project-add-form-header') as HTMLInputElement;
    let descrElement = document.querySelector('.project-add-form-descr') as HTMLInputElement;
    let obj = {
      projectLogo: `${logoElement.value}`,
      projectDescription: `${descrElement.value}`
    };
    this.projectService.addProject(obj);
    let addForm = document.querySelector('.project-add-form') as HTMLFormElement;
    addForm.classList.toggle('none');
  };

  rejectAddProject() {
    let logoElement = document.querySelector('.project-add-form') as HTMLInputElement;
    let descrElement = document.querySelector('.project-add-form') as HTMLInputElement;
    logoElement.value = '';
    descrElement.value = '';
    let addForm = document.querySelector('.project-add-form') as HTMLFormElement;
    addForm.classList.toggle('none');
  };

  confirmChangesProject () {
    let inputList = document.querySelectorAll('.project-input') as NodeListOf<HTMLInputElement>;
    let textareaList = document.querySelectorAll('.project-textarea') as NodeListOf<HTMLFormElement>;
    let headersArr = [];
    let descrArr = [];
    let newProjectsList = [];
    inputList.forEach(element => headersArr.push(element.value));
    textareaList.forEach(element => descrArr.push(element.value));
    for(let i = 0; i < inputList.length; i++) {
      let obj = {
        projectLogo: `${headersArr[i]}`,
        projectDescription: `${descrArr[i]}`
      };
      newProjectsList.push(obj);
    };    
    this.projectService.changeProject(newProjectsList);
    let clearBtn = document.querySelector('.project-block-clear') as HTMLInputElement;
    let addBtn = document.querySelector('.project-block-add') as HTMLInputElement;
    let form = document.querySelector('.project-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  }

  rejectChangesProject() {
    let clearBtn = document.querySelector('.project-block-clear') as HTMLInputElement;
    let addBtn = document.querySelector('.project-block-add') as HTMLInputElement;
    let form = document.querySelector('.project-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  };

  ngOnInit(): void {
    this.projects = this.projectService.projectArray;
  }

}
