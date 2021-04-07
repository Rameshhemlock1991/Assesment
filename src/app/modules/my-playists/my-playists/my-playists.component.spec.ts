import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlayistsComponent } from './my-playists.component';

describe('MyPlayistsComponent', () => {
  let component: MyPlayistsComponent;
  let fixture: ComponentFixture<MyPlayistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlayistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlayistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
