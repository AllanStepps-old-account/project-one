import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListOverviewComponent} from './list-overview.component';
import {ListOverviewModule} from './list-overview.module';
import {SharedModule} from '../../shared.module';

xdescribe('ListOverviewComponent', () => {
  let component: ListOverviewComponent;
  let fixture: ComponentFixture<ListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, ListOverviewModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
