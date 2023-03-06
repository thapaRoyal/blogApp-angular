import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryComponent } from './single-category.component';

describe('SingleCategoryComponent', () => {
  let component: SingleCategoryComponent;
  let fixture: ComponentFixture<SingleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
