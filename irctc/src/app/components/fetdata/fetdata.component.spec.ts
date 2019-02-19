import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetdataComponent } from './fetdata.component';

describe('FetdataComponent', () => {
  let component: FetdataComponent;
  let fixture: ComponentFixture<FetdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
