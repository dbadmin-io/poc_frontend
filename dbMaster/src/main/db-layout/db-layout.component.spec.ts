import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbLayoutComponent } from './db-layout.component';

describe('DbLayoutComponent', () => {
  let component: DbLayoutComponent;
  let fixture: ComponentFixture<DbLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
