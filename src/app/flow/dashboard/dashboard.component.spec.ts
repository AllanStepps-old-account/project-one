import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from '../../app-routing.module';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {DashboardModule} from './dashboard.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () =>
    TestBed.configureTestingModule({
        imports: [SharedModule, DashboardModule],

      }
    ).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
