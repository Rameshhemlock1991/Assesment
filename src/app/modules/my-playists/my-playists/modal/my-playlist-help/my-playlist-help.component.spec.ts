import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistHelpComponent } from './my-playlist-help.component';

describe('MyPlaylistHelpComponent', () => {
  let component: MyPlaylistHelpComponent;
  let fixture: ComponentFixture<MyPlaylistHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
