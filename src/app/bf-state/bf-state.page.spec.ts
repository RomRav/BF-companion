import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BfStatePage } from './bf-state.page';

describe('BfStatePage', () => {
  let component: BfStatePage;
  let fixture: ComponentFixture<BfStatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfStatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BfStatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
