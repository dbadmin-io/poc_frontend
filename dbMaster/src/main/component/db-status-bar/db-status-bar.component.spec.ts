import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbStatusBarComponent } from './db-status-bar.component';

describe('DbStatusBarComponent', () => {
  let component: DbStatusBarComponent;
  let fixture: ComponentFixture<DbStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbStatusBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
