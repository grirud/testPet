import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PublicComponent } from './public.component';

describe('PublicComponent', () => {
  let component: PublicComponent;
  let fixture: ComponentFixture<PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
