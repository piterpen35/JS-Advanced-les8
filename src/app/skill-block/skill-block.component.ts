import { Component, OnInit } from '@angular/core';

import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrls: ['./skill-block.component.scss']
})
export class SkillBlockComponent implements OnInit {

  skills: any;

  constructor(public skillServise:UserInfoService) { }

  private openBlock(): void {
    let childElement = event.target as HTMLElement;
    let parentElement = childElement.parentElement as HTMLElement;
    parentElement.classList.toggle('opened');
  };

  editSkillBlock () {
    let clearBtn = document.querySelector('.skill-block-clear') as HTMLInputElement;
    let addBtn = document.querySelector('.skill-block-add') as HTMLInputElement;
    let form = document.querySelector('.skill-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  };

  clearSkillBlock () {
    let clearButtons = document.querySelector('.skill-add-form-clear') as HTMLDivElement;
    let form = document.querySelector('.skill-edit-form') as HTMLFormElement;
    clearButtons.classList.toggle('none');
    form.classList.toggle('none');
  };

  clearSkillBlockAcept() {
    let clearButtons = document.querySelector('.skill-add-form-clear') as HTMLDivElement;
    clearButtons.classList.add('none');
    let addForm = document.querySelector('.skill-add-form') as HTMLFormElement;
    addForm.classList.add('none');
    this.skillServise.deleteSkills();
  };

  clearSkillBlockReject() {
    let clearButtons = document.querySelector('.skill-add-form-clear') as HTMLDivElement;
    clearButtons.classList.toggle('none');
    let addForm = document.querySelector('.skill-add-form') as HTMLFormElement;
    addForm.classList.add('none');
  };  

  addSkill () {
    let addForm = document.querySelector('.skill-add-form') as HTMLFormElement;
    addForm.classList.toggle('none');
    let form = document.querySelector('.skill-edit-form') as HTMLFormElement;
    form.classList.toggle('none');
  };

  confirmAddSkill() {
    let headerElement = document.querySelector('.skill-add-form-header') as HTMLInputElement;
    let descrElement = document.querySelector('.skill-add-form-descr') as HTMLInputElement;
    let obj = {
      skillHeader: `${headerElement.value}`,
      skillDescription: `${descrElement.value}`
    };
    this.skillServise.addSkill(obj);
    let addForm = document.querySelector('.skill-add-form') as HTMLFormElement;
    addForm.classList.toggle('none');
  };

  rejectAddSkill() {
    let headerElement = document.querySelector('.skill-add-form') as HTMLInputElement;
    let descrElement = document.querySelector('.skill-add-form') as HTMLInputElement;
    headerElement.value = '';
    descrElement.value = '';
    let addForm = document.querySelector('.skill-add-form') as HTMLFormElement;
    addForm.classList.toggle('none');
  };

  confirmChangesSkills () {
    let inputList = document.querySelectorAll('.skill-input') as NodeListOf<HTMLInputElement>;
    let textareaList = document.querySelectorAll('.skill-textarea') as NodeListOf<HTMLFormElement>;
    let headersArr = [];
    let descrArr = [];
    let newSkillsList = [];
    inputList.forEach(element => headersArr.push(element.value));
    textareaList.forEach(element => descrArr.push(element.value));
    for(let i = 0; i < inputList.length; i++) {
      let obj = {
        skillHeader: `${headersArr[i]}`,
        skillDescription: `${descrArr[i]}`
      };
      newSkillsList.push(obj);
    };    
    this.skillServise.changeSkills(newSkillsList);
    let clearBtn = document.querySelector('.skill-block-clear') as HTMLInputElement;
    let addBtn = document.querySelector('.skill-block-add') as HTMLInputElement;
    let form = document.querySelector('.skill-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  }

  rejectChangesSkills() {
    let clearBtn = document.querySelector('.skill-block-clear') as HTMLInputElement;
    let addBtn = document.querySelector('.skill-block-add') as HTMLInputElement;
    let form = document.querySelector('.skill-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  };

  ngOnInit() {
    this.skills = this.skillServise.skillsArray;
  }

}
