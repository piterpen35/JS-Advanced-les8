import { Component, OnInit } from '@angular/core';

import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {

  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  skype: string;
  email: string;
  telegram: string;
  facebook: string;
  linkedin: string;

  constructor(public userServise:UserInfoService) {}

  editInfoBlock () {
    let clearBtn = document.querySelector('.info-block-clear') as HTMLInputElement;
    let form = document.querySelector('.info-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  };

  clearInfoBlock() {
    let form = document.querySelector('.info-edit-form') as HTMLFormElement;
    let elementsList = form.elements;
    for(let i = 0; i < 9; i++) {
      let element = elementsList[i] as HTMLInputElement;
      element.value = '';
    };
  };

  confirmChangesInfo () {
    let firstNameInput = document.querySelector('#firstName') as HTMLInputElement; 
    this.userServise.changeFirstName(firstNameInput.value);
    let lastNameInput = document.querySelector('#lastName') as HTMLInputElement; 
    this.userServise.changeLastName(lastNameInput.value);
    let addressInput = document.querySelector('#address') as HTMLInputElement; 
    this.userServise.changeAddress(addressInput.value);
    let phoneInput = document.querySelector('#phone') as HTMLInputElement; 
    this.userServise.changePhone(phoneInput.value);
    let emailInput = document.querySelector('#email') as HTMLInputElement; 
    this.userServise.changeEmail(emailInput.value);
    let telegramInput = document.querySelector('#telegram') as HTMLInputElement; 
    this.userServise.changeTelegram(telegramInput.value);
    let facebookInput = document.querySelector('#facebook') as HTMLInputElement; 
    this.userServise.changeFacebook(facebookInput.value);
    let linkedinInput = document.querySelector('#linkedin') as HTMLInputElement; 
    this.userServise.changeLinkedin(linkedinInput.value);
    let skypeInput = document.querySelector('#skype') as HTMLInputElement; 
    this.userServise.changeSkype(skypeInput.value);
    let clearBtn = document.querySelector('.info-block-clear') as HTMLInputElement;
    let form = document.querySelector('.info-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  };

  rejectChangesInfo() {
    let firstNameInput = document.querySelector('#firstName') as HTMLInputElement; 
    firstNameInput.value = this.firstName;
    let lastNameInput = document.querySelector('#lastName') as HTMLInputElement; 
    lastNameInput.value = this.lastName;
    let addressInput = document.querySelector('#address') as HTMLInputElement; 
    addressInput.value = this.address;
    let phoneInput = document.querySelector('#phone') as HTMLInputElement; 
    phoneInput.value = this.phone;
    let emailInput = document.querySelector('#email') as HTMLInputElement; 
    emailInput.value = this.email;
    let telegramInput = document.querySelector('#telegram') as HTMLInputElement; 
    telegramInput.value = this.telegram;
    let facebookInput = document.querySelector('#facebook') as HTMLInputElement; 
    facebookInput.value = this.facebook;
    let linkedinInput = document.querySelector('#linkedin') as HTMLInputElement; 
    linkedinInput.value = this.linkedin;
    let skypeInput = document.querySelector('#skype') as HTMLInputElement; 
    skypeInput.value = this.skype;
    let clearBtn = document.querySelector('.info-block-clear') as HTMLInputElement;
    let form = document.querySelector('.info-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    form.classList.toggle('none');
  };

  ngOnInit() {
    this.firstName = this.userServise.user.firstName;
    this.lastName = this.userServise.user.lastName;
    this.address = this.userServise.user.address;
    this.phone = this.userServise.user.phone;
    this.skype = this.userServise.user.skype;
    this.email = this.userServise.user.email;
    this.telegram = this.userServise.user.telegram;
    this.facebook = this.userServise.user.facebook;
    this.linkedin = this.userServise.user.linkedin;
  }
}