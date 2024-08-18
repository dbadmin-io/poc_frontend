import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbExplorerComponent } from './db-explorer.component';

describe('DbExplorerComponent', () => {
  let component: DbExplorerComponent;
  let fixture: ComponentFixture<DbExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
