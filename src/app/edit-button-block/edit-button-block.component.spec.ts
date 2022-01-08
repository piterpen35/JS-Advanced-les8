import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonBlockComponent } from './edit-button-block.component';

describe('EditButtonBlockComponent', () => {
  let component: EditButtonBlockComponent;
  let fixture: ComponentFixture<EditButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditButtonBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
