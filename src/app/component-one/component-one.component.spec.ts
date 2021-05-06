import { ComponentFixture, TestBed,async } from '@angular/core/testing';

import { ComponentOneComponent } from './component-one.component';

describe('ComponentOneComponent', () => {
  let component: ComponentOneComponent;
  let fixture: ComponentFixture<ComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ComponentOneComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-unit-test!');
 }));
  
});

describe('Hello from jasmin',()=>{ //callback arrow function
  it('First test script',()=>{
    console.log('im inside the test script');
  });
  it('second test script',()=>{
    expect(10).toBe(10);
  });
  it('three test script',()=>{
    var tax = 10*2;
    expect(tax).toBe(20);
  });
});