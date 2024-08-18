import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTopNavigationBarComponent } from './db-top-navigation-bar.component';

describe('DbTopNavigationBarComponent', () => {
  let component: DbTopNavigationBarComponent;
  let fixture: ComponentFixture<DbTopNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbTopNavigationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbTopNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
