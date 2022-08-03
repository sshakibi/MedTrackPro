import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCategoriesLoadingAsyncComponent } from './categories-categories-loading-async.component';

describe('CategoriesCategoriesLoadingAsyncComponent', () => {
  let component: CategoriesCategoriesLoadingAsyncComponent;
  let fixture: ComponentFixture<CategoriesCategoriesLoadingAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCategoriesLoadingAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCategoriesLoadingAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
