// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ComponentTwoComponent } from './component-two.component';

// describe('ComponentTwoComponent', () => {
//   let component: ComponentTwoComponent;
//   let fixture: ComponentFixture<ComponentTwoComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ComponentTwoComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ComponentTwoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComponentTwoComponent } from './component-two.component';

describe('ComponentTwoComponent', () => {
  let fixture: ComponentFixture<ComponentTwoComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ComponentTwoComponent
        ],
      }).compileComponents();
    fixture = TestBed.createComponent(ComponentTwoComponent);
    debugElement = fixture.debugElement;  
  }));


it('should increment/decrement value', () => {
    fixture.componentInstance.increment();
    expect(fixture.componentInstance.value).toEqual(1);
    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.value).toEqual(0);  
});


it('should increment in template', () => {
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');  
});


it('should stop at 0 and show minimum message', () => {
    debugElement
      .query(By.css('button.decrement'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(fixture.componentInstance.value).toEqual(0);
    expect(message).toContain('Minimum');  
});



it('should stop at 15 and show maximum message', () => {
    fixture.componentInstance.value = 15;
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(fixture.componentInstance.value).toEqual(15);
    expect(message).toContain('Maximum');
  });
});