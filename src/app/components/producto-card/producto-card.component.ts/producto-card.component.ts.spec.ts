import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCardComponentTs } from './producto-card.component.ts';

describe('ProductoCardComponentTs', () => {
  let component: ProductoCardComponentTs;
  let fixture: ComponentFixture<ProductoCardComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCardComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCardComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
