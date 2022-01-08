import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-button-block',
  templateUrl: './edit-button-block.component.html',
  styleUrls: ['./edit-button-block.component.scss']
})
export class EditButtonBlockComponent implements OnInit {
  editing() {
    let elementsList = document.querySelectorAll('.edit-buttons') as NodeList;
    elementsList.forEach(element => {
      let editBtn = element as HTMLElement;
      editBtn.classList.toggle('hidden');
    });
  };

  constructor() { }

  ngOnInit(): void {
  }

}
