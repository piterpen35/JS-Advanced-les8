import { Component, OnInit } from '@angular/core';

import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-avatar-block',
  templateUrl: './avatar-block.component.html',
  styleUrls: ['./avatar-block.component.scss']
})

export class AvatarBlockComponent implements OnInit {
  
  avatar: string;

  constructor(public userServise:UserInfoService) {}

  editAvatarBlock () {
    let clearBtn = document.querySelector('.avatar-block-clear') as HTMLInputElement;
    let form = document.querySelector('.avatar-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    form.classList.toggle('hidden');
  };

  clearAvatarBlock() {
    let input = document.querySelector('.avatar-src') as HTMLInputElement; 
    input.value = '';
  };

  confirmChangesAvatar () {
    let input = document.querySelector('.avatar-src') as HTMLInputElement;
    this.userServise.changeSrc(input.value);
    let clearBtn = document.querySelector('.avatar-block-clear') as HTMLInputElement;
    let form = document.querySelector('.avatar-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    form.classList.toggle('hidden');
  };

  rejectChangesAvatar() {
    let clearBtn = document.querySelector('.avatar-block-clear') as HTMLInputElement;
    let form = document.querySelector('.avatar-edit-form') as HTMLFormElement;
    clearBtn.classList.toggle('hidden');
    form.classList.toggle('hidden');
    let input = document.querySelector('.avatar-src') as HTMLInputElement; 
    input.value = this.avatar;
  };

  ngOnInit() {
    this.avatar = this.userServise.user.avatar;
  }

}