import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ListBreadcrumbComponent} from './list-breadcrumb.component';
import {ListBreadcrumbModule} from './list-breadcrumb.module';
import {SharedModule} from '../../shared.module';

xdescribe('ListBreadcrumbComponent', () => {
  let component: ListBreadcrumbComponent;
  let fixture: ComponentFixture<ListBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, ListBreadcrumbModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
