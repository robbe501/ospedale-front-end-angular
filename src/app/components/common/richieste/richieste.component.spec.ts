import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiesteComponent } from './richieste.component';

describe('RichiesteComponent', () => {
  let component: RichiesteComponent;
  let fixture: ComponentFixture<RichiesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RichiesteComponent]
    });
    fixture = TestBed.createComponent(RichiesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
