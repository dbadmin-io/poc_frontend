import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbLeftNavigationBarComponent } from './db-left-navigation-bar.component';

describe('DbLeftNavigationBarComponent', () => {
  let component: DbLeftNavigationBarComponent;
  let fixture: ComponentFixture<DbLeftNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbLeftNavigationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbLeftNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
