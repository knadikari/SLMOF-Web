import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecardComponent } from './articlecard.component';

describe('ArticlecardComponent', () => {
  let component: ArticlecardComponent;
  let fixture: ComponentFixture<ArticlecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
