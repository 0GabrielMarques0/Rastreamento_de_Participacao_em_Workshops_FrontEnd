import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaListComponent } from './ata-list.component';

describe('AtaListComponent', () => {
  let component: AtaListComponent;
  let fixture: ComponentFixture<AtaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
