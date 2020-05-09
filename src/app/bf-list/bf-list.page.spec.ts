import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BfListPage } from './bf-list.page';

describe('BfListPage', () => {
  let component: BfListPage;
  let fixture: ComponentFixture<BfListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BfListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
