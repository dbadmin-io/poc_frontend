import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbEditorComponent } from './db-editor.component';

describe('DbEditorComponent', () => {
  let component: DbEditorComponent;
  let fixture: ComponentFixture<DbEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
