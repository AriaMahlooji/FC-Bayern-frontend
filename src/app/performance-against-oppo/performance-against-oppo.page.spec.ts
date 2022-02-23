import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerformanceAgainstOppoPage } from './performance-against-oppo.page';

describe('PerformanceAgainstOppoPage', () => {
  let component: PerformanceAgainstOppoPage;
  let fixture: ComponentFixture<PerformanceAgainstOppoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceAgainstOppoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerformanceAgainstOppoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
