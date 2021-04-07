import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistMasterComponent } from './my-playlist-master.component';

describe('MyPlaylistMasterComponent', () => {
  let component: MyPlaylistMasterComponent;
  let fixture: ComponentFixture<MyPlaylistMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
